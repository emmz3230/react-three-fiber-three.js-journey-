import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./r3f-game/Experience";
import { KeyboardControls } from "@react-three/drei";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    {/* <Leva collapsed /> */}
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "keyW"] },
        { name: "backward", keys: ["ArrowDown", "keyS"] },
        { name: "leftward", keys: ["ArrowLeft", "keyA"] },
        { name: "rightward", keys: ["ArrowRight", "keyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
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
    </KeyboardControls>
  </StrictMode>
);
