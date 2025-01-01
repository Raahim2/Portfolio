import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaCuttlefish, FaJava, FaDatabase, FaGit, FaAndroid, FaCode } from 'react-icons/fa';
import Info from "./Info";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-12 h-12" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 w-12 h-12" /> },
  { name: "C", icon: <FaCuttlefish className="text-blue-500 w-12 h-12" /> },
  { name: "Java", icon: <FaJava className="text-red-500 w-12 h-12" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-500 w-12 h-12" /> },
  { name: "PostgreSQL", icon: <FaDatabase className="text-blue-500 w-12 h-12" /> },
  { name: "Git", icon: <FaGit className="text-orange-500 w-12 h-12" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-500 w-12 h-12" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-green-500 w-12 h-12" /> },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 py-24">
      <div className="container px-6 mx-auto text-center">
        <Info name="Skills" title="My Skills" desc="Technologies I have worked with, showcasing my technical abilities and expertise."/>        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="mb-4 text-4xl">{skill.icon}</div>
              <h3 className="text-xl font-medium text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
