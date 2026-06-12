import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { LidarTerrain } from './canvas';
import { useIntersection } from '../utils/useIntersection';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const containerRef = useRef(null);
  const bootTextRef = useRef(null);
  const nameRef = useRef(null);
  const ctaRef = useRef(null);
  const textRef = useRef(null); // Added missing textRef
  const isIntersecting = useIntersection(containerRef, 0.01);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Boot sequence text
      const bootLines = [
        "> INITIALIZING AUTONOMOUS KERNEL...",
        "> LOADING PERCEPTION PIPELINE...",
        "> SENSOR FUSION ONLINE.",
        "> SYSTEM READY.",
      ];

      // Simulate typing effect
      let currentText = "";

      // Terminal boot sequence
      gsap.timeline()
        .to(".boot-text", {
          text: "> INITIALIZING AUTONOMOUS KERNEL...",
          duration: 1.5,
          ease: "none",
        })
        .to(".boot-text", {
          text: "> SYSTEM SECURED. WELCOME, OPERATOR.",
          duration: 1.5,
          ease: "none",
          delay: 0.5
        })
        .to(".boot-text", { opacity: 0, duration: 0.5, delay: 0.5 })

        // Main text slam
        .fromTo(
          textRef.current,
          { opacity: 0, scale: 2, y: -100 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "expo.out" }
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, letterSpacing: "10px" },
          { opacity: 1, letterSpacing: "4px", duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "back.out(1.7)" },
          "-=0.5"
        );
    });

  }, []); // Note: textRef is used but not in deps - this is safe as refs don't change

  return (
    <section ref={containerRef} className="relative w-full h-screen mx-auto bg-[#050505] overflow-hidden flex items-center justify-center">

      {/* Background Decor - 3D Lidar Terrain */}
      {isIntersecting && <LidarTerrain />}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-red-accent/5 rounded-full"></div>
      </div>

      <div className="absolute top-24 left-10 font-mono text-cyan text-sm boot-text z-10">
        {'>'} _
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1
          ref={textRef}
          className="text-6xl md:text-9xl font-black uppercase text-white tracking-tighter mb-4 opacity-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          Ahmed <span className="text-red-accent drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">Mansour</span>
        </h1>

        <p className="hero-subtitle opacity-0 text-cyan font-mono text-sm md:text-lg uppercase mb-12 border-y border-gray-800 py-3 tracking-[4px]">
          [ Autonomous Systems & Full-Stack Engineer ]
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#work" className="hero-btn opacity-0 magnetic-btn px-8 py-4 bg-transparent border border-gray-700 text-white font-mono uppercase tracking-widest hover:border-cyan hover:text-cyan transition-colors duration-300">
            ACCESS_PROJECTS()
          </a>
          <a href="/Ahmed_Mansour_CV.pdf" target="_blank" className="hero-btn opacity-0 magnetic-btn px-8 py-4 bg-transparent border border-gray-700 text-white font-mono uppercase tracking-widest hover:border-red-accent hover:text-red-accent transition-colors duration-300">
            DOWNLOAD_SPECS.PDF
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
        <p className="font-mono text-[10px] text-gray-400 mb-2 tracking-widest uppercase">SCROLL_DOWN</p>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan animate-bounce"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;