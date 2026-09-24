# Calora

Calora is a premium wellness beverage brand landing page built with Next.js, TypeScript, and modern 3D web experiences. The project presents a product-focused storytelling experience for a natural soda brand centered on gut-friendly probiotics, zero-calorie ingredients, and refreshing flavor profiles.

## Overview

This repository contains a polished single-page marketing website for Calora, designed to feel premium, playful, and health-forward. The experience combines:

- immersive hero storytelling and motion-driven brand sections
- interactive 3D product visuals using React Three Fiber and Drei
- animated flavor selection with GSAP-driven transitions
- responsive layout optimized for mobile and desktop
- SEO configuration for search indexing and social sharing

The app is intentionally crafted as a modern beverage brand landing page with a premium visual style, using bold typography, rich gradients, and animated motion to emphasize the product identity.

## Brand Positioning

Calora is positioned as a natural soda alternative for wellness-conscious consumers. The messaging highlights:

- gut-friendly probiotics
- zero calories
- natural ingredients
- balanced flavor profiles
- clean, lifestyle-driven branding

The site centers around three flavor variants:

- Blissfull Berry
- Black Lotus
- Serene Green

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GSAP
- @react-three/fiber
- @react-three/drei
- Three.js
- Lenis scroll library
- ESLint

## Key Features

### 3D Product Experience
The application uses Three.js-based rendering to showcase product cans in a cinematic environment. This includes floating product positioning, textured environment lighting, and animated motion to create a premium lifestyle product feel.

### Scroll-Driven Storytelling
The landing page uses GSAP timelines and ScrollTrigger patterns to animate transitions across sections, guiding visitors through a brand narrative from hero messaging to flavor exploration.

### Interactive Flavor Carousel
Users can switch between Calora's three flavors via a custom interactive carousel. The motion system updates the surrounding color palette, product state, and content dynamically.

### Responsive Design
The layout is designed to adapt across screen sizes, ensuring a strong experience on both mobile and large desktop displays while preserving the immersive branding.

### SEO and Metadata
The app includes metadata, Open Graph cards, Twitter card setup, robots configuration, and a sitemap to support discoverability and brand presentation in search and social channels.

## Repository Structure

```text
calora/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ArrowIcon.tsx
│   ├── Bubbles.tsx
│   ├── Calora.tsx
│   ├── SodaCan.tsx
│   ├── Spinner.tsx
│   ├── ThreeText.tsx
│   ├── ViewCanvas.tsx
│   └── WavyCircles.tsx
├── public/
│   ├── fonts/
│   ├── hdr/
│   ├── images/
│   ├── labels/
│   ├── calora-favicon.svg
│   ├── calora-logo.svg
│   ├── Soda-can.bin
│   ├── Soda-can.gltf
│   ├── manifest.json
│   └── ...
├── sections/
│   ├── AlternatingText.tsx
│   ├── Carousel.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── SkyDive.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Core Application Flow

### App Entry
The entry point is `app/page.tsx`, which assembles the homepage sections:

- `Hero`
- `SkyDive`
- `Carousel`
- `AlternatingText`
- `Footer`

It also includes global smooth scrolling via `lenis/react` and renders the `ViewCanvas` background component.

### Root Layout and SEO
`app/layout.tsx` defines the root metadata, brand information, Open Graph tags, Twitter metadata, manifest, canonical URL, and structured JSON-LD data for the company and its product catalog.

### Styling
`app/globals.css` includes global theme styling, typography setup, and custom animation helpers used across the site.

### Section Components
The page is broken into focused sections in the `sections/` directory:

- `Hero.tsx`: hero branding, product composition, dramatic copy, and motion behavior
- `Carousel.tsx`: interactive flavor selector and 3D can viewer
- `Footer.tsx`: final brand statement and animated closing section
- `AlternatingText.tsx`: additional text-driven visual transitions
- `SkyDive.tsx`: headline or brand statement section

## Scripts

Use the following commands from the project root:

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run dev     # start the Next.js development server
npm run build   # create a production build
npm run start   # run the production server
npm run lint    # run ESLint checks
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the app in development mode:

```bash
npm run dev
```

3. Open the local site in your browser:

```text
http://localhost:3000
```

## Production Deployment

This project is configured for deployment on Vercel with Next.js and is aligned with the standard modern deployment workflow for Next.js applications.

Recommended deployment path:

- Connect the repository to Vercel
- Import the project using the Next.js preset
- Set any required environment variables if introduced later
- Deploy and verify metadata, SEO output, and page rendering

## SEO and Metadata Notes

The application includes:

- branded metadata in `app/layout.tsx`
- social preview configuration for Open Graph and Twitter
- sitemap generation at `app/sitemap.ts`
- robots configuration in `app/robots.ts`
- manifest setup in `public/manifest.json`

This helps support content discoverability and improves how the brand appears when shared online.

## Notes

- The project uses the `@/*` import alias commonly configured for Next.js apps.
- 3D assets such as the can model and environment HDR files are stored in the `public/` directory.
- The project is primarily a marketing landing page rather than a multi-page commerce application.

## License

This project currently does not declare a license in the repository metadata. If you intend to publish or distribute the project publicly, consider adding an appropriate license file such as MIT.

## Summary

Calora is a premium beverage branding experience built as a high-impact, motion-rich marketing site. The project combines modern frontend development, interactive 3D experiences, and brand storytelling to present a wellness-focused soda product in a compelling, memorable way.

For future expansion, the project is well positioned for additional pages such as product detail views, an about section, a shop experience, or a full ecommerce flow.
