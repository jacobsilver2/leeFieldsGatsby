# Next.js Migration Guide

This project has been migrated from Gatsby to Next.js 15.

## Key Changes

### 1. Framework Migration
- **Gatsby 4** → **Next.js 15** with App Router
- Static Site Generation (SSG) with `getStaticProps` is now handled with Server Components
- Client-side components marked with `'use client'` directive

### 2. Routing
- `src/pages/` (Gatsby) → `app/` directory (Next.js App Router)
- File-based routing using `page.js` files
- Dynamic routes remain similar concept

### 3. Data Fetching
- GraphQL queries removed
- Direct Airtable API calls via `src/lib/airtable.js`
- Static data fetched at build time in Server Components
- Dynamic data (shop, shows) fetched client-side

### 4. Images
- `gatsby-image` → `next/image`
- `GatsbyImage` → `Image` from `next/image`
- SVGs handled via `@svgr/webpack`

### 5. Links
- `gatsby` Link → `next/link`
- `to` prop → `href` prop

### 6. SEO
- `react-helmet` → `next/head`
- Metadata now handled in layout and page components

### 7. Styling
- Styled-components remains the same
- Added `StyledComponentsRegistry` for proper SSR

### 8. Environment Variables
- `GATSBY_*` → `NEXT_PUBLIC_*`
- Update all env vars in `.env` file

### 9. Package Replacements
- `react-ticker` → Custom CSS animation ticker (no dependency)
- `react-page-visibility` → Custom hook `usePageVisibility` (no dependency)
- `react-scrolllock` → Removed (not in use)
- `gatsby-plugin-mailchimp` → Custom fetch implementation
- `moment` → Native JavaScript Date objects
- All packages now compatible with React 18 without `--legacy-peer-deps`

## Installation

```bash
# Install dependencies (no legacy-peer-deps needed!)
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your actual values

# Note: Place static images in public/images/
# Example: public/images/playVid.png, public/images/sentimental-fool-cover.jpg
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Build

### Standard Build (with Node.js server)
```bash
npm run build
npm start
```

### Static Export (fully static site)
```bash
npm run export
```

This will create a fully static site in the `out/` directory that can be deployed to any static hosting service.

## Deployment

The site is configured for static export (`output: 'export'` in `next.config.js`).

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
npm run export
# Deploy the 'out' directory
```

### Other Static Hosts
Build with `npm run export` and deploy the `out/` directory.

## Pages

- `/` - Homepage with featured video and tour dates
- `/music` - Discography (SSG with Airtable data)
- `/tour` - Tour dates (client-side fetched)
- `/shop` - Shop with category filtering (client-side fetched)
- `/info` - About and Contact pages (SSG with Airtable data)

## Notable File Changes

### New Files
- `next.config.js` - Next.js configuration with native styled-components support
- `app/layout.js` - Root layout with providers
- `app/registry.js` - Styled-components SSR registry
- `app/page.js` - Homepage
- `app/*/page.js` - Individual page routes
- `src/lib/airtable.js` - Airtable data fetching utilities
- `src/lib/usePageVisibility.js` - Custom page visibility hook

### Modified Files
- `package.json` - Updated dependencies
- `src/components/layout.js` - Removed GraphQL, added 'use client'
- `src/components/seo.js` - Uses next/head instead of react-helmet
- All navigation components - Updated Link imports
- `src/components/VideoModal.js` - Accepts videos as props

### Removed Files (can be deleted)
- `gatsby-*.js` files
- `rootWrapper.js` (logic moved to app/layout.js)

## Static Optimization

The site is configured for maximum static generation:
- All pages that can be static are pre-rendered at build time
- `revalidate: 3600` on data-fetching pages (revalidates every hour)
- Shop and Shows pages fetch data client-side for real-time updates
- Images are optimized with Next.js Image component
- Static export enabled for CDN deployment

## Troubleshooting

### Styled-components not working
Styled-components is configured natively in `next.config.js` using Next.js's built-in compiler. No Babel configuration needed.

### Environment variables not working
Ensure all env vars are prefixed with `NEXT_PUBLIC_` for client-side access.

### Images not loading
Check that image paths are correct and images are in the `public/` directory.

### Build errors
Run `npm run lint` to check for common issues.
