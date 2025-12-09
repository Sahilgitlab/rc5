# 🛡️ reCAPTCHA Setup Guide

## What is reCAPTCHA?

reCAPTCHA is Google's free spam protection service. It prevents bots from submitting your contact form automatically.

**Current Status:** ❌ Disabled (to enable, follow steps below)

---

## 🚀 How to Enable reCAPTCHA

### Step 1: Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)

2. **Sign in** with your Google account

3. **Register a new site:**
   - **Label:** "My Cafe Website" (or your business name)
   - **reCAPTCHA type:** Select **"reCAPTCHA v3"**
   - **Domains:** Add your website domain
     - For testing: `localhost`
     - For production: `yourdomain.com` (without https://)
   - **Accept terms** and click **Submit**

4. **Copy your keys:**
   - **Site Key** (starts with `6Le...`) - This goes in your code
   - **Secret Key** (starts with `6Le...`) - Keep this private (not needed for this project)

---

### Step 2: Add Site Key to Your Website

**File:** `src/data/contactConfig.js`

```javascript
recaptcha: {
  enabled: true,  // ← Change to true
  siteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",  // ← Paste your Site Key here
}
```

**Example:**
```javascript
export const contactConfig = {
  email: "hello@urbanbrew.com",
  phone: "+91 8779667606",
  defaultWhatsappNumber: "918779667606",
  
  // ... other config ...
  
  recaptcha: {
    enabled: true,                                          // ← Set to true
    siteKey: "6LeYourActualSiteKeyHere123456789abcdef",    // ← Your real key
  }
};
```

---

### Step 3: Test It

1. **Save the file**
2. **Refresh your browser** (if dev server is running)
3. **Fill out the contact form**
4. **Submit** - You should see:
   - reCAPTCHA badge in bottom-right corner
   - Form submits normally if you're human
   - Spam bots are blocked automatically

---

## 🔧 How to Disable reCAPTCHA

If you want to turn it off temporarily:

**File:** `src/data/contactConfig.js`

```javascript
recaptcha: {
  enabled: false,  // ← Change back to false
  siteKey: "...",  // Key stays, but won't be used
}
```

That's it! No code changes needed, just flip the `enabled` flag.

---

## 🎯 Testing reCAPTCHA

### Use Google's Test Keys (For Development)

**For testing only**, use these keys:

```javascript
recaptcha: {
  enabled: true,
  siteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",  // Google test key
}
```

**Note:** Test keys always pass. Get real keys for production!

---

## ❓ Troubleshooting

### Issue 1: "reCAPTCHA not loaded"
**Cause:** Site key is wrong or missing  
**Fix:** Double-check your site key in `contactConfig.js`

### Issue 2: reCAPTCHA badge not showing
**Cause:** reCAPTCHA is disabled or site key is placeholder  
**Fix:** 
1. Set `enabled: true`
2. Replace `"YOUR_RECAPTCHA_SITE_KEY_HERE"` with real key

### Issue 3: "Invalid domain for site key"
**Cause:** Your domain doesn't match registered domains  
**Fix:** Add your domain to reCAPTCHA admin console

### Issue 4: Badge blocks content on mobile
**Solution:** Badge auto-positions in bottom-right. It's normal!

---

## 🔍 How It Works

### When ENABLED:
1. User fills out form
2. **Before submitting:**
   - Google reCAPTCHA analyzes user behavior
   - Generates a token (proves human)
3. If verification passes → WhatsApp opens
4. If fails → User sees error message

### When DISABLED:
- Form submits immediately (no verification)
- No reCAPTCHA badge shows
- Faster but vulnerable to spam

---

## 📊 reCAPTCHA Dashboard

**View spam statistics:**
1. Go to [reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click your site name
3. See metrics:
   - Total requests
   - Spam blocked
   - Score distribution

---

## 🌍 Adding Multiple Domains

If you have staging + production sites:

**reCAPTCHA Admin:**
```
Domains:
- localhost (for development)
- yourdomain.com (production)
- staging.yourdomain.com (staging)
```

**Same site key works for all domains listed!**

---

## 🔐 Security Best Practices

✅ **DO:**
- Use reCAPTCHA v3 (invisible, no clicking)
- Add real production domain to reCAPTCHA console
- Monitor spam statistics regularly

❌ **DON'T:**
- Share your Secret Key (not needed for this project anyway)
- Use test keys in production
- Forget to enable it before going live

---

## 💡 Quick Enable/Disable Reference

### To ENABLE:
```javascript
// src/data/contactConfig.js
recaptcha: {
  enabled: true,  // ← true
  siteKey: "YOUR_REAL_KEY",
}
```

### To DISABLE:
```javascript
// src/data/contactConfig.js
recaptcha: {
  enabled: false,  // ← false
  siteKey: "YOUR_REAL_KEY",  // Key can stay
}
```

---

## 📞 Need Help?

**Resources:**
- [reCAPTCHA Docs](https://developers.google.com/recaptcha/docs/v3)
- [Get reCAPTCHA Keys](https://www.google.com/recaptcha/admin/create)
- [Verify Setup](https://developers.google.com/recaptcha/docs/verify)

---

**Status:** ✅ reCAPTCHA is ready to use! Just add your Site Key and enable it.
