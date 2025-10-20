This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## SEO Optimization

This project includes comprehensive SEO optimizations:

### ✅ Implemented Features
- **Meta Tags**: Complete Open Graph, Twitter Cards, and standard meta tags
- **Structured Data**: JSON-LD schema for Organization and Products
- **Sitemap**: Auto-generated XML sitemap (`/sitemap.xml`)
- **Robots.txt**: Search engine crawling instructions (`/robots.txt`)
- **PWA Manifest**: Web app manifest for better mobile experience
- **Image Optimization**: Next.js Image component with proper alt texts
- **Performance**: Optimized fonts, lazy loading, and Core Web Vitals

### 🔧 Configuration Files
- `app/layout.tsx` - Global metadata and structured data
- `app/page.tsx` - Page-specific metadata
- `app/sitemap.ts` - Dynamic sitemap generation
- `app/robots.ts` - Search engine instructions
- `public/manifest.json` - PWA configuration

### 📊 SEO Checklist
- [x] Title tags and meta descriptions
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] Structured data (Schema.org)
- [x] XML sitemap
- [x] Robots.txt
- [x] Mobile-friendly design
- [x] Fast loading times
- [x] Semantic HTML structure
- [x] Alt text for images

### 🚀 Next Steps for Production
1. Update domain in metadata (`https://calora.com`)
2. Add Google Analytics tracking
3. Submit sitemap to Google Search Console
4. Set up Google Analytics and Search Console
5. Monitor Core Web Vitals
6. Add more structured data as content grows

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
