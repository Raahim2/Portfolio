// components/Skills.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Braces, TerminalSquare, Shapes } from 'lucide-react';
import SkillCard from './SkillCard';
import Starter from './Starter';

// --- DATA & CONFIGURATION ---
const allSkills = [
    // Programming Languages
    { name: "Java", type: "Programming Languages", className: "md:col-span-2 md:row-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/Java.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Java.svg" },
    { name: "Kotlin", type: "Programming Languages", className: "aspect-square", outlineIconUrl: "/SVG/SkillsV3/Outline/Kotlin.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Kotlin.svg" },
    { name: "Python", type: "Programming Languages", className: "md:col-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/Python.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Python.svg" },
    { name: "JavaScript", type: "Programming Languages", className: "aspect-square", outlineIconUrl: "/SVG/SkillsV3/Outline/JavaScript.svg", filledIconUrl: "/SVG/SkillsV3/Filled/JavaScript.svg" },
    
    // Frameworks & Libraries
    { name: "React", type: "Frameworks & Libraries", className: "md:col-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/React.svg", filledIconUrl: "/SVG/SkillsV3/Filled/React.svg" },
    { name: "Next.js", type: "Frameworks & Libraries", className: "md:col-span-2 md:row-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/NextJS.svg", filledIconUrl: "/SVG/SkillsV3/Filled/NextJS.svg" },
    { name: "Expo", type: "Frameworks & Libraries", className: "md:row-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/Expo.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Expo.svg" },
    { name: "Flask", type: "Frameworks & Libraries", className: "aspect-square", outlineIconUrl: "/SVG/SkillsV3/Outline/Flask.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Flask.svg" },
    { name: "TailwindCSS", type: "Frameworks & Libraries", className: "md:col-span-2 md:row-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/TailwindCSS.svg", filledIconUrl: "/SVG/SkillsV3/Filled/TailwindCSS.svg" },
    { name: "Django", type: "Frameworks & Libraries", className: "aspect-square", outlineIconUrl: "/SVG/SkillsV3/Outline/Django.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Django.svg" },
    
    // Tools & Platforms
    { name: "VScode", type: "Tools & Platforms", className: "md:col-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/VScode.svg", filledIconUrl: "/SVG/SkillsV3/Filled/VScode.svg" },
    { name: "Github", type: "Tools & Platforms", className: "aspect-square", outlineIconUrl: "/SVG/SkillsV3/Outline/Github.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Github.svg" },
    { name: "Vercel", type: "Tools & Platforms", className: "md:col-span-2", outlineIconUrl: "/SVG/SkillsV3/Outline/Vercel.svg", filledIconUrl: "/SVG/SkillsV3/Filled/Vercel.svg" },
    { name: "AndroidStudio", type: "Tools & Platforms", className: "aspect-square", outlineIconUrl: "/SVG/SkillsV3/Outline/AndroidStudio.svg", filledIconUrl: "/SVG/SkillsV3/Filled/AndroidStudio.svg" },
];

const skillTypes = ["Programming Languages", "Frameworks & Libraries", "Tools & Platforms"];
const icons = { 
  "Programming Languages": <Code className="w-4 h-4" />, 
  "Frameworks & Libraries": <Braces className="w-4 h-4" />, 
  "Tools & Platforms": <TerminalSquare className="w-4 h-4" />, 
  "Others": <Shapes className="w-4 h-4" /> 
};

// --- ANIMATION VARIANTS ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const selectorVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, y: -20, transition: { ease: 'easeIn' } }
};


const Skills = () => {
  const [selectedType, setSelectedType] = useState(skillTypes[1]);
  const [pillStyle, setPillStyle] = useState({});
  const refs = useRef([]);
  
  // Detect window size to apply the correct pill animation style
  useEffect(() => {
    const handleResize = () => {
      const selectedIndex = skillTypes.indexOf(selectedType);
      const selectedButton = refs.current[selectedIndex];
      if (selectedButton) {
        // Check if we're in the mobile layout (stacked vertically)
        if (window.innerWidth < 768) { // 768px is Tailwind's `md` breakpoint
          setPillStyle({
            height: selectedButton.offsetHeight,
            top: selectedButton.offsetTop,
            width: '100%', // Full width for vertical pill
            left: 0
          });
        } else { // Desktop layout (side-by-side)
          setPillStyle({
            width: selectedButton.offsetWidth,
            left: selectedButton.offsetLeft,
            height: '100%', // Full height for horizontal pill
            top: 0
          });
        }
      }
    };

    // Calculate initial position
    handleResize();

    // Recalculate on window resize
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedType]); // Rerun when the selected tab changes

  const filteredSkills = allSkills.filter(skill => skill.type === selectedType);

  return (
    <motion.section 
      id="skills"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Starter title={"Skills"} text1={"Languages, frameworks, and tools"} text2={"I work with."} />
      </div>

      <motion.div className="my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={selectorVariants}>
        <div className="relative flex flex-col md:flex-row w-full p-0 border border-zinc-800 rounded-lg overflow-hidden">
          
          <div className="absolute bg-emerald-400 transition-all duration-300 ease-in-out" style={pillStyle}/>

          {skillTypes.map((option, index) => (
            <button 
              key={option} 
              ref={(el) => (refs.current[index] = el)} 
              onClick={() => setSelectedType(option)}
              className={`
                relative z-10 flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-medium transition-colors duration-300 
                focus:outline-none 
                border-b border-zinc-800 last:border-b-0 
                md:border-b-0 md:border-r md:border-zinc-800 md:last:border-r-0
                ${selectedType === option ? 'text-zinc-900' : 'text-zinc-400 hover:text-white'}
              `}
            >
              {icons[option] ? React.cloneElement(icons[option], { className: `w-4 h-4 transition-colors duration-300 ${selectedType === option ? 'text-zinc-900' : 'text-sky-500'}` }) : null}
              <span>{option}</span>
            </button>
          ))}
        </div>
      </motion.div>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            className="grid grid-cols-2 md:grid-cols-6 md:grid-flow-dense "
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredSkills.map((skill) => (
              <SkillCard 
                key={skill.name}
                {...skill} 
                variants={gridItemVariants} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;