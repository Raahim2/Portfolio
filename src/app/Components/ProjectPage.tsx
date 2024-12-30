"use client";

import React from 'react';
import ProjectCard from './ProjectCard';
import Info from './Info';
import Slide from './SlideAnimation';

interface ProjectPageProps {
  theme: 'light' | 'dark' | 'fire' | 'luxury' | 'blue' | 'green'; // Define theme types here
}

const ProjectPage: React.FC<ProjectPageProps> = ({ theme }) => {

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
      description: "An Android application that helps users track their expenses efficiently, providing visual insights into spending habits through various charts.",
      techStack: ['Java', 'Android SDK', 'AnyChart', 'SQLite', 'XML'],
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
      techStack: ['Django', 'Python', 'Matplotlib', 'JavaScript', 'HTML', 'CSS'],
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
    },
    {
      title: "Expense Tracker",
      description: "A web application that allows users to track their expenses, providing insights into spending habits and helping manage finances effectively.",
      techStack: ['JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'HTML', 'CSS'],
      link: "https://github.com/Raahim2/Expense-Tracker",
      githubLink: "https://github.com/Raahim2/Expense-Tracker",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Sep 2023 - Oct 2023"
    },
    {
      title: "Weather App",
      description: "A mobile application that provides real-time weather updates, forecasts, and alerts based on user location.",
      techStack: ['React Native', 'JavaScript', 'OpenWeather API', 'Redux', 'HTML', 'CSS'],
      link: "https://github.com/Raahim2/Weather-App",
      githubLink: "https://github.com/Raahim2/Weather-App",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      timePeriod: "Aug 2023 - Sep 2023"
    }
  ];

  const themeClasses = {
    light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
    dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
    fire: "bg-gradient-to-r from-white via-orange-300 to-white text-black",
    luxury: "bg-gradient-to-r from-white via-yellow-200 to-white text-black",
    blue: "bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 text-white", // distinct blue theme
    green: "bg-gradient-to-r from-green-500 via-green-300 to-green-500 text-white", // distinct green theme
  };

  return (
    <div className={`p-8 ${themeClasses[theme]}`}>
      <Info 
        name='Explore Projects' 
        title='Showcase of My Work' 
        desc='Live Demo/Code for the projects I have made'
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
  );
};

export default ProjectPage;
