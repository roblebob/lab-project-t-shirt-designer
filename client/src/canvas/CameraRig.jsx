import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSnapshot } from "valtio";

import state from "../store";
import Backdrop from "./Backdrop"; // Import the Backdrop component

const CameraRig = ({ children }) => {
  const snap = useSnapshot(state);
  const group = useRef();

  return (
    <group ref={group}>
      {children}
      <OrbitControls enableZoom={snap.enableZoom} /> // Assuming 'enableZoom' is
      part of state
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CameraRig>
        <Backdrop /> // Insert the Backdrop within the CameraRig
        {/* Your model here */}
      </CameraRig>
    </Canvas>
  );
};

export default Scene;
