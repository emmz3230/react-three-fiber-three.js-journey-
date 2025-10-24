import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./first-r3f-app/Experience";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outPutEncoding: THREE.sRGBEncoding,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
  </React.StrictMode>
);
