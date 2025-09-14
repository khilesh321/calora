"use client";
import { SodaCan } from "@/components/SodaCan";
import ThreeText from "@/components/ThreeText";
import { useGSAP } from "@gsap/react";
import { Cloud, Clouds, Environment, Float, View } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import { Group } from "three";

type SkyDiveProps = {
  sentence?: string | null;
  flavor?: "sereneGreen" | "blackLotus" | "blissfullBerry";
};

export default function SkyDive({
  sentence = null,
  flavor = "blissfullBerry",
}: SkyDiveProps = {}) {
  const groupRef = useRef<Group>(null);
  const canRef = useRef<Group>(null);
  const cloud1Ref = useRef<Group>(null);
  const cloud2Ref = useRef<Group>(null);
  const cloudsRef = useRef<Group>(null);
  const wordsRef = useRef<Group>(null);

  const ANGLE = 75 * (Math.PI / 180);

  const getXPosition = (distance: number) => distance * Math.cos(ANGLE);
  const getYPosition = (distance: number) => distance * Math.sin(ANGLE);

  const getXYPositions = (distance: number) => ({
    x: getXPosition(distance),
    y: getYPosition(-1 * distance),
  });

  useGSAP(() => {
    function setup() {
      if (
        !cloudsRef.current ||
        !canRef.current ||
        !cloud1Ref.current ||
        !cloud2Ref.current
      ) {
        requestAnimationFrame(setup);
        return;
      }

      gsap.set(cloudsRef.current.position, { z: 10 });
      gsap.set(canRef.current.position, {
        ...getXYPositions(-4),
      });

      if (wordsRef.current && wordsRef.current.children.length > 0) {
        gsap.set(
          wordsRef.current.children.map((word: any) => word.position),
          { ...getXYPositions(7), z: 2 }
        );
      }

      gsap.to(canRef.current.rotation, {
        y: Math.PI * 10,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      const DISTANCE = 15;
      const DURATION = 6;

      gsap.set([cloud2Ref.current.position, cloud1Ref.current.position], {
        ...getXYPositions(DISTANCE),
      });

      gsap.to(cloud1Ref.current.position, {
        y: `+=${getYPosition(DISTANCE * 2)}`,
        x: `+=${getXPosition(DISTANCE * -2)}`,
        ease: "none",
        repeat: -1,
        duration: DURATION,
      });

      gsap.to(cloud2Ref.current.position, {
        y: `+=${getYPosition(DISTANCE * 2)}`,
        x: `+=${getXPosition(DISTANCE * -2)}`,
        ease: "none",
        repeat: -1,
        delay: DURATION / 2,
        duration: DURATION,
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skydive",
          pin: true,
          start: "top top",
          end: "+=2000",
          scrub: 2.5,
        },
      });

      scrollTl
        .to("body", {
          backgroundColor: "#C0F0F5",
          overwrite: "auto",
          duration: 0.1,
        })
        .to(cloudsRef.current.position, { z: 0, duration: 0.3 }, 0)
        .to(canRef.current.position, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
        });

      if (wordsRef.current && wordsRef.current.children.length > 0) {
        scrollTl.to(
          wordsRef.current.children.map((word: any) => word.position),
          {
            keyframes: [
              { x: 0, y: 0, z: -1 },
              { ...getXYPositions(-7), z: -7 },
            ],
            stagger: 0.3,
          },
          0
        );
      }

      scrollTl
        .to(canRef.current.position, {
          ...getXYPositions(4),
          duration: 0.5,
          ease: "back.in(1.7)",
        })
        .to(cloudsRef.current.position, { z: 7, duration: 0.5 });
    }

    setup();
  });

  return (
    <section className="skydive min-h-screen">
      <View className="h-screen w-screen">
        <group ref={groupRef}>
          <Float
            floatIntensity={2}
            speed={4}
            rotationIntensity={0.5}
            floatingRange={[-0.15, 0.15]}
          >
            <group rotation={[0, 0, 0.5]}>
              <SodaCan ref={canRef} flavor={flavor} />
              <pointLight intensity={30} color="#8c0413" decay={0.6} />
            </group>
          </Float>

          <Clouds ref={cloudsRef}>
            <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
            <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
          </Clouds>

          <group ref={wordsRef}>
            {sentence && <ThreeText sentence={sentence} color="#F97315" />}
          </group>

          {/* <OrbitControls /> */}
          <ambientLight intensity={2} color="#9DDEFA" />
          <Environment files={"./hdr/field.hdr"} environmentIntensity={1} />
        </group>
      </View>
    </section>
  );
}
