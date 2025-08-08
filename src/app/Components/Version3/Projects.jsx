// src/components/Projects.js



// src/components/Projects.js
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starter from './Starter';
import ProjectCard from '../Version3/ProjectCard';
import { Code2, Smartphone } from 'lucide-react'; // icons for selector

// Your existing projects array

const projects = [
  {
    title: "DevStudio",
    description: "AI-powered Electron code editor with Monaco and GitHub integration.",
    githubLink: "https://github.com/Raahim2/DevStudio",
    link: "https://devstudio-ai.vercel.app/",
    techStack: ['Electron', 'Next.js', 'Monaco Editor', 'Tailwind CSS', 'MongoDB', 'Node.js', 'JavaScript'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/DevStudio.png",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1749037446/k3hzh2qvapbrcrhx1ouv.mp4"
  },
  {
    title: "Portfolio",
    description: "Personal portfolio built using Next.js and Tailwind CSS. Displays projects, skills, and contact information.",
    githubLink: "https://github.com/Raahim2/Portfolio",
    link: "https://raahim-portfolio.vercel.app/",
    techStack: ['Next.js', 'Tailwind CSS', 'JavaScript', 'React', 'Framer Motion'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/Portfolio.png",
    videoSrc: ""
  },
  
  {
    title: "MechaAI",
    description: "AI-based image and file editing web app built with React and Vite.",
    githubLink: "https://github.com/Raahim2/MechaAI",
    link: "https://mecha-ai.vercel.app/",
    techStack: ['React', 'Vite', 'HTML', 'CSS', 'OpenCV', 'YOLO', 'Flask', 'Tailwind CSS', 'Pandas', 'NumPy', 'Python'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/MechaAI.png",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887048/PROJECTS-DEMO/asdmbxnggtdckzprn8lo.mp4"
  },
  {
    title: "GitMax",
    description: "Advance GitHub dashboard & automation system powered by AI.",
    githubLink: "https://github.com/Raahim2/GitMax",
    link: "https://gitmax.vercel.app/",
    techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'GitHub Actions', 'JavaScript', 'React'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/Gitmax.png",
    videoSrc: ""
  },
  {
    title: "Online-Desktop",
    description: "Desktop-style UI for executing HTML and code snippets online.",
    githubLink: "https://github.com/Raahim2/Online-Desktop",
    link: "https://online-desktop.vercel.app/",
    techStack: ['Next.js', 'HTML', 'CSS', 'Python', 'JavaScript', 'React'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/Desktop.png",
    videoSrc: ""
  },
  {
    title: "BrightHome",
    description: "Furniture e-commerce platform using Django and PostgreSQL.",
    githubLink: "https://github.com/Raahim2/BrightHome",
    link: "https://brighthome.vercel.app",
    techStack: ['Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Python', 'Vercel'],
    type: "web",
    timePeriod: "Sem II",
    thumbnailURL: "/Images/Banner/BrightHome.png",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887158/PROJECTS-DEMO/g4vctcdgfrwtbar3jokc.mp4"
  },
   {
    title: "Fortify Web",
    description: "Web-based VAPT security testing tool with AI logic integration.",
    githubLink: "https://github.com/Raahim2/Synergy_MatrixOut",
    link: "https://synergy-matrix-out.vercel.app",
    techStack: ['Python', 'Django', 'HTML', 'Tailwind CSS', 'JavaScript', 'Cybersecurity'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/Fortify.png",
    videoSrc: ""
  },
 
  {
    title: "Smart-Attendance-System",
    description: "Facial recognition-based attendance system using Flask and OpenCV.",
    githubLink: "https://github.com/Raahim2/Smart-Attendance-System",
    link: "https://smart-attendance-system-ten.vercel.app",
    techStack: ['Flask', 'OpenCV', 'YOLO', 'Face Recognition', 'Python', 'HTML', 'Tailwind CSS', 'JavaScript'],
    type: "web",
    timePeriod: "Sem II",
    thumbnailURL: "/Images/Banner/Attendance.png",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887208/PROJECTS-DEMO/jrjqwy7osdd6vixnk4le.mp4"
  },
   {
    title: "Predictive-AI",
    description: "AI platform with ML predictions and scikit-learn models built on Django.",
    githubLink: "https://github.com/Raahim2/Predictive-AI",
    link: "https://predictive-ai.vercel.app/",
    techStack: ['Django', 'Python', 'scikit-learn', 'Pandas', 'NumPy', 'HTML', 'CSS', 'JavaScript'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/PredAI.png",
    videoSrc: ""
  },
  {
    title: "File-Manager",
    description: "Web-based file manager with PDF tools and file organization using Flask.",
    githubLink: "https://github.com/Raahim2/File-Manager",
    link: "https://file-manager-virid.vercel.app",
    techStack: ['Flask', 'Python', 'HTML', 'JavaScript', 'Tailwind CSS', 'PDF Processing'],
    type: "web",
    timePeriod: "Sem II",
    thumbnailURL: "/Images/Banner/FileManager.png",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887394/PROJECTS-DEMO/qwcsui81axnhlekylufb.mp4"
  },
 
  {
    title: "PyPlot",
    description: "Web-based tool to make different types to plots using matplotlib.",
    githubLink: "https://github.com/Raahim2/Synergy_MatrixOut",
    link: "https://django-pyplot.vercel.app",
    techStack: ['Python', 'Django', 'HTML', 'Tailwind CSS', 'Matplotlib', 'Pandas' , 'Numpy'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/Pyplot.png",
    videoSrc: ""
  },

  // apps
{
  title: "Sharpify",
  description: "An image enhancement app built with React Native and Expo, designed to sharpen and improve image quality effortlessly.",
  githubLink: "https://github.com/Raahim2/Sharpify",
  link: "",
  techStack: ["React Native", "Expo", "JavaScript", "Image Processing", "Android", "iOS"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
},
{
  title: "ArtSpark",
  description: "A creative design app like Canva with 4 core features: Kaleidoscope Canvas, PixcerbArt, Icon Maker, and Mockup Maker, enabling users to create everything from pixel art to professional mockups.",
  githubLink: "https://github.com/Raahim2/ArtSpark",
  link: "",
  techStack: ["React Native", "Expo", "JavaScript", "Canvas API", "Android", "iOS"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
},
{
  title: "Cyber Sheild",
  description: "A Kotlin Jetpack Compose app for detecting phishing and malware threats, providing real-time protection and alerts.",
  githubLink: "https://github.com/Raahim2/Android-Developtment/tree/main/APPS/KOTLIN/CyberSheild",
  link: "",
  techStack: ["Kotlin", "Jetpack Compose", "Android", "Coroutines", "Security APIs", "Material Design"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
},
{
  title: "Speedometer",
  description: "A Kotlin Jetpack Compose app that tracks and displays real-time speed using device GPS, ideal for driving, cycling, and running.",
  githubLink: "https://github.com/Raahim2/Android-Developtment/tree/main/APPS/KOTLIN/Speedometer",
  link: "",
  techStack: ["Kotlin", "Jetpack Compose", "Android", "GPS API", "Coroutines", "Material Design"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
},
{
  title: "Stats Tube",
  description: "A Java-based Android app to analyze YouTube channels and videos, providing detailed statistics and insights for creators.",
  githubLink: "https://github.com/Raahim2/Android-Developtment/tree/main/APPS/JAVA/StatsTube",
  link: "",
  techStack: ["Java", "Android SDK", "YouTube Data API", "Material Design", "XML Layouts", "REST API"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
},
{
  title: "Counter",
  description: "A simple yet powerful counter app built with React Native, allowing customizable counting features for various uses.",
  githubLink: "https://github.com/Raahim2/Android-Developtment/tree/main/APPS/REACT%20NATIVE/Counter",
  link: "",
  techStack: ["React Native", "JavaScript", "Expo", "Android", "iOS", "State Management"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
},
{
  title: "Video Player",
  description: "A React Native Expo video player app with smooth playback controls and support for multiple video formats.",
  githubLink: "https://github.com/Raahim2/Android-Developtment/tree/main/APPS/REACT%20NATIVE/VideoPlayer",
  link: "",
  techStack: ["React Native", "Expo", "JavaScript", "Android", "iOS", "Media Playback APIs"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Pyplot.png",
  videoSrc: ""
}


];

const projectTypes = ["web", "app"];
const icons = {
  web: <Code2 className="w-4 h-4" />,
  app: <Smartphone className="w-4 h-4" />
};

// Container variant to orchestrate the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Item variant for "fade in and up" effect
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }
  },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3 } }
};

const selectorVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Projects = () => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]); // default to web
  const [pillStyle, setPillStyle] = useState({});
  const refs = useRef([]);

  // Handle pill positioning (same logic as Skills)
  useEffect(() => {
    const handleResize = () => {
      const selectedIndex = projectTypes.indexOf(selectedType);
      const selectedButton = refs.current[selectedIndex];
      if (selectedButton) {
        if (window.innerWidth < 768) {
          setPillStyle({
            height: selectedButton.offsetHeight,
            top: selectedButton.offsetTop,
            width: '100%',
            left: 0
          });
        } else {
          setPillStyle({
            width: selectedButton.offsetWidth,
            left: selectedButton.offsetLeft,
            height: '100%',
            top: 0
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedType]);

  const filteredProjects = projects.filter(p => p.type === selectedType);

  return (
    <div className="text-white pb-10 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Starter title={"Projects"} text1={"Built for real users."} text2={"Shipped with purpose."} />

        {/* Variant Selector */}
        <motion.div className="my-12" variants={selectorVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative flex flex-col md:flex-row w-full p-0 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="absolute bg-emerald-400 transition-all duration-300 ease-in-out" style={pillStyle} />

            {projectTypes.map((option, index) => (
              <button
                key={option}
                ref={(el) => (refs.current[index] = el)}
                onClick={() => setSelectedType(option)}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-medium transition-colors duration-300 
                  focus:outline-none border-b border-zinc-800 last:border-b-0 
                  md:border-b-0 md:border-r md:border-zinc-800 md:last:border-r-0
                  ${selectedType === option ? 'text-zinc-900' : 'text-zinc-400 hover:text-white'}
                `}
              >
                {icons[option] ? React.cloneElement(icons[option], { className: `w-4 h-4 transition-colors duration-300 ${selectedType === option ? 'text-zinc-900' : 'text-sky-500'}` }) : null}
                <span className="capitalize">{option}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
