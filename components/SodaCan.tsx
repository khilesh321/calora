"use client";

import { forwardRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  sereneGreen: "/labels/calora-green.png",
  blackLotus: "/labels/calora-black.png",
  blissfullBerry: "/labels/calora-pink.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export const SodaCan = forwardRef<THREE.Group, SodaCanProps>(
  (
    { flavor = "sereneGreen", scale = 2, position, rotation, ...props },
    ref
  ) => {
    const { nodes } = useGLTF("/Soda-can.gltf");

    const labels = useTexture(flavorTextures);

    // Fixes upside down labels
    labels.sereneGreen.flipY = false;
    labels.blackLotus.flipY = false;
    labels.blissfullBerry.flipY = false;

    const label = labels[flavor];

    // Combine custom rotation with the default Y rotation
    const finalRotation: [number, number, number] = rotation
      ? [rotation[0], rotation[1] - Math.PI, rotation[2]]
      : [0, -Math.PI, 0];

    return (
      <group
        {...props}
        ref={ref}
        dispose={null}
        scale={scale}
        position={position}
        rotation={finalRotation}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.cylinder as THREE.Mesh).geometry}
          material={metalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
        >
          <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tab as THREE.Mesh).geometry}
          material={metalMaterial}
        />
      </group>
    );
  }
);
