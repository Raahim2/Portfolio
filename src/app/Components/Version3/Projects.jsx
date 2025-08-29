"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starter from './Starter';
import ProjectCard from '../Version3/ProjectCard';
import { Code2, Smartphone } from 'lucide-react';

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
    videoSrc: "/Videos/DevStudio.mp4"
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
    videoSrc: "/Videos/Portfolio.mp4"
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
    videoSrc: "/Videos/MechaAI.mp4"
  },
  {
    title: "Frame PDF",
    description: "Web-based file manager with PDF tools and file organization using Flask.",
    githubLink: "https://github.com/Raahim2/Frame-PDF",
    link: "https://frame-pdf.vercel.app/",
    techStack: ['Vue JS', 'PDF lib', 'JavaScript', 'Tailwind CSS', 'PDF Processing'],
    type: "web",
    timePeriod: "Sem II",
    thumbnailURL: "/Images/Banner/FramePDF.png",
    videoSrc: "/Videos/FramePDF.mp4"
  },
 
  {
    title: "CSV Analytics",
    description: "Web-based tool to make different types to plots using matplotlib.",
    githubLink: "https://github.com/Raahim2/CSV-Analytics/",
    link: "https://csv-analytics-snowy.vercel.app/",
    techStack: ['Python', 'Django', 'HTML', 'Tailwind CSS', 'Matplotlib', 'Pandas' , 'Numpy'],
    type: "web",
    timePeriod: "Recent",
    thumbnailURL: "/Images/Banner/CSVAnalytics.png",
    videoSrc: "/Videos/CSVAnalyser.mp4"
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
    videoSrc: "/Videos/GitMax.mp4"
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
    videoSrc: "/Videos/OnlineDesktop.mp4"
  },
  
  {
    title: "CountVision",
    description: "A Smart Count app for counting anything using YOLO and object detection.",
    githubLink: "https://github.com/Raahim2/CountVision",
    link: "https://count-vision.vercel.app/",
    techStack: ['Vue js',  'YOLO', 'Face Recognition', 'Tailwind CSS', 'JavaScript'],
    type: "web",
    timePeriod: "Sem II",
    thumbnailURL: "/Images/Banner/CountVision.png",
    videoSrc: "/Videos/CountVision.mp4"
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
    videoSrc: "/Videos/BrightHome.mp4"
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
    videoSrc: "/Videos/Fortify.mp4"
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
    videoSrc: "/Videos/PredictiveAI.mp4"
  },
  

  // apps
{
  title: "Sharpify",
  description: "An image enhancement app built with React Native and Expo, designed to sharpen and improve image quality effortlessly.",
  githubLink: "https://github.com/Raahim2/Sharpify",
  link: "https://play.google.com/store/apps/details?id=com.raahim2.Sharpify",
  techStack: ["React Native", "Expo", "JavaScript", "Image Processing", "Android", "iOS"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Sharpify.png",
  videoSrc: "/Videos/Sharpify.mp4"
},
{
  title: "ArtSpark",
  description: "App for creativity with 4 core features: Kaleidoscope Canvas, PixcelArt, Icon Maker, and Mockup Maker, enabling users to create everything for their projects.",
  githubLink: "https://github.com/Raahim2/ArtSpark",
  link: "https://github.com/Raahim2/ArtSpark/releases/download/ArtSpark/ArtSpark.apk",
  techStack: ["React Native", "Expo", "JavaScript", "Canvas API", "Android", "iOS"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/ArtSpark.png",
  videoSrc: "/Videos/ArtSpark.mp4"
},
{
  title: "Speedometer",
  description: "A Kotlin Jetpack Compose app that tracks and displays real-time speed using device GPS, ideal for driving, cycling, and running.",
  githubLink: "https://github.com/Raahim2/Speedometer",
  link: "https://github.com/Raahim2/Speedometer/releases/download/init/Speedometer.apk",
  techStack: ["Kotlin", "Jetpack Compose", "Android", "GPS API", "Coroutines", "Material Design"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Speedometer.png",
  videoSrc: "/Videos/Speedometer.mp4"
},
{
  title: "StatsTube",
  description: "A Java-based Android app to analyze YouTube channels and videos, providing detailed statistics and insights for creators.",
  githubLink: "https://github.com/Raahim2/StatsTube",
  link: "https://github.com/Raahim2/StatsTube/releases/download/initial/app-debug.apk",
  techStack: ["Java", "Android SDK", "YouTube Data API", "Material Design", "XML Layouts", "REST API"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Statstube.png",
  videoSrc: "/Videos/Statstube.mp4"
},
{
  title: "Counter",
  description: "A simple yet powerful counter app built with React Native, allowing customizable counting features for various uses.",
  githubLink: "https://github.com/Raahim2/Counter",
  link: "https://github.com/Raahim2/Counter/releases/download/counter/Counter.apk",
  techStack: ["React Native", "JavaScript", "Expo", "Android", "iOS", "State Management"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/Counter.png",
  videoSrc: "/Videos/Counter.mp4"
},
{
  title: "Cyber Sheild",
  description: "A Kotlin Jetpack Compose app for detecting phishing and malware threats, providing real-time protection and alerts.",
  githubLink: "https://github.com/NorzOman/Frortify",
  link: "https://github.com/Raahim2/Android-Developtment/raw/refs/heads/main/APPS/KOTLIN/CyberSheild/CyberSheild.apk",
  techStack: ["Kotlin", "Jetpack Compose", "Android", "Coroutines", "Security APIs", "Material Design"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/CyberSheild.png",
  videoSrc: ""
},
{
  title: "Video Player",
  description: "A React Native Expo video player app with smooth playback controls and support for multiple video formats.",
  githubLink: "https://github.com/Raahim2/VideoPlayer",
  link: "https://github.com/Raahim2/VideoPlayer/releases/download/vidplayerv1/VideoPlayer.apk",
  techStack: ["React Native", "Expo", "JavaScript", "Android", "iOS", "Media Playback APIs"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/VideoPlayer.png",
  videoSrc: "/Videos/VideoPlayer.mp4"
},
{
  title: "PicsAI",
  description: "A cross-platform AI chatbot app built with React Native and Expo, enabling users to interact with advanced conversational AI for assistance.",
  githubLink: "https://github.com/Raahim2/Pics-AI",
  link: "https://github.com/Raahim2/Pics-AI/releases/download/picsai/PicsAI.apk",
  techStack: ["React Native", "Expo", "JavaScript", "Android", "iOS", "Gemini API"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/PicsAI.png",
  videoSrc: "/Videos/PicsAI.mp4"
},
{
  title: "SuperMeals",
  description: "A React Native app that provides healthy meal recipes and nutrition tips, helping users maintain a balanced diet.",
  githubLink: "https://github.com/Raahim2/SuperMeals",
  link: "https://github.com/Raahim2/SuperMeals/releases/download/supermeals/SuperMeals.apk",
  techStack: ["React Native", "Expo", "JavaScript", "Android", "iOS", "API"],
  type: "app",
  timePeriod: "Recent",
  thumbnailURL: "/Images/Banner/SuperMeals.png",
  videoSrc: "/Videos/SuperMeals.mp4"
}
];


const projectTypes = ["web", "app"];
const icons = {
  web: <Code2 className="w-4 h-4" />,
  app: <Smartphone className="w-4 h-4" />
};

// Container variant - ONLY for orchestrating stagger, no enter/exit
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Item variant for individual card animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const selectorVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Projects = () => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [pillStyle, setPillStyle] = useState({});
  const refs = useRef([]);

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

        {/* Variant Selector - No changes here */}
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

        {/* --- CHANGE IS HERE --- */}
        {/* Project Cards Grid Container */}
        <motion.div
          className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* AnimatePresence now wraps the list of items */}
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                // KEY CHANGE: Use a unique, stable ID from the data, NOT the index.
                key={project.title} 
                variants={itemVariants}
                // The 'exit' prop is automatically handled by AnimatePresence
                // We don't need initial/animate here because the parent container orchestrates it
                layout // Optional: Add for a smooth re-ordering animation if items change position
              >
                <ProjectCard {...project} projectType={project.type} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;