# ReEnergy - Complete Installation & Feature Guide

## 📦 Required Packages to Install

Run these commands in your `web` directory:

```bash
# Already installed ✅
# - next (16.1.6)
# - react (19.2.3)
# - react-dom (19.2.3)
# - swiper (12.1.0)

# Additional packages needed for full functionality:
npm install aos
npm install react-countup
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

## 🎯 What Each Package Does

### 1. **swiper** ✅ (Already Installed)
- **Purpose**: Image/content sliders and carousels
- **Used for**: Hero slider, brand slider, service slider, project slider, testimonial slider
- **Status**: Installed and configured

### 2. **aos** (Animate On Scroll)
- **Purpose**: Scroll-triggered animations
- **Used for**: Fade-in, slide-in effects when elements come into view
- **Install**: `npm install aos`

### 3. **react-countup**
- **Purpose**: Animated number counting
- **Used for**: Statistics/counter section (e.g., "500+ Projects", "1000+ Clients")
- **Install**: `npm install react-countup`

### 4. **@fortawesome packages**
- **Purpose**: Icon library
- **Used for**: All icons throughout the site (arrows, social media, menu icons, etc.)
- **Install**: 
```bash
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

## 🔧 Current Status

### ✅ Working Features
- Page structure and layout
- All images loading correctly
- CSS styling applied
- Sticky header on scroll
- Sidebar/offcanvas toggle
- Search popup
- Mouse cursor effects
- Team hover effects
- Basic counter animations

### ⚠️ Features That Need Packages

#### Sliders (Swiper) - Should Work Now
The Swiper package is installed. If sliders aren't working, check:
1. Make sure the dev server restarted after installing Swiper
2. Check browser console for errors
3. Verify slider HTML elements have correct class names:
   - `.hero-slider`
   - `.brand-slider`
   - `.service-slider`
   - `.project-slider`
   - `.testimonial-slider`

#### Scroll Animations (AOS)
**Install**: `npm install aos`

After installing, update `useHomeEffects.js`:
```javascript
import AOS from 'aos';
import 'aos/dist/aos.css';

// In useEffect:
AOS.init({
  duration: 1000,
  once: true,
});
```

#### Better Counter Animations
**Install**: `npm install react-countup`

Replace the counter section with:
```javascript
import CountUp from 'react-countup';

<CountUp end={500} duration={2.5} />
```

## 🚀 Installation Steps

### Step 1: Install All Packages
```bash
cd web
npm install aos react-countup @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

### Step 2: Restart Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 3: Check Browser Console
Open http://localhost:3000/home and check the browser console (F12) for any errors.

## 🐛 Troubleshooting

### Sliders Not Working?
1. **Check Swiper Import**: Make sure Swiper CSS is imported in `layout.js`
2. **Check HTML Structure**: Verify slider containers exist in JSX
3. **Browser Console**: Look for JavaScript errors
4. **Hard Refresh**: Press Ctrl+Shift+R to clear cache

### Icons Not Showing?
1. Install FontAwesome packages (see above)
2. Replace `<i className="fa-solid fa-arrow-right">` with React FontAwesome components
3. Or keep using the CSS classes (they should work with the CSS file)

### Animations Not Triggering?
1. Install AOS package
2. Add AOS initialization to `useHomeEffects.js`
3. Add `data-aos="fade-up"` attributes to elements in JSX

## 📋 Complete Package List

Here's the complete command to install everything at once:

```bash
npm install aos react-countup @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

## 🎨 Optional Enhancements

### For Better Performance
```bash
npm install next/image  # Already included with Next.js
```
Replace `<img>` tags with Next.js `<Image>` component for automatic optimization.

### For Form Handling
```bash
npm install react-hook-form
```

### For Animations
```bash
npm install framer-motion
```
Alternative to AOS with more control and React-specific features.

## ✅ Verification Checklist

After installing packages, verify:
- [ ] Dev server runs without errors
- [ ] Home page loads at http://localhost:3000/home
- [ ] Hero slider auto-plays
- [ ] Brand logos slider works
- [ ] Service cards slider works
- [ ] Project gallery slider works
- [ ] Sticky header appears on scroll
- [ ] Mobile menu toggle works
- [ ] Search popup opens/closes
- [ ] Counter numbers animate on scroll
- [ ] All images display correctly

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console (F12 → Console tab)
2. Check the terminal where `npm run dev` is running
3. Make sure all packages installed successfully
4. Try deleting `node_modules` and `.next` folders, then run `npm install` again

---

**Current Status**: Swiper is installed. Install the other packages above for full functionality!
