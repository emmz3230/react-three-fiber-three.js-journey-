import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh scale={0.2 + Math.random() * 0.2}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
