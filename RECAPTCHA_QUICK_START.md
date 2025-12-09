# ✅ reCAPTCHA - Quick Start

## 🎯 Current Status: READY (But Disabled)

reCAPTCHA is **installed and configured**, but currently **disabled** by default.

---

## 🚀 How to Enable (3 Simple Steps)

### Step 1: Get Your Site Key
1. Go to https://www.google.com/recaptcha/admin/create
2. Sign in with Google
3. Fill out:
   - **Label:** Your Cafe Name
   - **Type:** reCAPTCHA v3
   - **Domains:** `localhost` (for testing)
4. Click **Submit**
5. **Copy your Site Key** (starts with `6Le...`)

### Step 2: Add Key to Config
**File:** `src/data/contactConfig.js`

```javascript
recaptcha: {
  enabled: true,  // ← Change false to true
  siteKey: "PASTE_YOUR_SITE_KEY_HERE",  // ← Paste the key from Step 1
}
```

### Step 3: Done!
- Save the file
- Refresh browser
- Form is now protected! 🛡️

---

## 🔧 How to Disable

**File:** `src/data/contactConfig.js`

```javascript
recaptcha: {
  enabled: false,  // ← Change back to false
  siteKey: "...",  // Key stays, just won't be used
}
```

---

## 📋 What Happens When Enabled?

✅ Google analyzes user behavior  
✅ Bots are automatically blocked  
✅ Humans can submit normally  
✅ Small reCAPTCHA badge shows in bottom-right  
✅ No annoying "Select traffic lights" puzzles (v3 is invisible!)  

---

## 📚 Full Details

See `RECAPTCHA_GUIDE.md` for:
- Detailed setup instructions
- Troubleshooting
- Testing with Google's test keys
- Dashboard analytics

---

## 🆘 Troubleshooting

**Issue: "reCAPTCHA not loaded"**  
→ Check that siteKey is correct in `contactConfig.js`

**Issue: Badge not showing**  
→ Make sure `enabled: true` and siteKey is not the placeholder

**Issue: Form still works when disabled**  
→ That's correct! Disable = no verification = faster but less secure

---

**Status:** ⚡ Ready to enable anytime!
