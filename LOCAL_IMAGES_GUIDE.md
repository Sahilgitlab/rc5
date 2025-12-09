# 📁 Using Local Images

## Where to Put Your Images

All your images should go in the `public/images/` folder:

```
public/images/
├── hero/           ← Hero section background (2000×1200px)
├── menu/           ← Menu item photos (400×400px)
├── gallery/        ← Gallery photos (600×600px)
├── story/          ← About section image (1000×1200px)
└── locations/      ← Location photos (optional)
```

## How to Use Local Images

### Step 1: Add Your Images
Drop your images into the appropriate folder above.

**Example:**
- `public/images/hero/cafe-interior.jpg`
- `public/images/menu/espresso.jpg`
- `public/images/menu/latte.jpg`

### Step 2: Reference in Data Files

**In `src/data/siteConfig.js`:**
```javascript
hero: {
  backgroundImage: "/images/hero/cafe-interior.jpg",  // ← Your image
}

story: {
  imageSrc: "/images/story/barista.jpg",  // ← Your image
}
```

**In `src/data/menuData.js`:**
```javascript
{
  name: "Espresso",
  imageSrc: "/images/menu/espresso.jpg",  // ← Your image
}
```

**In `src/data/galleryData.js`:**
```javascript
{
  src: "/images/gallery/interior-1.jpg",  // ← Your image
}
```

## Important Rules

✅ **DO:**
- Start path with `/images/...` (forward slash)
- Use lowercase filenames (espresso.jpg, not Espresso.JPG)
- Use hyphens not spaces (cafe-interior.jpg, not cafe interior.jpg)
- Compress images before adding (use TinyPNG.com)

❌ **DON'T:**
- Use `../public/images/...` (wrong)
- Use `public/images/...` (wrong)
- Use backslashes `\` (wrong)

## File Naming Convention

**Good names:**
- `espresso-coffee.jpg`
- `chocolate-latte.jpg`
- `cafe-interior.jpg`

**Bad names:**
- `IMG_1234.jpg` (not descriptive)
- `Coffee Photo.jpg` (has spaces)
- `my image (1).jpg` (special characters)

## Benefits of Local Images

✅ Faster loading (no external requests)
✅ Works offline during development
✅ Full control over images
✅ No broken links if external site goes down
✅ Better for SEO

## Migration from External URLs

If you want to replace Unsplash URLs with local images:

1. Download the image from Unsplash
2. Rename it descriptively (e.g., `latte.jpg`)
3. Put it in the correct folder (`public/images/menu/`)
4. Update the path in your data file:
   ```javascript
   imageSrc: "/images/menu/latte.jpg"
   ```

---

**That's it!** Your images will now load from your local project instead of external URLs.
