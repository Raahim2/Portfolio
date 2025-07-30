// src/app/Components/Version3/PageWrapper.jsx

"use client";

import React, { useRef, useEffect } from 'react';

const PageWrapper = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        // We use the containerRef for the listener to be more specific
        // and pageX/pageY to get coordinates relative to the whole document
        const x = e.pageX;
        const y = e.pageY;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    
    // Attach listener to the window to track the mouse everywhere
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // The main wrapper for the whole page
    <div
      ref={containerRef}
      className="bg-[#0d0d0d] w-full font-sans text-white relative"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        backgroundSize: '1.5rem 1.5rem'
      }}
    >
      {/* --- THIS IS THE CORRECTED GLOW EFFECT --- */}
      {/* It is now a semi-transparent white circle that fades out. */}
      {/* I've also positioned it using `absolute` to be relative to the page scroll. */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(186, 149, 255, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* This renders the actual page content (Hero, Stats, etc.) */}
      {children}
    </div>
  );
};

export default PageWrapper;