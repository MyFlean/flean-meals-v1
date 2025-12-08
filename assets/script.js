// ═══════════════════════════════════════════════════════════════════
// FLEAN — Premium Grocery Marketplace
// Investor-Ready JavaScript with Animations & Polish
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// DATA - Products, Categories, Collections
// ═══════════════════════════════════════════════════════════════════

const categories = [
  { id: 'dairy-eggs', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'bread-bakery', name: 'Bread & Bakery', icon: '🍞' },
  { id: 'pantry', name: 'Pantry Staples', icon: '🥫' },
  { id: 'snacks', name: 'Snacks', icon: '🍪' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'organic', name: 'Organic', icon: '🌾' },
  { id: 'sweets', name: 'Sweets', icon: '🍬' },
  { id: 'cooking', name: 'Cooking', icon: '🧈' }
];

const products = [
  {
    id: 'maggi-masala',
    name: 'Maggi Masala Noodles',
    brand: 'Nestlé',
    description: 'Classic instant noodles with refined flour and MSG — convenient but not ideal.',
    category: 'pantry',
    price: 12,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400',
    tags: ['Quick Meal'],
    watchouts: ['Refined Flour', 'Palm Oil', 'Added Sugar', 'High Sodium', 'MSG'],
    swapId: 'slurrp-millet',
    healthScore: 32
  },
  {
    id: 'slurrp-millet',
    name: 'Millet & Veggie Noodles',
    brand: 'Slurrp Farm',
    description: 'Little millet noodles with hidden veggies, no preservatives or artificial colors.',
    category: 'pantry',
    price: 45,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    tags: ['No Preservatives', 'Whole Grain', 'High Fiber', 'No Added Sugar', 'No MSG'],
    watchouts: [],
    healthScore: 88
  },
  {
    id: 'good-day-butter',
    name: 'Good Day Butter Cookies',
    brand: 'Britannia',
    description: 'Popular tea-time biscuits rich in refined flour and refined sugar.',
    category: 'sweets',
    price: 35,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
    tags: ['Tea Time Classic'],
    watchouts: ['Refined Flour', 'Added Sugar', 'Artificial Colors', 'Palm Oil'],
    swapId: 'yogabar-cookies',
    healthScore: 38
  },
  {
    id: 'yogabar-cookies',
    name: 'Oats & Dark Chocolate Cookies',
    brand: 'Yoga Bar',
    description: 'Slow-baked cookies with rolled oats, dark chocolate, and jaggery.',
    category: 'sweets',
    price: 89,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    tags: ['Whole Grain', 'No Preservatives', 'No Refined Sugar', 'High Fiber'],
    watchouts: [],
    healthScore: 82
  },
  {
    id: 'amul-butter',
    name: 'Amul Butter',
    brand: 'Amul',
    description: 'Classic Indian butter made from fresh cream. A kitchen staple.',
    category: 'dairy-eggs',
    price: 56,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400',
    tags: ['Natural', 'No Preservatives', 'No Added Sugar'],
    watchouts: ['High Saturated Fat'],
    healthScore: 72
  },
  {
    id: 'epigamia-greek',
    name: 'Greek Yogurt — Mixed Berries',
    brand: 'Epigamia',
    description: 'Thick, creamy Greek yogurt with real berry compote and live cultures.',
    category: 'dairy-eggs',
    price: 85,
    unit: 'cup',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
    tags: ['High Protein', 'Live Cultures', 'No Preservatives', 'Natural'],
    watchouts: [],
    macros: { protein: '15g', carbs: '12g', fat: '5g' },
    healthScore: 89
  },
  {
    id: 'raw-pressery-orange',
    name: 'Cold Pressed Orange Juice',
    brand: 'Raw Pressery',
    description: 'Freshly cold-pressed Valencia oranges with no added sugar or preservatives.',
    category: 'beverages',
    price: 120,
    unit: '1L',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400',
    tags: ['Cold Pressed', 'No Added Sugar', 'No Preservatives', '100% Natural'],
    watchouts: [],
    healthScore: 94
  },
  {
    id: 'tropicana-delight',
    name: 'Mixed Fruit Juice',
    brand: 'Tropicana',
    description: 'Packaged fruit juice from concentrate with added sugar.',
    category: 'beverages',
    price: 45,
    unit: '1L',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
    tags: ['Vitamin C Added'],
    watchouts: ['Added Sugar', 'From Concentrate', 'Preservatives'],
    swapId: 'raw-pressery-orange',
    healthScore: 42
  },
  {
    id: 'lays-classic',
    name: 'Classic Salted Chips',
    brand: "Lay's",
    description: 'Crispy potato chips fried in palm oil with high sodium content.',
    category: 'snacks',
    price: 20,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400',
    tags: ['Popular Choice'],
    watchouts: ['Palm Oil', 'High Sodium', 'Refined Oil'],
    swapId: 'farmley-nuts',
    healthScore: 28
  },
  {
    id: 'farmley-nuts',
    name: 'Roasted Mixed Nuts',
    brand: 'Farmley',
    description: 'Dry roasted almonds, cashews, and walnuts with no added oil or salt.',
    category: 'snacks',
    price: 199,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
    tags: ['No Added Salt', 'No Oil', 'High Protein', 'Heart Healthy'],
    watchouts: [],
    macros: { protein: '21g', carbs: '15g', fat: '54g' },
    healthScore: 91
  },
  {
    id: 'organic-tulsi-tea',
    name: 'Tulsi Green Tea',
    brand: 'Organic India',
    description: 'Organic tulsi leaves with green tea for immunity and stress relief.',
    category: 'organic',
    price: 225,
    unit: '25 bags',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    tags: ['Organic', 'No Caffeine', 'Antioxidants', 'Immunity Booster'],
    watchouts: [],
    healthScore: 96
  },
  {
    id: 'blue-tokai-coffee',
    name: 'Vienna Roast Coffee',
    brand: 'Blue Tokai',
    description: 'Single-origin Arabica beans, medium roasted for balanced flavor.',
    category: 'beverages',
    price: 450,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    tags: ['Single Origin', 'Arabica', 'Small Batch', 'No Additives'],
    watchouts: [],
    healthScore: 85
  },
  {
    id: 'soulfull-muesli',
    name: 'Millet Muesli — Crunchy',
    brand: 'Soulfull',
    description: 'Crunchy breakfast muesli with 5 millets, nuts, and seeds.',
    category: 'pantry',
    price: 299,
    unit: '700g',
    image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=400',
    tags: ['Whole Grain', 'High Fiber', 'No Added Sugar', 'Millets'],
    watchouts: [],
    macros: { protein: '12g', carbs: '65g', fat: '8g', fiber: '14g' },
    healthScore: 87
  },
  {
    id: 'two-brothers-ghee',
    name: 'A2 Desi Cow Ghee',
    brand: 'Two Brothers',
    description: 'Traditional bilona churned ghee from grass-fed A2 cows.',
    category: 'cooking',
    price: 750,
    unit: '500ml',
    image: 'https://images.unsplash.com/photo-1631898039984-fd5e255d7c86?w=400',
    tags: ['A2 Milk', 'Grass Fed', 'Traditional', 'No Preservatives'],
    watchouts: [],
    healthScore: 88
  },
  {
    id: 'hersheys-syrup',
    name: 'Chocolate Syrup',
    brand: "Hershey's",
    description: 'Sweet chocolate syrup made with high fructose corn syrup.',
    category: 'sweets',
    price: 199,
    unit: 'bottle',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400',
    tags: ['Dessert Topping'],
    watchouts: ['High Fructose Corn Syrup', 'Added Sugar', 'Artificial Flavors'],
    swapId: 'natures-cocoa',
    healthScore: 22
  },
  {
    id: 'natures-cocoa',
    name: 'Organic Cacao Powder',
    brand: 'Nature',
    description: 'Raw organic cacao powder, unsweetened, full of antioxidants.',
    category: 'organic',
    price: 350,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1610611826689-1a5f5db2a9f4?w=400',
    tags: ['Organic', 'No Sugar', 'Raw', 'Antioxidants', 'Superfood'],
    watchouts: [],
    healthScore: 95
  },
  {
    id: 'milky-mist-paneer',
    name: 'Fresh Paneer',
    brand: 'Milky Mist',
    description: 'Fresh cottage cheese made from pure cow milk.',
    category: 'dairy-eggs',
    price: 85,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400',
    tags: ['High Protein', 'Fresh', 'No Preservatives', 'Vegetarian'],
    watchouts: [],
    macros: { protein: '18g', carbs: '3g', fat: '22g' },
    healthScore: 84
  },
  {
    id: 'true-elements-granola',
    name: 'Honey Oats Granola',
    brand: 'True Elements',
    description: 'Crunchy oat clusters with real honey and dried fruits.',
    category: 'pantry',
    price: 349,
    unit: '450g',
    image: 'https://images.unsplash.com/photo-1517093611619-2c57c8883b5e?w=400',
    tags: ['Whole Grain', 'Natural Honey', 'No Preservatives', 'High Fiber'],
    watchouts: [],
    healthScore: 83
  }
];

const collections = [
  {
    id: 'party-snacks',
    title: 'Party Snacks Under ₹200',
    subtitle: 'Your guests won\'t know it\'s healthy 🤫',
    emoji: '🎉',
    productIds: ['farmley-nuts', 'yogabar-cookies', 'true-elements-granola']
  },
  {
    id: 'healthy-snacks-100',
    title: 'Snacks Under ₹100',
    subtitle: 'Cheap thrills, zero guilt bills',
    emoji: '🥜',
    productIds: ['epigamia-greek', 'slurrp-millet', 'amul-butter']
  },
  {
    id: 'healthy-sweets',
    title: 'Healthy Indian Sweets',
    subtitle: 'Mithai that won\'t haunt you later',
    emoji: '🍬',
    productIds: ['natures-cocoa', 'yogabar-cookies', 'two-brothers-ghee']
  },
  {
    id: 'preworkout',
    title: 'Pre-Workout Fuel',
    subtitle: 'Energy without the crash landing',
    emoji: '🏃',
    productIds: ['epigamia-greek', 'raw-pressery-orange', 'farmley-nuts', 'blue-tokai-coffee']
  },
  {
    id: 'kids-lunchbox',
    title: "Kids' Lunchbox Heroes",
    subtitle: 'Stuff they\'ll actually eat (and it\'s good)',
    emoji: '🧒',
    productIds: ['slurrp-millet', 'epigamia-greek', 'raw-pressery-orange']
  },
  {
    id: 'midnight-munchies',
    title: 'Midnight Munchies',
    subtitle: '2 AM cravings, 0 AM regrets',
    emoji: '🌙',
    productIds: ['farmley-nuts', 'yogabar-cookies', 'organic-tulsi-tea']
  },
  {
    id: 'high-protein',
    title: 'High-Protein Pantry',
    subtitle: 'Gains without the mystery powders',
    emoji: '💪',
    productIds: ['milky-mist-paneer', 'epigamia-greek', 'farmley-nuts', 'soulfull-muesli']
  },
  {
    id: 'organic-essentials',
    title: 'Organic Essentials',
    subtitle: 'For when you\'re feeling fancy (and healthy)',
    emoji: '🌿',
    productIds: ['organic-tulsi-tea', 'natures-cocoa', 'two-brothers-ghee']
  }
];

const productSwaps = {
  'maggi-masala': {
    swapId: 'slurrp-millet',
    reasons: ['Whole millet grains vs refined flour', 'No MSG or artificial colors', '3x more fiber per serving', 'Hidden vegetables for extra nutrition']
  },
  'good-day-butter': {
    swapId: 'yogabar-cookies',
    reasons: ['Rolled oats instead of refined flour', 'Jaggery instead of refined sugar', 'Zero artificial colors or preservatives', 'More protein per serving']
  },
  'tropicana-delight': {
    swapId: 'raw-pressery-orange',
    reasons: ['Cold pressed, not from concentrate', 'Zero added sugar', 'No preservatives or additives', 'More vitamins retained']
  },
  'lays-classic': {
    swapId: 'farmley-nuts',
    reasons: ['Heart-healthy fats vs refined oils', 'High protein snack', 'No added salt or oil', 'Sustained energy vs sugar spike']
  },
  'hersheys-syrup': {
    swapId: 'natures-cocoa',
    reasons: ['Raw cacao with antioxidants', 'Zero sugar - sweeten yourself', 'No artificial flavors', 'Superfood benefits']
  }
};

// ═══════════════════════════════════════════════════════════════════
// STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════════

const state = {
  activeCategory: null,
  activeCollection: null,
  searchQuery: '',
  cart: JSON.parse(localStorage.getItem('fleanCart') || '[]'),
  preferences: JSON.parse(localStorage.getItem('fleanPreferences') || '{}'),
  location: localStorage.getItem('fleanLocation') || 'Amrapali Sapphire, Noida'
};

// ═══════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function formatPrice(amount) {
  return `₹${amount}`;
}

function getHealthBadgeClass(score) {
  if (score >= 75) return 'good';
  if (score >= 50) return 'mid';
  return 'low';
}

function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('LocalStorage not available');
  }
}

// ═══════════════════════════════════════════════════════════════════
// SPLASH SCREEN
// ═══════════════════════════════════════════════════════════════════

function hideSplashScreen() {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hidden');
      setTimeout(() => splash.remove(), 500);
    }, 1500);
  }
}

// ═══════════════════════════════════════════════════════════════════
// PROMO CAROUSEL
// ═══════════════════════════════════════════════════════════════════

function initPromoCarousel() {
  const track = document.querySelector('.promo-track');
  const dots = document.querySelectorAll('.promo-dot');
  const slides = document.querySelectorAll('.promo-slide');
  
  if (!track || !dots.length) return;
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  // Auto-advance
  setInterval(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, 4000);
  
  // Click handlers
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });
}

// ═══════════════════════════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════════════════════════

function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;
  
  grid.innerHTML = categories.map((cat, index) => `
    <button class="category-card ${state.activeCategory === cat.id ? 'active' : ''}" 
            data-category="${cat.id}"
            style="animation-delay: ${index * 0.05}s">
      <span>${cat.icon}</span>
      <p>${cat.name}</p>
        </button>
  `).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.dataset.category;
      state.activeCategory = state.activeCategory === catId ? null : catId;
      state.activeCollection = null;
      renderCategories();
      renderFeed();
      
      // Haptic feedback simulation
      if (navigator.vibrate) navigator.vibrate(10);
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════════════

function initSearch() {
  const searchInput = document.getElementById('productSearch');
  const suggestionsEl = document.getElementById('searchSuggestions');
  const searchBar = document.getElementById('searchBar');
  
  if (!searchInput) return;
  
  const debouncedSearch = debounce((query) => {
    state.searchQuery = query;
    state.activeCategory = null;
    state.activeCollection = null;
    renderFeed();
  }, 300);
  
  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
    if (suggestionsEl) {
      suggestionsEl.style.display = e.target.value ? 'none' : 'block';
    }
  });
  
  searchInput.addEventListener('focus', () => {
    searchBar?.classList.add('focused');
    if (suggestionsEl && !searchInput.value) {
      suggestionsEl.style.display = 'block';
    }
  });
  
  searchInput.addEventListener('blur', () => {
    searchBar?.classList.remove('focused');
    setTimeout(() => {
      if (suggestionsEl) suggestionsEl.style.display = 'none';
    }, 200);
  });
  
  // Suggestion chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query;
      searchInput.value = query;
      state.searchQuery = query;
      renderFeed();
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// PRODUCT FEED
// ═══════════════════════════════════════════════════════════════════

function getFilteredProducts() {
  let filtered = [...products];

  if (state.activeCategory) {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  if (state.activeCollection) {
    const col = collections.find(c => c.id === state.activeCollection);
    if (col) {
      filtered = filtered.filter(p => col.productIds.includes(p.id));
    }
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );
  }
  
  return filtered;
}

function renderProductCard(product, index = 0) {
  const badgeClass = getHealthBadgeClass(product.healthScore);
  const cartItem = state.cart.find(item => item.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;
  
  return `
    <article class="product-card" 
             data-id="${product.id}"
             style="animation-delay: ${index * 0.05}s"
             onclick="navigateToProduct('${product.id}')">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" 
             onerror="this.src='https://via.placeholder.com/400x300?text=Product'">
        <div class="health-badge ${badgeClass}">
          <strong>${product.healthScore}</strong>
          <span>/100</span>
        </div>
      </div>
      <div class="product-body">
        <span class="product-brand">${product.brand}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
        <div class="product-tags">
          ${product.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
          ${product.watchouts.length > 0 ? `<span class="tag warning">👀 ${product.watchouts.length} red flags</span>` : ''}
        </div>
        ${product.macros ? renderMacros(product.macros) : ''}
        <div class="product-footer">
          <div class="price-block">
            <span class="price">${formatPrice(product.price)}</span>
            <span class="unit">${product.unit}</span>
          </div>
          ${qty > 0 ? `
            <div class="qty-selector" onclick="event.stopPropagation()">
              <button class="qty-btn" onclick="updateCart('${product.id}', -1)">−</button>
              <span class="qty-value">${qty}</span>
              <button class="qty-btn" onclick="updateCart('${product.id}', 1)">+</button>
            </div>
          ` : `
            <button class="add-btn" onclick="event.stopPropagation(); addToCart('${product.id}')">+</button>
          `}
        </div>
      </div>
    </article>
    ${shouldShowSwap(product) ? renderSwapCard(product) : ''}
  `;
}

function renderMacros(macros) {
  return `
    <div class="product-tags">
      ${Object.entries(macros).map(([key, val]) => 
        `<span class="tag neutral">${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}</span>`
      ).join('')}
    </div>
  `;
}

function shouldShowSwap(product) {
  return state.searchQuery.trim() && product.healthScore < 65 && productSwaps[product.id];
}

function renderSwapCard(product) {
  const swap = productSwaps[product.id];
  if (!swap) return '';
  
  const swapProduct = products.find(p => p.id === swap.swapId);
  if (!swapProduct) return '';
  
  return `
    <div class="swap-card" data-swap="${product.id}">
      <div class="swap-header" onclick="toggleSwapCard('${product.id}')">
        <span>🔄 Plot twist: there's a better option</span>
        <button class="swap-toggle">▼</button>
      </div>
      <div class="swap-body">
        <div class="swap-grid">
          <div class="swap-column">
            <h4>❌ ${product.name}</h4>
            <p class="swap-meta">Score: ${product.healthScore}/100 · ${formatPrice(product.price)}</p>
            <ul class="swap-reasons">
              ${product.watchouts.slice(0, 3).map(w => `<li>❌ ${w}</li>`).join('')}
            </ul>
          </div>
          <div class="swap-column better">
            <h4>✅ ${swapProduct.name} ⭐</h4>
            <p class="swap-meta">Score: ${swapProduct.healthScore}/100 · ${formatPrice(swapProduct.price)}</p>
            <ul class="swap-reasons">
              ${swap.reasons.slice(0, 3).map(r => `<li>✅ ${r}</li>`).join('')}
            </ul>
            <button class="try-swap-btn" onclick="event.stopPropagation(); navigateToProduct('${swapProduct.id}')">
              Upgrade your cart →
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleSwapCard(productId) {
  const card = document.querySelector(`.swap-card[data-swap="${productId}"]`);
  if (card) {
    card.classList.toggle('open');
  }
}

function renderFeed() {
  const feedEl = document.getElementById('feed');
  const skeletonEl = document.getElementById('feedSkeleton');
  
  if (!feedEl) return;
  
  // Show skeleton briefly
  if (skeletonEl) {
    skeletonEl.style.display = 'flex';
    feedEl.style.display = 'none';
  }
  
  setTimeout(() => {
    const filtered = getFilteredProducts();
    updateActiveFilterChip(filtered.length);
    
    if (filtered.length === 0) {
      feedEl.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 4rem; margin-bottom: 1rem;">🤔</div>
          <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Hmm, nothing here</h3>
          <p style="color: var(--slate-500);">Either you're too picky or we need more snacks. Let's start over?</p>
          <button onclick="resetFilters()" style="margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--emerald-600); color: white; border-radius: 999px; font-weight: 600;">
            Show me everything
          </button>
        </div>
      `;
    } else {
      feedEl.innerHTML = filtered.map((p, i) => renderProductCard(p, i)).join('');
    }
    
    if (skeletonEl) {
      skeletonEl.style.display = 'none';
      feedEl.style.display = 'flex';
    }
  }, 300);
}

function updateActiveFilterChip(count) {
  const chip = document.getElementById('activeFilterChip');
  if (!chip) return;
  
  const filters = [];
  if (state.activeCategory) {
    const cat = categories.find(c => c.id === state.activeCategory);
    if (cat) filters.push(`${cat.icon} ${cat.name}`);
  }
  if (state.activeCollection) {
    const col = collections.find(c => c.id === state.activeCollection);
    if (col) filters.push(`${col.emoji} ${col.title}`);
  }
  if (state.searchQuery.trim()) {
    filters.push(`🔍 "${state.searchQuery}"`);
  }

  if (filters.length === 0) {
    chip.hidden = true;
    return;
  }

  chip.hidden = false;
  chip.innerHTML = `
    <span>${filters.join(' · ')} · ${count} items</span>
    <button onclick="resetFilters()">×</button>
  `;
}

function resetFilters() {
  state.activeCategory = null;
  state.activeCollection = null;
  state.searchQuery = '';
  
  const searchInput = document.getElementById('productSearch');
  if (searchInput) searchInput.value = '';
  
  renderCategories();
  renderFeed();
}

// ═══════════════════════════════════════════════════════════════════
// CART FUNCTIONALITY
// ═══════════════════════════════════════════════════════════════════

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  
  saveToLocalStorage('fleanCart', state.cart);
  updateCartBadge();
  const wittyMessages = [
      `Score: ${product.healthScore}/100 — Nice pick! 💚`,
      `Your future self says thanks 🙌`,
      `Added! Your cart just got healthier`,
      `Score: ${product.healthScore}/100 — Smart move!`
    ];
    showToast(`Added ${product.name}`, wittyMessages[Math.floor(Math.random() * wittyMessages.length)]);
    renderFeed();
  
  // Animate the add button
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (card) {
    const btn = card.querySelector('.add-btn');
    if (btn) btn.classList.add('added');
  }
}

function updateCart(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }
  
  saveToLocalStorage('fleanCart', state.cart);
  updateCartBadge();
  renderFeed();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  
  const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
  
  if (total > 0) {
    badge.style.animation = 'none';
    badge.offsetHeight; // Trigger reflow
    badge.style.animation = 'badge-pop 0.3s ease-out';
  }
}

// ═══════════════════════════════════════════════════════════════════
// TOAST NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════

function showToast(title, subtitle) {
  const toast = document.getElementById('cartToast');
  const titleEl = document.getElementById('toastTitle');
  const subtitleEl = document.getElementById('toastSubtitle');
  
  if (!toast) return;
  
  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = subtitle;
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ═══════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════

function navigateToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

// ═══════════════════════════════════════════════════════════════════
// COLLECTIONS (Flean Finds)
// ═══════════════════════════════════════════════════════════════════

function renderCollections() {
  const grid = document.getElementById('collectionsGrid');
  if (!grid) return;
  
  grid.innerHTML = collections.map((col, index) => {
    const colProducts = col.productIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    
    return `
      <article class="collection-card" 
               data-collection="${col.id}"
               style="animation-delay: ${index * 0.1}s"
               onclick="navigateToCollection('${col.id}')">
        <div class="collection-emoji">${col.emoji}</div>
        <h3>${col.title}</h3>
        <p>${col.subtitle}</p>
        <div class="collection-products">
          ${colProducts.slice(0, 4).map(p => `<span>${p.tags[0]?.charAt(0) || '🛒'}</span>`).join('')}
          </div>
        <span class="collection-cta">Browse ${colProducts.length} items →</span>
        </article>
    `;
  }).join('');
}

function navigateToCollection(collectionId) {
  window.location.href = `index.html?collection=${collectionId}`;
}

function handleCollectionRouting() {
  const colParam = getQueryParam('collection');
  if (colParam && collections.some(c => c.id === colParam)) {
    state.activeCollection = colParam;
  }
}

// ═══════════════════════════════════════════════════════════════════
// PRODUCT DETAIL PAGE
// ═══════════════════════════════════════════════════════════════════

function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  
  const productId = getQueryParam('id');
  const product = products.find(p => p.id === productId);
  
  if (!product) {
        container.innerHTML = `
          <div style="text-align: center; padding: 3rem;">
            <div style="font-size: 4rem;">🤷</div>
            <h2>This product ghosted us</h2>
            <p style="color: var(--slate-500); margin-top: 0.5rem;">Probably for the best. Let's find something better.</p>
            <a href="index.html" class="back-link" style="display: inline-block; margin-top: 1rem;">← Back to the good stuff</a>
          </div>
        `;
    return;
  }

  const badgeClass = getHealthBadgeClass(product.healthScore);
  const swap = productSwaps[product.id];
  const swapProduct = swap ? products.find(p => p.id === swap.swapId) : null;

  container.innerHTML = `
    <div class="detail-hero">
      <img src="${product.image}" alt="${product.name}">
      <div class="health-badge ${badgeClass}">
          <strong>${product.healthScore}</strong>
          <span>/100</span>
        </div>
        </div>
    <div class="detail-body">
      <span class="detail-brand">${product.brand}</span>
      <h1 class="detail-title">${product.name}</h1>
      <p class="detail-desc">${product.description}</p>
      
      <div class="detail-tags">
        ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      
      ${product.watchouts.length > 0 ? `
      <div class="detail-tags">
          ${product.watchouts.map(w => `<span class="tag warning">⚠️ ${w}</span>`).join('')}
        </div>
      ` : ''}
      
      ${product.macros ? `
        <div class="detail-tags">
          ${Object.entries(product.macros).map(([k, v]) => 
            `<span class="tag neutral">${k}: ${v}</span>`
          ).join('')}
        </div>
      ` : ''}
      
      <div class="detail-price-row">
        <span class="detail-price">${formatPrice(product.price)}<small> / ${product.unit}</small></span>
        <button class="detail-btn" onclick="addToCart('${product.id}')">
          🛒 Add to Cart
        </button>
      </div>
      
      ${swap && swapProduct && product.healthScore < 70 ? `
        <div class="detail-swap">
          <h3 style="margin-bottom: 1rem;">💡 Healthier Alternative</h3>
          ${renderSwapCard(product)}
        </div>
      ` : ''}
    </div>
  `;
  
  // Auto-open swap card on detail page
  setTimeout(() => {
    const swapCard = container.querySelector('.swap-card');
    if (swapCard) swapCard.classList.add('open');
  }, 500);
}

// ═══════════════════════════════════════════════════════════════════
// PROFILE PAGE
// ═══════════════════════════════════════════════════════════════════

function renderProfileScore() {
  const scoreRing = document.querySelector('.score-ring');
  if (!scoreRing) return;
  
  const score = 78; // Demo score
  scoreRing.style.setProperty('--score', score);
  
  // Animate the score number
  const valueEl = scoreRing.querySelector('strong');
  if (valueEl) {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      valueEl.textContent = current;
    }, 20);
  }
}

// ═══════════════════════════════════════════════════════════════════
// PERSONALIZATION OVERLAY
// ═══════════════════════════════════════════════════════════════════

function initPersonalization() {
  const fab = document.getElementById('personalizationFAB');
  const overlay = document.getElementById('personalizationOverlay');
  const closeBtn = document.getElementById('closeOverlay');
  const saveBtn = document.getElementById('savePreferences');
  
  if (!fab || !overlay) return;
  
  fab.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  const closeOverlay = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });
  
  // Sliders
  ['protein', 'carbs', 'fibre'].forEach(macro => {
    const slider = document.getElementById(`${macro}Slider`);
    const value = document.getElementById(`${macro}Value`);
    if (slider && value) {
      slider.addEventListener('input', (e) => {
        value.textContent = `${e.target.value}g`;
      });
    }
  });

  // Save preferences
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const preferences = {
        goals: Array.from(document.querySelectorAll('input[name="goal"]:checked')).map(i => i.value),
        macros: {
          protein: document.getElementById('proteinSlider')?.value,
          carbs: document.getElementById('carbsSlider')?.value,
          fibre: document.getElementById('fibreSlider')?.value
        },
        avoidants: Array.from(document.querySelectorAll('input[name="avoid"]:checked')).map(i => i.value),
        desirables: Array.from(document.querySelectorAll('input[name="desire"]:checked')).map(i => i.value)
      };
      
      state.preferences = preferences;
      saveToLocalStorage('fleanPreferences', preferences);
      
      closeOverlay();
      showToast('✨ Locked in!', 'Your feed just got a glow-up');
    });
  }
}

// ═══════════════════════════════════════════════════════════════════
// LOCATION MODAL
// ═══════════════════════════════════════════════════════════════════

function initLocationPicker() {
  const picker = document.getElementById('locationPicker');
  const modal = document.getElementById('locationModal');
  
  if (!picker || !modal) return;
  
  picker.addEventListener('click', () => {
    modal.classList.add('active');
  });
}

function closeLocationModal() {
  const modal = document.getElementById('locationModal');
  if (modal) modal.classList.remove('active');
}

function selectLocation(location) {
  state.location = location;
  localStorage.setItem('fleanLocation', location);
  
  const addressEl = document.querySelector('.location-address');
  if (addressEl) {
    addressEl.innerHTML = `${location} <span class="dropdown-arrow">▼</span>`;
  }
  
  closeLocationModal();
  showToast('📍 Location locked!', `Delivering health to ${location.split(',')[0]}`);
}

// ═══════════════════════════════════════════════════════════════════
// SWAP MODAL
// ═══════════════════════════════════════════════════════════════════

function closeSwapModal() {
  const modal = document.getElementById('swapModal');
  if (modal) modal.classList.remove('active');
}

// ═══════════════════════════════════════════════════════════════════
// LOAD MORE
// ═══════════════════════════════════════════════════════════════════

function initLoadMore() {
  const btn = document.getElementById('loadMoreBtn');
  if (!btn) return;
  
  btn.addEventListener('click', () => {
    btn.classList.add('loading');
    
    // Simulate loading
  setTimeout(() => {
      btn.classList.remove('loading');
      showToast('🎉 That\'s all folks!', 'You\'ve scrolled through everything. Impressive.');
      btn.style.display = 'none';
    }, 1500);
  });
}

// ═══════════════════════════════════════════════════════════════════
// QUICK ACCESS FILTERS
// ═══════════════════════════════════════════════════════════════════

function filterByTag(tag) {
  state.searchQuery = tag;
  state.activeCategory = null;
  state.activeCollection = null;
  
  const searchInput = document.getElementById('productSearch');
  if (searchInput) searchInput.value = tag;
  
  renderFeed();
  
  // Scroll to feed
  document.getElementById('feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══════════════════════════════════════════════════════════════════
// HEADER SCROLL EFFECT
// ═══════════════════════════════════════════════════════════════════

function initScrollEffects() {
  let lastScroll = 0;
  const header = document.getElementById('mainHeader');
  
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════

function initPage() {
  const page = document.body.dataset.page || '';
  
  // Common initializations
  hideSplashScreen();
  updateCartBadge();
  
  switch (page) {
    case 'home':
    case '':
    handleCollectionRouting();
      initPromoCarousel();
    renderCategories();
    initSearch();
    renderFeed();
    initPersonalization();
      initLocationPicker();
      initLoadMore();
      // initScrollEffects();

      document.getElementById('clearFilters')?.addEventListener('click', resetFilters);
      break;

    case 'finds':
      renderCollections();
      break;

    case 'product':
      // Product page uses enhanced rendering in product.html
      // Don't call renderProductDetail() here - it's handled by renderEnhancedProductDetail()
      break;

    case 'profile':
      renderProfileScore();
      break;
  }
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initPage);

// Export for global access
window.products = products;
window.productSwaps = productSwaps;
window.addToCart = addToCart;
window.updateCart = updateCart;
window.navigateToProduct = navigateToProduct;
window.navigateToCollection = navigateToCollection;
window.toggleSwapCard = toggleSwapCard;
window.resetFilters = resetFilters;
window.filterByTag = filterByTag;
window.closeLocationModal = closeLocationModal;
window.selectLocation = selectLocation;
window.closeSwapModal = closeSwapModal;

