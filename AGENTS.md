# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server (Vite, default http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
```

There is no test suite in this project.

## Architecture

This is a **React + Vite single-page application** deployed on Netlify. It is a gym landing page — one HTML page with all content rendered as stacked sections.

### Page composition

`src/main.jsx` bootstraps React into `#root`. `src/App.jsx` is the root component and renders every section in a fixed order:

```
Header → Hero → About → Services → Classes → Pricing → Team → Gallery → Testimonials → Contact → Footer → WhatsAppFloat
```

There is **no client-side router**. Navigation is purely anchor-based smooth-scrolling: `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`. Each section component has a matching `id` attribute (e.g. `id="pricing"`).

### Layout vs components

- `src/layouts/header/Header.jsx` — fixed navbar; adds `.scrolled` class at 50px scroll and handles hamburger menu state
- `src/layouts/footer/Footer.jsx` — footer with newsletter form (shows a toast, does not actually submit anywhere)
- `src/components/` — one file per page section, no sub-routing

### Styling

All styles live in **`src/App.css`** (global) and `src/index.css` (base resets). There are no CSS modules, no Tailwind, no styled-components. CSS variables are defined in `:root` in `App.css`:

- `--primary-color: #ff6b00` (orange)
- `--primary-gradient: linear-gradient(135deg, #ff6b00, #ff8533)`
- `--secondary-color: #1a1a1a`

### Third-party integrations

**EmailJS** (contact form)
- Loaded via CDN `<script>` in `index.html`; initialized with public key `Hrg8hqQiqNUHEGlgf`
- `src/components/Contact.jsx` hardcodes `SERVICE_ID`, `TEMPLATE_ID`, and `USER_ID` as constants at the top of the component

**Hero video**
- Primary source: Cloudinary CDN (`res.cloudinary.com/dntkqvsky`)
- Fallback: `/images/vid.mp4` (local file in `public/`)

**WhatsApp CTAs**
- "Join Now" / "Book Now" in `Pricing.jsx` and the floating button in `WhatsAppFloat.jsx` both open `https://wa.me/918303201744` with a pre-filled message
- The README mentions Razorpay integration, but it has been replaced by WhatsApp redirect in the current code

**`antd`** is listed as a dependency but is not imported anywhere in the current codebase.

### SEO & public assets

All SEO metadata (Schema.org structured data, Open Graph, Twitter Cards, geo tags, PWA manifest link) is baked directly into `index.html` — not managed by React Helmet or any runtime library.

Static assets (images, `sitemap.xml`, `robots.txt`, `site.webmanifest`, `_headers`, `_redirects`) live in `public/`. Images are served under `/images/` (e.g. `/images/logo.png`).

### Deployment

`netlify.toml` configures:
- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- SPA catch-all redirect: all routes → `/index.html` with status 200
