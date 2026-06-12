import React, { useRef, useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { useIntersection } from "../utils/useIntersection";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const InteractiveRoboticsDemo = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [jointAngles, setJointAngles] = useState([0, 0, 0, 0]); // 4 DOF arm
  const armRef = useRef(null);
  const containerRef = useRef(null);
  const isIntersecting = useIntersection(containerRef, 0.05);

  const lastTouch = useRef({ x: 0, y: 0 });

  // Handle mouse interaction to control the arm
  const handleMouseDown = () => {
    setIsRotating(true);
  };

  const handleMouseUp = () => {
    setIsRotating(false);
  };

  const handleMouseMove = (e) => {
    if (!isRotating || !armRef.current) return;

    // Convert mouse position to angle changes
    const moveX = e.movementX || 0;
    const moveY = e.movementY || 0;

    // Update joint angles based on mouse movement
    setJointAngles(prev => [
      (prev[0] + moveX * 0.01) % (Math.PI * 2),
      Math.max(-Math.PI/2, Math.min(Math.PI/2, prev[1] + moveY * 0.01)),
      (prev[2] + moveX * 0.005) % (Math.PI * 2),
      Math.max(-Math.PI/4, Math.min(Math.PI/4, prev[3] + moveY * 0.005))
    ]);
  };

  // Handle touch interaction for mobile screens
  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      setIsRotating(true);
      lastTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = () => {
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    if (!isRotating || !armRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const moveX = touch.clientX - lastTouch.current.x;
    const moveY = touch.clientY - lastTouch.current.y;

    setJointAngles(prev => [
      (prev[0] + moveX * 0.01) % (Math.PI * 2),
      Math.max(-Math.PI/2, Math.min(Math.PI/2, prev[1] + moveY * 0.01)),
      (prev[2] + moveX * 0.005) % (Math.PI * 2),
      Math.max(-Math.PI/4, Math.min(Math.PI/4, prev[3] + moveY * 0.005))
    ]);

    lastTouch.current = { x: touch.clientX, y: touch.clientY };
  };

  // Animation loop for smooth movement
  useEffect(() => {
    if (isRotating) {
      const animate = () => {
        // Add slight damping for natural feel
        setJointAngles(prev => prev.map(angle => angle * 0.98));
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [isRotating]);

  return (
    <>
      <div className="py-20">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12 text-white text-center">
          Interactive<br/><span className="text-cyan">Robotics Arm Demo</span>
        </h2>

        <div className="mb-8 text-center">
          <p className="text-gray-400 font-mono text-lg">
            Click and drag to control this 4-DOF robotic arm. Demonstrates real-time
            kinematics and control algorithms used in autonomous systems.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative h-[500px] md:h-[600px] bg-[#0a0a0a] border border-gray-700 rounded touch-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className="absolute inset-0">
            {isIntersecting && (
              <Canvas
                ref={armRef}
                camera={{ position: [5, 5, 5], fov: 25 }}
                style={{ height: "100%", width: "100%" }}
              >
                {/* Lights */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Robot Arm Base */}
                <mesh>
                  <cylinderGeometry args={[0.5, 0.5, 0.2]} />
                  <meshStandardMaterial color="#00F0FF" />
                </mesh>

                {/* Arm Segments */}
                <group rotation={[0, jointAngles[0], 0]}>
                  {/* First Segment */}
                  <mesh position={[0, 0.1, 0]}>
                    <boxGeometry args={[0.1, 0.2, 0.1]} />
                    <meshStandardMaterial color="#FF003C" />
                  </mesh>

                  {/* Second Segment */}
                  <group position={[0, 0.2, 0]} rotation={[0, 0, jointAngles[1]]}>
                    <mesh position={[0, 0.1, 0]}>
                      <boxGeometry args={[0.08, 0.3, 0.08]} />
                      <meshStandardMaterial color="#00F0FF" />
                    </mesh>

                    {/* Third Segment */}
                    <group position={[0, 0.3, 0]} rotation={[0, 0, jointAngles[2]]}>
                      <mesh position={[0, 0.1, 0]}>
                        <boxGeometry args={[0.06, 0.25, 0.06]} />
                        <meshStandardMaterial color="#FF003C" />
                      </mesh>

                      {/* End Effector */}
                      <group position={[0, 0.25, 0]} rotation={[0, 0, jointAngles[3]]}>
                        <mesh position={[0, 0.05, 0]}>
                          <sphereGeometry args={[0.08, 0.08, 0.08]} />
                          <meshStandardMaterial color="#00F0FF" />
                        </mesh>

                        {/* Tool Tip */}
                        <mesh position={[0, 0.15, 0]}>
                          <coneGeometry args={[0.05, 0.1, 0.05]} />
                          <meshStandardMaterial color="#FF003C" />
                        </mesh>
                      </group>
                    </group>
                  </group>
                </group>

                {/* Workspace Visualization */}
                <points>
                  <bufferGeometry>
                    <bufferAttribute
                      attach="attributes-position"
                      array={new Float32Array([0, 0, 0])}
                      count={1}
                      itemSize={3}
                    />
                  </bufferGeometry>
                  <pointsMaterial size={0.02} color="#00F0FF" opacity={0.3} />
                </points>
              </Canvas>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between text-gray-400 font-mono">
            <span>Joint 1 (Base): {(jointAngles[0] * 180 / Math.PI).toFixed(1)}°</span>
            <span>Joint 2 (Shoulder): {(jointAngles[1] * 180 / Math.PI).toFixed(1)}°</span>
          </div>
          <div className="flex justify-between text-gray-400 font-mono">
            <span>Joint 3 (Elbow): {(jointAngles[2] * 180 / Math.PI).toFixed(1)}°</span>
            <span>Joint 4 (Wrist): {(jointAngles[3] * 180 / Math.PI).toFixed(1)}°</span>
          </div>
        </div>

        <div className="mt-10 p-4 bg-[#050505/50] rounded border border-gray-700">
          <h3 className="font-bold font-mono text-cyan mb-4">Technical Details</h3>
          <p className="text-gray-400 font-mono text-sm">
            This demonstration showcases forward kinematics calculation for a 4-degree-of-freedom
            robotic arm. Each joint angle is controlled in real-time through user input,
            demonstrating the principles used in autonomous vehicle sensor fusion and
            robotic motion planning.
          </p>
          <p className="text-gray-400 font-mono text-sm mt-2">
            <span className="text-cyan">•</span> Real-time inverse kinematics would calculate required joint angles
            for a target end effector position<br/>
            <span className="text-cyan">•</span> Used in autonomous systems for precise manipulation tasks<br/>
            <span className="text-cyan">•</span> Forms the basis for motion planning in ROS2 MoveIt!
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 font-mono text-sm">
            This interactive element demonstrates practical application of
            mechatronics principles in software systems.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(InteractiveRoboticsDemo, "robotics");