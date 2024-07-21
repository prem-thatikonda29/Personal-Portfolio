import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// import React, { useRef, Suspense } from 'react'
// import { useGLTF, OrthographicCamera, OrbitControls, Preload, Float } from '@react-three/drei'
// import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// function Ball(props) {
//   const { nodes, materials, icon } = useGLTF('/balls.glb')
//   const [decal] = useTexture([props.imgUrl]);
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Sphere.geometry}
//           material={nodes.Sphere.material}
//           position={[169, -46.5, 265]}
//         />
//         <OrthographicCamera
//           makeDefault={false}
//           far={100000}
//           near={0}
//           position={[47.623, -21.811, 1000]}
//         />
//       </group>
//     </group>
//   )
// }

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// useGLTF.preload('/balls.glb')
export default BallCanvas;