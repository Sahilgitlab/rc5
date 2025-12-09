# 📘 Complete Customization Guide
## React F&B Website Template

This guide explains how to customize **every aspect** of your website (brand name, images, contact info, menu, etc.) while keeping the template structure intact.

---

## 🎯 Quick Start: Files You'll Edit

All customization happens in the `src/data/` folder:

```
src/data/
├── siteConfig.js       # Brand name, hero, navigation
├── menuData.js         # Menu items with images
├── locationsData.js    # Store locations & maps
├── contactConfig.js    # Contact info & WhatsApp
├── reviewsConfig.js    # Customer reviews
├── galleryData.js      # Photo gallery
└── qrMenuConfig.js     # QR menu settings
```

**Rule:** Never edit component files in `src/components/` or `src/sections/` - only edit data files!

---

## 1️⃣ Brand Identity & Basic Info

### File: `src/data/siteConfig.js`

```javascript
export const siteConfig = {
  // 🏷️ BRAND NAME - Shows in navbar, footer, page title
  name: "Urban Brew Co.",  // ← Change this to your business name
  
  // 📝 DESCRIPTION - Used for SEO and footer
  description: "Your neighborhood coffee house...",  // ← Your tagline
  
  // 🔍 SEO META TAGS
  metaTitle: "Urban Brew Co. | Best Coffee...",  // ← Browser tab title
  metaDescription: "Experience the finest...",     // ← Google search description
```

**What to change:**
- `name` → Your café/restaurant name
- `description` → Short tagline (1-2 sentences)
- `metaTitle` → What shows in browser tab (include keywords)
- `metaDescription` → What shows in Google results (150-160 chars)

---

## 2️⃣ Navigation Menu

### File: `src/data/siteConfig.js`

```javascript
navLinks: [
  { name: "Home", href: "#hero" },
  { name: "Our Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Locations", href: "#locations" },
  { name: "Reviews", href: "#reviews" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
],
```

**To customize:**
- **Add a link:** Add a new object `{ name: "New Section", href: "#newsection" }`
- **Remove a link:** Delete the entire line
- **Rename:** Change the `name` property
- **Don't change** `href` values unless you know what you're doing

---

## 3️⃣ Hero Section (Top Banner)

### File: `src/data/siteConfig.js`

```javascript
hero: {
  headline: "Your Daily Ritual, Elevated.",      // Main headline
  subheadline: "Hand-crafted coffee...",         // Subtitle
  primaryCta: "View Menu",                       // First button text
  secondaryCta: "Find a Location",               // Second button text
  backgroundImage: "https://...",                // Background image URL
  highlights: ["Freshly Roasted", "Free WiFi"]   // Tags
},
```

### 🖼️ Hero Image Requirements:
- **Recommended size:** 2000px × 1200px (landscape)
- **Format:** JPG or WebP
- **Aspect ratio:** 16:9 or wider
- **File size:** < 500KB (use [TinyPNG](https://tinypng.com) to compress)
- **Subject:** Your café interior, coffee shots, or ambiance

**Where to get images:**
- Use your own professional photos
- Stock photos: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- Commercial use: Make sure images are royalty-free

---

## 4️⃣ Story/About Section

### File: `src/data/siteConfig.js`

```javascript
story: {
  title: "Our Story",
  subtitle: "More than just a cup of coffee.",
  content: [
    "First paragraph about your founding story...",
    "Second paragraph about your mission..."
  ],
  imageSrc: "https://...",  // Side image
},
```

### 🖼️ Story Image Requirements:
- **Size:** 1000px × 1200px (portrait)
- **Aspect ratio:** 4:5 or 2:3
- **Subject:** Barista, coffee-making process, or team photo
- **File size:** < 300KB

---

## 5️⃣ Menu Items (Most Important!)

### File: `src/data/menuData.js`

```javascript
export const menuData = {
  // Define all categories
  categories: ["Hot Beverages", "Cold Beverages", "Breakfast", ...],
  
  items: [
    {
      id: "hb1",                    // Unique ID (keep unique!)
      category: "Hot Beverages",    // Must match a category above
      name: "Signature Espresso",   // Item name
      description: "Double shot...", // Appetizing description
      price: "$4.50",               // Price with currency symbol
      badge: "Bestseller",          // Optional: "Popular", "New", "Vegan", "Spicy"
      imageSrc: "https://...",      // Item photo URL
    },
    // ... more items
  ]
}
```

### 🖼️ Menu Item Image Requirements:
- **Size:** 400px × 400px (square)
- **Aspect ratio:** 1:1 (square)
- **Format:** JPG or WebP
- **Subject:** Close-up food/drink photo, well-lit
- **Background:** Clean, minimal, or blurred
- **File size:** < 100KB each

### Adding a New Menu Item:

```javascript
{
  id: "mc7",                           // ← Must be unique
  category: "Main Course",             // ← Choose existing category
  name: "Your Dish Name",
  description: "Mouthwatering description that sells the dish",
  price: "$12.99",
  badge: "Chef's Special",             // ← Optional
  imageSrc: "https://images.unsplash.com/...",
},
```

### Adding a New Category:

1. Add to `categories` array: `"Beverages"`
2. Add items with `category: "Beverages"`

---

## 6️⃣ Locations & Google Maps

### File: `src/data/locationsData.js`

```javascript
{
  id: "loc-1",                        // Unique ID
  name: "Downtown Hub",               // Location name
  area: "Downtown",                   // Neighborhood/area
  address: "123 Main Street...",      // Full address
  city: "Metropolis",                 // City name
  contactNumber: "+91 8779667606",    // Phone number
  hours: "Mon-Sun: 7am - 9pm",        // Operating hours
  googleMapsUrl: "https://goo.gl/maps/...",        // Google Maps link
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",  // Embed iframe URL
},
```

### How to Get Google Maps Embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click **"Share"** → **"Embed a map"**
4. Copy the iframe `src` URL
5. Paste as `googleMapsEmbedUrl`

For `googleMapsUrl`:
- Click "Share" → "Copy link"
- Paste as `googleMapsUrl`

---

## 7️⃣ Contact Information & WhatsApp

### File: `src/data/contactConfig.js`

```javascript
export const contactConfig = {
  email: "hello@urbanbrew.com",              // Business email
  phone: "+91 8779667606",                   // Display phone
  defaultWhatsappNumber: "918779667606",     // WhatsApp number (no + or spaces)
  address: "123 Main Street, City, ZIP",     // Main office address
  
  socialLinks: {
    instagram: "https://instagram.com/yourbrand",
    facebook: "https://facebook.com/yourbrand",
    twitter: "https://twitter.com/yourbrand",
    whatsapp: "https://wa.me/918779667606"   // Same as defaultWhatsappNumber
  },
  
  formTitle: "Book a Table",
  formSubtitle: "Reserve your table or send us an inquiry via WhatsApp!",
};
```

**Important:**
- `defaultWhatsappNumber` must be in international format: `918779667606` (country code + number, no + or spaces)
- `whatsapp` link format: `https://wa.me/918779667606`
- Update ALL instances when changing phone number

---

## 8️⃣ Customer Reviews

### File: `src/data/reviewsConfig.js`

```javascript
export const reviewsConfig = {
  enableGoogleApi: false,              // Set true if using real Google API
  googlePlaceId: "ChIJ...",           // Your Google Place ID
  overallRating: 4.8,                 // Average rating (1-5)
  totalReviews: 1248,                 // Total review count
  
  fallbackReviews: [
    {
      id: "r1",
      reviewerName: "Sarah M.",
      rating: 5,                       // Stars (1-5)
      text: "The best coffee in...",   // Review text
      date: "2 months ago",            // Time ago
      source: "Google"                 // Platform
    },
    // ... more reviews
  ]
};
```

**To add reviews:**
- Copy the structure above
- Change `id` to be unique (r5, r6, etc.)
- Update name, rating, text, date

---

## 9️⃣ Photo Gallery

### File: `src/data/galleryData.js`

```javascript
{
  id: "g1",                    // Unique ID
  src: "https://...",          // Image URL
  alt: "Latte Art",            // Image description
  category: "Coffee"           // Category: "Coffee", "Food", "Interior"
}
```

### 🖼️ Gallery Image Requirements:
- **Size:** 600px × 600px (square) or 800px × 600px (landscape)
- **Aspect ratio:** 1:1 or 4:3
- **Format:** JPG or WebP
- **File size:** < 200KB each
- **Subject:** Your best photos of food, drinks, or ambiance

**Categories:**
- `"Coffee"` - Coffee drinks, brewing
- `"Food"` - Food dishes, pastries
- `"Interior"` - Café ambiance, seating

---

## 🔟 QR Menu Settings

### File: `src/data/qrMenuConfig.js`

```javascript
export const qrMenuConfig = {
  enabled: true,                                    // Show QR section?
  baseMenuUrl: window.location.origin + "/#menu",  // Don't change
  enableOrderTracking: false,                      // Ordering feature (keep false)
  title: "Digital Menu",
  description: "Scan the QR code at your table to view our full digital menu...",
};
```

**Usually don't need to change** unless you want different text.

---

## 1️⃣1️⃣ Colors & Branding

### File: `tailwind.config.js`

```javascript
colors: {
  brand: {
    50: '#f9f6f3',   // Lightest
    100: '#efebe5',
    200: '#e3dad1',
    300: '#cfbea9',
    400: '#b89d7f',
    500: '#a3805b',  // Base brand color
    600: '#8c6b4a',  // Primary buttons
    700: '#73563d',
    800: '#5e4835',
    900: '#4e3c2f',  // Darkest (text, footer)
  }
}
```

**To change brand color:**
1. Choose your primary color (hex code)
2. Use [Tailwind Color Generator](https://uicolors.app/create)
3. Replace the entire `brand` object with generated shades

---

## 📐 Image Size Quick Reference

| Section | Recommended Size | Aspect Ratio | Max File Size |
|---------|-----------------|--------------|---------------|
| **Hero Background** | 2000 × 1200px | 16:9 | 500KB |
| **Story Section** | 1000 × 1200px | 4:5 | 300KB |
| **Menu Items** | 400 × 400px | 1:1 | 100KB |
| **Gallery Photos** | 600 × 600px | 1:1 | 200KB |
| **General Rule** | Use WebP format for best performance | | |

---

## 🚀 Deployment Checklist

Before going live, update:

- [ ] Business name in `siteConfig.js`
- [ ] All contact info in `contactConfig.js`
- [ ] WhatsApp number (3 places: contactConfig, siteConfig CTA, FloatingWhatsApp)
- [ ] Replace hero image
- [ ] Update menu with real items & prices
- [ ] Add real location addresses & maps
- [ ] Update gallery with your photos
- [ ] Change brand colors in `tailwind.config.js`
- [ ] Update meta tags for SEO
- [ ] Test WhatsApp booking flow
- [ ] Test on mobile devices

---

## 🔧 Tools for Image Optimization

- **Compress images:** [TinyPNG](https://tinypng.com)
- **Resize images:** [Squoosh](https://squoosh.app)
- **Stock photos:** [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- **Remove background:** [Remove.bg](https://remove.bg)
- **Color palette:** [Coolors.co](https://coolors.co)

---

## ⚠️ What NOT to Change

**Never edit these unless you're a developer:**
- Files in `src/components/`
- Files in `src/sections/`
- `package.json`
- `vite.config.js`
- `tailwind.config.js` (except colors)
- `src/App.jsx`
- `src/main.jsx`

---

## 💡 Pro Tips

1. **Keep image file names descriptive:** `coffee-latte.jpg` not `IMG_1234.jpg`
2. **Always compress images** before uploading
3. **Use consistent photo style** (same lighting, same color tone)
4. **Test on mobile** after every major change
5. **Backup `src/data/` folder** before making changes
6. **Use version control** (Git) to track changes

---

## 📞 Need Help?

If you're stuck customizing something:

1. Check this guide again
2. Look at existing examples in data files
3. Only edit files in `src/data/` folder
4. Keep the structure (curly braces, commas) intact

---

**Last Updated:** December 2025  
**Template Version:** 1.0  
**For:** React F&B Website Template
