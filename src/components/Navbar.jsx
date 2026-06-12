import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

// Scramble Hook for "WOW" hover effect
const ScrambleLink = ({ title, id, active, onClick }) => {
  const [displayText, setDisplayText] = useState(title);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  const handleMouseEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        title.split('').map((char, index) => {
          if (index < iteration) return title[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );
      if (iteration >= title.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    setDisplayText(title);
  };

  return (
    <li
      onClick={() => onClick(title)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative px-4 py-2 cursor-pointer font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
        active === title ? "text-cyan" : "text-gray-500 hover:text-white"
      }`}
    >
      <a href={`#${id}`} className="relative z-10 flex items-center gap-2">
        <span className={`${active === title ? 'opacity-100' : 'opacity-0'} text-cyan transition-opacity`}>{'>'}</span>
        [{displayText}]
      </a>
      
      {/* Active Bracket Indicators */}
      {active === title && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan"></div>
        </>
      )}
    </li>
  );
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-[999] font-mono">
      {/* Dynamic Background with Glass Effect */}
      <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-md border-b border-gray-900 pointer-events-none"></div>

      {/* Global Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-cyan shadow-[0_0_10px_#00F0FF] transition-all duration-100 ease-out" style={{ width: scrollProgress }}></div>

      <div className="relative w-full flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto z-10">
        
        {/* Logo / System ID */}
        <Link
          to="/"
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-accent animate-pulse shadow-[0_0_8px_#FF003C]"></div>
            <div className="w-2 h-2 bg-gray-800 group-hover:bg-cyan transition-colors"></div>
            <div className="w-2 h-2 bg-gray-800 group-hover:bg-cyan transition-colors delay-75"></div>
          </div>
          
          <div className="flex flex-col">
            <p className="text-white text-sm tracking-widest uppercase flex items-center gap-2">
              SYS_ID: <span className="text-cyan">MANSOUR_A</span>
            </p>
            <p className="text-[8px] text-gray-500 uppercase tracking-widest">Global Operations Network</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((link) => (
            <ScrambleLink 
              key={link.id} 
              id={link.id} 
              title={link.title} 
              active={active} 
              onClick={setActive} 
            />
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            alt="menu" 
            src={toggle ? close : menu} 
            className="w-6 h-6 object-contain cursor-pointer filter invert opacity-80 hover:opacity-100" 
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#0a0a0a] border border-gray-800 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-sm`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  className={`${
                    active === link.title ? "text-cyan" : "text-gray-500"
                  } font-mono text-xs uppercase tracking-widest cursor-pointer`}
                >
                  <a href={`#${link.id}`}>{'>'} {link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;