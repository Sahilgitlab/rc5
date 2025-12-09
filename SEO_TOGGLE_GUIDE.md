# 🎛️ SEO Enable/Disable Guide

## ✅ SEO is Now Fully Configurable!

You can now enable or disable any SEO feature from **one single file**: `src/data/seoConfig.js`

---

## 🚀 Quick Toggle

### Disable ALL SEO (Emergency Off Switch)
**File:** `src/data/seoConfig.js`

```javascript
export const seoConfig = {
  enabled: false,  // ← Set to false to disable EVERYTHING
  // ... rest of config ignored when false
}
```

**Result:** All SEO features OFF, website works normally.

---

## 🎯 Granular Controls

### 1. Basic SEO (Meta Tags)
```javascript
basicSEO: {
  enabled: true,  // ← On/Off toggle
  title: "Your Title",
  description: "Your Description",
  // ...
}
```

**Controls:**
- Page title
- Meta description
- Keywords
- Canonical URL
- Robots directives

---

### 2. Social Media Previews

#### Facebook/LinkedIn
```javascript
openGraph: {
  enabled: true,  // ← Toggle
  // ...
}
```

#### Twitter/X
```javascript
twitterCard: {
  enabled: true,  // ← Toggle
  // ...
}
```

**When Disabled:** Links share without rich previews (just URL).

---

### 3. Structured Data (Google Rich Snippets)

#### Restaurant Schema
```javascript
structuredData: {
  enabled: true,  // ← Master toggle for all schemas
  
  restaurant: {
    enabled: true,  // ← Toggle restaurant schema
    // ...
  }
}
```

#### Local Business
```javascript
localBusiness: {
  enabled: true,  // ← Toggle local business schema
  // ...
}
```

#### Breadcrumbs
```javascript
breadcrumb: {
  enabled: true,  // ← Toggle breadcrumb schema
  // ...
}
```

**When Disabled:** No rich snippets in Google (just plain search results).

---

### 4. AI Crawlers (ChatGPT, Claude, etc.)

**File:** `public/robots.txt`

**To DISABLE AI crawlers:**
```txt
# Block ALL AI Crawlers
User-agent: GPTBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: PerplexityBot
Disallow: /
```

**To ENABLE (current default):**
```txt
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /
# ... etc
```

---

### 5. Geo Tagging
```javascript
advanced: {
  geoTagging: {
    enabled: true,  // ← Toggle
    region: "IN",
    placename: "Metropolis"
  }
}
```

---

### 6. Google Analytics
```javascript
analytics: {
  googleAnalytics: {
    enabled: false,  // ← Set to true when ready
    measurementId: "G-XXXXXXXXXX"  // ← Your GA ID
  }
}
```

**Steps to Enable:**
1. Create Google Analytics account
2. Get Measurement ID (starts with `G-`)
3. Paste ID in config
4. Set `enabled: true`

---

### 7. Google Tag Manager
```javascript
googleTagManager: {
  enabled: false,  // ← Set to true when ready
  containerId: "GTM-XXXXXXX"  // ← Your GTM ID
}
```

---

## 📋 Common Scenarios

### Scenario 1: Testing Website (No SEO)
```javascript
export const seoConfig = {
  enabled: false,  // ← Disable everything
}
```

### Scenario 2: Basic SEO Only (No Social Media)
```javascript
export const seoConfig = {
  enabled: true,
  basicSEO: { enabled: true },
  openGraph: { enabled: false },  // ← No Facebook previews
  twitterCard: { enabled: false },  // ← No Twitter previews
  structuredData: { enabled: true },
}
```

### Scenario 3: No AI Crawlers (Privacy Mode)
**File:** `public/robots.txt`
```txt
# Block all AI bots
User-agent: GPTBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: CCBot
Disallow: /
```

### Scenario 4: Full SEO + Analytics
```javascript
export const seoConfig = {
  enabled: true,
  basicSEO: { enabled: true },
  openGraph: { enabled: true },
  twitterCard: { enabled: true },
  structuredData: { enabled: true },
  advanced: {
    analytics: {
      googleAnalytics: {
        enabled: true,  // ← Analytics ON
        measurementId: "G-ABC123XYZ"
      }
    }
  }
}
```

---

## 🔧 File Reference

| Feature | Config File | Toggle Location |
|---------|------------|----------------|
| **All SEO** | `src/data/seoConfig.js` | `enabled: true/false` |
| **Basic SEO** | `src/data/seoConfig.js` | `basicSEO.enabled` |
| **Social Media** | `src/data/seoConfig.js` | `openGraph.enabled`, `twitterCard.enabled` |
| **Structured Data** | `src/data/seoConfig.js` | `structuredData.enabled` |
| **AI Crawlers** | `public/robots.txt` | `Allow: /` or `Disallow: /` |
| **Analytics** | `src/data/seoConfig.js` | `advanced.analytics.googleAnalytics.enabled` |

---

## ⚡ Emergency Disable

If something breaks with SEO:

1. Open `src/data/seoConfig.js`
2. Change first line:
   ```javascript
   enabled: false,  // ← Emergency off
   ```
3. Save and refresh browser
4. All SEO features disabled, site works normally

---

## ✅ What's ON by Default

| Feature | Status |
|---------|--------|
| Basic SEO | ✅ ON |
| Open Graph | ✅ ON |
| Twitter Cards | ✅ ON |
| Restaurant Schema | ✅ ON |
| Local Business Schema | ✅ ON |
| Breadcrumb Schema | ✅ ON |
| AI Crawlers | ✅ ON |
| Geo Tagging | ✅ ON |
| Google Analytics | ❌ OFF (need to add ID) |
| Google Tag Manager | ❌ OFF (need to add ID) |

---

## 🎨 Customization Example

```javascript
// src/data/seoConfig.js
export const seoConfig = {
  enabled: true,  // ← Master switch
  
  basicSEO: {
    enabled: true,
    title: "My Amazing Café | Best Coffee in Town",  // ← Your title
    description: "Visit us for amazing coffee and pastries!",  // ← Your description
    keywords: "coffee, café, pastries, your city",  // ← Your keywords
  },
  
  openGraph: {
    enabled: true,
    title: "My Amazing Café",
    image: "https://yourdomain.com/share-image.jpg",  // ← Your image
  },
  
  structuredData: {
    enabled: true,
    restaurant: {
      enabled: true,
      name: "My Amazing Café",  // ← Your café name
      telephone: "+91 1234567890",  // ← Your phone
      address: {
        streetAddress: "123 Your Street",  // ← Your address
        addressLocality: "Your City",
        // ...
      }
    }
  }
};
```

---

## 🆘 Troubleshooting

**Issue: SEO not showing after enabling**
→ Check browser cache, hard refresh (Ctrl+Shift+R)

**Issue: Schema errors in Google**
→ Use [Rich Results Test](https://search.google.com/test/rich-results)

**Issue: Social previews not updating**
→ Clear cache on Facebook Debugger or Twitter Card Validator

---

**Now you have complete control over all SEO features! 🎛️✨**
