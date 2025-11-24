// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const dishes = [
  {
    id: 1,
    name: 'Grilled Chicken Tikka Bowl',
    restaurantName: 'Green Bowl Kitchen',
    subtitle: 'High-protein comfort bowl with tandoori spices',
    category: 'Rice & Grain Bowls',
    subcategory: 'Rice Bowls',
    dishImg: 'assets/images/dish1.png',
    kitchenImg: 'assets/images/GreenBowl_kitchen.png',
    dishIcon: '🍗',
    kitchenIcon: '🧼',
    rating: 4.5,
    macros: {
      protein: 42,
      carbs: 28,
      fat: 12,
      fibre: 8,
      calories: 380,
    },
    tags: ['No Palm Oil', 'Organic', 'Cold Pressed Oil'],
    reviewTags: ['Best protein-to-price ratio', 'Customer favorite'],
    kitchenTags: ['Clean Kitchen', 'Certified Ingredients', 'FSSAI Approved'],
    kitchenAudit: 'Within a Week',
    price: '₹249',
    oldPrice: '₹279',
  },
  {
    id: 2,
    name: 'Quinoa & Roasted Veggie Salad',
    restaurantName: 'Nourish Cafe',
    subtitle: 'Fiber-rich, colorful and filling',
    category: 'Salads',
    subcategory: 'Protein Salads',
    dishImg: 'assets/images/Quinoa & Roasted Veggie Salad.png',
    kitchenImg: 'assets/images/Nourish Cafe Kitchen.png',
    dishIcon: '🥗',
    kitchenIcon: '✨',
    rating: 4.3,
    macros: {
      protein: 18,
      carbs: 45,
      fat: 14,
      fibre: 12,
      calories: 350,
    },
    tags: ['No Refined Flour', 'Organic', 'Ghee'],
    reviewTags: ['High fibre choice'],
    kitchenTags: ['Clean Kitchen', 'Certified Ingredients', 'Hygiene A+'],
    kitchenAudit: 'Today',
    price: '₹199',
    oldPrice: '₹229',
  },
  {
    id: 3,
    name: 'Paneer Tikka Wrap',
    restaurantName: 'Protein Plus Co.',
    subtitle: 'Smoky paneer with fresh veggies',
    category: 'Wraps & Sandwiches',
    subcategory: null,
    dishImg: 'assets/images/Paneer Tikka Wrap.png',
    kitchenImg: 'assets/images/Protein Plus Co. Kitchen.png',
    dishIcon: '🌯',
    kitchenIcon: '👨‍🍳',
    rating: 4.7,
    macros: {
      protein: 25,
      carbs: 38,
      fat: 16,
      fibre: 6,
      calories: 420,
    },
    tags: ['No Sugar', 'Cold Pressed Oil', 'No Artificial Additives'],
    reviewTags: ['Most ordered this week'],
    kitchenTags: ['Clean Kitchen', 'Certified Ingredients', 'FSSAI Approved'],
    kitchenAudit: 'Within 2 Weeks',
    price: '₹179',
    oldPrice: '₹199',
  },
  {
    id: 4,
    name: 'Mediterranean Leafy Greens',
    restaurantName: 'Fresh Greens Co.',
    subtitle: 'Light, crisp and refreshing',
    category: 'Salads',
    subcategory: 'Leafy Salads',
    rating: 4.2,
    dishImg: 'assets/images/Mediterranean.png',
    kitchenImg: 'assets/images/Fresh Greens Co. Kitchen.png',
    dishIcon: '🥬',
    kitchenIcon: '✨',
    macros: {
      protein: 12,
      carbs: 22,
      fat: 18,
      fibre: 10,
      calories: 280,
    },
    tags: ['No Palm Oil', 'Organic', 'Cold Pressed Oil'],
    reviewTags: ['Light & Fresh'],
    kitchenTags: ['Clean Kitchen', 'Certified Ingredients', 'Hygiene A+'],
    kitchenAudit: 'Within a Week',
    price: '₹169',
    oldPrice: '₹189',
  },
  {
    id: 5,
    name: 'Millet Power Bowl',
    restaurantName: 'Ancient Grains Kitchen',
    subtitle: 'Nutrient-dense millet with seasonal veggies',
    category: 'Rice & Grain Bowls',
    subcategory: 'Millet Bowls',
    dishImg: 'assets/images/Millet-Bowl-13.jpg',
    kitchenImg: 'assets/images/Ancient Grains Kitchen.png',
    dishIcon: '🍲',
    kitchenIcon: '🧼',
    rating: 4.6,
    macros: {
      protein: 20,
      carbs: 52,
      fat: 10,
      fibre: 14,
      calories: 380,
    },
    tags: ['No Refined Flour', 'Organic', 'Ghee'],
    reviewTags: ['High fibre choice', 'Customer favorite'],
    kitchenTags: ['Clean Kitchen', 'Certified Ingredients', 'Hygiene A+'],
    kitchenAudit: 'Within 2 Weeks',
    price: '₹229',
    oldPrice: '₹259',
  },
  {
    id: 6,
    name: 'Burrito Bowl Supreme',
    restaurantName: 'Bowl Street',
    subtitle: 'Mexican-inspired wholesome goodness',
    category: 'Burrito Bowls',
    subcategory: null,
    dishImg: 'assets/images/Burrito_Bowl_Supreme.jpg',
    kitchenImg: 'assets/images/Bowl Street Kitchen.png',
    dishIcon: '🌮',
    kitchenIcon: '👨‍🍳',
    rating: 4.8,
    macros: {
      protein: 32,
      carbs: 48,
      fat: 14,
      fibre: 9,
      calories: 440,
    },
    tags: ['No Palm Oil', 'Cold Pressed Oil', 'No Artificial Additives'],
    reviewTags: ['Most ordered this week'],
    kitchenTags: ['Clean Kitchen', 'Certified Ingredients', 'FSSAI Approved'],
    kitchenAudit: 'Today',
    price: '₹269',
    oldPrice: '₹299',
  },
];

const goals = [
  {
    id: 'keto',
    icon: '🥑',
    image: 'assets/images/KetoGoal.png',
    title: 'Keto',
    description: 'Low carb, high fat & moderate protein meals.',
  },
  {
    id: 'weightloss',
    icon: '⚖️',
    image: 'assets/images/WeightLoss.png',
    title: 'Weight Loss',
    description: 'Calorie-controlled meals for fat loss.',
  },
  {
    id: 'musclegain',
    icon: '💪',
    image: null,
    title: 'Muscle Gain',
    description: 'High-protein meals to fuel growth.',
  },
];

// Subcategory definitions (FirstClub-style)
const subcategories = {
  'Salads': [
    { label: 'Leafy Salads', value: 'Leafy Salads', icon: '🥬', bg: 'mint', desc: 'Fresh greens & vegetables' },
    { label: 'Protein Salads', value: 'Protein Salads', icon: '🥗', bg: 'yellow', desc: 'High-protein bowls' },
    { label: 'Fruit Salads', value: 'Fruit Salads', icon: '🍎', bg: 'pink', desc: 'Sweet & refreshing' },
  ],
  'Rice & Grain Bowls': [
    { label: 'Quinoa Bowls', value: 'Quinoa Bowls', icon: '🍚', bg: 'peach', desc: 'Quinoa-based meals' },
    { label: 'Millet Bowls', value: 'Millet Bowls', icon: '🌾', bg: 'mint', desc: 'Ancient grain goodness' },
    { label: 'Rice Bowls', value: 'Rice Bowls', icon: '🍛', bg: 'lavender', desc: 'Classic rice dishes' },
  ],
};

// Current filter state
let currentFilter = {
  category: null,
  subcategory: null,
};

// ═══════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function navigateToDish(dishId) {
  window.location.href = `dish.html?id=${dishId}`;
}

// ═══════════════════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

// Helper function to generate star display
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '☆';
  return `<span class="stars">${stars}</span><span>${rating}</span>`;
}

function renderFeed() {
  const feedEl = document.getElementById('feed');
  if (!feedEl) return;

  // Filter dishes based on current filter
  let filteredDishes = dishes;
  
  if (currentFilter.subcategory) {
    filteredDishes = dishes.filter(d => d.subcategory === currentFilter.subcategory);
  } else if (currentFilter.category) {
    filteredDishes = dishes.filter(d => d.category === currentFilter.category);
  }

  if (filteredDishes.length === 0) {
    feedEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No dishes found for this category.</p>';
    return;
  }

  feedEl.innerHTML = filteredDishes
    .map(
      (dish) => `
        <div class="dish-card" onclick="navigateToDish(${dish.id})">
          <div class="dish-header">
            <div class="dish-image-container">
              <img src="${dish.dishImg}" alt="${dish.name}" class="dish-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="dish-img-fallback" style="display: none;">${dish.dishIcon}</div>
            </div>
            <div class="kitchen-image-container">
              <img src="${dish.kitchenImg}" alt="${dish.restaurantName} Kitchen" class="kitchen-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="kitchen-img-fallback" style="display: none;">${dish.kitchenIcon}</div>
            </div>
          </div>
          
          <div class="dish-content">
            <div class="dish-details">
              <div class="restaurant-name">
                ${dish.restaurantName}
                <div class="dish-rating">${generateStars(dish.rating)}</div>
              </div>
              <h3 class="dish-title">${dish.name}</h3>
              <p class="dish-subtitle">${dish.subtitle || ''}</p>
              <div class="macro-row">
                <span class="macro-pill">P ${dish.macros.protein}g</span>
                <span class="macro-pill">C ${dish.macros.carbs}g</span>
                <span class="macro-pill">F ${dish.macros.fat}g</span>
              </div>
              <div class="tags-row">
                ${dish.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join('')}
                ${dish.reviewTags.map((tag) => `<span class="tag review-tag">${tag}</span>`).join('')}
              </div>
            </div>
            
            <div class="kitchen-details">
              <div class="kitchen-label">Kitchen</div>
              <div class="kitchen-name">${dish.restaurantName}</div>
              <div class="kitchen-tags">
                ${dish.kitchenTags.map((tag) => `<div class="kitchen-tag">${tag}</div>`).join('')}
                <div class="kitchen-audit-container">
                  <span class="kitchen-audit-label">Complete Kitchen Audit</span>
                  <span class="kitchen-audit-chip">${dish.kitchenAudit}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dish-footer">
            <div class="dish-price-container">
              <div class="dish-price">${dish.price}</div>
              ${dish.oldPrice ? `<div class="dish-old-price">${dish.oldPrice}</div>` : ''}
            </div>
            <button class="add-btn" onclick="event.stopPropagation(); addToCart(${dish.id})">+</button>
          </div>
        </div>
      `,
    )
    .join('');
}

function renderGoals() {
  const goalsGridEl = document.getElementById('goalsGrid');
  if (!goalsGridEl) return;

  goalsGridEl.innerHTML = goals
    .map(
      (goal) => `
        <div class="goal-card" onclick="selectGoal('${goal.id}')">
          <div class="goal-icon">
            ${goal.image ? `<img src="${goal.image}" alt="${goal.title}" class="goal-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="goal-icon-fallback" style="display: none;">${goal.icon}</div>` : `<div>${goal.icon}</div>`}
          </div>
          <h3 class="goal-title">${goal.title}</h3>
          <p class="goal-desc">${goal.description}</p>
        </div>
      `,
    )
    .join('');
}

function renderDishDetails() {
  const dishId = parseInt(getQueryParam('id'));
  const dish = dishes.find((d) => d.id === dishId);

  const detailEl = document.getElementById('dishDetail');
  if (!detailEl || !dish) return;

  detailEl.innerHTML = `
    <div class="detail-hero">
      <div class="detail-restaurant">${dish.restaurantName}</div>
      <h2 class="detail-title">${dish.name}</h2>
      <p class="detail-subtitle">${dish.subtitle || ''}</p>
      <img src="${dish.dishImg}" alt="${dish.name}" class="detail-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="detail-image-fallback" style="display: none;">${dish.dishIcon}</div>
    </div>
    
    <div class="detail-grid">
      <div class="detail-section">
        <h3 class="detail-section-title">Nutrition</h3>
        <div class="detail-macros">
          <div class="detail-macro-item">
            <span class="macro-label">Protein</span>
            <span class="macro-value">${dish.macros.protein}g</span>
          </div>
          <div class="detail-macro-item">
            <span class="macro-label">Carbs</span>
            <span class="macro-value">${dish.macros.carbs}g</span>
          </div>
          <div class="detail-macro-item">
            <span class="macro-label">Fat</span>
            <span class="macro-value">${dish.macros.fat}g</span>
          </div>
          <div class="detail-macro-item">
            <span class="macro-label">Fibre</span>
            <span class="macro-value">${dish.macros.fibre}g</span>
          </div>
          <div class="detail-macro-item">
            <span class="macro-label">Calories</span>
            <span class="macro-value">${dish.macros.calories} kcal</span>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3 class="detail-section-title">Ingredients</h3>
        <div class="detail-tags">
          ${dish.tags.map((tag) => `<div class="detail-tag-item">${tag}</div>`).join('')}
          ${dish.reviewTags.map((tag) => `<div class="detail-tag-item">${tag}</div>`).join('')}
        </div>
      </div>
      
      <div class="detail-section detail-kitchen-info">
        <h3 class="detail-section-title">Kitchen Certification</h3>
        <div class="detail-tags">
          ${dish.kitchenTags.map((tag) => `<div class="detail-tag-item">${tag}</div>`).join('')}
          <div class="detail-audit-container">
            <span class="detail-audit-label">Complete Kitchen Audit</span>
            <span class="detail-audit-chip">${dish.kitchenAudit}</span>
          </div>
        </div>
      </div>
      
      <div class="detail-price-section">
        <div class="detail-price">${dish.price}</div>
        <button class="detail-add-btn" onclick="addToCart(${dish.id})">Add to Cart</button>
      </div>
    </div>
  `;
}

function applyGoalIndicator() {
  const goalIndicatorEl = document.getElementById('goalIndicator');
  if (!goalIndicatorEl) return;

  const activeGoalId = localStorage.getItem('activeGoal');
  if (activeGoalId) {
    const goal = goals.find((g) => g.id === activeGoalId);
    if (goal) {
      goalIndicatorEl.textContent = `${goal.icon} ${goal.title} goal active`;
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// GOAL SELECTION
// ═══════════════════════════════════════════════════════════════════

function selectGoal(goalId) {
  localStorage.setItem('activeGoal', goalId);
  window.location.href = 'index.html';
}

// ═══════════════════════════════════════════════════════════════════
// CATEGORY CHIPS & SUBCATEGORY OVERLAY
// ═══════════════════════════════════════════════════════════════════

function initCategoryChips() {
  const chips = document.querySelectorAll('.chip');
  
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const categoryName = chip.textContent.trim();
      
      // Check if this category has subcategories
      if (subcategories[categoryName]) {
        openSubcategoryOverlay(categoryName);
      } else {
        // Direct filter
        currentFilter = { category: categoryName, subcategory: null };
        updateActiveChip(chip);
        renderFeed();
      }
    });
  });
}

function openSubcategoryOverlay(categoryName) {
  const overlay = document.getElementById('subcategoryOverlay');
  if (!overlay) return;
  
  const subcategoryList = document.getElementById('subcategoryList');
  const subcategoryTitle = document.getElementById('subcategoryTitle');
  const subcategorySubtitle = document.getElementById('subcategorySubtitle');
  const subcategoryHeroIcon = document.getElementById('subcategoryHeroIcon');
  const subcategoryHeroTitle = document.getElementById('subcategoryHeroTitle');
  
  // Update header and hero
  subcategoryTitle.textContent = `Choose ${categoryName}`;
  subcategorySubtitle.textContent = 'Select a specific type';
  subcategoryHeroTitle.textContent = categoryName;
  
  // Set hero icon based on category
  const heroIcons = {
    'Salads': '🥗',
    'Rice & Grain Bowls': '🍚'
  };
  subcategoryHeroIcon.textContent = heroIcons[categoryName] || '🍽️';
  
  const subs = subcategories[categoryName];
  subcategoryList.innerHTML = `
    <h3 class="subcategory-list-title">Explore all varieties</h3>
    <div class="subcategory-grid">
      ${subs.map(sub => 
        `<div class="subcategory-card ${sub.bg}" data-category="${categoryName}" data-subcategory="${sub.value}">
          <div class="subcategory-card-content">
            <div class="subcategory-card-icon">${sub.icon}</div>
            <div class="subcategory-card-text">
              <div class="subcategory-card-title">${sub.label}</div>
              <div class="subcategory-card-desc">${sub.desc}</div>
            </div>
            <div class="subcategory-card-arrow">→</div>
          </div>
        </div>`
      ).join('')}
    </div>
  `;
  
  // Add click handlers to subcategory cards
  subcategoryList.querySelectorAll('.subcategory-card').forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.category;
      const subcategory = item.dataset.subcategory;
      selectSubcategory(category, subcategory);
    });
  });
  
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSubcategoryOverlay() {
  const overlay = document.getElementById('subcategoryOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function selectSubcategory(category, subcategory) {
  currentFilter = { category, subcategory };
  
  // Update the category chip to show subcategory
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    if (chip.textContent.trim() === category) {
      chip.textContent = subcategory;
      chip.classList.add('active');
      chip.dataset.originalCategory = category;
    } else {
      chip.classList.remove('active');
    }
  });
  
  closeSubcategoryOverlay();
  renderFeed();
}

function updateActiveChip(activeChip) {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.classList.remove('active');
    // Reset to original category if it was changed
    if (chip.dataset.originalCategory) {
      chip.textContent = chip.dataset.originalCategory;
      delete chip.dataset.originalCategory;
    }
  });
  activeChip.classList.add('active');
}

function initSubcategoryOverlay() {
  const overlay = document.getElementById('subcategoryOverlay');
  if (!overlay) return;
  
  const backBtn = document.getElementById('subcategoryBack');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      closeSubcategoryOverlay();
    });
  }
  
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSubcategoryOverlay();
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
// PERSONALISATION OVERLAY & FAB
// ═══════════════════════════════════════════════════════════════════

function initPersonalization() {
  const fab = document.getElementById('personalizationFAB');
  const closeBtn = document.getElementById('closeOverlay');
  const overlay = document.getElementById('personalizationOverlay');
  const saveBtn = document.getElementById('savePreferences');

  if (!fab || !overlay) return;

  // Pre-select and disable "No Palm Oil" checkbox
  const palmOilCheckbox = document.getElementById('noPalmOilCheckbox');
  if (palmOilCheckbox) {
    palmOilCheckbox.checked = true;
    palmOilCheckbox.disabled = true;
    // Add disabled class to parent label
    const label = palmOilCheckbox.closest('.checkbox-label');
    if (label) {
      label.classList.add('disabled');
    }
  }

  // Sliders
  const proteinSlider = document.getElementById('proteinSlider');
  const carbsSlider = document.getElementById('carbsSlider');
  const fibreSlider = document.getElementById('fibreSlider');
  const proteinValue = document.getElementById('proteinValue');
  const carbsValue = document.getElementById('carbsValue');
  const fibreValue = document.getElementById('fibreValue');

  if (proteinSlider) {
    proteinSlider.addEventListener('input', (e) => {
      proteinValue.textContent = e.target.value;
    });
  }

  if (carbsSlider) {
    carbsSlider.addEventListener('input', (e) => {
      carbsValue.textContent = e.target.value;
    });
  }

  if (fibreSlider) {
    fibreSlider.addEventListener('input', (e) => {
      fibreValue.textContent = e.target.value;
    });
  }

  // Open overlay via FAB
  fab.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  // Close overlay
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  // Close on outside click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

  // Save preferences
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const preferences = {
        macros: {
          protein: proteinSlider ? proteinSlider.value : 30,
          carbs: carbsSlider ? carbsSlider.value : 45,
          fibre: fibreSlider ? fibreSlider.value : 15,
        },
        avoidants: Array.from(
          document.querySelectorAll('input[name="avoid"]:checked'),
        ).map((cb) => cb.value),
        desirables: Array.from(
          document.querySelectorAll('input[name="desire"]:checked'),
        ).map((cb) => cb.value),
      };

      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      overlay.classList.remove('active');

      // Show elegant feedback
      showToast('Preferences saved successfully');
    });
  }
}

function showToast(message) {
  // Create a simple toast notification
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-green);
    color: var(--cream);
    padding: 1rem 2rem;
    border-radius: 24px;
    font-weight: 600;
    box-shadow: var(--shadow-strong);
    z-index: 2000;
    animation: slideUpFade 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideDownFade 0.3s ease-in';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// ═══════════════════════════════════════════════════════════════════
// HERO CAROUSEL
// ═══════════════════════════════════════════════════════════════════

let currentSlide = 0;
const totalSlides = 3;

function initHeroCarousel() {
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (!track) return;
  
  // Auto-advance carousel
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 5000);
  
  // Manual dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
}

function updateCarousel() {
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// ═══════════════════════════════════════════════════════════════════
// ADD TO CART
// ═══════════════════════════════════════════════════════════════════

function addToCart(dishId) {
  // Demo functionality - just show notification
  const notification = document.querySelector('.cart-notification');
  if (notification) {
    notification.style.display = 'flex';
    notification.style.animation = 'slideUp 0.3s ease-out';
  }
  
  // Show toast
  showToast('Added to cart!');
}

// ═══════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Determine page and render accordingly
  const path = window.location.pathname;

  if (path.includes('index.html') || path.endsWith('/')) {
    renderFeed();
    applyGoalIndicator();
    initPersonalization();
    initCategoryChips();
    initSubcategoryOverlay();
    initHeroCarousel();
  } else if (path.includes('goals.html')) {
    renderGoals();
  } else if (path.includes('dish.html')) {
    renderDishDetails();
  }
});
