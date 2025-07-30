// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion'; // Still need motion
import Starter from './Starter';
import ProjectCard from '../Version3/ProjectCard'; // Your ProjectCard component

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
  }
];


// **IMPROVED ANIMATION VARIANTS**

// Container variant to orchestrate the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // A slightly longer delay between cards
    }
  }
};

// Item variant for a more pronounced "fade in and up" effect
const itemVariants = {
  hidden: { y: 50, opacity: 0 }, // Start 50px lower
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Make the animation longer and smoother
      ease: [0.17, 0.55, 0.55, 1] // A nice ease-out cubic bezier curve
    }
  }
};

const Projects = () => {
  return (
    <div className="text-white pb-10 relative" id="projects">
      <div className="max-w-7xl mx-auto px-20 lg:px-8 relative z-10">
        
        <Starter title={"Projects"} text1={"Built for real users."} text2={"Shipped with purpose."} />

        {/* **THE FIX IS HERE** */}
        <motion.div
          className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          // Animate when the element is in view
          whileInView="visible"
          // Configure viewport settings for the trigger
          viewport={{ 
            once: true, // Animate only once
            amount: 0.1 // Trigger when 10% of the element is visible
          }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
                githubLink={project.githubLink}
                videoSrc={project.videoSrc}
                thumbnailURL={project.thumbnailURL}
                timePeriod={project.timePeriod}
                projectType={project.type}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
export default Projects;
    
