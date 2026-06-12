import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technologies } from "../constants";
import * as Icons from "./TechIcons";

gsap.registerPlugin(ScrollTrigger);

const iconComponents = {
  ros2: Icons.ROS2Icon,
  cpp: Icons.CppIcon,
  python: Icons.PythonIcon,
  linux: Icons.LinuxIcon,
  docker: Icons.DockerIcon,
  kubernetes: Icons.KubernetesIcon,
  reactjs: Icons.ReactIcon,
  typescript: Icons.TypeScriptIcon,
  nodejs: Icons.NodejsIcon,
  mongodb: Icons.MongodbIcon,
  tailwind: Icons.TailwindIcon,
  git: Icons.GitIcon,
  websockets: Icons.WebSocketIcon,
  threejs: Icons.ThreejsIcon,
};

const Tech = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".tech-item",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="py-24 px-6 md:px-24 bg-[#050505] border-t border-gray-900 relative">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #00F0FF 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>

      <div className="mb-16 flex items-center gap-4 relative z-10">
        <div className="w-2 h-2 bg-cyan animate-pulse"></div>
        <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Hardware / Software Capabilities</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
            System <br/><span className="text-cyan">Arsenal</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm leading-relaxed border-l border-gray-800 pl-4">
            Loaded with advanced frameworks for perception, mapping, and full-stack deployment. Modules active and operating at 100%.
          </p>
        </div>

        {/* Right Side: 2D HUD Tech Icons */}
        <div className="w-full md:w-2/3 flex flex-row flex-wrap justify-center md:justify-end gap-6 md:gap-10">
          {technologies.map((technology, index) => (
            <div className="tech-item w-20 h-20 relative group flex items-center justify-center bg-[#0a0a0a] border border-gray-800 hover:border-cyan transition-colors" key={technology.name}>
              {/* HUD Targeting Box behind the icon */}
              <div className="absolute inset-0 border border-gray-800 group-hover:border-cyan transition-colors duration-300 opacity-50 scale-110 pointer-events-none">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Tech Icon (SVG or Image fallback) */}
              {(() => {
                const IconComponent = iconComponents[technology.icon];
                if (IconComponent) {
                  return <IconComponent className="w-10 h-10 object-contain text-gray-500 group-hover:text-cyan transition-all duration-300" />;
                }
                return <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />;
              })()}
              
              {/* Tech Name Label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-mono text-cyan uppercase whitespace-nowrap bg-[#050505] border border-cyan px-2 py-1 z-20 pointer-events-none">
                {technology.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Tech;