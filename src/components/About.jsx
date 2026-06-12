import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const RoboticsIcon = () => (
  <svg className="w-full h-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" stroke="#444" />
    <circle cx="7" cy="17" r="2" className="stroke-cyan" />
    <line x1="8.5" y1="15.5" x2="14" y2="9" className="stroke-cyan" strokeWidth="2" />
    <circle cx="15" cy="8" r="1.5" className="stroke-red-accent" />
    <line x1="16" y1="9" x2="19" y2="13" className="stroke-cyan" strokeWidth="2" />
    <path d="M18 14.5l2-1.5M19.5 12l1.5 2" className="stroke-red-accent" />
    <circle cx="15" cy="8" r="4" stroke="#333" strokeDasharray="2 2" />
  </svg>
);

const FullStackIcon = () => (
  <svg className="w-full h-full p-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="4" rx="1" className="stroke-cyan" />
    <rect x="2" y="12" width="6" height="4" rx="1" className="stroke-cyan" />
    <rect x="16" y="12" width="6" height="4" rx="1" className="stroke-cyan" />
    <rect x="9" y="18" width="6" height="4" rx="1" className="stroke-red-accent" />
    <path d="M12 6v6M5 12v-2h14v2M12 16v2" stroke="#555" />
  </svg>
);

const AutonomousIcon = () => (
  <svg className="w-full h-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-6" stroke="#444" />
    <path d="M8 16a4 4 0 018 0M5 13a8 8 0 0114 0M2 10a12 12 0 0120 0" className="stroke-cyan" strokeDasharray="2.5 2.5" />
    <polygon points="12,18 7,10 17,10" className="stroke-red-accent" fill="rgba(255, 0, 60, 0.1)" />
    <circle cx="12" cy="18" r="1" className="fill-red-accent stroke-red-accent" />
  </svg>
);

const InnovationIcon = () => (
  <svg className="w-full h-full p-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="2" className="stroke-cyan" />
    <rect x="9" y="9" width="6" height="6" rx="1" className="stroke-red-accent" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="#555" />
    <path d="M12 9V5M9 12H5" stroke="#444" />
  </svg>
);

const serviceIcons = [
  <AutonomousIcon />,
  <RoboticsIcon />,
  <FullStackIcon />,
  <InnovationIcon />
];

const HoverAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-[550px] md:h-[450px] mt-20 gap-3 md:gap-4 overflow-hidden">
      {services.map((service, index) => {
        const isActive = active === index;
        return (
          <div
            key={service.title}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`relative w-full md:w-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border overflow-hidden flex flex-col justify-end ${
              isActive 
                ? "flex-[3] md:flex-[5] bg-[#0a0a0a] border-cyan h-[250px] md:h-full" 
                : "flex-[1] md:flex-[1] bg-[#050505] border-gray-800 hover:border-gray-600 h-[80px] md:h-full"
            }`}
          >
            {/* Active Glow */}
            <div className={`absolute inset-0 bg-gradient-to-t from-cyan/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* HUD Scanline */}
            {isActive && (
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan/50 animate-scan pointer-events-none"></div>
            )}

            <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-500">ID_{index.toString().padStart(2, '0')}</div>

            {/* Icon & Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex flex-col items-start z-10">

              <div className={`flex items-center justify-center rounded-sm bg-[#050505] border transition-all duration-700 ${
                isActive 
                  ? 'w-16 h-16 md:w-20 md:h-20 border-cyan mb-4 text-cyan' 
                  : 'w-10 h-10 md:w-12 md:h-12 border-gray-800 mb-0 mx-auto text-gray-500 hover:text-gray-300'
              }`}>
                {serviceIcons[index]}
              </div>

              {/* Title & Details (Only visible when active) */}
              <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-[200px] opacity-100 delay-200' : 'max-h-0 opacity-0'}`}>
                <h3 className="font-bold font-mono uppercase tracking-widest text-white text-lg md:text-2xl whitespace-nowrap mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-mono text-xs md:text-sm border-l border-cyan pl-3">
                  [ MODULE_{index}_ONLINE ]<br/>
                  Executing standard protocols for {service.title.toLowerCase()}.
                </p>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="py-20 relative border-t border-gray-900 bg-[#050505]">
      <div className="absolute top-0 left-10 w-px h-full bg-gray-900 hidden md:block"></div>

      <div className="md:ml-24">
        <div className="mb-4 flex items-center gap-4">
          <div className="w-2 h-2 bg-red-accent animate-pulse"></div>
          <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">System Diagnostics</p>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-white">Lead Robotics Engineer<br/><span className="text-cyan">Professional Profile</span></h2>

        <p
          ref={textRef}
          className="mt-4 text-gray-300 text-[16px] md:text-[18px] max-w-3xl leading-[30px] font-mono border-l-2 border-cyan pl-6"
        >
          Accomplished Lead Robotics Engineer and Full-Stack Systems Architect with proven expertise in designing and deploying autonomous systems at the intersection of mechatronics, robotics, and software engineering.
          <br/><br/>
          Currently directing the Autonomous Subsystem for SparkX Racing Team, where I architect the full software stack for competitive autonomous vehicles, leading a team of 10+ engineers and delivering systems that have reduced lap times by 22% through improved perception and path planning algorithms.
          <br/><br/>
          Previously delivered multiple full-stack production systems handling over 50,000+ monthly active users, specializing in real-time data processing, microservices architecture, and cross-platform applications that bridge hardware and software domains.
        </p>

        {/* New Hover Expanding Accordion */}
        <HoverAccordion />

      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");