import React, { useRef } from "react";
import * as THREE from "three";
import {
  Environment,
  Sky,
  ContactShadows,
  RandomizedLight,
  AccumulativeShadows,
  Shadow,
  BakeShadows,
  useHelper,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const Experience = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const cube = useRef();

  useFrame((state, delta) => {
    // console.log(cube);
    // const time = state.clock.elapsedTime;
    // cube.current.position.x = 2 + Math.sin(time);
    cube.current.rotation.y += delta * 0.2;
  });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity } = useControls("environment map", {
    envMapIntensity: { value: 1, min: 0, max: 12 },
  });

  return (
    <>
      <Environment
        files={[
          "./environmentMaps/2/px.jpg",
          "./environmentMaps/2/nx.jpg",
          "./environmentMaps/2/py.jpg",
          "./environmentMaps/2/ny.jpg",
          "./environmentMaps/2/pz.jpg",
          "./environmentMaps/2/nz.jpg",
        ]}
      />
      {/* <BakeShadows /> */}
      {/* <Shadow
        frustum={3.75}
        size={50}
        near={9.5}
        rings={11}
        samples={17}
      /> */}

      <color args={["ivory"]} attach="background" />

      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <ContactShadows
        positions={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      />
      {/* <directionalLight
        ref={directionalLight}
        castShadow
        position={sunPosition}
        intensity={1.5}
        shadow-mapsize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />
      <Sky sunPosition={sunPosition} /> */}

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial
          color="red"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
      <mesh castShadow ref={cube} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
