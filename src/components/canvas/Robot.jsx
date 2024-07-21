import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Robot(props) {
  const { nodes, materials } = useGLTF("./robot/robot.glb");
  return (
    <group {...props} dispose={null} scale={[2, 2, 2]} position={[0, -0.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.place_holder}
      >
        <hemisphereLight intensity={1.25} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./robot/robot.glb");
