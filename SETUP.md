# Quick Setup Guide

## ✅ Migration Complete!

Your Gatsby site has been successfully migrated to Next.js 15.

## 🚀 Quick Start

### 1. Environment Variables

Update your `.env` file (or create from `.env.example`):

```bash
# OLD (Gatsby)
GATSBY_AIRTABLE_API=your_key
GATSBY_GOOGLE_ANALYTICS_ID=your_id

# NEW (Next.js) - Add NEXT_PUBLIC_ prefix
NEXT_PUBLIC_AIRTABLE_API=your_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_id
NEXT_PUBLIC_MAILCHIMP_URL=your_url
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_id
```

### 2. Add Static Images

Place your images in `public/images/`:
- `public/images/playVid.png` - Play video overlay
- `public/images/sentimental-fool-cover.jpg` - Album cover for popup

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` (or the port shown in terminal)

### 4. Build for Production

```bash
# Standard build with Node.js server
npm run build
npm start

# OR static export (recommended for CDN)
npm run export
# Deploy the 'out/' directory to any static host
```

## 📋 What Changed

### ✅ Working Out of the Box
- All React components (no changes needed)
- Styled-components (configured natively)
- All custom hooks
- Context providers
- Custom fonts
- SVG imports

### 🔄 Updated Automatically
- Gatsby Link → Next.js Link (href prop)
- GraphQL queries → Airtable API calls
- gatsby-image → next/image
- react-helmet → next/head

### 🎨 Custom Implementations (No Extra Dependencies)
- News ticker (CSS animation)
- Page visibility (native API)

## 🎯 Key Features

- **Static Generation**: Music and Info pages pre-rendered at build time
- **Client-side Fetching**: Shop and Shows fetch real-time data
- **Image Optimization**: Next.js Image component for all images
- **SEO Ready**: Proper meta tags and Open Graph support
- **Fast Refresh**: Hot reload during development
- **Static Export**: Deploy to any CDN or static host

## 📁 Project Structure

```
leeFieldsGatsby/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   ├── music/page.js      # Music page (SSG)
│   ├── info/page.js       # Info page (SSG)
│   ├── tour/page.js       # Tour page
│   ├── shop/page.js       # Shop page
│   └── not-found.js       # 404 page
├── src/
│   ├── components/        # All React components
│   ├── context/           # Global state
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   │   ├── airtable.js    # Data fetching
│   │   └── usePageVisibility.js
│   └── styles/            # Global styles & theme
├── public/                # Static assets
│   ├── images/           # Static images
│   └── fonts/            # Custom fonts
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

**Note:** The old `src/pages/` directory has been removed (all pages are now in `app/`)

## 🐛 Common Issues

### Port Already in Use
If port 3000 is in use, Next.js will automatically use the next available port (e.g., 3002).

### Airtable Data Not Loading
1. Check environment variables are prefixed with `NEXT_PUBLIC_`
2. Verify Airtable API key is valid
3. Check browser console for errors

### Images Not Showing
1. Ensure images are in `public/images/` directory
2. Reference them as `/images/filename.jpg` (not `./images/...`)

### Styled Components Issues
Styled-components should work automatically. If not:
1. Clear `.next` folder: `rm -rf .next`
2. Restart dev server: `npm run dev`

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Styled Components with Next.js](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run export
# Drag and drop the 'out' folder to Netlify
```

### Any Static Host
```bash
npm run export
# Upload the 'out' directory
```

## ✨ Benefits

- **Faster**: Next.js compiler is faster than Gatsby's webpack
- **Modern**: Latest React 18 features
- **Flexible**: Easy to add API routes if needed
- **Portable**: Static export works anywhere
- **Maintained**: Active development and updates

Need help? Check `MIGRATION.md` for detailed migration notes.
