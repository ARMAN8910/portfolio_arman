import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Globe } from "./Wonderful_world";

const RotatingRoom = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref} scale={0.5} position={[0, 0, 0]}>
      <Globe />
    </group>
  );
};

const Experience = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <RotatingRoom />
    </Canvas>
  );
};

export default Experience;
