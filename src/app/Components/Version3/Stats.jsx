"use client";

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { label: 'PROJECTS (All)', value: 24, suffix: '+' },
  { label: 'EXPERIENCE (Months)', value: 6, suffix: ' ' },
  { label: 'FOLLOWERS (Github)', value: 375, suffix: '+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Controls the delay between each child's animation
    },
  },
};

// Animation variant for each individual stat block
const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px below its final position
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Stats = () => {
  return (
    <div className="py-24 sm:py-32 border-b border-t border-gray-800 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
       
        <motion.dl 
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {stats.map((stat) => (
            // Each stat block is also a motion component, applying the item variants
            <motion.div 
              key={stat.label} 
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              variants={itemVariants}
            >
              <dt className="text-base leading-7 text-gray-400 font-mono tracking-widest">
                {stat.label}
              </dt>
              <dd className="order-first text-2xl font-thin tracking-tight text-[#EAEAEA] sm:text-8xl">
                {/* react-countup will trigger as soon as this component becomes visible */}
                <CountUp end={stat.value} duration={2.75} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
};

export default Stats;