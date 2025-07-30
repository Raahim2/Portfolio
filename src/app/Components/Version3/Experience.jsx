// src/components/Experience.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Importing a variety of icons from react-icons
import { 
  SiChainlink, SiAmazons3, SiGooglecloud, SiNotion, SiJirasoftware,
  SiDatadog,  SiVercel, SiNextdotjs
} from 'react-icons/si';
import { FaSalesforce, FaGoogleDrive } from 'react-icons/fa';
import { TbLetterC, TbNumber9, TbMathFunction } from 'react-icons/tb';
import Starter from './Starter'; // Assuming Starter.js is already animated

// Array of integration logos.
const integrations = [
  { name: 'ElevenLabs', icon: TbLetterC }, 
  { name: 'Chainlink', icon: TbLetterC },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Azure', icon: SiDatadog },
  { name: 'Salesforce', icon: FaSalesforce },
  { name: '9', icon: TbNumber9 },
  { name: 'Datadog', icon: SiDatadog },
  { name: 'Google Drive', icon: FaGoogleDrive },
  { name: 'Amazon S3', icon: SiAmazons3 },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'Jira', icon: SiJirasoftware },
  { name: 'Notion', icon: SiNotion },
  { name: 'Function', icon: TbMathFunction },
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
    <div className="text-white pb-10 relative overflow-x-hidden" id="experience" >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-10" >
        
        <Starter title={"Experience"} text1={"Hands-on roles "} text2={"that built real skills."}  />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Top border line with animation */}
          <div className="relative pt-10" >
            <motion.div 
              className="absolute top-0 left-0 w-full h-px bg-gray-800"
              style={{ transformOrigin: 'left' }}
              variants={lineVariant}
            />
            
            {/* "001" Circle positioned on the line with animation */}
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
            
            {/* Left Column: Animated Graphic */}
            <motion.div variants={leftColumnVariant}>
              {/*
                FIX: Replaced the problematic classes with a responsive approach.
                1. `object-contain`: This is the key fix. It ensures the ENTIRE image is displayed without being cropped.
                2. `max-h-[350px]`: On mobile (the default), this caps the image height, so it looks good on small screens.
                3. `lg:min-h-[500px]`: On large screens, this restores the original minimum height, bringing back the desktop layout you liked.
                4. `hover:scale-105`: Slightly reduced the hover scale for a more subtle effect.
              */}
              <img 
                className="w-full max-h-[350px] lg:min-h-[500px] object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                src="/Images/VJTI.png" 
                alt="VJTI Campus"
              />
            </motion.div>

            {/* Right Column: Animated Text and Logo Grid */}
            <motion.div className="text-center lg:text-left" variants={rightColumnVariant}>
              <p className="text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-4">
                App Developer Intern 
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-200 tracking-tight leading-tight">
                VJTI App developer <br /> made 10+ apps in 6 Months.
              </h2>
              
              {/* Animated Logo Grid */}
              <motion.div 
                className="grid grid-cols-5 sm:grid-cols-7 gap-3 sm:gap-4 mt-12"
                variants={logoGridVariants}
              >
                {integrations.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      title={item.name}
                      className="bg-white/5 p-3 rounded-lg flex items-center justify-center aspect-square transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/10"
                      variants={logoItemVariant}
                    >
                       <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white/70" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;