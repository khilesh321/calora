"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, View } from "@react-three/drei";

export default function ViewCanvas() {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translate(-50%, 0)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 20,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 30 }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
