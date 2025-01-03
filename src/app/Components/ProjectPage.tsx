const projects = [
  {
    title: "GenTube",
    description: "A cross-platform Android/iOS application built with React Native, enabling users to generate AI-powered videos effortlessly using advanced machine learning models.",
    techStack: ['React Native', 'Flask', 'JavaScript', 'Python', 'MoviePy', 'Expo', 'MongoDB', 'Vercel', 'FFmpeg'],
    link: "https://github.com/Raahim2/Predictive-AI",
    githubLink: "https://github.com/Raahim2/Predictive-AI",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    timePeriod: "Sem III",
    type: "app"
  },
  {
    title: "MechaAI",
    description: "MECHA AI is a versatile image and file editing platform built with Flask, React, Vite, Taiwind. It combines tools for transforming  images and seamless file management, providing a user-friendly experience.",
    techStack: ['Flask', 'React', 'Vite', 'Tailwind CSS', 'Machine Learning' , "Open CV" , "YOLO" , "Pandas" , "Numpy" ],
    link: "https://github.com/Raahim2/ImageAI",
    githubLink: "https://github.com/Raahim2/ImageAI",
    videoSrc: "",
    timePeriod: "Sem III",
    type: "web"
  },
  {
    title: "BrightHome",
    description: "BrightHome is a highly functional e-commerce platform designed for Bright Home Furniture. It offers a seamless shopping experience, allowing users to purchase high-quality furniture products",
    techStack: ['Django', 'HTML', 'CSS', 'JavaScript' , "PostgreSQL" , "Python" , "Vercel"],
    link: "https://github.com/Raahim2/BrightHome",
    githubLink: "https://github.com/Raahim2/BrightHome",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Smart Attendance System",
    description: "A web-based attendance management system that utilizes Face Recognition and Object Detection to mark attendance & uses advanced AI technologies to ensure a seamless and secure attendance process.",
    techStack: ['Flask', 'Face Recognition', 'HTML' , 'Tailwind CSS' , 'Python' , 'Object Detection' , 'YOLO' , 'JSON'],
    link: "https://github.com/Raahim2/SmartAttendance",
    githubLink: "https://github.com/Raahim2/SmartAttendance",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Pics AI",
    description: "Pics AI is a React Native mobile app designed to enhance and stylize images using advanced AI-powered machine learning models. The platform allows users to interact with an integrated chatbot",
    techStack: ['React Native', 'Cloudinary', 'Flask', 'ChatBot' , 'Gemini' , 'Javascript' ],
    link: "https://github.com/Raahim2/PicsAI",
    githubLink: "https://github.com/Raahim2/PicsAI",
    videoSrc: "",
    timePeriod: "Sem III",
    type: "app"
  },
  {
    title: "FortyFy Web",
    description: "FortyFy Web is a Vulnerability Assessment and Penetration Testing (VAPT) tool developed during the Synergy Hackathon. The tool is designed to help security professionals identify vulnerabilities websites",
    techStack: ['Python', 'Django', 'Python-Nmap', 'Scrapy' , 'Beautiful Soup' , 'Tailwind CSS'],
    link: "https://github.com/Raahim2/SynergyMatrixOut",
    githubLink: "https://github.com/Raahim2/SynergyMatrixOut",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  }
];

// components/ProjectPage.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import Info from './Info';
import Slide from './SlideAnimation';
import Link from 'next/link';
import { RainbowButton } from '@/components/ui/rainbow-button';

interface ProjectPageProps {
  theme: 'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker'; // Define theme types here
}

const ProjectPage: React.FC<ProjectPageProps> = ({ theme }) => {

  

  const themeClasses = {
    light: {
      bg: "from-white to-white",
      color:"black",
    },
    dark: {
      bg: "from-gray-800 via-gray-900 to-black",
      color:"white",
    },
    fire: {
      bg: "from-white via-orange-100 to-white",
      color:"black",
    },
    luxury: {
      bg: "from-white via-yellow-100 to-white",
      color:"black",
    },
    lightning: {
      bg: "from-white via-blue-100 to-white",
      color:"black",
    },
    hacker: {
      bg: "from-green-700 via-green-900 to-green-900 ",
      color:"white",
    },
  };

  return (
    <div className={`bg-gradient-to-r p-8 ${themeClasses[theme].bg} flex flex-col items-center`} id='Projects'>
      <Info 
        theme={theme}
        name='Explore Projects' 
        title='Showcase of My Work' 
        desc='Live Demo/Code for the projects I have made'
      />
      
      {/* Adjusted grid for responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto sm:w-3/4 md:w-3/4 lg:w-3/4 w-full ">
        {projects.map((project, index) => (
          <Slide key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              githubLink={project.githubLink}
              videoSrc={project.videoSrc}
              timePeriod={project.timePeriod}
              projectType={project.type}
            />
          </Slide>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <RainbowButton className="text-center">
          <Link href="/projects">
          View All Projects
          </Link>
          </RainbowButton>

      </div>
    </div>
  );
};

export default ProjectPage;
