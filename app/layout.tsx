import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Calora - Sip the Calm, Feel the Aura",
    template: "%s | Calora"
  },
  description: "Calora isn’t just a drink — it’s an experience. Crafted with natural ingredients and infused with refreshing flavors, Calora is designed to bring balance to your day. Whether you’re looking to unwind, recharge, or simply enjoy a mindful sip, Calora delivers calm energy in every bottle. Light, refreshing, and full of good vibes — this is wellness you can taste.",
  keywords: [
    "natural soda",
    "gut health drink",
    "probiotic beverage",
    "zero calorie drink",
    "natural ingredients",
    "wellness drink",
    "mindful sipping",
    "healthy beverage",
    "calora soda",
    "premium soda"
  ],
  authors: [{ name: "Calora Team" }],
  creator: "Calora",
  publisher: "Calora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calora-drinks.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Calora - Sip the Calm, Feel the Aura",
    description: "Experience wellness in every sip. Natural ingredients, gut-friendly probiotics, and zero calories. Discover the perfect balance of taste and health.",
    url: "https://calora-drinks.vercel.app",
    siteName: "Calora",
    images: [
      {
        url: "/images/hero-bottles.png",
        width: 1200,
        height: 630,
        alt: "Calora premium natural soda bottles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calora - Sip the Calm, Feel the Aura",
    description: "Experience wellness in every sip. Natural ingredients, gut-friendly probiotics, and zero calories.",
    images: ["/images/hero-bottles.png"],
    creator: "@calora",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/calora-favicon.svg',
    shortcut: '/calora-favicon.svg',
    apple: '/calora-favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${alpino.variable}`} suppressHydrationWarning>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Calora",
              "url": "https://calora-drinks.vercel.app",
              "logo": "https://calora-drinks.vercel.app/calora-logo.svg",
              "description": "Premium natural soda with gut-friendly probiotics, zero calories, and refreshing flavors",
              "foundingDate": "2024",
              "sameAs": [
                "https://www.instagram.com/calora",
                "https://www.twitter.com/calora"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@calora.com"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Calora Products",
                "itemListElement": [
                  {
                    "@type": "Product",
                    "name": "Blissfull Berry",
                    "description": "Sweet and tangy berry flavor with natural ingredients",
                    "category": "Beverage",
                    "brand": "Calora"
                  },
                  {
                    "@type": "Product",
                    "name": "Black Lotus",
                    "description": "Mysterious and sophisticated dark flavor",
                    "category": "Beverage",
                    "brand": "Calora"
                  },
                  {
                    "@type": "Product",
                    "name": "Serene Green",
                    "description": "Calming green tea inspired flavor",
                    "category": "Beverage",
                    "brand": "Calora"
                  }
                ]
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
