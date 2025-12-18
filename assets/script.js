// ═══════════════════════════════════════════════════════════════════
// FLEAN — Premium Grocery & Meals Marketplace
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// DATA STORE
// ═══════════════════════════════════════════════════════════════════

const carouselItems = [
  {
    id: 'clean-up',
    title: 'Pantry Clean-Up?',
    subtitle: 'Swap processed junk with clean alternatives.',
    image: 'assets/images/Burrito_Bowl_Supreme.jpg',
    bg: '#FDF6D8',
    cta: 'Shop Clean →'
  },
  {
    id: 'col-fiber',
    title: 'High-Fibre Heroes',
    subtitle: 'Easy on the gut. Naturally rich in fiber.',
    image: 'assets/images/Bowl Street Kitchen.png',
    bg: '#EFE9FA',
    cta: 'Explore →'
  },
  {
    id: 'col-vegan',
    title: 'Vegan and Vibin',
    subtitle: 'Top-tier, plant-based alternatives.',
    image: 'assets/images/Fresh Greens Co. Kitchen.png',
    bg: '#E0F2FE',
    cta: 'View All →'
  },
  {
    id: 'col-keto',
    title: 'Keto, Done Right',
    subtitle: 'Carbs on lock. Keep it clean and keto.',
    image: 'assets/images/KetoGoal.png',
    bg: '#FCE7F3',
    cta: 'Shop Keto →'
  },
  {
    id: 'col-protein',
    title: 'Protein Power',
    subtitle: 'Less dough, more gains. High protein.',
    image: 'assets/images/Protein Plus Co. Kitchen.png',
    bg: '#F0F9F4',
    cta: 'Get Gains →'
  },
  {
    id: 'col-kids',
    title: 'Kids Fav',
    subtitle: 'Nutrition packed snacks children love.',
    image: 'assets/images/Millet-Bowl-13.jpg',
    bg: '#FFF9C4',
    cta: 'For Kids →'
  }
];

// Pantry Mode Sections
const pantrySections = [
  {
    title: 'Snacks, Drinks & More',
    categories: [
      { name: 'Snacks & Munchies', image: 'assets/images/Bowl Street Kitchen.png', id: 'snacks' },
      { name: 'Biscuits & Cookies', image: 'assets/images/Burrito_Bowl_Supreme.jpg', id: 'cookies' },
      { name: 'Sweets & Chocolates', image: 'assets/images/KetoGoal.png', id: 'sweets' },
      { name: 'Juices & Beverages', image: 'assets/images/Fresh Greens Co. Kitchen.png', id: 'beverages' }
    ]
  },
  {
    title: 'Kids Food & Nutrition',
    categories: [
      { name: 'Staples & Porridges', image: 'assets/images/Millet-Bowl-13.jpg', id: 'staples' },
      { name: 'Milk & Health Mixes', image: 'assets/images/GreenBowl_kitchen.png', id: 'milk_mixes' },
      { name: 'Ready To Cook', image: 'assets/images/Ancient Grains Kitchen.png', id: 'rtc' },
      { name: 'Snacks & More', image: 'assets/images/Protein Plus Co. Kitchen.png', id: 'kids_snacks' }
    ]
  },
  {
    title: 'Packaged Foods',
    categories: [
      { name: 'Pasta & Noodles', image: 'assets/images/Nourish Cafe Kitchen.png', id: 'pasta' },
      { name: 'Breakfast', image: 'assets/images/Paneer Tikka Wrap.png', id: 'breakfast' },
      { name: 'Sauces & Spreads', image: 'assets/images/Quinoa & Roasted Veggie Salad.png', id: 'sauces' },
      { name: 'Baking', image: 'assets/images/Salad Icon.png', id: 'baking' }
    ]
  }
];

// Fresh Meals Mode Sections
const mealsSections = [
  {
    title: 'Meals & Bowls',
    categories: [
      { name: 'Fresh Bowls', image: 'assets/images/Bowls.png', id: 'bowls' },
      { name: 'Wraps & Rolls', image: 'assets/images/Wraps_Rolls.png', id: 'wraps' },
      { name: 'Weight Loss', image: 'assets/images/WeightLoss.png', id: 'weight_loss' },
      { name: 'Gourmet Salads', image: 'assets/images/Salad Icon.png', id: 'salads' }
    ]
  },
  {
    title: 'Kitchen Partners',
    categories: [
      { name: 'Bowl Street', image: 'assets/images/Bowl Street Kitchen.png', id: 'bowl_street' },
      { name: 'GreenBowl', image: 'assets/images/GreenBowl_kitchen.png', id: 'greenbowl' },
      { name: 'Nourish Cafe', image: 'assets/images/Nourish Cafe Kitchen.png', id: 'nourish' },
      { name: 'Ancient Grains', image: 'assets/images/Ancient Grains Kitchen.png', id: 'ancient_grains' }
    ]
  }
];

// Meals Carousel Items
const mealsCarouselItems = [
  {
    id: 'meals-protein',
    title: 'Your daily 25g protein boost',
    subtitle: 'Starting at ₹89/250ml',
    image: 'assets/images/Protein Plus Co. Kitchen.png',
    bg: '#4A7C9B',
    cta: 'Shop now →'
  },
  {
    id: 'meals-bowls',
    title: 'Fresh Buddha Bowls',
    subtitle: 'Healthy. Filling. Delicious.',
    image: 'assets/images/Bowls.png',
    bg: '#7CB798',
    cta: 'Order now →'
  },
  {
    id: 'meals-salads',
    title: 'Gourmet Salads',
    subtitle: 'Farm fresh ingredients daily',
    image: 'assets/images/Fresh Greens Co. Kitchen.png',
    bg: '#E8D5B7',
    cta: 'Try now →'
  }
];

const sidebarCategories = [
  { id: 'featured', name: 'Featured', icon: '⭐' },
  { id: 'fruits', name: 'Fruits & Vegetables', icon: '🥦' },
  { id: 'dairy', name: 'Breads, Dairy & Eggs', icon: '🥛' },
  { id: 'staples', name: 'Staples', icon: '🌾' },
  { id: 'kids', name: 'Kids Food & Nutrition', icon: '👶' },
  { id: 'snacks', name: 'Snacks & Munchies', icon: '🍪' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'sweets', name: 'Sweets & Chocolates', icon: '🍫' },
  { id: 'health', name: 'Health & Nutrition', icon: '💪' }
];

const products = [
  {
    id: 'p1',
    name: 'Provilac High Protein Milk',
    brand: 'Provilac',
    price: 139,
    originalPrice: 140,
    size: '500 ml',
    image: 'assets/images/Protein Plus Co. Kitchen.png',
    badges: ['With Natural Protein'],
    collection: 'col-protein'
  },
  {
    id: 'p2',
    name: 'High Protein Milk Small',
    brand: 'Provilac',
    price: 89,
    originalPrice: 90,
    size: '250 ml',
    image: 'assets/images/Protein Plus Co. Kitchen.png',
    badges: ['Bestseller'],
    collection: 'col-protein'
  },
  {
    id: 'p3',
    name: 'Matcha Protein',
    brand: 'Provilac',
    price: 250,
    originalPrice: 0,
    size: '250 ml',
    image: 'assets/images/GreenBowl_kitchen.png',
    badges: ['25g Protein'],
    collection: 'col-protein'
  },
  {
    id: 'p4',
    name: 'Kesar Elaichi',
    brand: 'Provilac',
    price: 89,
    originalPrice: 0,
    size: '250 ml',
    image: 'assets/images/Ancient Grains Kitchen.png',
    badges: ['26g Protein'],
    collection: 'col-protein'
  },
  {
    id: 'p5',
    name: 'Almond Milk',
    brand: 'OatMlk',
    price: 299,
    originalPrice: 320,
    size: '1 L',
    image: 'assets/images/Nourish Cafe Kitchen.png',
    badges: ['Vegan'],
    collection: 'col-vegan'
  }
];

// Personalized Products Database (mapped to preferences)
const personalizedProducts = {
  'Muscle Gain': [
    { id: 'pf1', name: 'High Protein Peanut Butter', image: 'assets/images/Protein Plus Co. Kitchen.png', match: 'Muscle Gain', tags: ['32g Protein'] },
    { id: 'pf2', name: 'Protein Oats Mix', image: 'assets/images/Ancient Grains Kitchen.png', match: 'Muscle Gain', tags: ['25g Protein'] }
  ],
  'Weight Loss': [
    { id: 'pf3', name: 'Low-Cal Granola', image: 'assets/images/Millet-Bowl-13.jpg', match: 'Weight Loss', tags: ['120 Cal'] },
    { id: 'pf4', name: 'Slim Shake Mix', image: 'assets/images/Fresh Greens Co. Kitchen.png', match: 'Weight Loss', tags: ['High Fiber'] }
  ],
  'Healthy Life': [
    { id: 'pf5', name: 'Organic Quinoa', image: 'assets/images/Quinoa & Roasted Veggie Salad.png', match: 'Healthy Life', tags: ['Organic'] },
    { id: 'pf6', name: 'Superfood Seeds Mix', image: 'assets/images/Salad Icon.png', match: 'Healthy Life', tags: ['Nutrient Dense'] }
  ],
  'Keto': [
    { id: 'pf7', name: 'Keto Bread', image: 'assets/images/KetoGoal.png', match: 'Keto', tags: ['2g Carbs'] },
    { id: 'pf8', name: 'Almond Flour', image: 'assets/images/Nourish Cafe Kitchen.png', match: 'Keto', tags: ['Low Carb'] }
  ],
  'Vegan': [
    { id: 'pf9', name: 'Oat Milk Barista', image: 'assets/images/GreenBowl_kitchen.png', match: 'Vegan', tags: ['Plant Based'] },
    { id: 'pf10', name: 'Vegan Protein Bar', image: 'assets/images/Bowl Street Kitchen.png', match: 'Vegan', tags: ['20g Protein'] }
  ],
  'Intermittent': [
    { id: 'pf11', name: 'Black Coffee Blend', image: 'assets/images/Burrito_Bowl_Supreme.jpg', match: 'Intermittent', tags: ['Zero Cal'] }
  ],
  'Paleo': [
    { id: 'pf12', name: 'Grass-Fed Jerky', image: 'assets/images/Protein Plus Co. Kitchen.png', match: 'Paleo', tags: ['Whole30'] }
  ],
  'No Palm Oil': [
    { id: 'pf13', name: 'Clean Cookies', image: 'assets/images/Millet-Bowl-13.jpg', match: 'Palm Oil Free', tags: ['No Palm Oil'] }
  ],
  'No Added Sugar': [
    { id: 'pf14', name: 'Sugar-Free Chocolate', image: 'assets/images/KetoGoal.png', match: 'No Sugar', tags: ['0g Sugar'] }
  ],
  'Gluten Free': [
    { id: 'pf15', name: 'GF Pasta', image: 'assets/images/Nourish Cafe Kitchen.png', match: 'Gluten Free', tags: ['Certified GF'] },
    { id: 'pf16', name: 'Rice Flour', image: 'assets/images/Ancient Grains Kitchen.png', match: 'Gluten Free', tags: ['Naturally GF'] }
  ]
};

// Preference Icons
const preferenceIcons = {
  'Muscle Gain': '💪',
  'Weight Loss': '⚖️',
  'Healthy Life': '🧘',
  'Keto': '🥑',
  'Intermittent': '⏰',
  'Vegan': '🌱',
  'Paleo': '🥩',
  'No Palm Oil': '🛡️',
  'No Added Sugar': '🍬',
  'Gluten Free': '🌾'
};

// ═══════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════

const state = {
  cart: JSON.parse(localStorage.getItem('fleanCart') || '[]'),
  selectedCategory: 'featured',
  mode: 'pantry', // 'pantry' or 'meals'
  userPreferences: JSON.parse(localStorage.getItem('userPreferences') || 'null')
};

// ═══════════════════════════════════════════════════════════════════
// CORE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function initApp() {
  const page = document.body.dataset.page;
  
  updateCartBadge();
  
  if (page === 'home') {
    renderPersonalization();
    renderHome();
  } else if (page === 'categories') {
    renderCategoriesPage();
  } else if (page === 'collection') {
    renderCollectionPage();
  }
}

// ═══════════════════════════════════════════════════════════════════
// PERSONALIZATION ENGINE
// ═══════════════════════════════════════════════════════════════════

function renderPersonalization() {
  const prefs = state.userPreferences;
  if (!prefs || !prefs.all || prefs.all.length === 0) return;
  
  // Show "Personalized" indicator in header
  const indicator = document.getElementById('personalizedIndicator');
  if (indicator) indicator.style.display = 'inline-block';
  
  // Show personalized greeting
  const greetingEl = document.getElementById('personalizedGreeting');
  const userNameEl = document.getElementById('userName');
  const badgesEl = document.getElementById('preferenceBadges');
  
  if (greetingEl) {
    greetingEl.style.display = 'block';
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName') || 'there';
    if (userNameEl) userNameEl.textContent = userName;
    
    // Render preference badges (max 4)
    if (badgesEl) {
      const displayPrefs = prefs.all.slice(0, 4);
      badgesEl.innerHTML = displayPrefs.map(p => {
        const icon = preferenceIcons[p] || '✓';
        return `<span class="pref-badge"><span class="pref-badge-icon">${icon}</span> ${p}</span>`;
      }).join('');
    }
  }
  
  // Show "For You" section
  const forYouSection = document.getElementById('forYouSection');
  const forYouGrid = document.getElementById('forYouGrid');
  
  if (forYouSection && forYouGrid) {
    // Gather personalized products based on preferences
    let personalizedItems = [];
    
    prefs.all.forEach(pref => {
      const items = personalizedProducts[pref];
      if (items) {
        personalizedItems = [...personalizedItems, ...items];
      }
    });
    
    // Remove duplicates and limit to 4
    const uniqueItems = [];
    const seenIds = new Set();
    for (const item of personalizedItems) {
      if (!seenIds.has(item.id) && uniqueItems.length < 4) {
        seenIds.add(item.id);
        uniqueItems.push(item);
      }
    }
    
    if (uniqueItems.length > 0) {
      forYouSection.style.display = 'block';
      
      forYouGrid.innerHTML = uniqueItems.map(item => `
        <div class="for-you-card" onclick="window.location.href='collection.html?title=${encodeURIComponent(item.name)}'">
          <span class="for-you-card-badge">${item.tags[0] || 'Match'}</span>
          <img src="${item.image}" class="for-you-card-img" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80'">
          <div class="for-you-card-title">${item.name}</div>
          <div class="for-you-card-match">Matches: ${item.match}</div>
        </div>
      `).join('');
    }
  }
  
  // Reorder carousel based on preferences (if Keto is selected, show Keto carousel first)
  reorderCarouselByPreferences();
}

function reorderCarouselByPreferences() {
  const prefs = state.userPreferences;
  if (!prefs || !prefs.all) return;
  
  // Map preference keywords to carousel IDs
  const prefToCarouselMap = {
    'Keto': 'col-keto',
    'Vegan': 'col-vegan',
    'Muscle Gain': 'col-protein',
    'Healthy Life': 'col-fiber',
    'Weight Loss': 'col-fiber'
  };
  
  // Find matching carousel items
  const matchedIds = [];
  prefs.all.forEach(p => {
    const carId = prefToCarouselMap[p];
    if (carId && !matchedIds.includes(carId)) {
      matchedIds.push(carId);
    }
  });
  
  // Reorder carouselItems array - matched items first
  if (matchedIds.length > 0) {
    const matched = [];
    const others = [];
    
    carouselItems.forEach(item => {
      if (matchedIds.includes(item.id)) {
        matched.push(item);
      } else {
        others.push(item);
      }
    });
    
    // Clear and repopulate
    carouselItems.length = 0;
    carouselItems.push(...matched, ...others);
  }
}

function renderHome() {
  const isMeals = state.mode === 'meals';
  const currentCarousel = isMeals ? mealsCarouselItems : carouselItems;
  const currentSections = isMeals ? mealsSections : pantrySections;
  
  // 1. Render Carousel
  const track = document.getElementById('collectionCarousel');
  const dotsContainer = document.getElementById('carouselDots');
  
  if (track && dotsContainer) {
    track.innerHTML = currentCarousel.map((item, index) => `
      <div class="carousel-card" style="background: linear-gradient(135deg, ${item.bg} 0%, ${adjustColor(item.bg, -20)} 100%);" onclick="window.location.href='collection.html?id=${item.id}&title=${encodeURIComponent(item.title)}'">
        <div class="carousel-card-inner">
          <div class="carousel-text-group">
            <h3 class="carousel-title-overlay">${item.title}</h3>
            <p class="carousel-sub-overlay">${item.subtitle}</p>
          </div>
          <div class="carousel-image-wrapper">
             <img src="${item.image}" class="carousel-img-poster" alt="${item.title}" onerror="this.style.display='none'">
          </div>
          <button class="carousel-btn-overlay">
            ${item.cta}
          </button>
        </div>
      </div>
    `).join('');

    dotsContainer.innerHTML = currentCarousel.map((_, i) => `
      <div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
    `).join('');

    track.addEventListener('scroll', () => {
      const scrollLeft = track.scrollLeft;
      const cardWidth = track.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      
      document.querySelectorAll('.dot').forEach((d, i) => {
        if (i === index) d.classList.add('active');
        else d.classList.remove('active');
      });
    });
  }

  // 2. Render Category Sections
  const sectionsContainer = document.getElementById('categorySections');
  if (sectionsContainer) {
    sectionsContainer.innerHTML = currentSections.map(section => `
      <div class="category-section">
        <h3 class="category-header-title">${section.title}</h3>
        <div class="category-scroll-row">
          ${section.categories.map(cat => `
            <div class="category-card-small" onclick="window.location.href='categories.html?cat=${cat.id}'">
              <img src="${cat.image}" class="cat-img-small" alt="${cat.name}" onerror="this.src='https://via.placeholder.com/150'">
              <div class="cat-label-small">${cat.name}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
}

// Helper to darken/lighten color
function adjustColor(hex, percent) {
  if (!hex) return '#ccc';
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + percent));
  return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}

// Mode Switcher
function switchMode(mode) {
  state.mode = mode;
  
  // Update tab UI
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === mode);
  });
  
  // Re-render home content
  renderHome();
  
  // Scroll carousel to start
  const track = document.getElementById('collectionCarousel');
  if (track) track.scrollTo({ left: 0, behavior: 'smooth' });
}

function renderCategoriesPage() {
  const sidebar = document.getElementById('catSidebar');
  const content = document.getElementById('catContent');
  
  if (!sidebar || !content) return;
  
  // Render Sidebar
  sidebar.innerHTML = sidebarCategories.map(cat => `
    <div class="sidebar-item ${state.selectedCategory === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
      <div class="sidebar-icon" style="font-size:1.5rem; display:flex; align-items:center; justify-content:center;">${cat.icon}</div>
      <div class="sidebar-text">${cat.name}</div>
    </div>
  `).join('');
  
  // Render Content
  const currentCat = sidebarCategories.find(c => c.id === state.selectedCategory);
  const title = currentCat ? currentCat.name : 'Category';
  
  // Mock subcategories data (In a real app, this would come from a data structure)
  // Using the reference image logic: Image + Title, Clean Card
  const subcategories = [
    { name: 'Munchies & Snacks', image: 'assets/images/Bowl Street Kitchen.png' },
    { name: 'Chocolates', image: 'assets/images/KetoGoal.png' },
    { name: 'Bars & Bites', image: 'assets/images/Burrito_Bowl_Supreme.jpg' },
    { name: 'Biscuits & Cookies', image: 'assets/images/Millet-Bowl-13.jpg' },
    { name: 'Chikki & Date bites', image: 'assets/images/Protein Plus Co. Kitchen.png' },
    { name: 'Indian Sweets', image: 'assets/images/Salad Icon.png' }
  ];

  content.innerHTML = `
    <div style="padding:24px 20px;">
      <h3 style="margin-bottom:24px; text-transform:uppercase; letter-spacing:1px; font-size:0.8rem; color:var(--gray-neutral); font-weight:600;">
        ${title.toUpperCase()}
      </h3>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        ${subcategories.map(sub => `
           <div class="subcategory-card" onclick="window.location.href='collection.html?title=${encodeURIComponent(sub.name)}'">
            <div class="subcategory-img-wrapper">
              <img src="${sub.image}" class="subcategory-img" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="subcategory-name">${sub.name}</div>
           </div>
        `).join('')}
      </div>
      
      <!-- Empty Spacer for scroll -->
      <div style="height:40px;"></div>
    </div>
  `;
}

function selectCategory(id) {
  state.selectedCategory = id;
  renderCategoriesPage();
}

function renderCollectionPage() {
  const params = new URLSearchParams(window.location.search);
  const colId = params.get('id');
  const colTitle = params.get('title');
  
  if (colTitle) {
    const el = document.getElementById('collectionTitle');
    if(el) el.innerText = colTitle;
  }
  
  const grid = document.getElementById('productsGrid');
  if (grid) {
    // Show all products for demo
    const filtered = products; 
    
    // Soft pastel backgrounds for cards
    const bgColors = ['#E8F5E9', '#FCE4EC', '#E3F2FD', '#FFF8E1', '#F3E5F5', '#E0F2F1'];

    grid.innerHTML = filtered.map((p, index) => {
       const bgColor = bgColors[index % bgColors.length];
       return `
      <div class="product-card-large" style="background-color: ${bgColor};">
        <div class="product-img-wrapper">
           <img src="${p.image}" class="product-img-large" onerror="this.src='https://via.placeholder.com/120'">
        </div>
        <div class="product-weight">${p.size}</div>
        <div class="product-title-large">${p.name}</div>
        <div class="product-desc-large">Roasted crunchy goodness</div>
        <div class="price-row">
          <div class="price-group">
            <span class="price-large">₹${p.price}</span>
            ${p.originalPrice > 0 ? `<span class="original-price-large">₹${p.originalPrice}</span>` : ''}
          </div>
          <div class="add-btn-large" onclick="event.stopPropagation(); addToCart('${p.id}')">+</div>
        </div>
      </div>
    `}).join('');
  }
}

function addToCart(id) {
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ id, qty: 1 });
  
  localStorage.setItem('fleanCart', JSON.stringify(state.cart));
  updateCartBadge();
  
  const sticky = document.querySelector('.sticky-cart');
  if (sticky) sticky.classList.add('visible');
  
  if(navigator.vibrate) navigator.vibrate(10);
}

function updateCartBadge() {
  const total = state.cart.reduce((a, b) => a + b.qty, 0);
  // Optional: Update badge if added in UI
}

document.addEventListener('DOMContentLoaded', initApp);
window.selectCategory = selectCategory;
window.addToCart = addToCart;
window.switchMode = switchMode;
