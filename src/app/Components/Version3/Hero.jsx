// src/app/Components/Version3/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the main container to orchestrate the children's animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Animation variants for the text elements (pill, h1, p, button)
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Animation variant for the SVG lines to make them "draw" themselves
const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        }
    }
};

const Hero = () => {
  const handleResumeClick = () => {
  window.open('/RAAHIM.pdf', '_blank');
};
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative" id='hero'>
      
      {/* Background SVG lines with drawing animation */}
      <motion.svg 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
        preserveAspectRatio="xMidYMid slice"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Stagger the drawing of each line
      >
        <motion.path d="M 50% 55% L 32% 42%" stroke="#333" strokeWidth="1" strokeDasharray="4 4" fill="none" variants={pathVariants} />
        <motion.path d="M 50% 55% L 68% 42%" stroke="#333" strokeWidth="1" strokeDasharray="4 4" fill="none" variants={pathVariants} />
        <motion.path d="M 50% 55% L 35% 82%" stroke="#333" strokeWidth="1" strokeDasharray="4 4" fill="none" variants={pathVariants} />
        <motion.path d="M 50% 55% L 65% 82%" stroke="#333" strokeWidth="1" strokeDasharray="4 4" fill="none" variants={pathVariants} />
      </motion.svg>
      

      {/* Main content container with staggered animation */}
      <motion.div
        className="flex flex-col items-center text-center space-y-8 z-30 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="bg-[#1FFF87] text-black text-xs sm:text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center"
          variants={itemVariants}
        >
          <span>RAAHIM'S PORTFOLIO</span>
          <span className="mx-3 w-px h-4 bg-black/20"></span>
          <span>Selected Projects & Work</span>
        </motion.div>
        
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter leading-tight max-w-4xl"
          variants={itemVariants}
        >
          Hi, I’m Raahim <br /> Web / App Developer
        </motion.h1>
        
        <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-xl"
        variants={itemVariants}
      >
        Passionate about building fast, accessible web and mobile apps using modern technologies like{' '}
        <span className="text-[#BE95FF]">React</span>,{' '}
        <span className="text-[#BE95FF]">Next.js</span>, and{' '}
        <span className="text-[#BE95FF]">React Native</span>.
      </motion.p>

        
        <motion.button
          onClick={handleResumeClick}
          className="bg-[#1C1C1C] border border-gray-800 rounded-lg p-4 font-mono text-left w-auto hover:border-gray-700 transition-colors"
          variants={itemVariants}
        >
          <p><span className="text-gray-500">$</span>{' '}<span className="text-white">npm install resume@latest</span></p>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;