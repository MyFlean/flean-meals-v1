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

// ═══════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════

const state = {
  cart: JSON.parse(localStorage.getItem('fleanCart') || '[]'),
  selectedCategory: 'featured',
  mode: 'pantry' // 'pantry' or 'meals'
};

// ═══════════════════════════════════════════════════════════════════
// CORE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function initApp() {
  const page = document.body.dataset.page;
  
  updateCartBadge();
  
  if (page === 'home') {
    renderHome();
  } else if (page === 'categories') {
    renderCategoriesPage();
  } else if (page === 'collection') {
    renderCollectionPage();
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
