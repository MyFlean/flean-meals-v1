// ═══════════════════════════════════════════════════════════════════
// FLEAN — Premium Grocery & Meals Marketplace
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// DATA STORE
// ═══════════════════════════════════════════════════════════════════

const categories = [
  { id: 'snacks', name: 'Snacks & Munchies', icon: '🍪' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'breakfast', name: 'Breakfast & Cereal', icon: '🥣' },
  { id: 'chocolates', name: 'Chocolates & Desserts', icon: '🍫' },
  { id: 'instant', name: 'Instant Foods', icon: '🍜' },
  { id: 'breads', name: 'Breads & Bakery', icon: '🍞' },
  { id: 'dairy', name: 'Dairy & Alternatives', icon: '🥛' },
  { id: 'pantry', name: 'Pantry Staples', icon: '🥫' }
];

const meals = [
  {
    id: 'meal-bowl-1',
    name: 'Quinoa & Roasted Veggie Salad',
    description: 'Protein-packed quinoa bowl with roasted bell peppers, zucchini, and lemon tahini dressing.',
    price: 249,
    image: 'assets/images/Quinoa & Roasted Veggie Salad.png',
    tags: ['Vegan', 'High Protein', 'Gluten Free'],
    calories: '320 kcal',
    time: '25 min',
    macros: { protein: '18g', carbs: '45g', fats: '12g' }
  },
  {
    id: 'meal-bowl-2',
    name: 'Grilled Paneer Tikka Wrap',
    description: 'Low-carb wrap with spicy paneer tikka, mint chutney, and crunchy onions.',
    price: 199,
    image: 'assets/images/Paneer Tikka Wrap.png',
    tags: ['Keto Friendly', 'Vegetarian'],
    calories: '410 kcal',
    time: '20 min',
    macros: { protein: '22g', carbs: '15g', fats: '28g' }
  },
  {
    id: 'meal-bowl-3',
    name: 'Burrito Bowl Supreme',
    description: 'Brown rice, black beans, corn salsa, avocado mash, and chipotle drizzle.',
    price: 289,
    image: 'assets/images/Burrito_Bowl_Supreme.jpg',
    tags: ['High Fiber', 'Vegan'],
    calories: '450 kcal',
    time: '30 min',
    macros: { protein: '16g', carbs: '55g', fats: '14g' }
  }
];

const products = [
  {
    id: 'prod-bread',
    name: 'Whole Wheat Sourdough',
    brand: 'The Baker\'s Dozen',
    description: 'No maida, no preservatives. Just pure whole wheat goodness fermented naturally.',
    category: 'breads',
    price: 85,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1585476644321-b976214b606d?w=400',
    tags: ['Gut Friendly', 'No Maida'],
    healthScore: 92,
    watchouts: []
  },
  {
    id: 'prod-chips',
    name: 'Salted Potato Chips',
    brand: 'Lay\'s',
    description: 'Classic salted chips. Fried in palm oil.',
    category: 'snacks',
    price: 20,
    unit: 'Pack',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400',
    tags: ['Fried'],
    healthScore: 30,
    watchouts: ['Palm Oil', 'High Sodium'],
    swapId: 'prod-nuts'
  },
  {
    id: 'prod-nuts',
    name: 'Roasted Almonds',
    brand: 'Farmley',
    description: 'Crunchy roasted almonds with a pinch of rock salt.',
    category: 'snacks',
    price: 199,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1613728913344-8cee3b7071f3?w=400',
    tags: ['Roasted', 'Protein'],
    healthScore: 94,
    watchouts: []
  },
  {
    id: 'prod-muesli',
    name: 'Millet Muesli',
    brand: 'Soulfull',
    description: 'Crunchy breakfast muesli with 5 millets, nuts, and seeds.',
    category: 'breakfast',
    price: 299,
    unit: '700g',
    image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=400',
    tags: ['Whole Grain', 'No Added Sugar'],
    healthScore: 87,
    watchouts: []
  },
  {
    id: 'prod-chocolate',
    name: 'Dark Chocolate 70%',
    brand: 'Amul',
    description: 'Rich dark chocolate.',
    category: 'chocolates',
    price: 100,
    unit: '150g',
    image: 'https://images.unsplash.com/photo-1511381978029-18b5735434b7?w=400',
    tags: ['Antioxidants'],
    healthScore: 65,
    watchouts: ['Added Sugar', 'Emulsifiers']
  },
  {
    id: 'prod-kombucha',
    name: 'Kombucha - Ginger',
    brand: 'Atmosphere',
    description: 'Probiotic sparkling tea.',
    category: 'beverages',
    price: 220,
    unit: 'Bottle',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400',
    tags: ['Probiotic', 'Low Sugar'],
    healthScore: 96,
    watchouts: []
  },
  {
    id: 'prod-protein-bar',
    name: 'Whey Protein Bar',
    brand: 'The Whole Truth',
    description: 'Double cocoa protein bar with no added sugar.',
    category: 'snacks',
    price: 90,
    unit: '52g',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400',
    tags: ['20g Protein', 'Clean Label'],
    healthScore: 95,
    watchouts: []
  },
  {
    id: 'prod-oat-milk',
    name: 'Oat Milk',
    brand: 'OatMlk',
    description: 'Dairy-free plant milk.',
    category: 'dairy',
    price: 299,
    unit: '1L',
    image: 'https://images.unsplash.com/photo-1600189020840-e9918c25268d?w=400',
    tags: ['Vegan', 'Lactose Free'],
    healthScore: 88,
    watchouts: []
  }
];

const collections = [
  {
    id: 'col-fiber',
    title: 'High-fibre heroes',
    subtitle: 'Easy on the gut',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200',
    bg: '#FDF6D8',
    productIds: ['prod-bread', 'prod-muesli']
  },
  {
    id: 'col-vegan',
    title: 'Vegan and vibin',
    subtitle: 'Our top-tier collection',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200',
    bg: '#EFE9FA',
    productIds: ['prod-kombucha', 'prod-oat-milk']
  },
  {
    id: 'col-keto',
    title: 'Keto, done right',
    subtitle: 'Carbs on the low',
    image: 'https://images.unsplash.com/photo-1606756790138-7c13c0dbd907?w=200',
    bg: '#FCE7F3',
    productIds: ['prod-nuts', 'prod-protein-bar']
  },
  {
    id: 'col-protein',
    title: 'More protein',
    subtitle: 'Your power boosters',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200',
    bg: '#E0F2FE',
    productIds: ['prod-nuts', 'prod-protein-bar']
  }
];

// ═══════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════

const state = {
  mode: 'grocery', // 'grocery' or 'meals'
  category: 'all',
  cart: JSON.parse(localStorage.getItem('fleanCart') || '[]'),
  search: '',
  preferences: JSON.parse(localStorage.getItem('fleanPreferences') || '{}')
};

// ═══════════════════════════════════════════════════════════════════
// CORE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function initApp() {
  const page = document.body.dataset.page;
  
  updateCartBadge();
  
  if (page === 'home') {
    renderHome();
    setupHomeListeners();
    initPersonalization();
  } else if (page === 'finds') {
    renderCollectionsPage();
  } else if (page === 'profile') {
    renderProfileScore(); // Gamification logic
  } else if (page === 'product') {
    // handled in product.html
  }
}

function renderHome() {
  // 1. Setup Toggle
  const toggleBtnGrocery = document.getElementById('toggleGrocery');
  const toggleBtnMeals = document.getElementById('toggleMeals');
  
  if (toggleBtnGrocery && toggleBtnMeals) {
    if (state.mode === 'grocery') {
      toggleBtnGrocery.classList.add('active');
      toggleBtnMeals.classList.remove('active');
      document.getElementById('homeContainer').setAttribute('data-mode', 'grocery');
    } else {
      toggleBtnMeals.classList.add('active');
      toggleBtnGrocery.classList.remove('active');
      document.getElementById('homeContainer').setAttribute('data-mode', 'meals');
    }
  }

  // 2. Render Categories (Grocery Only)
  const catContainer = document.getElementById('categoryScroll');
  if (catContainer) {
    if (state.mode === 'grocery') {
      catContainer.style.display = 'flex';
      catContainer.innerHTML = `
        <button class="chip ${state.category === 'all' ? 'active' : ''}" onclick="setCategory('all')">All</button>
        ${categories.map(c => `
          <button class="chip ${state.category === c.id ? 'active' : ''}" onclick="setCategory('${c.id}')">${c.name}</button>
        `).join('')}
      `;
    } else {
      catContainer.style.display = 'none';
    }
  }

  // 3. Render Hero Banner
  renderHero();

  // 4. Render Feed
  renderFeed();
}

function renderHero() {
  const hero = document.getElementById('heroBanner');
  if (!hero) return;

  if (state.mode === 'grocery') {
    hero.innerHTML = `
      <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600" class="hero-img" alt="Grocery">
      <div class="hero-content">
        <div class="hero-tag">✨ Curated for You</div>
        <h2 class="hero-title">Pantry Clean-Up?</h2>
        <p>Swap processed junk with clean, lab-tested alternatives.</p>
        <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('productFeed').scrollIntoView()">
          Shop Clean →
        </button>
      </div>
    `;
  } else {
    hero.innerHTML = `
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600" class="hero-img" alt="Meals">
      <div class="hero-content">
        <div class="hero-tag">👨‍🍳 Chef Curated</div>
        <h2 class="hero-title">Macros On Point</h2>
        <p>High protein, low carb, or balanced. You choose.</p>
        <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('productFeed').scrollIntoView()">
          Order Meal →
        </button>
      </div>
    `;
  }
}

function renderFeed() {
  const feed = document.getElementById('productFeed');
  if (!feed) return;

  if (state.mode === 'grocery') {
    // Filter Products
    let filtered = products;
    if (state.category !== 'all') {
      filtered = products.filter(p => p.category === state.category);
    }
    
    // Render Grid
    feed.className = 'product-grid';
    feed.innerHTML = filtered.map(p => `
      <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
        <div class="prod-img-container">
          <img src="${p.image}" class="prod-img" alt="${p.name}">
          <div class="health-badge ${p.healthScore > 80 ? 'good' : 'mid'}">
            <strong>${p.healthScore}</strong>
          </div>
        </div>
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-title">${p.name}</div>
        <div class="prod-sub">${p.unit}</div>
        <div class="prod-footer">
          <div>
            <span class="prod-price">₹${p.price}</span>
          </div>
          <button class="add-btn-mini" onclick="event.stopPropagation(); addToCart('${p.id}')">+</button>
        </div>
      </div>
    `).join('');
  } else {
    // Render Meals List
    feed.className = ''; // Remove grid class for list view
    feed.innerHTML = meals.map(m => `
      <div class="meal-card-large" onclick="alert('Meal details coming soon!')">
        <div style="position:relative;">
          <img src="${m.image}" class="meal-img-large" alt="${m.name}" onerror="this.src='https://via.placeholder.com/400x240?text=Meal'">
          <div style="position:absolute; bottom:16px; right:16px; background:white; padding:4px 12px; border-radius:99px; font-weight:700; font-size:0.8rem; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
            🔥 ${m.calories}
          </div>
        </div>
        <div class="meal-content">
          <div class="meal-tags">
            ${m.tags.map(t => `<span class="meal-tag">${t}</span>`).join('')}
          </div>
          <h3 style="font-size:1.25rem; margin-bottom:4px;">${m.name}</h3>
          <p style="font-size:0.9rem; margin-bottom:12px;">${m.description}</p>
          
          <div class="meal-macros">
            <div class="macro-pill">💪 ${m.macros.protein} Protein</div>
            <div class="macro-pill">🌾 ${m.macros.carbs} Carbs</div>
            <div class="macro-pill">🥑 ${m.macros.fats} Fats</div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px;">
            <div style="font-weight:800; font-size:1.1rem;">₹${m.price}</div>
            <button class="btn-primary" style="padding: 8px 16px; font-size:0.9rem;">Add +</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderCollectionsPage() {
  const grid = document.getElementById('findsGrid');
  if (!grid) return;

  grid.innerHTML = collections.map(c => `
    <div class="collection-card" style="background:${c.bg}">
      <h3 class="collection-title">${c.title}</h3>
      <div class="collection-sub">${c.subtitle}</div>
      <img src="${c.image}" class="collection-img" alt="${c.title}">
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════════
// ACTIONS
// ═══════════════════════════════════════════════════════════════════

function setMode(mode) {
  state.mode = mode;
  state.category = 'all'; // Reset category on mode switch
  renderHome();
}

function setCategory(id) {
  state.category = id;
  renderHome(); // Re-render to update chips active state and feed
}

function addToCart(id) {
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ id, qty: 1 });
  
  localStorage.setItem('fleanCart', JSON.stringify(state.cart));
  updateCartBadge();
  
  // Show sticky cart
  const sticky = document.querySelector('.sticky-cart');
  if (sticky) sticky.classList.add('visible');
  
  // Haptic
  if(navigator.vibrate) navigator.vibrate(10);
}

function updateCartBadge() {
  const total = state.cart.reduce((a, b) => a + b.qty, 0);
  const badges = document.querySelectorAll('.cart-badge'); // If any
}

function setupHomeListeners() {
  // Listeners if needed
}

// ═══════════════════════════════════════════════════════════════════
// PERSONALIZATION & GAMIFICATION
// ═══════════════════════════════════════════════════════════════════

function initPersonalization() {
  const fab = document.getElementById('personalizationFAB');
  const overlay = document.getElementById('personalizationOverlay');
  
  if (!fab || !overlay) return;
  
  fab.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  document.getElementById('closeOverlay')?.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  document.getElementById('savePreferences')?.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    alert('Preferences Saved! Feed tailored.');
  });
  
  // Range sliders logic
  const ranges = document.querySelectorAll('input[type="range"]');
  ranges.forEach(range => {
    range.addEventListener('input', (e) => {
      e.target.nextElementSibling.innerText = e.target.value + (e.target.id === 'calSlider' ? ' kcal' : 'g');
    });
  });
}

function renderProfileScore() {
  const scoreRing = document.getElementById('scoreRing');
  if (!scoreRing) return;
  
  // Simple animation for demo
  let score = 0;
  const target = 78;
  const interval = setInterval(() => {
    score += 2;
    if (score >= target) {
      score = target;
      clearInterval(interval);
    }
    scoreRing.style.setProperty('--score', score);
    scoreRing.querySelector('strong').innerText = score;
  }, 20);
}

// ═══════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', initApp);

// Expose to window
window.setMode = setMode;
window.setCategory = setCategory;
window.addToCart = addToCart;
window.products = products;
window.collections = collections;
