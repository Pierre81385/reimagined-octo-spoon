import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../Model"; /* highlight-line */

export default function Me() {
  const style = {
    Canvas: {
      backgroundColor: "rgba(0,0,0,0)",
      marginLeft: "auto",
      marginRight: "auto",
      width: "75vw",
      height: "100vh",
    },
  };

  return (
    <div className="text-center">
      <p>
        Just a little test using REACT-FIBER-THREE to render a 3D avatar of
        myself.
      </p>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={style.Canvas}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
