// components/FollowCard.js

import React from 'react';
import { motion } from 'framer-motion';

// --- Icon for the top-right button (remains the same) ---
const VisitIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M17 7V13" /><path d="M17 7H11" /></svg>
);

// --- UPDATED Card Configuration with real links and distinct logo paths ---
const cardConfig = {
  LinkedIn: { 
    statLabel: "Followers", 
    statCount: "250+", 
    name: "LinkedIn", 
    logoUrl: "/SVG/Logo/LinkedIn.svg", // Place your LinkedIn.svg here
    link: "https://www.linkedin.com/in/raahim-shaikh-5a186024a/" // <-- ADD YOUR LINK
  },
  GitHub: { 
    statLabel: "Followers", 
    statCount: "375+", 
    name: "GitHub", 
    logoUrl: "/SVG/Logo/Github.svg", // Place your GitHub.svg here
    link: "https://github.com/Raahim2" // <-- ADD YOUR LINK
  },
  LeetCode: { 
    statLabel: "Problems Solved", 
    statCount: "100+", 
    name: "LeetCode", 
    logoUrl: "/SVG/Logo/Leetcode.svg", // Place your LeetCode.svg here
    link: "https://leetcode.com/u/Raahim2" 
  },
};

// --- Animation Variants for child elements on initial load (unchanged) ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

// --- NEW: Animation Variants for the visit icon based on parent hover state ---
const iconWrapperVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};


const FollowCard = ({ type = 'LinkedIn', index = 0 }) => {
  const data = cardConfig[type];
  if (!data) return null;

  return (
    // The root element is now a motion.a to make the whole card a clickable link
    <motion.a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${data.name} profile`}
      className="p-8 flex flex-col justify-between w-full aspect-square h-auto md:h-[90vh] "
      
      // Initial animation for the card itself
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.2, delayChildren: index * 0.2 }}
      
      // NEW: Hover animation for the card and to trigger children's hover state
      whileHover="hover" 
      animate="initial" // Default state for children variants (like the icon)
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {/* The content of the card scales up on hover for a "cool" effect */}
      <motion.div
        className="flex flex-col justify-between h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Smooth spring-like transition
      >
        <motion.header className="flex justify-between items-start" variants={itemVariants}>
          <div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{data.statLabel}</p>
            <p className="text-2xl font-bold text-white mt-1">{data.statCount}</p>
          </div>
          
          {/* This wrapper controls the icon's visibility based on parent's hover state */}
          <motion.div 
            className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
            variants={iconWrapperVariants} // Apply the new variants here
          >
            <VisitIcon className="w-4 h-4 text-black" />
          </motion.div>
        </motion.header>

        <motion.footer>
          <motion.div variants={itemVariants}>
            <img
              src={data.logoUrl}
              alt={`${data.name} Logo`}
              className="w-24 h-24 md:w-32 md:h-32" // Adjusted size for responsiveness
            />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mt-4">
            {data.name}
          </motion.h2>
        </motion.footer>
      </motion.div>
    </motion.a>
  );
};

export default FollowCard;