# Flex Fitness Gym Website 💪

Professional gym landing page with membership plans and online payment integration.

## Features ✨

- **Modern Design**: Clean, professional, and mobile-responsive
- **Membership Plans**: 3 pricing tiers with detailed features
- **Online Payment**: Razorpay integration for seamless payments
- **Advanced SEO**: Complete optimization for top search rankings
  - Schema.org structured data (LocalBusiness + Organization)
  - Open Graph & Twitter Cards
  - XML Sitemap & Robots.txt
  - PWA Manifest
  - Geo tags for local SEO
  - Security headers
- **WhatsApp Integration**: Direct contact via WhatsApp
- **Smooth Animations**: Professional transitions and effects
- **Contact Form**: Easy inquiry submission
- **Google Maps**: Location integration

## Sections 📄

1. **Hero** - Eye-catching banner with strong CTAs
2. **About** - Gym story and statistics
3. **Services** - Personal training, diet plans, etc.
4. **Classes** - Available workout classes
5. **Pricing** - Membership plans with payment
6. **Team** - Trainer profiles
7. **Gallery** - Gym photos
8. **Testimonials** - Member reviews
9. **Contact** - Form and location map

## Setup Instructions 🚀

### 1. Install Dependencies
```bash
npm install
```

### 2. Razorpay Integration
- Sign up at [Razorpay](https://razorpay.com/)
- Get your API Key from Dashboard
- Open `src/components/Pricing.jsx`
- Replace `YOUR_RAZORPAY_KEY` with your actual key:
```javascript
key: 'rzp_test_YOUR_KEY_HERE'
```

### 3. Run Development Server
```bash
npm run dev
```

### Festival Calendar API

Festival dates are loaded once per year from Calendarific and saved in a shared Netlify Blob. Browsers also keep the same yearly response in `localStorage`, so repeat visits do not call the API or Function again.

1. Create a Calendarific API key.
2. In Netlify, open **Project configuration → Environment variables**.
3. Add `CALENDARIFIC_API_KEY` with the secret API key as its value.

Never prefix this variable with `VITE_`; that would expose the key in the browser bundle. If the API is unavailable, the app uses its bundled festival-date fallback.

Celebration themes can be previewed locally with `?festival=diwali`, replacing `diwali` with `holi`, `christmas`, `republic-day`, `independence-day`, `raksha-bandhan`, `janmashtami`, or `new-year`.

### 4. SEO Setup (Important!)
- Open `SEO_SETUP_GUIDE.md` for detailed instructions
- Add Google Search Console verification code
- Add Bing Webmaster verification code
- Update social media links in `index.html`
- Submit sitemap to search engines

### 5. Build for Production
```bash
npm run build
```

## Payment Integration 💳

The website uses Razorpay for secure online payments. When users click "Join Now":
1. Razorpay payment modal opens
2. User enters payment details
3. Payment is processed securely
4. Success/failure callback is triggered

**Note**: Replace test key with live key for production.

## Customization 🎨

### Update Gym Details
- **Logo**: Replace `/public/images/logo.png`
- **Contact Info**: Edit `src/components/Contact.jsx`
- **Pricing**: Modify plans in `src/components/Pricing.jsx`
- **Colors**: Change CSS variables in `src/App.css`

### SEO Settings
See `SEO_SETUP_GUIDE.md` for complete setup:
- Google & Bing verification
- Sitemap submission
- Schema.org structured data
- Local SEO optimization
- Social media integration

## Mobile Responsive ✅

Fully optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Technologies Used 🛠️

- React + Vite
- CSS3 (Custom styling)
- Font Awesome Icons
- Google Fonts (Poppins)
- Razorpay Payment Gateway
- Schema.org Structured Data
- PWA Support

## SEO Features 🔍

- ✅ Complete meta tags optimization (50+ tags)
- ✅ 4 Schema.org markups (LocalBusiness, Organization, BreadcrumbList, WebSite)
- ✅ Open Graph & Twitter Cards
- ✅ XML Sitemap with 9 URLs (sitemap.xml)
- ✅ Robots.txt for crawlers
- ✅ PWA Manifest (site.webmanifest)
- ✅ Geo tags for local search
- ✅ Security & performance headers
- ✅ Canonical URLs
- ✅ Netlify configuration (netlify.toml)
- ✅ SPA routing (_redirects)
- ✅ 100% Google indexing ready

**For complete SEO checklist, see `SEO_COMPLETE_CHECKLIST.md`**

## Contact 📞

- **Phone**: +91 8303201744
- **Location**: Nakain Chauraha, Varanasi
- **Hours**: 24/7 Open

---

Built with ❤️ for Flex Fitness Gym
