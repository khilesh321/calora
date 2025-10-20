import ViewCanvas from "@/components/ViewCanvas";
import AlternatingText from "@/sections/AlternatingText";
import Carousel from "@/sections/Carousel";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import SkyDive from "@/sections/SkyDive";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover Calora - premium natural soda with gut-friendly probiotics, zero calories, and refreshing flavors. Experience wellness in every sip with our Blissfull Berry, Black Lotus, and Serene Green varieties.",
  keywords: [
    "natural soda",
    "gut health",
    "probiotics",
    "zero calorie",
    "natural ingredients",
    "wellness drink",
    "premium beverage",
    "healthy soda",
    "blissfull berry",
    "black lotus",
    "serene green"
  ],
  openGraph: {
    title: "Calora - Premium Natural Soda for Gut Health",
    description: "Sip the calm, feel the aura. Natural ingredients, probiotics, zero calories. Three refreshing flavors: Blissfull Berry, Black Lotus, and Serene Green.",
    images: [
      {
        url: "/images/hero-bottles.png",
        width: 1200,
        height: 630,
        alt: "Calora natural soda bottles - Blissfull Berry, Black Lotus, Serene Green",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <ReactLenis root options={{ lerp: 0.07 }} />
      <ViewCanvas />
      <Hero />
      <SkyDive sentence={'Drink Different Drink Calora'} />
      <Carousel />
      <AlternatingText />
      <Footer />
      {/* <div className="min-h-screen bg-red-300" />
      <div className="min-h-screen bg-red-400" /> */}
    </div>
  );
}
