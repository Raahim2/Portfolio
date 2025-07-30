// src/components/Starter.js (or wherever your file is located)
"use client"; // Add this directive for Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the container to orchestrate the staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between the title and the heading
      delayChildren: 0.1,   // Optional small delay before the first child starts
    },
  },
};

// Animation variants for the individual text elements
const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start invisible and 30px down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Starter = ({ title, text1, text2 }) => {
  return (
    // The main container is now a motion.div
    <motion.div
      className="text-left mb-16"
      initial="hidden"
      whileInView="visible" // Trigger animation when the component scrolls into view
      viewport={{ once: true, amount: 0.5 }} // Animation runs once when 50% is visible
      variants={containerVariants}
    >
      {/* The title (p tag) is now a motion.p and will animate */}
      <motion.p
        className="text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-3"
        variants={itemVariants}
      >
        {title}
      </motion.p>
      
      {/* The heading (h2 tag) is now a motion.h2 and will animate after the title */}
      <motion.h2
        className="text-4xl md:text-5xl font-light tracking-tight text-white" // Added text-white for visibility on dark backgrounds
        variants={itemVariants}
      >
        {text1}
        <br />
        {text2}
      </motion.h2 >
    </motion.div>
  );
};

export default Starter;