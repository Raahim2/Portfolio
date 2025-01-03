"use client";

const projects = [
    {
      title: "Predictive AI",
      description: "A comprehensive platform showcasing various predictive AI models, including handwritten digit classification, plant disease detection, and house price prediction.",
      techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'TensorFlow', 'Keras', 'NumPy', 'Pandas'],
      link: "https://github.com/Raahim2/Predictive-AI",
      githubLink: "https://github.com/Raahim2/Predictive-AI",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Mar 2024 - Apr 2024"
    },
    {
      title: "Expense Manager",
      description: "An Android application that helps users track their expenses efficiently, providing visual insights into spending habits through various charts like Pie Scatter etc. ",
      techStack: ['Java', 'Android SDK', 'AnyChart', 'SQLite', 'XML' , 'Android Studio'],
      link: "https://github.com/Raahim2/ExpenseManager",
      githubLink: "https://github.com/Raahim2/ExpenseManager",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Feb 2024 - Mar 2024"
    },
    {
      title: "My Care AI",
      description: "An innovative AI-driven platform designed to streamline healthcare management for individuals, offering personalized recommendations and symptom analysis.",
      techStack: ['Python', 'Django', 'Machine Learning', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'HTML', 'CSS'],
      link: "https://github.com/Raahim2/Hackoona-Mattata",
      githubLink: "https://github.com/Raahim2/Hackoona-Mattata",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Jan 2024 - Feb 2024"
    },
    {
      title: "Bright Home Furniture",
      description: "An e-commerce platform powered by Django, offering a seamless shopping experience for high-quality furniture products.",
      techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite'],
      link: "https://github.com/Raahim2/Bright-Home-Furniture",
      githubLink: "https://github.com/Raahim2/Bright-Home-Furniture",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Dec 2023 - Jan 2024"
    },
    {
      title: "Pyplot",
      description: "A Django web application that simplifies data visualization, allowing users to create various graphs without any coding.",
      techStack: ['Django', 'Python', 'Matplotlib', 'JavaScript', 'HTML', 'CSS' , 'Django - Admin'],
      link: "https://github.com/Raahim2/Pyplot",
      githubLink: "https://github.com/Raahim2/Pyplot",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Nov 2023 - Dec 2023"
    },
    {
      title: "Plant Disease Classification",
      description: "A deep learning model developed using TensorFlow CNN to identify diseases in plants based on images, facilitating early detection and intervention in agriculture.",
      techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas'],
      link: "https://github.com/Raahim2/Plant-Disease-Classification",
      githubLink: "https://github.com/Raahim2/Plant-Disease-Classification",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Oct 2023 - Nov 2023"
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
              />
            </Slide>
          ))}
        </div>
        
       
      </div>
        </div>
    </div>
  );
}



  
  
