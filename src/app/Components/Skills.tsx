import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons for collapse/expand
import Info from "./Info";
import { SkillCard } from "@/app/Components/SkillCard";

const skills = {
  programmingLanguages: ["C", "Java", "Javascript", "Typescript", "Python"],
  librariesFrameworks: [
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Open CV",
    "Scikitlearn",
    "Tensorflow",
    "Django",
    "Flask",
    "Tailwind CSS",
    "Node JS",
    "Express JS",
    "React JS",
    "Next JS",
    "Expo",
    "React Native",
  ],
  tools: ["VS Code", "Jupyter Notebook", "Github", "Android Studio"],
  databases: ["SQL", "PostgreSQL", "MongoDB"],
  others: [
    "HTML",
    "CSS",
    "DSA",
    "Web Development",
    "App Development",
    "Machine Learning",
    "Object Detection",
  ],
};

const themeClasses = {
  light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
  dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
  fire: "bg-gradient-to-r from-white via-orange-300 to-white text-black",
  luxury: "bg-gradient-to-r from-white via-yellow-200 to-white text-black",
  lightning: "bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 text-white",
  hacker: "bg-gradient-to-r from-green-500 via-green-300 to-green-500 text-white",
};

interface SkillsProps {
  theme: keyof typeof themeClasses; // Theme type based on the keys of the `themeClasses` object
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const themeClass = themeClasses[theme];
  
  // Initialize the collapsed state for each category
  const [collapsed, setCollapsed] = useState<{
    [key: string]: boolean;
  }>({
    programmingLanguages: false,
    librariesFrameworks: false,
    tools: false,
    databases: false,
    others: false,
  });

  // Toggle collapse/expand state for each section
  const toggleSection = (section: string) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Reusable component to render each category
  const renderSection = (title: string, skillsList: string[], sectionKey: string) => (
    <div className="w-full mb-8">
      <h2
        className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-center"
        onClick={() => toggleSection(sectionKey)}
      >
        <span>{title}</span>
        {collapsed[sectionKey] ? (
          <FaChevronDown className="ml-2" />
        ) : (
          <FaChevronUp className="ml-2" />
        )}
      </h2>
      {!collapsed[sectionKey] && (
        <div className="flex flex-wrap justify-center gap-8">
          {skillsList.map((skill, index) => (
           <>
           <div className="flex flex-col items-center">
             <SkillCard key={index} name={skill} />
             <p className="mt-2 text-sm font-medium dark:text-white text-black sm:text-xs md:text-sm lg:text-base xl:text-base">
               {skill}
             </p>
           </div>
         </>
          ))}
        </div>
        
        
      )}
      
    </div>
  );

  return (
    <section className={`${themeClass} py-24`}>
      <div className="container px-6 mx-auto text-center">
        <Info
          name="Skills"
          title="My Skills"
          desc="Technologies I have worked with, showcasing my technical abilities and expertise."
        />
        <div className="flex flex-wrap justify-center gap-8">
          {renderSection("Programming Languages", skills.programmingLanguages, "programmingLanguages")}
          {renderSection("Libraries & Frameworks", skills.librariesFrameworks, "librariesFrameworks")}
          {renderSection("Tools", skills.tools, "tools")}
          {renderSection("Databases", skills.databases, "databases")}
          {renderSection("Others", skills.others, "others")}
        </div>
      </div>
    </section>
  );
};

export default Skills;
