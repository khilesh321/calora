"use client";
import { SodaCan } from "@/components/SodaCan";
import { useGSAP } from "@gsap/react";
import { Environment, Float, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

export default function AlternatingText() {
  const canGroupRef = useRef<Group>(null);
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  useGSAP(() => {
    function setup() {
      if (!canGroupRef.current) {
        requestAnimationFrame(setup);
        return;
      }

      ScrollTrigger.create({
        trigger: ".alternating-text-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: () => {
          const container = document.querySelector(
            ".alternating-text-container"
          ) as HTMLElement;
          const containerTop = container ? container.offsetTop : 0;
          const newY = window.scrollY - containerTop;
          gsap.set(".alternating-text-view", { top: newY });
        },
      });

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-item2",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });

      tl1.to(
        canGroupRef.current.position,
        {
          x: -1,
          duration: 1,
          ease: "none",
        },
        0
      );
      tl1.to(
        canGroupRef.current.rotation,
        {
          y: Math.PI * 2,
          duration: 1,
          ease: "none",
        },
        0
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-item3",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });

      tl2
        .to(
          canGroupRef.current.position,
          {
            x: 1,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(
          canGroupRef.current.rotation,
          {
            y: Math.PI / 2 + 0.5,
            duration: 1,
            ease: "none",
          },
          0
        );
    }

    setup();
  });

  return (
    <section className="min-h-[300vh]">
      <div className="relative alternating-text-container z-[100] grid">
        <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
          <group
            ref={canGroupRef}
            position-x={isDesktop ? 1 : 0}
            rotation-y={-0.55}
          >
            <Float
              floatIntensity={2}
              speed={2}
              rotationIntensity={0.5}
              floatingRange={[-0.05, 0.05]}
            >
              <SodaCan flavor="sereneGreen" />
            </Float>
            <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1} />
          </group>
        </View>

        <div className="alternating-text-item1 h-screen md:w-[80%] md:mx-auto flex flex-col justify-center">
          <div>
            <h1 className="text-6xl text-black/90 font-semibold mb-5">
              Gut Care
            </h1>
            <p className="w-[40%] text-xl text-black/80">
              Packed with prebiotics and 1 billion probiotics, Calora supports
              smooth digestion and reduces bloating — keeping your gut light and
              healthy with every sip.
            </p>
          </div>
        </div>
        <div className="alternating-text-item2 h-screen md:w-[80%] md:mx-auto flex flex-col justify-center">
          <div className="pl-[60%]">
            <h1 className="text-6xl text-black/90 font-semibold mb-5">
              Zero Guilt
            </h1>
            <p className="w-[90%] text-xl text-black/80">
              With 0 calories and no caffeine, Calora delivers bold, refreshing
              taste without compromise. Sip freely, anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="alternating-text-item3 h-screen md:w-[80%] md:mx-auto flex flex-col justify-center">
          <div>
            <h1 className="text-6xl text-black/90 font-semibold mb-5">
              All Natural
            </h1>
            <p className="w-[40%] text-xl text-black/80">
              Made only with the finest natural ingredients, Calora contains no
              artificial sweeteners or flavors — just clean, crisp refreshment
              you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
