"use client";
import { Bubbles } from "@/components/Bubbles";
import Calora from "@/components/Calora";
import { SodaCan } from "@/components/SodaCan";
import { useGSAP } from "@gsap/react";
import { Environment, Float, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {

  // const isDesktop = useMediaQuery({ minWidth: 768 });
  const FLOATING_SPEED = 1.5;

  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  // UI Animations only
  useGSAP(() => {
    const introTl = gsap.timeline();
    introTl
      .from(".hero1-logo", {
        opacity: 0,
        duration: 0.6,
      })
      .from(
        ".hero1-text",
        {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        },
        "<"
      )
      .from(
        ".hero1-subheading",
        {
          y: 30,
          opacity: 0,
        },
        "=+0.8"
      )
      .from(".hero1-body", {
        y: 10,
        opacity: 0,
      })
      .from(".hero1-button", {
        y: 10,
        opacity: 0,
        duration: 0.6,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 2.5,
      },
    });

    const hero2Text = new SplitText(".hero2-text", { type: "chars" });

    scrollTl
      .to(
        "body",
        {
          backgroundColor: "#d9d99d",
          overwrite: "auto",
        },
        1
      )
      .from(hero2Text.chars, {
        y: 40,
        scale: 1.3,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".hero2-body", {
        y: 20,
        opacity: 0,
      });
  });

  // 3D Animations - wait for refs to be ready
  useLayoutEffect(() => {
    const setup3DAnimations = () => {
      if (
        !can1Ref.current ||
        !can2Ref.current ||
        !can3Ref.current ||
        !can1GroupRef.current ||
        !can2GroupRef.current ||
        !groupRef.current
      ) {
        requestAnimationFrame(setup3DAnimations);
        return;
      }

      gsap.set(can1Ref.current.position, { x: -1.5 });
      gsap.set(can2Ref.current.position, { x: 1.5 });
      gsap.set(can3Ref.current.position, { y: 5 });

      gsap.set(can1Ref.current.rotation, { z: 0.5 });
      gsap.set(can2Ref.current.rotation, { z: -0.5 });
      gsap.set(can3Ref.current.rotation, { y: -0.2 });

      const introTl = gsap.timeline({
        defaults: {
          duration: 3,
          ease: "back.out(1.4)",
        },
      });

      if (window.scrollY < 20) {
        introTl
          .from(can1Ref.current.position, { x: 1, y: -5 }, 0)
          .from(can1Ref.current.rotation, { z: 3 }, 0)
          .from(can2Ref.current.position, { x: 1, y: 5 }, 0)
          .from(can2Ref.current.rotation, { z: 3 }, 0);
      }

      const scrollTl = gsap.timeline({
        defaults: { duration: 2 },
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .to(groupRef.current.rotation, { y: Math.PI * 2, ease: "none" }, 0)
        .to(can1Ref.current.position, { x: 1, z: -1 }, 0)
        .to(can2Ref.current.position, { x: 0.3, z: 0 }, 0)
        .to(can2Ref.current.rotation, { z: 0 }, 0)
        .to(can3Ref.current.position, { x: -0.3, y: 0, z: -1 }, 0)
        .to(can3Ref.current.rotation, { z: 0.5 }, 0)
        .to(groupRef.current?.position, { x: 1, y: -0.5, ease: 'sine.inOut' }, 0);
    };

    if(window.innerWidth >= 768) {
      setup3DAnimations();
    }
  }, []);

  return (
    <>
      <View className="hero-scene h-screen w-screen pointer-events-none sticky -mt-[100vh] top-0 z-50 hidden md:block">
        <group ref={groupRef}>
          <group ref={can1GroupRef}>
            <Float
              floatIntensity={2}
              speed={FLOATING_SPEED}
              rotationIntensity={0.5}
              floatingRange={[-0.1, 0.1]}
            >
              <SodaCan ref={can1Ref} flavor="blackLotus" />
            </Float>
          </group>

          <group ref={can2GroupRef}>
            <Float
              floatIntensity={2}
              speed={FLOATING_SPEED}
              rotationIntensity={0.5}
              floatingRange={[-0.1, 0.1]}
            >
              <SodaCan ref={can2Ref} flavor="sereneGreen" />
            </Float>
          </group>

          <Float
            floatIntensity={2}
            speed={FLOATING_SPEED}
            rotationIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
          >
            <SodaCan ref={can3Ref} flavor="blissfullBerry" />
          </Float>
        </group>
        {/* <OrbitControls /> */}
        <Environment files={"./hdr/lobby.hdr"} environmentIntensity={1} />
        <Bubbles count={300} speed={2} repeat={true} />
      </View>

      <section className="hero">
        <section className="min-h-screen flex flex-col items-center justify-center">
          <Calora className="hero1-logo text-sky-800 -mt-10" />

          <div className="text-center font-[alpino] pointer-events-none -mt-4 space-y-0.5 text-8xl md:text-[9rem] lg:text-[13rem] font-black text-orange-500 leading-[.8] uppercase">
            <h1 className="hero1-text">Live</h1>
            <h1 className="hero1-text">Gutsy</h1>
          </div>

          <div className="text-sky-950 text-center -mt-2 font-fredoka">
            <h2 className="hero1-subheading mt-12 text-4xl lg:text-6xl font-semibold">
              Pure Calm
            </h2>
            <p className="hero1-body text-xl md:text-2xl font-normal">
              3-5g sugar. 9g fiber. 3 delicious flavors.
            </p>
          </div>

          <button className="hero1-button mt-6 uppercase bg-orange-600 hover:bg-orange-700 transition-colors duration-200 cursor-pointer text-white text-xl py-4 px-8 rounded-xl font-semibold tracking-wider">
            Shop Now
          </button>
        </section>

        <section className="md:min-h-screen w-full flex justify-between max-sm:flex-col">
          <div className="md:w-1/3 flex flex-col justify-center items-center">
            <div className="md:pl-15 text-sky-950">
              <h2 className="uppercase text-7xl max-md:text-center md:text-8xl font-black">
                <span className="hero2-text block">
                  Try All
                  <br />
                  Three
                  <br />
                  Flavors
                </span>
              </h2>
              <p className="hero2-body w-full md:w-[95%] mt-5 text-lg max-md:text-center text-sky-950/80">
                Our tea is crafted with handpicked organic leaves and soothing
                natural herbs. We never use artificial flavors or preservatives.
                Explore all three blends and discover your moment of calm!
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:hidden max-sm:mt-15 max-sm:mb-5 flex items-center justify-center">
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
    </>
  );
}
