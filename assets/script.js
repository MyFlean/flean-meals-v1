// ═══════════════════════════════════════════════════════════════════
// FLEAN — Premium Grocery & Meals Marketplace
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// DATA STORE
// ═══════════════════════════════════════════════════════════════════

const categories = [
  { id: 'fresh', name: 'Fresh Vegetables', icon: '🥦' },
  { id: 'fruits', name: 'Fresh Fruits', icon: '🍎' },
  { id: 'breads', name: 'Breads', icon: '🍞' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'snacks', name: 'Snacks & Munchies', icon: '🍪' },
  { id: 'chocolates', name: 'Chocolates', icon: '🍫' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'breakfast', name: 'Breakfast', icon: '🥣' }
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
    time: '25 min'
  },
  {
    id: 'meal-bowl-2',
    name: 'Grilled Paneer Tikka Wrap',
    description: 'Low-carb wrap with spicy paneer tikka, mint chutney, and crunchy onions.',
    price: 199,
    image: 'assets/images/Paneer Tikka Wrap.png',
    tags: ['Keto Friendly', 'Vegetarian'],
    calories: '410 kcal',
    time: '20 min'
  },
  {
    id: 'meal-bowl-3',
    name: 'Burrito Bowl Supreme',
    description: 'Brown rice, black beans, corn salsa, avocado mash, and chipotle drizzle.',
    price: 289,
    image: 'assets/images/Burrito_Bowl_Supreme.jpg',
    tags: ['High Fiber', 'Vegan'],
    calories: '450 kcal',
    time: '30 min'
  }
];

const products = [
  {
    id: 'prod-tomato',
    name: 'Desi Tomato',
    brand: 'Farm Fresh',
    description: 'Ripened for cooking. Perfect for curries and sauces.',
    category: 'fresh',
    price: 27,
    unit: '500g',
    oldPrice: 34,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
    tags: ['1.5x Bigger', 'Locally Sourced'],
    healthScore: 92,
    watchouts: []
  },
  {
    id: 'prod-onion',
    name: 'Onion',
    brand: 'Nasik Best',
    description: 'Right sized, double layered. Essential for every kitchen.',
    category: 'fresh',
    price: 32,
    unit: '1Kg',
    oldPrice: 34,
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400',
    tags: ['Dry Cured'],
    healthScore: 88,
    watchouts: []
  },
  {
    id: 'prod-potato',
    name: 'Potato',
    brand: 'Agra Special',
    description: 'Crack & sprout free. Great for fries and mash.',
    category: 'fresh',
    price: 28,
    unit: '1Kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
    tags: ['Starch Rich'],
    healthScore: 85,
    watchouts: []
  },
  {
    id: 'prod-broccoli',
    name: 'Broccoli',
    brand: 'Exotic Greens',
    description: 'Fresh florets, rich in Vitamin C and K.',
    category: 'fresh',
    price: 45,
    unit: '1 Piece (300-400g)',
    image: 'https://images.unsplash.com/photo-1459411621453-7edd0c4b7cb0?w=400',
    tags: ['Immunity'],
    healthScore: 98,
    watchouts: []
  },
  {
    id: 'prod-bread',
    name: 'Whole Wheat Bread',
    brand: 'The Baker\'s Dozen',
    description: 'No maida, no preservatives. Just pure whole wheat goodness.',
    category: 'breads',
    price: 55,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    tags: ['No Maida', 'High Fiber'],
    healthScore: 90,
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
    price: 99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1613728913344-8cee3b7071f3?w=400',
    tags: ['Roasted', 'Protein'],
    healthScore: 94,
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
    productIds: ['prod-bread', 'prod-broccoli']
  },
  {
    id: 'col-vegan',
    title: 'Vegan and vibin',
    subtitle: 'Our top-tier collection',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200',
    bg: '#EFE9FA',
    productIds: ['prod-broccoli', 'prod-tomato']
  },
  {
    id: 'col-keto',
    title: 'Keto, done right',
    subtitle: 'Carbs on the low',
    image: 'https://images.unsplash.com/photo-1606756790138-7c13c0dbd907?w=200',
    bg: '#FCE7F3',
    productIds: ['prod-nuts', 'prod-paneer'] // Mock IDs
  },
  {
    id: 'col-protein',
    title: 'More protein',
    subtitle: 'Your power boosters',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200',
    bg: '#E0F2FE',
    productIds: ['prod-nuts', 'prod-paneer']
  }
];

// ═══════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════

const state = {
  mode: 'grocery', // 'grocery' or 'meals'
  category: 'all',
  cart: JSON.parse(localStorage.getItem('fleanCart') || '[]'),
  search: ''
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
  } else if (page === 'finds') {
    renderCollectionsPage();
  } else if (page === 'profile') {
    // handled in HTML
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
      <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600" class="hero-img" alt="Grocery">
      <div class="hero-content">
        <h2 class="hero-title">Welcome to FirstClub!</h2>
        <p>Relish Bangalore's finest fruits & veggies.</p>
        <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('productFeed').scrollIntoView()">
          Shop now →
        </button>
      </div>
    `;
  } else {
    hero.innerHTML = `
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600" class="hero-img" alt="Meals">
      <div class="hero-content">
        <h2 class="hero-title">Chef-Curated Meals</h2>
        <p>Healthy, hot, and delivered in 30 mins.</p>
        <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('productFeed').scrollIntoView()">
          Order Dinner →
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
          ${p.tags.includes('1.5x Bigger') ? '<span class="prod-badge">1.5x Bigger</span>' : ''}
        </div>
        <div class="prod-title">${p.name}</div>
        <div class="prod-sub">${p.unit}</div>
        <div class="prod-footer">
          <div>
            <span class="prod-price">₹${p.price}</span>
            ${p.oldPrice ? `<span class="prod-old-price">₹${p.oldPrice}</span>` : ''}
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
        <img src="${m.image}" class="meal-img-large" alt="${m.name}" onerror="this.src='https://via.placeholder.com/400x240?text=Meal'">
        <div class="meal-content">
          <div class="meal-tags">
            ${m.tags.map(t => `<span class="meal-tag">${t}</span>`).join('')}
          </div>
          <h3 style="font-size:1.25rem; margin-bottom:4px;">${m.name}</h3>
          <p style="font-size:0.9rem; margin-bottom:12px;">${m.description}</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
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
}

function updateCartBadge() {
  const total = state.cart.reduce((a, b) => a + b.qty, 0);
  const badges = document.querySelectorAll('.cart-badge'); // If any
  // Logic to update badge numbers if they existed in HTML
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
