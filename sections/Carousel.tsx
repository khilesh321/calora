"use client";
import { ArrowIcon } from "@/components/ArrowIcon";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { WavyCircles } from "@/components/WavyCircles";
import { useGSAP } from "@gsap/react";
import { Center, Environment, Float, View } from "@react-three/drei";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, useState, useEffect } from "react";
import { Group } from "three";

gsap.registerPlugin(SplitText);

const SPINS_ON_CHANGE = 8;
const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blissfullBerry", color: "#8B0000", name: "Blissfull Berry" },
  { flavor: "blackLotus", color: "#222", name: "Black Lotus" },
  { flavor: "sereneGreen", color: "#164405", name: "Serene Green" },
];

export default function Carousel() {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);
  const continuousRotationRef = useRef<gsap.core.Tween | null>(null);

  const startContinuousRotation = () => {
    if (sodaCanRef.current && !continuousRotationRef.current) {
      continuousRotationRef.current = gsap.to(sodaCanRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        ease: "none",
        duration: 10,
        repeat: -1,
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startContinuousRotation();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (continuousRotationRef.current) {
        continuousRotationRef.current.kill();
      }
    };
  }, []);

  function changeFlavor(index: number) {
    if (!sodaCanRef.current) return;

    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    if (continuousRotationRef.current) {
      continuousRotationRef.current.kill();
      continuousRotationRef.current = null;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        startContinuousRotation();
      },
    });

    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  }

  useGSAP(() => {
    const split = new SplitText(".carousel-heading", {
      type: "chars",
      charsClass: "char",
    });
    split.chars.forEach((char: any, index) => {
      if (!char.querySelector("span")) {
        char.innerHTML = `<span>${char.textContent}</span>`;
      }
    });

    gsap.from('.carousel-heading span', {
      xPercent: 100,
      duration: 0.25,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".carousel",
        start: "top+=2000 center",
        end: "bottom+=2000 center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from('.carousel-desc', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".carousel-desc",
        start: "top+=1600 center",
        end: "bottom+=1700 center",
        toggleActions: "play none none reverse",
      },
    })
  });

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />

      <h2 className="relative carousel-heading text-center text-4xl sm:text-5xl font-semibold">
        Choose Your Flavor
      </h2>

      <div className="flex items-center justify-center">
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="left"
          label="Previous Flavor"
        />

        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <Float
              floatIntensity={0.3}
              speed={1}
              rotationIntensity={1}
              floatingRange={[-0.1, 0.1]}
            >
              <SodaCan
                ref={sodaCanRef}
                flavor={FLAVORS[currentFlavorIndex].flavor}
              />
            </Float>
          </Center>

          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>

        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="right"
          label="Next Flavor"
        />
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="mt-2 carousel-desc text-2xl font-normal opacity-90">
          12 cans - Rs 360
        </div>
      </div>
    </section>
  );
}
type ArrowButtonProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
};

function ArrowButton({
  label,
  onClick,
  direction = "right",
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={`${direction === "right" && "-scale-x-100"}`} />
      <span className="sr-only">{label}</span>
    </button>
  );
}
