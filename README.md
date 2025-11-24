# Flean-Meals MVP - v1

A polished, professional prototype for a healthy food delivery platform.

## 🎨 Design Philosophy

This prototype embodies a **refined luxury aesthetic** with a sophisticated green palette that conveys growth, calm, and quality. The design draws from "old money" principles—timeless, understated elegance with attention to detail.

### Color Palette
- **Deep Emerald/Pine Green** (`#1b4332`) - Primary brand color
- **Rich Forest Green** (`#2d6a4f`) - Secondary accents
- **Warm Neutrals** - Beige and cream backgrounds
- **Dark Charcoal** - Typography and contrast
- **Subtle Gold** (`#c9a961`) - Highlights for premium feel

### Typography
- **Playfair Display** - Serif font for headings (elegant, classic)
- **Montserrat** - Sans-serif for body text (clean, modern)
- **Dancing Script** - Handwritten notes (personal touch)

## ✨ Key Features

### 1. **Refined Goal Indicator**
- Bold, prominent display of active health goal
- Unclickable (informative only)
- Styled with primary green and contrasting pill design

### 2. **Floating Action Button (FAB)**
- Circular button for personalization settings
- Fixed bottom-right position above navigation
- Filter icon with smooth hover animations
- Primary green gradient with elegant shadow

### 3. **Smart Category Navigation**
- Click-through category chips with active states
- **Subcategory Overlays** for Salads and Rice & Grain Bowls
- Slide-down panel covering 2/3 viewport
- Smooth transitions and dismissible by tap/swipe

### 4. **Enhanced Personalization**
- **"No Palm Oil" Always On** - Pre-selected, disabled checkbox
- Handwritten note: "We keep this filter always on."
- Interactive macro sliders with refined styling
- Avoidants and desirables with clear visual hierarchy

### 5. **Luxury Feed Design**
- Thicker borders, generous margins
- Elevated shadows and depth
- Macro pills with green accent borders
- Review tags with gold highlights
- Clean kitchen credentials prominently displayed

## 📁 Project Structure

```
healthy_mvp/
├── index.html              # Home feed page
├── goals.html              # Goal selection page
├── dish.html               # Dish detail page
├── README.md               # This file
└── assets/
    ├── styles.css          # Complete styling with luxury palette
    ├── script.js           # All interactive functionality
    └── images/             # (Optional) Add real dish images here
```

## 🚀 How to Run

### Option 1: Direct Browser Open
Simply open `index.html` in any modern browser.

### Option 2: Local Server (Recommended)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000
```
Then visit `http://localhost:8000` in your browser.

## 🎯 User Flows

### Flow 1: Set Health Goal
1. Click "Goals" in bottom navigation
2. Select a goal (Keto, Weight Loss, or Muscle Gain)
3. Redirected to home with goal indicator active

### Flow 2: Browse with Subcategories
1. Click "Salads" or "Rice & Grain Bowls" chip
2. Subcategory overlay slides down
3. Select specific type (e.g., "Protein Salads")
4. Feed filters to show relevant dishes
5. Chip updates to reflect chosen subcategory

### Flow 3: Customize Preferences
1. Click floating action button (bottom-right)
2. Adjust macro sliders (Protein, Carbs, Fibre)
3. Note "No Palm Oil" is always enabled
4. Select additional avoidants and desirables
5. Click "Save & Customize"
6. Toast notification confirms save

### Flow 4: View Dish Details
1. Click any dish card from feed
2. View full details with enlarged image
3. See macros, tags, kitchen credentials, and price
4. Use bottom nav to return home

## 🎨 Design Highlights

### Visual Sophistication
- **Serif + Sans-serif Pairing**: Classic elegance meets modern clarity
- **Green-Centric Palette**: Conveys health, growth, and luxury
- **Generous Spacing**: Creates breathing room and premium feel
- **Subtle Shadows & Gradients**: Adds depth without clutter
- **Thicker Borders**: Suggests solidity and quality

### Interactive Elements
- Smooth hover states on all interactive elements
- Category chips with active state highlighting
- FAB with scale and elevation on hover
- Overlay animations with cubic-bezier easing
- Toast notifications for user feedback

### Attention to Detail
- "No Palm Oil" with handwritten note (personal commitment)
- Goal indicator styled as prominent badge
- Review tags with gold accent (premium positioning)
- Subcategory transitions feel native and polished
- Responsive design adapts elegantly to mobile and desktop

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, gradients
- **Vanilla JavaScript** - No frameworks, lightweight
- **Google Fonts** - Playfair Display, Montserrat, Dancing Script

## 📱 Responsive Design

The prototype is fully responsive with breakpoints for:
- **Mobile**: < 480px (optimized for touch)
- **Tablet**: 480px - 768px
- **Desktop**: > 768px (centered content, enhanced FAB)

## 🎯 Target Audience

This prototype is designed to impress:
- **Tier-1 VCs** - Demonstrates product-market fit and polish
- **HNI Investors** - Conveys luxury and attention to quality
- **Strategic Partners** - Shows serious execution capability

## ⚡ Performance

- **No external dependencies** (except Google Fonts)
- **Works offline** once loaded
- **Uses localStorage** for preferences
- **Static data** for demo purposes
- **Lightweight** - Fast load times

## 🔮 Future Enhancements (Not Implemented)

- Real backend integration
- Dynamic dish filtering by preferences
- User authentication
- Order placement and checkout
- Kitchen partner dashboard
- Real-time tracking
- Payment integration

## 📄 License

Proprietary - For demonstration and pitch purposes only.

---

**Built with attention to detail and a commitment to quality.**  
*This is not a college project—this is a serious business prototype.*

