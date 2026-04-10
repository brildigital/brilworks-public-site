# Styling & Configuration - Detailed Guide

## Styling Stack

- **Primary:** Tailwind CSS 3.3.2
- **Secondary:** SCSS stylesheets for complex/custom styles
- **CSS Variables:** Defined in `globals.css`
- **Font Loading:** `next/font/google` for Figtree font

---

## Tailwind CSS Configuration

**File:** `tailwind.config.js`

### Content Paths

```javascript
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
]
```

### Custom Breakpoints

| Name | Size | Usage |
|------|------|-------|
| `sm` | 640px | (Tailwind default) |
| `mobile` | 535px | Custom mobile breakpoint |
| `md` | 768px | (Tailwind default) |
| `slg` | 980px | Custom "small large" breakpoint |
| `lg` | 1024px | (Tailwind default) |
| `sxl` | 1200px | Custom "small extra large" |
| `xl` | 1280px | (Tailwind default) |
| `smallDesktop` | 1366px | Small desktop screens |
| `2xl` | 1536px | (Tailwind default) |
| `3xl` | 1680px | Ultra-wide screens |

### Custom Colors

```javascript
colors: {
  themeColor: "#017eeb",        // Primary blue
  navyBlue: "#000d1e",          // Dark navy
  themeSecondary: "#00dbd3",    // Teal/cyan accent
  accent: "#00D4FF",            // Light cyan accent

  // Cyberpunk theme colors (for AI agents?)
  "cyber-bg": "#0a0a0f",
  "cyber-card": "#12121a",
  "cyber-border": "#1a1a2e",
  "cyber-text": "#e0e0ff",
  "cyber-accent": "#00ff88",
  "cyber-secondary": "#7b61ff",
  "cyber-warning": "#ff6b35",
  "cyber-gold": "#ffd700",
  "cyber-glow": "#00ff8833",
}
```

### Custom Gradients (Background Images)

```javascript
backgroundImage: {
  "blue-gradient": "linear-gradient(180deg, #003566 0%, #003566 100%)",
  "theme-gradient": "linear-gradient(90deg, #0182EA 0%, #01DBD4 100%)",
  "text-gradient": "linear-gradient(87deg, #0182EA 0%, #01DBD4 100%)",
  "cyber-gradient": "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)",
}
```

### Custom Font Families

```javascript
fontFamily: {
  inter: ["Inter", "sans-serif"],
  urbanist: ["Urbanist", "sans-serif"],
  figtree: ["var(--global-font)", "sans-serif"],
}
```

### Custom Spacing

```javascript
spacing: {
  "7.5": "30px",
}
```

### Custom Drop Shadow

```javascript
dropShadow: {
  glow: "0 0 10px rgba(0, 255, 136, 0.3)",
}
```

---

## Global CSS

**File:** `src/app/globals.css` (~760 lines)

### Tailwind Imports

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### CSS Custom Properties

```css
:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', monospace;
  --font-para: 16px;
  --font-heading-1: 50px;
  --font-heading-2: 40px;
  --font-heading-3: 34px;
  --font-heading-4: 26px;
  --font-heading-5: 22px;
  /* Colors */
  --bg-color: #e5e5e5;
  --font-color-highlight: #5e6ad3;
  --theme-color: #0182ea;
}
```

### Key Utility Classes

| Class | Purpose |
|-------|---------|
| `.main-section-padding` | Standard section padding (responsive) |
| `.glass-effect` | Glassmorphism backdrop blur effect |
| `.page-active` | Active page indicator |
| `.header-btn` | Header button styles |
| `.gradient-button` | Gradient CTA button |
| `.reveal` / `.reveal.active` | Scroll reveal animation |
| `.blog-home` / `.blog-left` | Blog grid layout |

### Animation Keyframes

```css
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes rotationRight { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
@keyframes spin988 { /* spinner animation */ }
```

### Responsive Breakpoints in CSS

Media queries defined at: 1550px, 1366px, 1280px, 1152px, 1080px, 1024px, 991px, 767px

These adjust section padding, font sizes, and layout properties.

---

## SCSS Stylesheets

**Directory:** `src/app/styles/`

| File | Size | Purpose |
|------|------|---------|
| `custom-style.scss` | 17KB | General custom styles for various components |
| `Blogstyle.scss` | 16KB | Blog page specific styles (article rendering, TOC, author section) |
| `Homepage.scss` | 9KB | Homepage section styles (hero, expertise, industries) |
| `Services.scss` | - | Service page layouts |
| `ai-studio.scss` | - | AI Studio page styles |
| `mvp-style.scss` | - | MVP calculator page styles |
| `free-mockup-style.scss` | - | Free mockup page styles |
| `tab-sticky-style.scss` | - | Sticky tab navigation styles |
| `button.scss` | - | Button style overrides |
| `FetchDataSpinner.css` | - | Loading spinner animation |
| `Loader.css` | - | Loader component styles |

### SCSS Import

Homepage SCSS is imported globally in the root layout:

```javascript
// src/app/layout.js
import "./styles/Homepage.scss";
```

Other SCSS files are imported by their respective components.

---

## Font Configuration

### Google Font (Figtree)

**File:** `src/app/layout.js`

```javascript
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font",
});

// Applied to <html>
<html lang="en" className={`${figtree.variable}`}>
```

The `--global-font` CSS variable is then used in Tailwind config:

```javascript
fontFamily: {
  figtree: ["var(--global-font)", "sans-serif"],
}
```

---

## Next.js Configuration

**File:** `next.config.js`

### Core Settings

```javascript
const nextConfig = {
  trailingSlash: true,           // All URLs end with /
  swcMinify: true,               // Use SWC for minification
  experimental: {
    appDir: true,                // Enable App Router
    legacyBrowsers: false,       // Drop IE11 support
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
};
```

### Image Configuration

```javascript
images: {
  unoptimized: true,   // Disable Next.js image optimization
  domains: [
    "a.storyblok.com",
    "lh3.googleusercontent.com",
    "cdn-icons-png.flaticon.com",
    "brilworks-website-asset.s3.ap-south-1.amazonaws.com",
    "brilworks-site-assets.s3.eu-central-1.amazonaws.com",
    "d14lhgoyljo1xt.cloudfront.net",
  ],
}
```

Note: Images are `unoptimized: true` — Next.js Image component is used for layout but actual optimization is handled by CloudFront/CDN.

### Webpack Customization

```javascript
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true },
          output: { comments: false },
        },
      })
    );
  }
  return config;
}
```

Terser is added for production builds to:
- Drop `console.log` statements
- Remove code comments
- Additional JS minification beyond SWC

---

## Package Dependencies

**File:** `package.json`

### Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 13.4.5 | Framework |
| `react` | 18.2.0 | UI library |
| `react-dom` | 18.2.0 | DOM rendering |

### Storyblok

| Package | Version | Purpose |
|---------|---------|---------|
| `@storyblok/react` | 2.1.4 | React SDK |
| `storyblok-js-client` | 6.0.0 | API client |
| `storyblok-rich-text-react-renderer` | 2.8.0 | Rich text rendering |

### UI/Styling

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 3.3.2 | CSS framework |
| `sass` | 1.63.6 | SCSS compilation |
| `@material-tailwind/react` | 2.0.5 | Material UI components |
| `framer-motion` | 11.2.12 | Animations |
| `swiper` | 10.0.4 | Carousels/sliders |
| `@fortawesome/fontawesome-svg-core` | 6.4.0 | Icons |

### Data & Backend

| Package | Version | Purpose |
|---------|---------|---------|
| `@prisma/client` | 4.16.2 | Database ORM |
| `next-auth` | 4.22.1 | Authentication |
| `mongoose` | 8.7.0 | MongoDB ODM |
| `@supabase/supabase-js` | 2.45.4 | Supabase client |
| `bcrypt` | 5.1.0 | Password hashing |

### Email & Communication

| Package | Version | Purpose |
|---------|---------|---------|
| `@sendgrid/mail` | 7.7.0 | Email delivery |

### AI/ML

| Package | Version | Purpose |
|---------|---------|---------|
| `@google/generative-ai` | 0.21.0 | Google Gemini AI |

### Content Processing

| Package | Version | Purpose |
|---------|---------|---------|
| `html-react-parser` | 4.0.0 | HTML to React |
| `mammoth` | 1.6.0 | Word document parsing |

### AWS

| Package | Version | Purpose |
|---------|---------|---------|
| `@aws-sdk/client-s3` | 3.462.0 | S3 file management |
| `@aws-sdk/s3-request-presigner` | 3.462.0 | Pre-signed URLs |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@next/bundle-analyzer` | 14.0.4 | Bundle size analysis |
| `@types/react` | 18.2.14 | TypeScript definitions |

### NPM Scripts

```json
{
  "dev": "next dev",
  "build": "next build --no-lint",
  "start": "next start",
  "lint": "next lint",
  "postinstall": "prisma generate"
}
```

Note: `build` uses `--no-lint` flag to skip linting during builds.

---

## Environment Variables Reference

```env
# Storyblok CMS
NEXT_PUBLIC_ACCESS_TOKEN=          # Storyblok API token
NEXT_PUBLIC_STORYBLOK_VERSION=     # "draft" or "published"

# Application URLs
NEXT_PUBLIC_BASE_URL=              # e.g., https://www.brilworks.com
NEXT_PUBLIC_CLOUDFRONT_URL=        # CDN base URL for assets

# Vercel
VERCEL_ENV=                        # "production", "preview", or "development"

# Authentication (NextAuth)
NEXTAUTH_SECRET=                   # Session encryption key
NEXTAUTH_JWT_SECRET=               # JWT signing key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=      # Google OAuth client ID
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=  # Google OAuth secret

# Database
DATABASE_URL=                      # Prisma database connection string

# Email (SendGrid)
SENDGRID_API_KEY=
SENDGRID_DEFAULT_TO_EMAIL=
SENDGRID_DEFAULT_FROM_EMAIL=
SENDGRID_DEFAULT_CAREER_TEMPLATE_ID=

# CRM
HUBSPOT_API_KEY=

# Communication
SLACK_TOKEN=

# Analytics
facebook_pixelID=
googleTagManagerID=
NEXT_PUBLIC_TAWKPROPERTY_ID=      # Tawk.to chat widget
```

---

## Image Handling

### Storyblok to CloudFront URL Conversion

**Function:** `formatSrcUrl()` in `commonFunction.js`

Storyblok stores images at URLs like:
```
https://a.storyblok.com/f/12345/filename.jpg
```

These are converted to CloudFront URLs:
```
https://d14lhgoyljo1xt.cloudfront.net/assets/12345_filename.jpg
```

```javascript
export function formatSrcUrl(url) {
  if (!url) return "";
  const urlParts = url.split("/");
  const assetId = urlParts[urlParts.length - 2];
  const filename = urlParts[urlParts.length - 1];
  const newFileName = `${assetId}_${filename}`;
  return `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/${newFileName}`;
}
```

### Image Lazy Loading

Blog article images are lazy-loaded via `html-react-parser` transformation:

```javascript
// In Article.js
if (domNode.name === "img") {
  domNode.attribs.loading = "lazy";
}
```
