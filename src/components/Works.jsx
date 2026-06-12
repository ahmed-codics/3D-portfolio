import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { projects } from "../constants";
import { github } from "../assets";

const Works = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayRef = useRef(null);

  // Animate the main display when the selected project changes
  useEffect(() => {
    if (displayRef.current) {
      gsap.fromTo(
        displayRef.current,
        { opacity: 0, scale: 0.98, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [selectedIndex]);

  const selectedProject = projects[selectedIndex];

  return (
    <div id="work" className="relative bg-[#050505] min-h-screen lg:h-screen lg:min-h-0 lg:max-h-screen py-24 lg:py-16 xl:py-20 overflow-hidden border-t border-gray-900 flex items-center">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12 h-full lg:h-[calc(100vh-160px)] lg:max-h-[800px]">
        
        {/* Left Side: Index Directory */}
        <div className="w-full lg:w-1/3 flex flex-col h-full flex-shrink-0">
          <div className="mb-6 lg:mb-4 flex items-center gap-4">
            <div className="w-2 h-2 bg-red-accent animate-pulse shadow-[0_0_8px_#FF003C]"></div>
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Operations Index</p>
          </div>

          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-4 lg:pb-0 scrollbar-thin lg:flex-1 pr-1 lg:max-h-[calc(100vh-220px)]">
            {projects.map((project, index) => {
              const isActive = selectedIndex === index;
              return (
                <div 
                  key={`nav-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative px-4 lg:px-5 py-3.5 lg:py-3 cursor-pointer font-mono text-xs lg:text-[13px] uppercase tracking-widest border transition-all duration-300 flex-shrink-0 min-w-[180px] lg:min-w-0 ${
                    isActive ? "border-cyan bg-[#0a0a0a] text-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)]" : "border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-305"
                  }`}
                >
                  {/* Indicator line: bottom on mobile, left on desktop */}
                  {!isActive && (
                    <div className="absolute left-0 bottom-0 lg:bottom-auto lg:top-0 w-0 h-[2px] lg:w-[2px] lg:h-0 bg-gray-500 group-hover:w-full lg:group-hover:h-full lg:group-hover:w-[2px] transition-all duration-300"></div>
                  )}
                  {isActive && (
                    <div className="absolute left-0 bottom-0 lg:bottom-auto lg:top-0 w-full h-[2px] lg:w-[2px] lg:h-full bg-cyan shadow-[0_0_10px_#00F0FF]"></div>
                  )}
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] opacity-70">// TARGET_{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">{project.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Main Display Viewport */}
        <div className="w-full lg:w-2/3 h-full">
          <div ref={displayRef} className="relative bg-[#0a0a0a] border border-gray-800 p-6 md:p-8 lg:p-6 xl:p-8 h-full flex flex-col justify-between">
            
            {/* Targeting Frame Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan pointer-events-none"></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-4 border-b border-gray-800 pb-3 flex-shrink-0">
              <h3 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold uppercase text-white tracking-wide">
                {selectedProject.name}
              </h3>
              <div className="flex items-center gap-2 mt-1 md:mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-[10px] text-green-500 tracking-widest uppercase">Live</span>
              </div>
            </div>

            {/* Image Container with HUD Overlays */}
            <div className="relative w-full h-40 md:h-60 lg:h-48 xl:h-64 mb-4 overflow-hidden border border-gray-800 group flex-shrink-0">
              {/* Cyan Tint & Grid Overlay */}
              <div className="absolute inset-0 bg-cyan opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyNDAsIDI1NSLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10 pointer-events-none"></div>
              {/* Scanline */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan/50 shadow-[0_0_15px_#00F0FF] animate-scan z-20 pointer-events-none"></div>
              
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
            </div>

            {/* Description */}
            <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto scrollbar-thin mb-4">
              <p className="text-gray-400 font-mono text-xs lg:text-sm leading-relaxed mb-4 border-l-2 border-red-accent pl-4 flex-shrink-0">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                {selectedProject.tags.map(tag => (
                  <span key={tag.name} className="px-2 py-0.5 border border-gray-800 bg-[#050505] text-[9px] lg:text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-gray-800 flex-shrink-0">
              <a 
                href={selectedProject.source_code_link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-2.5 font-mono text-xs tracking-widest uppercase border border-cyan text-cyan hover:bg-cyan hover:text-black transition-colors duration-300"
              >
                <img src={github} alt="github" className="w-4 h-4 filter invert group-hover:invert-0" />
                Access_Source_Data
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Works;