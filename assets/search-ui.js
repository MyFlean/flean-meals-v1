// ═══════════════════════════════════════════════════════════════════
// FLEAN — Search UI Controller (Enhanced with Filters)
// ═══════════════════════════════════════════════════════════════════

class SearchUI {
  constructor() {
    this.searchInput = document.getElementById('searchInput');
    this.clearBtn = document.getElementById('clearSearchBtn');
    this.resultsGrid = document.getElementById('resultsGrid');
    this.loadingContainer = document.getElementById('loadingContainer');
    this.emptyStateInitial = document.getElementById('emptyStateInitial');
    this.emptyStateNoResults = document.getElementById('emptyStateNoResults');
    this.errorState = document.getElementById('errorState');
    this.searchResultsContainer = document.getElementById('searchResultsContainer');
    this.searchInfoBar = document.getElementById('searchInfoBar');
    this.resultsCount = document.getElementById('resultsCount');
    this.searchQuery = document.getElementById('searchQuery');
    this.errorMessage = document.getElementById('errorMessage');
    this.filterBar = document.getElementById('filterBar');
    this.healthyToggle = document.getElementById('healthyOnlyToggle');
    
    this.currentQuery = '';
    this.lastResults = null;
    
    this.init();
  }

  init() {
    // Set up search input events
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.handleSearchInput(e.target.value);
      });

      this.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.performSearch(this.searchInput.value);
        }
      });

      this.searchInput.focus();
    }

    // Clear button
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        this.clearSearch();
      });
    }

    // Healthy Only toggle
    if (this.healthyToggle) {
      this.healthyToggle.addEventListener('change', (e) => {
        this.toggleHealthyFilter(e.target.checked);
      });
    }

    // Check for query parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const healthy = urlParams.get('healthy');
    
    if (healthy === 'true' && this.healthyToggle) {
      this.healthyToggle.checked = true;
      searchService.setFilters({ healthyOnly: true });
    }
    
    if (query) {
      this.searchInput.value = query;
      this.performSearch(query);
    }
  }

  toggleHealthyFilter(enabled) {
    searchService.setFilters({ healthyOnly: enabled });
    
    // Re-run search if we have a query
    if (this.currentQuery) {
      this.performSearch(this.currentQuery);
    }
    
    // Show feedback
    showToast(enabled ? '🌿 Showing healthy products only' : '📦 Showing all products');
  }

  handleSearchInput(value) {
    // Show/hide clear button
    if (this.clearBtn) {
      this.clearBtn.style.display = value.length > 0 ? 'block' : 'none';
    }

    // Debounced search
    if (value.trim().length >= 2) {
      this.debouncedSearch(value);
    } else if (value.trim().length === 0) {
      this.showInitialState();
    }
  }

  debouncedSearch(query) {
    searchService.debouncedSearch(query, 400)
      .then(results => {
        this.displayResults(results, query);
      })
      .catch(error => {
        this.showError(error.message);
      });
  }

  async performSearch(query) {
    if (!query || query.trim().length === 0) {
      this.showInitialState();
      return;
    }

    this.currentQuery = query.trim();
    this.showLoading();

    try {
      const results = await searchService.search(this.currentQuery);
      this.displayResults(results, this.currentQuery);
    } catch (error) {
      console.error('Search failed:', error);
      this.showError(error.message);
    }
  }

  displayResults(esResponse, query) {
    this.hideAllStates();
    
    const products = searchService.parseResults(esResponse);
    this.lastResults = products;
    
    // Get total hits
    const totalHits = esResponse.hits?.total?.value || products.length;
    
    if (products.length === 0) {
      this.showNoResults();
      return;
    }

    // Show results
    this.searchResultsContainer.style.display = 'block';
    this.searchInfoBar.style.display = 'flex';
    
    // Update info bar
    this.resultsCount.textContent = totalHits;
    this.searchQuery.textContent = query;

    // Show filter bar
    if (this.filterBar) {
      this.filterBar.style.display = 'flex';
    }

    // Render products
    this.renderProducts(products);
  }

  renderProducts(products) {
    const bgColors = ['#E8F5E9', '#FCE4EC', '#E3F2FD', '#FFF8E1', '#F3E5F5', '#E0F2F1', '#FFF3E0', '#E8EAF6'];

    this.resultsGrid.innerHTML = products.map((product, index) => {
      const bgColor = bgColors[index % bgColors.length];
      const discount = product.mrp > product.price 
        ? Math.round(((product.mrp - product.price) / product.mrp) * 100) 
        : 0;

      // Format flean percentile
      const fleanBadge = this.getFleanBadge(product.fleanPercentile);
      
      // Format dietary labels
      const dietaryBadges = this.getDietaryBadges(product.dietaryLabels);
      
      // Format nutrition summary
      const nutritionSummary = this.getNutritionSummary(product.nutrition);
      
      // Get rating display
      const ratingDisplay = this.getRatingDisplay(product.avgRating, product.totalReviews);

      return `
        <div class="product-card-large" style="background-color: ${bgColor};" onclick="viewProduct('${product.id}')">
          ${discount > 0 ? `<div class="product-discount-badge">${discount}% OFF</div>` : ''}
          ${fleanBadge}
          
          <div class="product-img-wrapper">
            <img src="${product.image}" 
                 class="product-img-large" 
                 alt="${product.name}"
                 loading="lazy"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/150x150?text=No+Image'; this.classList.add('img-error');">
          </div>
          
          <div class="product-brand">${this.escapeHtml(product.brand)}</div>
          <div class="product-title-large">${this.highlightText(product.name, product.highlight.name)}</div>
          
          ${dietaryBadges}
          
          ${nutritionSummary}
          
          ${ratingDisplay}
          
          <div class="price-row">
            <div class="price-group">
              <span class="price-large">₹${product.price}</span>
              ${product.mrp > product.price ? `<span class="original-price-large">₹${product.mrp}</span>` : ''}
            </div>
            <button class="add-btn-large" onclick="event.stopPropagation(); addToCartFromSearch('${product.id}', '${this.escapeHtml(product.name)}', ${product.price}, '${product.image}')">
              +
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  getFleanBadge(percentile) {
    if (percentile === null || percentile === undefined) return '';
    
    let badgeClass = 'flean-badge';
    let badgeText = '';
    let badgeIcon = '';
    
    if (percentile >= 80) {
      badgeClass += ' flean-premium';
      badgeText = 'Premium';
      badgeIcon = '⭐';
    } else if (percentile >= 60) {
      badgeClass += ' flean-healthy';
      badgeText = 'Healthy';
      badgeIcon = '🌿';
    } else if (percentile >= 40) {
      badgeClass += ' flean-good';
      badgeText = 'Good';
      badgeIcon = '👍';
    } else {
      return ''; // Don't show badge for low scores
    }
    
    return `<div class="${badgeClass}">${badgeIcon} ${badgeText} ${Math.round(percentile)}%</div>`;
  }

  getDietaryBadges(labels) {
    if (!labels || labels.length === 0) return '';
    
    // Show max 3 labels
    const displayLabels = labels.slice(0, 3);
    
    return `
      <div class="dietary-badges">
        ${displayLabels.map(label => `<span class="dietary-badge">${this.formatLabel(label)}</span>`).join('')}
        ${labels.length > 3 ? `<span class="dietary-badge dietary-more">+${labels.length - 3}</span>` : ''}
      </div>
    `;
  }

  formatLabel(label) {
    // Convert GLUTEN_FREE to Gluten Free, etc.
    return label
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  getNutritionSummary(nutrition) {
    if (!nutrition || (!nutrition.calories && !nutrition.protein)) return '';
    
    const items = [];
    
    if (nutrition.calories) items.push(`${Math.round(nutrition.calories)} cal`);
    if (nutrition.protein) items.push(`${nutrition.protein}g protein`);
    if (nutrition.fiber) items.push(`${nutrition.fiber}g fiber`);
    
    if (items.length === 0) return '';
    
    return `<div class="nutrition-summary">${items.slice(0, 3).join(' • ')}</div>`;
  }

  getRatingDisplay(avgRating, totalReviews) {
    if (!avgRating) return '';
    
    const stars = '★'.repeat(Math.round(avgRating));
    const emptyStars = '☆'.repeat(5 - Math.round(avgRating));
    
    return `
      <div class="product-rating">
        <span class="rating-stars">${stars}${emptyStars}</span>
        <span class="rating-value">${avgRating.toFixed(1)}</span>
        ${totalReviews > 0 ? `<span class="rating-count">(${totalReviews})</span>` : ''}
      </div>
    `;
  }

  highlightText(text, highlightArray) {
    if (!text) return '';
    if (!highlightArray || highlightArray.length === 0) return this.escapeHtml(text);
    return highlightArray[0] || this.escapeHtml(text);
  }

  escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  showLoading() {
    this.hideAllStates();
    this.loadingContainer.style.display = 'flex';
  }

  showInitialState() {
    this.hideAllStates();
    this.emptyStateInitial.style.display = 'flex';
  }

  showNoResults() {
    this.hideAllStates();
    this.emptyStateNoResults.style.display = 'flex';
  }

  showError(message) {
    this.hideAllStates();
    this.errorState.style.display = 'flex';
    if (this.errorMessage) {
      this.errorMessage.textContent = message || 'An error occurred. Please try again.';
    }
  }

  hideAllStates() {
    if (this.loadingContainer) this.loadingContainer.style.display = 'none';
    if (this.emptyStateInitial) this.emptyStateInitial.style.display = 'none';
    if (this.emptyStateNoResults) this.emptyStateNoResults.style.display = 'none';
    if (this.errorState) this.errorState.style.display = 'none';
    if (this.searchResultsContainer) this.searchResultsContainer.style.display = 'none';
    if (this.searchInfoBar) this.searchInfoBar.style.display = 'none';
    if (this.filterBar) this.filterBar.style.display = 'none';
  }

  clearSearch() {
    if (this.searchInput) {
      this.searchInput.value = '';
      this.searchInput.focus();
    }
    if (this.clearBtn) {
      this.clearBtn.style.display = 'none';
    }
    this.currentQuery = '';
    this.showInitialState();
  }
}

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}

function performSearch(query) {
  if (window.searchUI && window.searchUI.searchInput) {
    window.searchUI.searchInput.value = query;
    window.searchUI.performSearch(query);
  }
}

function retrySearch() {
  if (window.searchUI && window.searchUI.currentQuery) {
    window.searchUI.performSearch(window.searchUI.currentQuery);
  }
}

function viewProduct(productId) {
  console.log('View product:', productId);
  window.location.href = `product.html?id=${productId}`;
}

function addToCartFromSearch(productId, productName, price, imageUrl) {
  console.log('Adding to cart:', productId, productName, price);
  
  // Get existing cart
  let cart = JSON.parse(localStorage.getItem('fleanCart') || '[]');
  
  // Check if product already exists
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: price,
      image: imageUrl,
      qty: 1
    });
  }
  
  // Save cart
  localStorage.setItem('fleanCart', JSON.stringify(cart));
  
  // Haptic feedback
  if (navigator.vibrate) navigator.vibrate(10);
  
  // Toast notification
  showToast(`${productName} added to cart`);
}

function applyDietaryFilter(label) {
  if (!window.searchUI) return;
  
  const currentFilters = searchService.getFilters();
  const dietaryLabels = currentFilters.dietaryLabels || [];
  
  // Toggle the label
  const index = dietaryLabels.indexOf(label);
  if (index > -1) {
    dietaryLabels.splice(index, 1);
  } else {
    dietaryLabels.push(label);
  }
  
  searchService.setFilters({ dietaryLabels });
  
  // Update chip UI
  document.querySelectorAll('.filter-chip').forEach(chip => {
    if (chip.textContent.toLowerCase().includes(label.toLowerCase())) {
      chip.classList.toggle('active', index === -1);
    }
  });
  
  // Re-run search if we have a query
  if (window.searchUI.currentQuery) {
    window.searchUI.performSearch(window.searchUI.currentQuery);
  }
  
  showToast(index === -1 ? `Filter: ${label} added` : `Filter: ${label} removed`);
}

function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--charcoal, #1F2937);
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 1000;
    animation: toast-slide-up 0.3s ease;
    max-width: 80%;
    text-align: center;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'toast-slide-down 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// ═══════════════════════════════════════════════════════════════════
// ANIMATED SEARCH MARQUEE
// ═══════════════════════════════════════════════════════════════════

const MARQUEE_SUGGESTIONS = [
  { text: 'organic snacks', icon: '🌿' },
  { text: 'protein bars', icon: '💪' },
  { text: 'sugar free cookies', icon: '🍪' },
  { text: 'gluten free pasta', icon: '🍝' },
  { text: 'healthy chips', icon: '🥔' },
  { text: 'oats & cereals', icon: '🥣' },
  { text: 'almond milk', icon: '🥛' },
  { text: 'peanut butter', icon: '🥜' },
  { text: 'dark chocolate', icon: '🍫' },
  { text: 'green tea', icon: '🍵' },
  { text: 'quinoa', icon: '🌾' },
  { text: 'muesli', icon: '🥗' },
  { text: 'coconut water', icon: '🥥' },
  { text: 'energy drinks', icon: '⚡' },
  { text: 'low calorie', icon: '🔥' },
  { text: 'high fiber', icon: '🌱' },
  { text: 'vegan snacks', icon: '🥬' },
  { text: 'keto friendly', icon: '🥑' },
  { text: 'no preservatives', icon: '✨' },
  { text: 'kids nutrition', icon: '👶' }
];

function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  // Create chips HTML - duplicate for seamless loop
  const createChips = () => {
    return MARQUEE_SUGGESTIONS.map(item => `
      <button class="marquee-chip" onclick="performSearch('${item.text}')">
        <span class="marquee-chip-icon">${item.icon}</span>
        <span>${item.text}</span>
      </button>
    `).join('');
  };

  // Duplicate content for seamless infinite scroll
  const chipsHTML = createChips();
  track.innerHTML = chipsHTML + chipsHTML;

  // Add some random glow effects
  setTimeout(() => {
    const chips = track.querySelectorAll('.marquee-chip');
    const randomIndices = [2, 7, 12, 17, 22, 27];
    randomIndices.forEach(i => {
      if (chips[i]) chips[i].classList.add('glow');
    });
  }, 500);
}

// ═══════════════════════════════════════════════════════════════════
// INITIALIZE
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  window.searchUI = new SearchUI();
  initMarquee();
});
