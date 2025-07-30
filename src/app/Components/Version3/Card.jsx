// src/components/Card.js

import React from 'react';
import { motion } from 'framer-motion';

// --- (NEW) Animation variants for the hover effect ---

// Variant for the main card container
const cardVariants = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  hover: { 
    scale: 1.05, // Slightly increase size
    y: -8,       // Lift the card up
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
};

// Variant for the image inside the card
const imageVariants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  hover: { 
    scale: 1.1, // Zoom the image more for a depth effect
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
};


// Animation variants for the initial content load (unchanged)
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const Card = ({ number, title, imageUrl, index }) => {
  return (
    // (UPDATED) The main container is now a motion component to control the hover state
    <motion.div
      className="flex flex-col p-8 sm:p-10 min-h-[480px] md:min-h-[520px]"
      initial="rest" // The default animation state
      whileHover="hover" // The state to transition to on hover
      animate="rest"     // Ensures it returns to the 'rest' state
      variants={cardVariants} // Apply the lift & scale effect to the whole card
    >
      
      {/* Number circle at the top */}
      <div className="w-12 h-12 flex-shrink-0 border border-gray-700 rounded-full flex items-center justify-center mb-10">
        <span className="text-gray-400">{number}</span>
      </div>

      {/* Animated content container (for initial load) */}
      <motion.div
        className="flex flex-col flex-grow"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* (UPDATED) Image wrapper now also responds to the parent's hover state */}
        <motion.div variants={imageVariants} className="my-auto">
          <img src={imageUrl} alt={title} className="w-full h-auto max-w-xs mx-auto" />
        </motion.div>
        
        <motion.h3 variants={contentVariants} className="text-2xl lg:text-3xl font-light mt-auto">
          {title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default Card;