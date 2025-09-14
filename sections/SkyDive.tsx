'use client';
import { SodaCan } from "@/components/SodaCan";
import { Float, View } from "@react-three/drei";
import { useRef } from "react";

export default function SkyDive() {
  const groupRef = useRef(null);
  const canref = useRef(null);
  const cloud1ref = useRef(null);
  const cloud2ref = useRef(null);
  const cloudsref = useRef(null);
  const wordsref = useRef(null);
  return (
    <section className="skydive min-h-screen bg-red-400">
      <View className="h-screen w-screen">
        <group ref={groupRef}>
          <Float>
            <SodaCan ref={canref} />
          </Float>
        </group>
      </View>
    </section>
  );
}
