# 🚀 Quick Start Guide

## Get Running in 30 Seconds

### Step 1: Open Terminal
```bash
cd /Users/priyam_ps/Desktop/sps_udaipur/healthy_mvp
```

### Step 2: Start Server
```bash
python3 -m http.server 8000
```

### Step 3: Open Browser
Visit: **http://localhost:8000**

---

## 📱 What to Try

### 1. Set a Goal (15 seconds)
- Click **"Goals"** in bottom nav
- Click **"Muscle Gain"** card
- Notice badge appears in header: "💪 Muscle Gain goal active"

### 2. Try Subcategories (20 seconds)
- Click **"Salads"** chip
- Overlay slides down from top
- Click **"Protein Salads"**
- Chip updates, feed filters

### 3. Personalize (30 seconds)
- Click green **floating button** (bottom-right)
- Drag **Protein** slider to 40g
- Notice **"No Palm Oil"** is locked with handwritten note
- Check **"No Sugar"** and **"Organic"**
- Click **"Save & Customize"**
- Toast notification confirms

### 4. View Dish (15 seconds)
- Click any dish card
- View full details
- Click **"Home"** to return

---

## ✅ Success Indicators

You'll know it's working when you see:
- ✅ Refined green palette (not blue or red)
- ✅ Serif headings (Playfair Display)
- ✅ Thick borders on chips (2-3px)
- ✅ Floating green circle button (bottom-right)
- ✅ "No Palm Oil" checkbox is grayed out
- ✅ Handwritten note next to it
- ✅ Goal indicator badge in header (after selecting goal)
- ✅ Smooth slide-down animation for subcategories
- ✅ Smooth slide-up animation for personalization

---

## 🛠️ Troubleshooting

### Port 8000 Already in Use?
```bash
# Find process using port 8000
lsof -ti:8000

# Kill it
kill $(lsof -ti:8000)

# Or use different port
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

### Styles Not Loading?
- Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)
- Check console for errors: **F12** → Console tab

### Server Won't Start?
```bash
# Check Python version
python3 --version  # Should be 3.6+

# Alternative: Use Node.js
npx http-server -p 8000
```

---

## 📋 Pre-Demo Checklist

Before showing to investors:

- [ ] Server is running
- [ ] Browser is maximized (F11 for full-screen)
- [ ] Clear browser history/cookies (fresh state)
- [ ] Close unnecessary tabs
- [ ] Disable browser extensions (cleaner demo)
- [ ] Test all 4 flows once (Goal → Subcategory → Personalize → Dish Detail)
- [ ] Open `DEPLOYMENT.md` for demo script

---

## 📚 Full Documentation

- **README.md** - Feature overview
- **DEPLOYMENT.md** - Detailed demo script
- **VISUAL_REVIEW.md** - Design rationale
- **PROJECT_SUMMARY.md** - Complete project summary

---

## 🎯 Demo Flow (5 Minutes)

1. **[0:00-0:30]** Introduction + color/typography commentary
2. **[0:30-1:00]** Goal selection demo
3. **[1:00-1:45]** Subcategory overlay demo (Salads or Bowls)
4. **[1:45-2:15]** Feed browsing, card hover effects
5. **[2:15-3:15]** Personalization overlay (emphasize "No Palm Oil" note)
6. **[3:15-3:45]** Dish detail page
7. **[3:45-4:30]** Design highlights (spacing, shadows, serifs)
8. **[4:30-5:00]** Q&A / Next steps

---

**That's it! You're ready to demo.**

🟢 Server running → 🌐 Open browser → 🎯 Follow demo script → 💼 Close the deal

