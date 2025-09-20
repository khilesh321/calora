import ViewCanvas from "@/components/ViewCanvas";
import AlternatingText from "@/sections/AlternatingText";
import Carousel from "@/sections/Carousel";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import SkyDive from "@/sections/SkyDive";
import ReactLenis from "lenis/react";

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
