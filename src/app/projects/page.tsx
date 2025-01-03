"use client";

const projects = [
  {
    title: "GenTube",
    description: "A cross-platform Android/iOS application built with React Native, enabling users to generate AI-powered videos effortlessly using advanced machine learning models.",
    techStack: ['React Native', 'Flask', 'JavaScript', 'Python', 'MoviePy', 'Expo', 'MongoDB', 'Vercel', 'FFmpeg'],
    link: "https://github.com/Raahim2/GenTube/raw/refs/heads/main/Builds/GenTube.apk",
    githubLink: "https://github.com/Raahim2/GenTube/",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    timePeriod: "Sem III",
    type: "app"
  },
  {
    title: "MechaAI",
    description: "MECHA AI is a versatile image and file editing platform built with Flask, React, Vite, Taiwind. It combines tools for transforming  images and seamless file management, providing a user-friendly experience.",
    techStack: ['Flask', 'React', 'Vite', 'Tailwind CSS', 'Machine Learning' , "Open CV" , "YOLO" , "Pandas" , "Numpy" ],
    link: "https://github.com/Raahim2/MechaAI",
    githubLink: "https://github.com/Raahim2/MechaAI",
    videoSrc: "",
    timePeriod: "Sem III",
    type: "web"
  },
  {
    title: "BrightHome",
    description: "BrightHome is a highly functional e-commerce platform designed for Bright Home Furniture. It offers a seamless shopping experience, allowing users to purchase high-quality furniture products",
    techStack: ['Django', 'HTML', 'CSS', 'JavaScript' , "PostgreSQL" , "Python" , "Vercel"],
    link: "https://brighthome.vercel.app",
    githubLink: "https://github.com/Raahim2/BrightHome",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Smart Attendance System",
    description: "A web-based attendance management system that utilizes Face Recognition and Object Detection to mark attendance & uses advanced AI technologies to ensure a seamless and secure attendance process.",
    techStack: ['Flask', 'Face Recognition', 'HTML' , 'Tailwind CSS' , 'Python' , 'Object Detection' , 'YOLO' , 'JSON'],
    link: "https://github.com/Raahim2/Smart-Attendance-System",
    githubLink: "https://github.com/Raahim2/Smart-Attendance-System",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Pics AI",
    description: "Pics AI is a React Native mobile app designed to enhance and stylize images using advanced AI-powered machine learning models. The platform allows users to interact with an integrated chatbot",
    techStack: ['React Native', 'Cloudinary', 'Flask', 'ChatBot' , 'Gemini' , 'Javascript' ],
    link: "https://expo.dev/accounts/raahim2/projects/PicsAI/builds/46c9d25b-74c8-4851-a38c-82b4e2114428",
    githubLink: "https://github.com/Raahim2/Pics-AI",
    videoSrc: "",
    timePeriod: "Sem III",
    type: "app"
  },
  {
    title: "FortyFy Web",
    description: "FortyFy Web is a Vulnerability Assessment and Penetration Testing (VAPT) tool developed during the Synergy Hackathon. The tool is designed to help security professionals identify vulnerabilities websites",
    techStack: ['Python', 'Django', 'Python-Nmap', 'Scrapy' , 'Beautiful Soup' , 'Tailwind CSS'],
    link: "https://synergy-matrix-out.vercel.app",
    githubLink: "https://github.com/Raahim2/Synergy_MatrixOut",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Portfolio",
    description: "A personal portfolio built with TypeScript, Next.js, and Magic UI to showcase skills, projects, and professional achievements with seamless interactivity and responsive design.",
    techStack: ['TypeScript', 'Next.js', 'Magic UI', 'React', 'Tailwind CSS' , 'Acernity UI'],
    link: "/",
    githubLink: "https://github.com/Raahim2/Portfolio",
    videoSrc: "",
    timePeriod: "Sem III",
    type: "web"
  },
  {
    title: "Vault-7",
    description: "An Android malware scanner app built with Jetpack Compose and Kotlin, using advanced threat detection algorithms to identify and eliminate malicious files with real-time scanning.",
    techStack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Malware Detection', 'Real-time Sync'],
    link: "https://github.com/Raahim2/Vault-7",
    githubLink: "https://github.com/Raahim2/Vault-7",
    videoSrc: "",
    timePeriod: "Sem IV",
    type: "app"
  },
  {
    title: "File Manager",
    description: "A file management system developed with Flask and Python, designed to manage, organize, and process PDF files with features such as viewing, editing, and organizing.",
    techStack: ['Flask', 'Python', 'PDF Management', 'File System', 'Database Integration'],
    link: "https://github.com/Raahim2/File-Manager",
    githubLink: "https://github.com/Raahim2/File-Manager",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "TaskFusion",
    description: "A Streamlit app leveraging various Hugging Face models for AI tasks, including natural language processing, image classification, and recommendation systems, offering powerful AI capabilities.",
    techStack: ['Streamlit', 'Python', 'Hugging Face', 'Transformers', 'Machine Learning', 'NLP'],
    link: "https://taskfusion.streamlit.app/",
    githubLink: "https://github.com/Raahim2/Artificial-intelligence",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "StatsTube",
    description: "An Android app built with Java and Android Studio, using YouTube API to fetch and display YouTube statistics, including views, subscribers, and video performance analytics.",
    techStack: ['Java', 'Android Studio', 'YouTube API', 'Android SDK', 'Real-time Data'],
    link: "https://github.com/Raahim2/StatsTube/blob/main/app-debug.apk",
    githubLink: "https://github.com/Raahim2/StatsTube",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "app"
  },
  {
    title: "ExpenseManager",
    description: "An Android application built with Java, designed to help users track and manage their daily expenses with budgeting, income tracking, and expense categorization features.",
    techStack: ['Java', 'Android Studio', 'SQLite', 'YouTube API', 'Expense Tracking'],
    link: "https://github.com/Raahim2/ExpenseManager/blob/main/ExpenseManager.apk",
    githubLink: "https://github.com/Raahim2/ExpenseManager",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "app"
  },
  {
    title: "ML2WEB",
    description: "An Express.js app that converts machine learning models into a simple web interface using Flask, enabling easy deployment and use of models on a web platform.",
    techStack: ['Express.js', 'Flask', 'Machine Learning', 'Web Development', 'API Integration'],
    link: "https://github.com/Raahim2/ML2WEB",
    githubLink: "https://github.com/Raahim2/ML2WEB",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Django-TextUtils",
    description: "A basic Django project offering essential text utilities such as text conversion to uppercase, lowercase, and other text processing features for web applications.",
    techStack: ['Django', 'Python', 'Text Utilities', 'Web Development', 'HTML', 'CSS'],
    link: "https://text-utils-beta-olive.vercel.app/",
    githubLink: "https://github.com/Raahim2/Django-TextUtils",
    videoSrc: "",
    timePeriod: "Sem I",
    type: "web"
  },
  {
    title: "YOLO-Object-Detection",
    description: "A Flask web app that integrates YOLO (You Only Look Once) object detection model for real-time object recognition and classification, deployed via Flask API.",
    techStack: ['Flask', 'YOLO', 'Python', 'Object Detection', 'Machine Learning', 'TensorFlow'],
    link: "https://github.com/Raahim2/YOLO-Object-Detection",
    githubLink: "https://github.com/Raahim2/YOLO-Object-Detection",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Hackoona-Mattata",
    description: "A Django-based healthcare platform utilizing AI technologies to offer enhanced healthcare services, patient data management, and real-time appointment booking.",
    techStack: ['Django', 'AI', 'Healthcare', 'Machine Learning', 'Python', 'PostgreSQL'],
    link: "https://github.com/Raahim2/Hackoona-Mattata",
    githubLink: "https://github.com/Raahim2/Hackoona-Mattata",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Predictive-AI",
    description: "A platform built with Django and XGBoost showcasing predictive AI models for various use cases, including handwritten digit classification, house price prediction, and more.",
    techStack: ['Django', 'XGBoost', 'Python', 'Machine Learning', 'Data Science', 'AI Models'],
    link: "https://predictive-ai.vercel.app",
    githubLink: "https://github.com/Raahim2/Predictive-AI",
    videoSrc: "",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Django-Pyplot",
    description: "A Django project to integrate Matplotlib for data visualization and plotting, providing users with interactive charts and graphs for their data analysis tasks.",
    techStack: ['Django', 'Matplotlib', 'Python', 'Data Visualization', 'Web Development', 'Charts'],
    link: "https://django-pyplot.vercel.app",
    githubLink: "https://github.com/Raahim2/Django-Pyplot",
    videoSrc: "",
    timePeriod: "Sem I",
    type: "web"
  }
];


import Navbar from "../Components/NavBar";
import React, { useState } from 'react';
import ProjectCard from "../Components/ProjectCard";
import Slide from '../Components/SlideAnimation';


export default function Home() {

  const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker'>('light');

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
    <div className="w-full h-screen">
        <Navbar theme={theme} setTheme={setTheme}/>

        <div>
        <div className={`bg-gradient-to-r p-8 ${themeClasses[theme].bg} flex flex-col items-center`} id='Projects'>
        
        
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
        
       
      </div>
        </div>
    </div>
  );
}



  
  
