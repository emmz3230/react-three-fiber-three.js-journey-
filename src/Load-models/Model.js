import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("./hamburger.glb");

  return (
    <primitive object={model.scene} scale={0.35} position={-1} />
  );
}

useGLTF.preload("./hamburger.glb");
