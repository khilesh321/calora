import ViewCanvas from "@/components/ViewCanvas";
import Carousel from "@/sections/Carousel";
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
      <div className="min-h-screen bg-red-300" />
      <div className="min-h-screen bg-red-400" />
    </div>
  );
}
