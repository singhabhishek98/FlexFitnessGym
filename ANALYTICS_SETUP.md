# 📊 Analytics & Tracking Setup

## Google Analytics 4 Setup

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new property: "Flex Fitness Gym"
3. Get your Measurement ID (G-XXXXXXXXXX)

### Step 2: Add to Website
Add this code in `index.html` before `</head>`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'send_page_view': true,
    'anonymize_ip': true
  });
</script>
```

### Step 3: Track Events
Add event tracking for important actions:

```javascript
// Track button clicks
document.querySelector('.btn-primary').addEventListener('click', () => {
  gtag('event', 'cta_click', {
    'event_category': 'engagement',
    'event_label': 'Join Now Button'
  });
});

// Track form submissions
gtag('event', 'form_submit', {
  'event_category': 'conversion',
  'event_label': 'Contact Form'
});

// Track phone clicks
gtag('event', 'phone_click', {
  'event_category': 'conversion',
  'event_label': 'Phone Number'
});

// Track WhatsApp clicks
gtag('event', 'whatsapp_click', {
  'event_category': 'conversion',
  'event_label': 'WhatsApp Button'
});
```

---

## Google Tag Manager (Recommended)

### Why GTM?
- Easier event tracking
- No code changes needed
- Multiple tools in one place

### Setup
1. Create GTM account
2. Get container ID (GTM-XXXXXXX)
3. Add to `index.html`:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add after `<body>`:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## Facebook Pixel

### Setup
1. Create Facebook Business account
2. Get Pixel ID
3. Add to `index.html`:

```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

### Track Conversions
```javascript
// Track membership purchase
fbq('track', 'Purchase', {
  value: 1999,
  currency: 'INR'
});

// Track lead
fbq('track', 'Lead');
```

---

## Hotjar (User Behavior)

### Setup
1. Sign up at [Hotjar](https://www.hotjar.com/)
2. Get tracking code
3. Add to `index.html`

Benefits:
- Heatmaps
- Session recordings
- User feedback
- Conversion funnels

---

## Key Metrics to Track

### Traffic Metrics
- Page views
- Unique visitors
- Bounce rate
- Session duration
- Traffic sources

### Conversion Metrics
- Form submissions
- Phone clicks
- WhatsApp clicks
- Membership purchases
- Email signups

### Engagement Metrics
- Scroll depth
- Video plays
- Button clicks
- Time on page
- Pages per session

### SEO Metrics
- Organic traffic
- Keyword rankings
- Click-through rate
- Impressions
- Average position

---

## Goals to Set Up

### Goal 1: Contact Form Submission
- Type: Destination
- URL: /thank-you or form success

### Goal 2: Phone Call
- Type: Event
- Category: conversion
- Action: phone_click

### Goal 3: Membership Purchase
- Type: Event
- Category: conversion
- Action: purchase

### Goal 4: WhatsApp Click
- Type: Event
- Category: conversion
- Action: whatsapp_click

---

## Monthly Reporting

### Track These KPIs
1. Total visitors
2. New vs returning
3. Conversion rate
4. Cost per lead
5. Revenue from website
6. Top landing pages
7. Top exit pages
8. Mobile vs desktop
9. Geographic data
10. Referral sources

---

## Tools Integration Checklist

- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Google Tag Manager
- [ ] Facebook Pixel
- [ ] Hotjar
- [ ] Microsoft Clarity (free alternative to Hotjar)
- [ ] WhatsApp Business API
- [ ] Razorpay Analytics

---

**Track Everything, Optimize Everything! 📈**
