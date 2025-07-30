// components/ContactUs.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Assuming Cloud is a standard component. If it's also a motion component, this will still work.
import { Cloud } from '../Version2/Cloud';

// --- Reusable Arrow Icon ---
const ArrowIcon = (props) => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Animation Variants ---
// Variant for the main bordered container
const containerVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2, // This will make the columns animate after the container
    },
  },
};

// Variant for the text column (left side)
const textColumnVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15, // Stagger the h2, p, and button inside this column
    },
  },
};

// Variant for the cloud/image column (right side)
const cloudColumnVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Variant for the individual text items (h2, p, a)
const textItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const ContactUs = () => {
  return (
    // FIX 1: Added `relative overflow-x-hidden` to the root section.
    // This is the main fix that prevents the horizontal scrollbar during animations.
    <section className="w-full py-16 md:py-24 relative overflow-x-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border rounded-xl border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        
        {/* Main grid container - no variants needed as its parent orchestrates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">

          {/* Animated Image Column */}
          <motion.div 
            className="flex justify-center lg:justify-start lg:order-last filter invert"
            variants={cloudColumnVariant}
          >
            <Cloud/>
          </motion.div>

          {/* Animated Text Content Column */}
          <motion.div 
            className="lg:order-first rounded-2xl p-8 sm:p-12 lg:pr-20 z-10"
            variants={textColumnVariant}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-neutral-100 tracking-tight"
              variants={textItemVariant}
            >
              Have a project in mind? <br />
              Let's talk.
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg text-neutral-400"
              variants={textItemVariant}
            >
              We're always excited to discuss new projects and partnership opportunities. 
              Reach out and let’s see how we can create something amazing together.
            </motion.p>
            <motion.a
              href="#"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700/80 rounded-lg text-neutral-100 font-medium transition-colors duration-300"
              variants={textItemVariant}
            >
              <span>Contact Us</span>
              <ArrowIcon className="w-3 h-3 ml-2" />
            </motion.a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;