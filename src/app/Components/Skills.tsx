import React from "react";
// import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaCuttlefish, FaJava, FaDatabase, FaGit, FaAndroid, FaCode } from "react-icons/fa";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaCuttlefish, FaDatabase, FaPhp, FaSwift, FaAngular, FaReact, FaNodeJs, FaVuejs,
  FaGit, FaDocker, FaAws, FaLinux, FaAndroid, FaGitlab, FaSass, FaCodepen, FaNpm, FaYarn, FaJenkins,
  FaCloud, FaGoogleDrive, FaSlack, FaTrello, FaTable, FaChartBar, FaCloudsmith, FaGithub, FaGitAlt
} from "react-icons/fa";

import Info from "./Info";
import { SkillCard } from "@/app/Components/SkillCard";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-16 h-16" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-16 h-16" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 w-16 h-16" /> },
  { name: "Java", icon: <FaJava className="text-red-500 w-16 h-16" /> },
  { name: "C (Programming)", icon: <FaCuttlefish className="text-blue-500 w-16 h-16" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-500 w-16 h-16" /> },
  { name: "React", icon: <FaReact className="text-blue-500 w-16 h-16" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-16 h-16" /> },
  { name: "Git", icon: <FaGit className="text-orange-500 w-16 h-16" /> },
  { name: "Android", icon: <FaAndroid className="text-green-500 w-16 h-16" /> },
  { name: "npm", icon: <FaNpm className="text-red-500 w-16 h-16" /> },
  { name: "Cloud", icon: <FaCloud className="text-blue-500 w-16 h-16" /> },
  { name: "Google Drive", icon: <FaGoogleDrive className="text-blue-500 w-16 h-16" /> },
  { name: "Data Tables", icon: <FaTable className="text-blue-500 w-16 h-16" /> },
  { name: "Data Visualization", icon: <FaChartBar className="text-blue-500 w-16 h-16" /> },
  { name: "GitHub", icon: <FaGithub className="text-black w-16 h-16" /> },
  { name: "Git Alternative", icon: <FaGitAlt className="text-black w-16 h-16" /> },
];

const themeClasses = {
  light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
  dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
  fire: "bg-gradient-to-r from-white via-orange-300 to-white text-black",
  luxury: "bg-gradient-to-r from-white via-yellow-200 to-white text-black",
  lightning: "bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 text-white",
  hacker: "bg-gradient-to-r from-green-500 via-green-300 to-green-500 text-white",
};

const TensorFlowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    {/* TensorFlow SVG path data */}
    <path d="M5 3h14v4H5zm0 6h14v4H5zm0 6h14v4H5z" />
  </svg>
);

interface SkillsProps {
  theme: keyof typeof themeClasses; // Theme type based on the keys of the `themeClasses` object
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const themeClass = themeClasses[theme];

  return (
    <section className={`${themeClass} py-24`}>
      <div className="container px-6 mx-auto text-center">
        <Info
          name="Skills"
          title="My Skills"
          desc="Technologies I have worked with, showcasing my technical abilities and expertise."
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              name={skill.name} 
              icon={skill.icon} 
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
