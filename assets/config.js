// ═══════════════════════════════════════════════════════════════════
// FLEAN — Elasticsearch Configuration
// ═══════════════════════════════════════════════════════════════════

const ES_CONFIG = {
  // Direct Elasticsearch endpoint (kept for environments where CORS is allowed)
  // NOTE: In production, these should be set via environment variables or build-time config
  // For browser-side code, use the proxy endpoint instead (useProxy: true)
  baseUrl: '', // Set via ES_URL environment variable in server.js
  index: 'products-v2',
  // API key is handled server-side via ES_API_KEY environment variable
  // Never expose API keys in client-side code!
  apiKey: '',

  // Use proxy in browsers to avoid CORS failures
  useProxy: true,
  proxyUrl: '/api/search',

  // Search configuration
  searchConfig: {
    size: 20,
    fields: ['name^4', 'description^2', 'brand^2'],
    fuzziness: 'AUTO',
    
    // Extended source fields for rich metadata
    sourceFields: [
      // Core product info
      'id',
      'name',
      'brand',
      'price',
      'mrp',
      'description',
      'use',
      
      // Category data
      'category_group',
      'category_paths',
      
      // Images - all variants
      'hero_image',
      'hero_image.url',
      'hero_image.src',
      'hero_image.path',
      'hero_image.small',
      'hero_image.medium',
      'hero_image.large',
      'hero_image.thumbnail',
      'images',
      
      // Health & Quality scores
      'flean_score',
      'flean_score.total',
      'flean_score.breakdown',
      'stats.adjusted_score_percentiles',
      'stats.adjusted_score_percentiles.subcategory_percentile',
      'stats.adjusted_score_percentiles.category_percentile',
      
      // Nutritional info
      'category_data.nutritional.nutri_breakdown_updated',
      'category_data.nutritional.nutri_breakdown_updated.protein_g',
      'category_data.nutritional.nutri_breakdown_updated.carbs_g',
      'category_data.nutritional.nutri_breakdown_updated.fat_g',
      'category_data.nutritional.nutri_breakdown_updated.calories',
      'category_data.nutritional.nutri_breakdown_updated.sugar_g',
      'category_data.nutritional.nutri_breakdown_updated.fiber_g',
      
      // Package claims & dietary info
      'package_claims',
      'package_claims.dietary_labels',
      'package_claims.health_claims',
      
      // Ingredients
      'ingredients',
      'ingredients.raw_text',
      
      // Reviews
      'review_stats.avg_rating',
      'review_stats.total_reviews'
    ]
  },

  // Filter presets for healthy products
  filterPresets: {
    healthyOnly: {
      minFleanPercentile: 60,  // Products scoring in top 40%
      label: 'Healthy Only'
    },
    premium: {
      minFleanPercentile: 80,  // Products scoring in top 20%
      label: 'Premium Quality'
    },
    dietaryLabels: [
      'ORGANIC',
      'GLUTEN FREE',
      'VEGAN',
      'SUGAR FREE',
      'LOW FAT',
      'HIGH PROTEIN',
      'KETO FRIENDLY',
      'NO PRESERVATIVES'
    ],
    avoidIngredients: [
      'palm oil',
      'artificial colors',
      'artificial flavors',
      'high fructose corn syrup',
      'msg',
      'trans fat'
    ]
  }
};
