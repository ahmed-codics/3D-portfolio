import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const StarsCanvas = () => {
  const starsRef = useRef(null);

  // Number of stars
  const starCount = 5000;
  // Radius of the star field
  const radius = 100;

  // Generate random positions for stars
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    // Random spherical coordinates
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return (
    <Canvas
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 0], fov: 75 }}
    >
      {/* Background color */}
      <background args={[new THREE.Color(0x050505)]} />

      {/* Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color={0xffffff}
          opacity={0.8}
          transparent
          vertexColors
        />
      </points>

      {/* Stars are static for performance - could add twinkling effect with useFrame */}
    </Canvas>
  );
};

export default StarsCanvas;