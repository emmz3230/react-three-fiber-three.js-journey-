import React from "react";
import { OrbitControls } from "@react-three/drei";
import { folder, button, useControls } from "leva";
import { Perf } from "r3f-perf";

const Experience = () => {
  const { perfVisible } = useControls({ perfVisible: true });
  const { x, y, z, joystick, color, visible, choice } = useControls({
    x: { value: -2, step: 0.01 },
    y: { value: 0, step: 0.01 },
    z: { value: 0, step: 0.01 },
    joystick: "invertY",
    color: "#ff0000",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 3],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });
  const { cubeScale } = useControls("cube", {
    cubeScale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position={[x, y, z]}>
        <sphereGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh
        rotation-y={Math.PI * 0.25}
        position-x={2}
        scale={1.5}
        visible={visible}
      >
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
