import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 1024
      );
    };

    const handleResize = () => {
      setIsTouch(checkTouch());
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isTouch) {
      document.body.style.cursor = 'auto';
      return;
    }

    // Hide default cursor globally
    document.body.style.cursor = 'none';

    // Move the cursor and follower
    const onMouseMove = (e) => {
      if (!cursorRef.current || !followerRef.current) return;
      // The main dot follows instantly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // The larger ring follows with a slight delay
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    // Add hover states for interactive elements
    const onMouseEnter = () => {
      if (!cursorRef.current || !followerRef.current) return;
      gsap.to(cursorRef.current, { scale: 0.5, backgroundColor: '#FF003C', duration: 0.2 });
      gsap.to(followerRef.current, { scale: 1.5, borderColor: '#FF003C', backgroundColor: 'rgba(255, 0, 60, 0.1)', duration: 0.2 });
    };

    const onMouseLeave = () => {
      if (!cursorRef.current || !followerRef.current) return;
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: '#00F0FF', duration: 0.2 });
      gsap.to(followerRef.current, { scale: 1, borderColor: '#00F0FF', backgroundColor: 'transparent', duration: 0.2 });
    };

    // Attach listeners to all clickable elements
    const attachHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, input, textarea, .magnetic-btn');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Slight delay to ensure DOM is rendered before attaching hovers
    const timer = setTimeout(attachHoverEvents, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = 'auto';
      const clickables = document.querySelectorAll('a, button, input, textarea, .magnetic-btn');
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        ref={cursorRef} 
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-cyan rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Cursor Follower Ring */}
      <div 
        ref={followerRef} 
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 border border-cyan rounded-full pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </>
  );
};

export default CustomCursor;
