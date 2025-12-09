# 🔒 Security Guide & Checklist

## Current Security Status

Your website is **moderately secure** by default because:
- ✅ No backend server (no SQL injection)
- ✅ No database (no data breaches)
- ✅ No user authentication (no password leaks)
- ✅ Client-side only (limited attack surface)
- ✅ React's built-in XSS protection
- ✅ No payment processing

**However**, you need to follow this checklist before deploying to production.

---

## 🚨 Critical Security Checklist (Before Launch)

### 1. **Enable HTTPS (SSL Certificate)**
**Status:** 🔴 CRITICAL - Must have!

**Why:** Without HTTPS, data between user and website is NOT encrypted.

**Solution:**
Deploy to platforms with automatic HTTPS:
- ✅ **Netlify** (recommended, free SSL)
- ✅ **Vercel** (free SSL)
- ✅ **GitHub Pages** (free SSL)
- ✅ **Cloudflare Pages** (free SSL)

**How to check:**
- URL should start with `https://` not `http://`
- Browser shows a 🔒 padlock icon

---

### 2. **Add Security Headers**
**Status:** ⚠️ Recommended

When deploying, add these security headers:

**For Netlify** - Create `public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: data:; connect-src 'self';
```

**For Vercel** - Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

### 3. **Protect Against Spam (Add CAPTCHA)**
**Status:** ⚠️ Recommended for contact form

**Problem:** Users can spam your WhatsApp form.

**Solution:** Add Google reCAPTCHA v3

**Implementation:**
```bash
npm install react-google-recaptcha-v3
```

**In `src/components/WhatsAppForm.jsx`:**
```javascript
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const { executeRecaptcha } = useGoogleReCaptcha();

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Get captcha token
  const token = await executeRecaptcha('contact_form');
  
  if (!token) {
    alert('Please verify you are human');
    return;
  }
  
  // Continue with WhatsApp redirect...
};
```

**Get reCAPTCHA keys:** [Google reCAPTCHA](https://www.google.com/recaptcha/admin)

---

### 4. **Hide Sensitive Data**
**Status:** ✅ Already done (mostly)

**Checked:**
- ✅ No API keys in code (WhatsApp number is meant to be public)
- ✅ No passwords in code
- ✅ No database credentials

**Still exposed (intentionally):**
- 📧 Email address (for contact)
- 📱 WhatsApp number (for bookings)
- 📍 Physical addresses (for locations)

These are **public business information** and meant to be visible.

---

### 5. **Update Dependencies Regularly**
**Status:** ⚠️ Ongoing maintenance

**Check for vulnerabilities:**
```bash
npm audit
```

**Fix vulnerabilities automatically:**
```bash
npm audit fix
```

**Stay updated:**
```bash
npm update
```

**Schedule:** Check monthly or after major React/Vite releases.

---

### 6. **Environment Variables (If Using APIs)**
**Status:** ✅ Not needed currently

If you add Google Reviews API later:

**Create `.env.local`:**
```
VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
```

**Add to `.gitignore`:**
```
.env.local
.env
```

**Use in code:**
```javascript
const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
```

---

### 7. **Sanitize User Inputs**
**Status:** ✅ Already handled by React

React automatically escapes HTML in user content, preventing XSS attacks.

**Safe:**
```javascript
<p>{formData.message}</p>  // React auto-escapes this
```

**Unsafe (DON'T DO THIS):**
```javascript
<div dangerouslySetInnerHTML={{__html: formData.message}} />  // NEVER use this for user input
```

---

## 🌐 Domain & Hosting Security

### **Custom Domain Setup**

1. **DNS Security:**
   - Use Cloudflare for free DDoS protection
   - Enable DNSSEC

2. **Domain Registrar:**
   - Use reputable registrars (Namecheap, Google Domains, Cloudflare)
   - Enable 2FA on domain account
   - Enable domain lock

---

## 🔍 Security Testing Tools

Before launch, test your site:

### **1. SSL/HTTPS Check**
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- Should get **A** or **A+** rating

### **2. Security Headers Check**
- [Security Headers](https://securityheaders.com/)
- Aim for **A** rating

### **3. Vulnerability Scan**
```bash
npm audit
```

### **4. Dependency Check**
```bash
npx depcheck
```

---

## 🚫 Common Threats & Your Protection

| Threat | Risk Level | Your Protection |
|--------|------------|-----------------|
| **SQL Injection** | ❌ Not applicable | No database |
| **XSS (Cross-Site Scripting)** | ✅ Low | React auto-escapes |
| **CSRF (Cross-Site Request Forgery)** | ✅ Low | No sensitive operations |
| **DDoS Attack** | ⚠️ Medium | Use Cloudflare |
| **Man-in-the-Middle** | 🔴 High if no HTTPS | Deploy with SSL |
| **Data Breach** | ✅ Not applicable | No stored user data |
| **Brute Force Login** | ✅ Not applicable | No login system |
| **File Upload Attacks** | ✅ Not applicable | No file uploads |
| **Spam Bots** | ⚠️ Medium | Add reCAPTCHA |

---

## 🎯 Production Deployment Security Checklist

**Before going live, verify:**

- [ ] ✅ Site is deployed with HTTPS (https://)
- [ ] ✅ SSL certificate is valid (check with browser padlock)
- [ ] ⚠️ Security headers are configured
- [ ] ⚠️ reCAPTCHA added to contact form (optional but recommended)
- [ ] ✅ No API keys exposed in frontend code
- [ ] ✅ Dependencies are up to date (`npm audit`)
- [ ] ✅ `.env` files are in `.gitignore`
- [ ] ✅ Domain has 2FA enabled
- [ ] ⚠️ Cloudflare or similar CDN enabled (optional)
- [ ] ✅ Google Search Console set up
- [ ] ✅ Backup of all data files saved

---

## 🆘 What to Do If...

### **Someone is spamming your WhatsApp:**
1. Add reCAPTCHA (see above)
2. Or temporarily change WhatsApp number in `contactConfig.js`
3. Block spammer number in WhatsApp

### **You find a security vulnerability:**
1. Run `npm audit fix`
2. If critical, redeploy immediately
3. Check [CVE Database](https://cve.mitre.org/)

### **Site gets hacked:**
- **Unlikely** (static site, no backend)
- If domain compromised: Contact registrar immediately
- Change all passwords associated with hosting/domain

---

## 📊 Security Score

**Your current website security:**

| Aspect | Score | Notes |
|--------|-------|-------|
| **Code Security** | 🟢 9/10 | React protects well |
| **Data Security** | 🟢 10/10 | No sensitive data stored |
| **HTTPS (when deployed)** | 🔴 0/10 → 🟢 10/10 | Must use SSL |
| **Spam Protection** | 🟡 5/10 | Add reCAPTCHA |
| **Dependency Security** | 🟢 9/10 | Keep updated |
| **Overall** | 🟢 **Safe for production** | After HTTPS + headers |

---

## 🎓 Learn More

**Resources:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Common web vulnerabilities
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [Vite Security](https://vitejs.dev/guide/env-and-mode.html)

---

## ✅ Bottom Line

**Your website is secure enough for a café/restaurant website because:**
1. No payment processing
2. No user accounts
3. No sensitive data storage
4. React's built-in protections

**Just make sure to:**
1. 🔴 **Deploy with HTTPS** (critical!)
2. ⚠️ Add security headers
3. ⚠️ Add reCAPTCHA (recommended)
4. ✅ Keep dependencies updated

**You're good to go! 🚀**
