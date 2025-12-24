// ═══════════════════════════════════════════════════════════════════
// FLEAN — Elasticsearch Search Service (Enhanced with Filters)
// ═══════════════════════════════════════════════════════════════════

class SearchService {
  constructor(config) {
    this.config = config;
    this.cache = new Map();
    this.searchTimeout = null;
    
    // Current filter state
    this.filters = {
      healthyOnly: false,
      minFleanPercentile: null,
      dietaryLabels: [],
      avoidIngredients: [],
      priceMin: null,
      priceMax: null,
      categoryGroup: null
    };
  }

  /**
   * Set filter options
   * @param {Object} filterOptions - Filter settings
   */
  setFilters(filterOptions) {
    this.filters = { ...this.filters, ...filterOptions };
    // Clear cache when filters change
    this.cache.clear();
  }

  /**
   * Get current filters
   */
  getFilters() {
    return { ...this.filters };
  }

  /**
   * Reset all filters
   */
  resetFilters() {
    this.filters = {
      healthyOnly: false,
      minFleanPercentile: null,
      dietaryLabels: [],
      avoidIngredients: [],
      priceMin: null,
      priceMax: null,
      categoryGroup: null
    };
    this.cache.clear();
  }

  /**
   * Build enhanced ES query with filters
   * @param {string} query - Search query
   * @returns {Object} - Elasticsearch query body
   */
  buildQuery(query) {
    const boolQuery = {
      filter: [],
      must: [],
      should: [],
      must_not: []
    };

    // Main search query
    if (query && query.trim()) {
      boolQuery.must.push({
        multi_match: {
          query: query.trim(),
          fields: this.config.searchConfig.fields,
          type: 'best_fields',
          fuzziness: this.config.searchConfig.fuzziness
        }
      });
    }

    // Apply filters
    const filters = this.filters;

    // 1. Healthy Only filter (flean percentile)
    if (filters.healthyOnly || filters.minFleanPercentile) {
      const minPercentile = filters.minFleanPercentile || 
        this.config.filterPresets.healthyOnly.minFleanPercentile;
      
      boolQuery.filter.push({
        range: {
          'stats.adjusted_score_percentiles.subcategory_percentile': {
            gte: minPercentile
          }
        }
      });
    }

    // 2. Dietary labels boost/filter
    if (filters.dietaryLabels && filters.dietaryLabels.length > 0) {
      filters.dietaryLabels.forEach(label => {
        boolQuery.should.push({
          match: {
            'package_claims.dietary_labels': {
              query: label,
              boost: 3.0
            }
          }
        });
      });
    }

    // 3. Avoid ingredients (must_not)
    if (filters.avoidIngredients && filters.avoidIngredients.length > 0) {
      filters.avoidIngredients.forEach(ingredient => {
        boolQuery.must_not.push({
          match: {
            'ingredients.raw_text': ingredient.toLowerCase().trim()
          }
        });
      });
    }

    // 4. Price range filter
    if (filters.priceMin !== null || filters.priceMax !== null) {
      const priceRange = {};
      if (filters.priceMin !== null) priceRange.gte = filters.priceMin;
      if (filters.priceMax !== null) priceRange.lte = filters.priceMax;
      
      boolQuery.filter.push({
        range: { price: priceRange }
      });
    }

    // 5. Category group filter
    if (filters.categoryGroup) {
      boolQuery.filter.push({
        term: { category_group: filters.categoryGroup }
      });
    }

    // Build the full query body
    const body = {
      size: this.config.searchConfig.size,
      track_total_hits: true,
      _source: {
        includes: this.config.searchConfig.sourceFields
      },
      query: {
        bool: boolQuery
      },
      // Sort by score, then by flean percentile
      sort: [
        { _score: 'desc' },
        { 'stats.adjusted_score_percentiles.subcategory_percentile': { order: 'desc', missing: '_last' } }
      ],
      // Highlighting
      highlight: {
        fields: {
          name: {},
          description: {}
        },
        pre_tags: ['<mark>'],
        post_tags: ['</mark>']
      }
    };

    return body;
  }

  /**
   * Main search method - calls Elasticsearch API
   * @param {string} query - Search query string
   * @returns {Promise<Object>} - Search results
   */
  async search(query) {
    if (!query || query.trim().length === 0) {
      return { hits: { hits: [], total: { value: 0 } } };
    }

    // Build cache key including filters
    const filterKey = JSON.stringify(this.filters);
    const cacheKey = `${query.toLowerCase().trim()}|${filterKey}`;
    
    if (this.cache.has(cacheKey)) {
      console.log('Returning cached results for:', query);
      return this.cache.get(cacheKey);
    }

    try {
      const searchBody = this.buildQuery(query);

      // Decide whether to call ES directly or via proxy
      const endpoint = this.config.useProxy
        ? this.config.proxyUrl
        : `${this.config.baseUrl}/${this.config.index}/_search`;

      const headers = {
        'Content-Type': 'application/json'
      };

      if (!this.config.useProxy) {
        headers['Authorization'] = `ApiKey ${this.config.apiKey}`;
      }

      console.log('Search query:', JSON.stringify(searchBody, null, 2));

      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(searchBody)
      });

      if (!response.ok) {
        throw new Error(`Search failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Cache the results
      this.cache.set(cacheKey, data);
      
      // Limit cache size
      if (this.cache.size > 50) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }

      return data;
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  }

  /**
   * Debounced search
   */
  debouncedSearch(query, delay = 300) {
    return new Promise((resolve, reject) => {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = setTimeout(async () => {
        try {
          const results = await this.search(query);
          resolve(results);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  }

  /**
   * Parse Elasticsearch results into a cleaner format with full metadata
   * @param {Object} esResponse - Raw ES response
   * @returns {Array} - Parsed product array
   */
  parseResults(esResponse) {
    if (!esResponse || !esResponse.hits || !esResponse.hits.hits) {
      return [];
    }

    return esResponse.hits.hits.map((hit, index) => {
      const source = hit._source;
      
      // Extract nutritional data
      const nutrition = source.category_data?.nutritional?.nutri_breakdown_updated || {};
      
      // Extract flean score data
      const fleanScore = source.flean_score?.total || source.flean_score || null;
      const fleanPercentile = source.stats?.adjusted_score_percentiles?.subcategory_percentile || null;
      
      // Extract package claims
      const packageClaims = source.package_claims || {};
      const dietaryLabels = packageClaims.dietary_labels || [];
      const healthClaims = packageClaims.health_claims || [];
      
      // Extract review stats
      const avgRating = source.review_stats?.avg_rating || null;
      const totalReviews = source.review_stats?.total_reviews || 0;

      return {
        // Core info
        id: source.id,
        name: source.name,
        brand: source.brand || 'Unknown Brand',
        price: source.price || 0,
        mrp: source.mrp || source.price || 0,
        description: source.description || '',
        use: source.use || '',
        
        // Category
        categoryGroup: source.category_group || 'General',
        categoryPaths: source.category_paths || [],
        
        // Image - try multiple sources
        image: this.getImageUrl(source),
        
        // Health & Quality
        fleanScore: fleanScore,
        fleanPercentile: fleanPercentile,
        isHealthy: fleanPercentile >= 60,
        isPremium: fleanPercentile >= 80,
        
        // Nutrition
        nutrition: {
          calories: nutrition.calories || null,
          protein: nutrition.protein_g || null,
          carbs: nutrition.carbs_g || null,
          fat: nutrition.fat_g || null,
          sugar: nutrition.sugar_g || null,
          fiber: nutrition.fiber_g || null
        },
        
        // Claims & Labels
        dietaryLabels: dietaryLabels,
        healthClaims: healthClaims,
        
        // Ingredients
        ingredients: source.ingredients?.raw_text || '',
        
        // Reviews
        avgRating: avgRating,
        totalReviews: totalReviews,
        
        // Search metadata
        highlight: hit.highlight || {},
        score: hit._score || 0,
        rank: index + 1
      };
    });
  }

  /**
   * Extract image URL from various possible structures
   * @param {Object} source - ES document source
   * @returns {string} - Image URL or placeholder
   */
  getImageUrl(source) {
    // Try hero_image first (various formats)
    const heroImage = source.hero_image;
    
    if (heroImage) {
      // String directly
      if (typeof heroImage === 'string') return heroImage;
      
      // Object with various keys
      if (heroImage.url) return heroImage.url;
      if (heroImage.src) return heroImage.src;
      if (heroImage.path) return heroImage.path;
      if (heroImage.medium) return heroImage.medium;
      if (heroImage.large) return heroImage.large;
      if (heroImage.small) return heroImage.small;
      if (heroImage.thumbnail) return heroImage.thumbnail;
      
      // If it's an object, try to get first available value
      const values = Object.values(heroImage);
      for (const val of values) {
        if (typeof val === 'string' && (val.startsWith('http') || val.startsWith('/'))) {
          return val;
        }
      }
    }
    
    // Try images array
    if (source.images && Array.isArray(source.images) && source.images.length > 0) {
      const firstImage = source.images[0];
      if (typeof firstImage === 'string') return firstImage;
      if (firstImage.url) return firstImage.url;
      if (firstImage.src) return firstImage.src;
    }
    
    // Fallback
    return 'https://via.placeholder.com/150?text=No+Image';
  }

  /**
   * Clear the search cache
   */
  clearCache() {
    this.cache.clear();
  }
}

// Initialize the search service
const searchService = new SearchService(ES_CONFIG);
