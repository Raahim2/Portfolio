// src/components/Experience.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Starter from './Starter'; 
import SkillCard from './SkillCard'; // Assuming SkillCard is a component for displaying skills

// Array of integration logos.
const integrations = [
  { name: 'React', },
  { name: 'AndroidStudio', },
  { name: 'Expo', },
  { name: 'Kotlin', },
  { name: 'Java', },
  { name: 'Github', },
];

// --- Animation Variants (Unchanged) ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 }
  }
};

const circleVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 1.0 }
  }
};

const leftColumnVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const rightColumnVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const logoGridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const logoItemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};



const Experience = () => {
  return (
    <div className="text-white pb-10 relative overflow-x-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-10">
        
        <Starter title={"Experience"} text1={"Hands-on roles "} text2={"that built real skills."} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Top border line */}
          <div className="relative pt-10">
            <motion.div 
              className="absolute top-0 left-0 w-full h-px bg-gray-800"
              style={{ transformOrigin: 'left' }}
              variants={lineVariant}
            />
            <motion.div 
              className="absolute left-6 lg:left-0 top-0 -translate-y-1/2"
              variants={circleVariant}
            >
              <div className="w-12 h-12 flex-shrink-0 border border-gray-700 bg-[#0A0A0A] rounded-full flex items-center justify-center mt-6">
                <span className="text-gray-400">001</span>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b pb-10 border-gray-800 pl-6 lg:pl-0">
            
            {/* Left Column */}
            <motion.div variants={leftColumnVariant}>
              <img 
                className="w-full max-h-[350px] lg:min-h-[500px] object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                src="/Images/VJTI.png" 
                alt="VJTI Campus"
              />
            </motion.div>

            {/* Right Column */}
            <motion.div className="text-center lg:text-left" variants={rightColumnVariant}>
              <p className="text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-4">
                App Developer Intern 
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-200 tracking-tight leading-tight">
                VJTI App developer <br /> made 6 apps in 6 Months.
              </h2>
              
              {/* Logo Grid */}
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-12 mx-auto"
                variants={logoGridVariants}
              >
                {integrations.map((item, index) => (
                  <SkillCard
                    key={index}
                    name={item.name}
                    outlineIconUrl={`/SVG/SkillsV3/Outline/${item.name}.svg`}
                    filledIconUrl={`/SVG/SkillsV3/Filled/${item.name}.svg`}
                    className="hover:scale-105 transition-transform duration-300 ease-in-out aspect-square "
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

