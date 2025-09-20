import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Calora - Sip the Calm, Feel the Aura",
  description: "Calora isn’t just a drink — it’s an experience. Crafted with natural ingredients and infused with refreshing flavors, Calora is designed to bring balance to your day. Whether you’re looking to unwind, recharge, or simply enjoy a mindful sip, Calora delivers calm energy in every bottle. Light, refreshing, and full of good vibes — this is wellness you can taste.",
  icons: {
    icon: 'calora-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${alpino.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
