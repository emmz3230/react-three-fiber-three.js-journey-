import React from "react";
import {
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

const Experience = () => {
  const computer = useGLTF("");
  return (
    <>
      <Environment preset="city" />
      <color args={["#695b5b"]} attach="background" />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <primitve object={computer.scene} position-y={-1.2} />
        </Float>
      </PresentationControls>
    </>
  );
};

export default Experience;
