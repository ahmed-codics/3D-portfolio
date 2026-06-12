import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const RoboticsCornerLogo = () => (
  <svg className="w-full h-full p-0.5 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19V5h14" className="stroke-cyan" strokeWidth="2" />
    <circle cx="5" cy="5" r="1.5" className="fill-red-accent stroke-red-accent" />
    <circle cx="19" cy="5" r="1.5" className="fill-cyan stroke-cyan" />
    <circle cx="5" cy="19" r="1.5" className="fill-cyan stroke-cyan" />
    <path d="M9 9l6 6M12 9h3v3" stroke="#555" />
  </svg>
);

const SparkXLogo = () => (
  <svg className="w-full h-full p-0.5 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M20 4L4 20" className="stroke-cyan" strokeWidth="2" strokeDasharray="1 1" />
    <path d="M8 8l8 8M16 8L8 16" className="stroke-red-accent" strokeWidth="2" />
    <path d="M2 12h3M19 12h3" stroke="#555" />
  </svg>
);

const FreelanceLogo = () => (
  <svg className="w-full h-full p-1.5 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6l6 6-6 6" className="stroke-cyan" strokeWidth="2" />
    <line x1="12" y1="18" x2="20" y2="18" className="stroke-red-accent" strokeWidth="2" />
  </svg>
);

const companyLogos = {
  "Robotics Corner": <RoboticsCornerLogo />,
  "SparkX Racing Team": <SparkXLogo />,
  "Freelance": <FreelanceLogo />
};

const Experience = () => {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Desktop-only highlight trigger
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray(".exp-card");
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    });

    // Intro animations for cards (both mobile & desktop)
    const cards = gsap.utils.toArray(".exp-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    // Continuous rotation for radar rings
    gsap.to(".radar-ring-1", { rotation: 360, duration: 20, repeat: -1, ease: "none" });
    gsap.to(".radar-ring-2", { rotation: -360, duration: 15, repeat: -1, ease: "none" });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} id="experience" className="relative w-full bg-[#050505] border-t border-gray-900 flex flex-col md:flex-row font-mono">
      
      {/* Left Panel: Sticky HUD Radar (Hidden on mobile for better UX, acts as background) */}
      <div 
        ref={leftPanelRef} 
        className="hidden md:flex w-1/2 sticky top-20 h-[calc(100vh-100px)] items-center justify-center relative overflow-hidden"
      >
        {/* Radar UI */}
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          {/* Outer dashed ring */}
          <div className="radar-ring-1 absolute inset-0 rounded-full border-2 border-dashed border-gray-800"></div>
          {/* Middle solid ring with cyan glow */}
          <div className="radar-ring-2 absolute inset-4 rounded-full border border-cyan opacity-30 shadow-[0_0_30px_rgba(0,240,255,0.2)]"></div>
          {/* Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gray-800"></div>
            <div className="absolute h-full w-[1px] bg-gray-800"></div>
          </div>
          
          {/* Center Data Screen */}
          <div className="absolute w-[200px] h-[200px] bg-[#050505] rounded-full border border-red-accent flex flex-col items-center justify-center z-10 p-4 text-center">
            <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest">Target Lock</p>
            {experiences[activeIndex] && (
              <>
                <div className="w-10 h-10 mb-2 flex items-center justify-center text-cyan">
                  {companyLogos[experiences[activeIndex].company_name] || (
                    <img 
                      src={experiences[activeIndex].icon} 
                      alt="company logo" 
                      className="w-full h-full object-contain filter invert"
                    />
                  )}
                </div>
                <h4 className="text-cyan text-sm font-bold uppercase truncate w-full">{experiences[activeIndex].company_name}</h4>
                <p className="text-red-accent text-xs mt-1">[{experiences[activeIndex].date}]</p>
              </>
            )}
          </div>

          {/* Sweeping Radar Line */}
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[2px] bg-gradient-to-r from-cyan to-transparent origin-left animate-spin" style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}></div>
        </div>

        {/* Decorative coordinates */}
        <div className="absolute top-20 left-10 text-xs text-gray-600">LAT: 30.0444 N<br/>LNG: 31.2357 E</div>
        <div className="absolute bottom-20 right-10 text-xs text-gray-600 text-right">SYS_MEM: 128TB<br/>STAT: ONLINE</div>
      </div>

      {/* Right Panel: Scrolling Cards */}
      <div className="w-full md:w-1/2 py-20 px-6 md:px-20 min-h-screen">
        <div className="mb-20 flex items-center gap-4">
          <div className="w-2 h-2 bg-red-accent animate-pulse"></div>
          <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Operational History</p>
        </div>

        <div className="flex flex-col gap-32 pb-32">
          {experiences.map((exp, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={index} 
                className={`exp-card relative p-8 transition-all duration-500 border ${isActive ? 'border-cyan bg-[#0a0a0a]' : 'border-gray-800 bg-transparent opacity-40 hover:opacity-100'}`}
              >
                {/* HUD Card Corners */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isActive ? 'border-cyan' : 'border-gray-600'}`}></div>
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isActive ? 'border-cyan' : 'border-gray-600'}`}></div>

                {/* Mobile company indicator (since radar is hidden on mobile) */}
                <div className="md:hidden flex items-center gap-4 mb-6 pb-4 border-b border-gray-800">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-cyan">
                    {companyLogos[exp.company_name] || (
                      <img src={exp.icon} alt="logo" className="w-full h-full object-contain filter invert" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-cyan text-sm font-bold uppercase">{exp.company_name}</h4>
                    <p className="text-red-accent text-xs">[{exp.date}]</p>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2 text-white">{exp.title}</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-8 hidden md:block">
                  // {exp.company_name} _ {exp.date}
                </p>

                <ul className="space-y-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-gray-400 text-sm leading-relaxed relative pl-5">
                      <span className={`absolute left-0 top-1 text-xs ${isActive ? 'text-cyan' : 'text-gray-600'}`}>{'>'}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Experience;