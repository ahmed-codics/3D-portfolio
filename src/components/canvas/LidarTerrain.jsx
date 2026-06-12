import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TerrainMesh = () => {
  const meshRef = useRef();

  // Create a plane geometry with many segments to look like a detailed grid
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(100, 100, 150, 150);
    geo.rotateX(-Math.PI / 2); // Lay it flat

    // Displace vertices to create "mountains" and "valleys"
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);
      
      // Use some math to create procedural-looking terrain
      const y = Math.sin(vx * 0.2) * Math.cos(vz * 0.2) * 1.5 
              + Math.sin(vx * 0.05) * Math.cos(vz * 0.05) * 4;
      
      pos.setY(i, y);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Animate the terrain moving towards the camera to simulate moving forward
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Move the terrain slowly
      meshRef.current.position.z += delta * 4;

      // Loop it seamlessly
      if (meshRef.current.position.z > 20) {
        meshRef.current.position.z = 0;
      }
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -12, -30]}>
      {/* Wireframe material gives it that LiDAR scanner look */}
      <meshBasicMaterial 
        color="#00F0FF" 
        wireframe={true} 
        transparent={true} 
        opacity={0.15} 
      />
    </mesh>
  );
};

const LidarTerrain = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        {/* Adds fog to fade out the terrain in the distance */}
        <fog attach="fog" args={["#050505", 10, 50]} />
        <TerrainMesh />
      </Canvas>
      {/* Gradient overlay to ensure text remains perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] z-10 pointer-events-none opacity-80"></div>
    </div>
  );
};

export default LidarTerrain;
