import Calora from "@/components/Calora";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Calora className="text-sky-800 -mt-10" />

        <div className="text-center font-[alpino] pointer-events-none -mt-4 space-y-0.5">
          <h1 className="text-7xl md:text-[9rem] lg:text-[13rem] font-black text-orange-500 leading-[.8] uppercase">Live</h1>
          <h1 className="text-7xl md:text-[9rem] lg:text-[13rem] font-black text-orange-500 leading-[.8] uppercase">Gutsy</h1>
        </div>

        <div className="text-sky-950 text-center -mt-2 font-fredoka">
          <h2 className="mt-12 text-5xl lg:text-6xl font-semibold">Pure Calm</h2>
          <p className="text-2xl font-normal">3-5g sugar. 9g fiber. 5 delicious flavors.</p>
        </div>

        <button className="mt-6 uppercase bg-orange-600 hover:bg-orange-700 transition-colors duration-200 cursor-pointer text-white text-xl py-4 px-8 rounded-xl font-semibold tracking-wider">Shop Now</button>
      </section>

      <section className="h-[70vh] md:min-h-screen w-full flex justify-between max-sm:flex-col">
        <div className="md:w-1/3 flex flex-col justify-center items-center">
          <div className="md:pl-15 text-sky-950">
            <h2 className="uppercase text-7xl max-md:text-center md:text-8xl font-black">
              <span className="block">Try All</span>
              <span className="block">Three</span>
              <span className="block">Flavors</span>
            </h2>
            <p className="w-full md:w-[95%] mt-5 text-lg max-md:text-center text-sky-950/80">Our tea is crafted with handpicked organic leaves and soothing natural herbs. We never use artificial flavors or preservatives. Explore all three blends and discover your moment of calm!</p>
          </div>
        </div>

        <div className='w-full md:w-2/3 md:hidden mb-5 flex items-center justify-center'>
          <Image
            src="/images/hero-bottles.png"
            alt="Hero Bottles"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </section>
  )
}
