'use client'
import React from "react";
import { Canvas } from "@react-three/fiber";
import { SodaCan } from "./SodaCan";
import { Environment, Float } from "@react-three/drei";

export default function ViewCanvas() {
  return (
    <Canvas style={{
      position: 'fixed',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, 0)',
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 20
    }}
    
    shadows 
    dpr={[1, 1.5]}
    gl={{ antialias: true }}
    camera={{fov: 30}}

    >
      <Float
        floatIntensity={2}
        speed={1}
        rotationIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <SodaCan />
      </Float>
      <Environment files={'./hdr/lobby.hdr'} environmentIntensity={1} />
    </Canvas>
  );
}
