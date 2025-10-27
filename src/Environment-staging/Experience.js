import React, { useRef } from "react";
import * as THREE from "three";
import {
  Stage,
  Lightformer,
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

  const { envMapIntensity, envMapheight, envMapRadius, envMapScale } =
    useControls("environment map", {
      envMapIntensity: { value: 7, min: 0, max: 12 },
      envMapheight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  return (
    <>
      {/* <Environment
        // background
        files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        ground={{
          height: envMapheight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
        // resolution={32}
      > */}
      <color args={["ivory"]} attach="background" />

      {/* <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[1, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}
      {/* <BakeShadows /> */}
      {/* <Shadow
        frustum={3.75}
        size={50}
        near={9.5}
        rings={11}
        samples={17}
      /> */}

      {/* <color args={["ivory"]} attach="background" /> */}

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
      {/* <ContactShadows
        positions={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      /> */}
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

      {/* <mesh castShadow position-y={1} position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial
          color="red"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
      {/* <mesh
        castShadow
        ref={cube}
        position-y={1}
        position-x={2}
        scale={1.5}
      >
        <boxGeometry scale={1.5} />
        <meshBasicMaterial
          color="mediumpurple"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}

      {/* <mesh
        receiveShadow
        position-y={0}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshBasicMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}

      {/* duplicate of cube and sphere */}
      <Stage
        shadow={{ type: "contact", opacity: 0.2, blur: 3 }}
        environment="sunset"
        preset="portrait"
        intensity={6}
      >
        <mesh position-y={1} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh ref={cube} position-y={1} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>
    </>
  );
};

export default Experience;
