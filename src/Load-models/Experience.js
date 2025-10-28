import React, { Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model.js";
import PlaceHolder from "./PlaceHolder.js";

const Experience = () => {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
      />
      <ambientLight intensity={1.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense
        fallback={
          <PlaceHolder position-x={2} rotation-y={Math.PI * 0.2} />
        }
      >
        <Model />
      </Suspense>
    </>
  );
};

export default Experience;
