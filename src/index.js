import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./r3f-portfolio/Experience";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    {/* <Leva collapsed /> */}

    <Canvas
      // gl={{
      //   antialias: true,
      //   toneMapping: THREE.ACESFilmicToneMapping,
      //   outPutEncoding: THREE.sRGBEncoding,
      // }}
      // flat
      shadows={false}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      {/* <color args={["#ff0000"]} attach="background" /> */}
      <Experience />
    </Canvas>
  </StrictMode>
);
