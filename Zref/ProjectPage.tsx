// // components/ProjectPage.tsx
// "use client"

// import React, { useEffect, useState } from 'react';
// import ProjectCard from './ProjectCard';
// import Info from './Info';

// const ProjectPage: React.FC = () => {
//   const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury'>('light');

//   const projects = [
//     {
//       title: "Chat Collect",
//       description: "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
//       techStack: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
//       link: "https://github.com/Raahim2",
//       githubLink: "https://github.com/Raahim2",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//       timePeriod: "Jan 2024 - Feb 2024"
//     }
//     // Add more projects as needed
//   ];

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'fire' | 'luxury';
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   const themeClasses ={
//     light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
//     dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
//     fire: "bg-gradient-to-r from-white via-orange-300 to-white text-black",
//     luxury: "bg-gradient-to-r from-white  via-yellow-200 to-white text-black",

//   };

//   return (
//     <div className={`p-8 ${themeClasses[theme]}`}>
//       <Info name='Explore Projects' title='Showcase of My Work' desc='Explore a diverse set of projects that showcase my skills in web development, software engineering, and AI/ML Models. These projects span various domains, from e-commerce to open-source contributions, and highlight my ability to solve real-world problems using modern technologies.'/>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             title={project.title}
//             description={project.description}
//             techStack={project.techStack}
//             link={project.link}
//             githubLink={project.githubLink}
//             videoSrc={project.videoSrc}
//             timePeriod={project.timePeriod}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;
