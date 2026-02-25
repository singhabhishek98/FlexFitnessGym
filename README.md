# Flex Fitness Gym Website 💪

Professional gym landing page with membership plans and online payment integration.

## Features ✨

- **Modern Design**: Clean, professional, and mobile-responsive
- **Membership Plans**: 3 pricing tiers with detailed features
- **Online Payment**: Razorpay integration for seamless payments
- **SEO Optimized**: Meta tags for better search engine visibility
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

### 4. Build for Production
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
Update meta tags in `index.html`:
- Title
- Description
- Keywords
- Open Graph tags

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

## Contact 📞

- **Phone**: +91 8303201744
- **Location**: Nakain Chauraha, Varanasi
- **Hours**: 24/7 Open

---

Built with ❤️ for Flex Fitness Gym
