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
    programmingLanguages: boolean;
    librariesFrameworks: boolean;
    tools: boolean;
    databases: boolean;
    others: boolean;
  }>({
    programmingLanguages: false,
    librariesFrameworks: false,
    tools: false,
    databases: false,
    others: false,
  });

  // Toggle collapse/expand state for each section
  const toggleSection = (section: keyof typeof collapsed) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className={`${themeClass} py-24`}>
      <div className="container px-6 mx-auto text-center">
        <Info
          name="Skills"
          title="My Skills"
          desc="Technologies I have worked with, showcasing my technical abilities and expertise."
        />

        <div className="flex flex-wrap justify-center gap-8">
          {/* Render Programming Languages */}
          <div className="w-full mb-8">
            <h2
              className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSection("programmingLanguages")}
            >
              <span>Programming Languages</span>
              {collapsed.programmingLanguages ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronUp className="ml-2" />
              )}
            </h2>
            {!collapsed.programmingLanguages && (
              <div className="flex flex-wrap justify-center gap-8">
                {skills.programmingLanguages.map((skill, index) => (
                  <SkillCard key={index} name={skill} />
                ))}
              </div>
            )}
          </div>

          {/* Render Libraries/Frameworks */}
          <div className="w-full mb-8">
            <h2
              className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSection("librariesFrameworks")}
            >
              <span>Libraries & Frameworks</span>
              {collapsed.librariesFrameworks ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronUp className="ml-2" />
              )}
            </h2>
            {!collapsed.librariesFrameworks && (
              <div className="flex flex-wrap justify-center gap-8">
                {skills.librariesFrameworks.map((skill, index) => (
                  <SkillCard key={index} name={skill} />
                ))}
              </div>
            )}
          </div>

          {/* Render Tools */}
          <div className="w-full mb-8">
            <h2
              className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSection("tools")}
            >
              <span>Tools</span>
              {collapsed.tools ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronUp className="ml-2" />
              )}
            </h2>
            {!collapsed.tools && (
              <div className="flex flex-wrap justify-center gap-8">
                {skills.tools.map((skill, index) => (
                  <SkillCard key={index} name={skill} />
                ))}
              </div>
            )}
          </div>

          {/* Render Databases */}
          <div className="w-full mb-8">
            <h2
              className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSection("databases")}
            >
              <span>Databases</span>
              {collapsed.databases ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronUp className="ml-2" />
              )}
            </h2>
            {!collapsed.databases && (
              <div className="flex flex-wrap justify-center gap-8">
                {skills.databases.map((skill, index) => (
                  <SkillCard key={index} name={skill} />
                ))}
              </div>
            )}
          </div>

          {/* Render Others */}
          <div className="w-full mb-8">
            <h2
              className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSection("others")}
            >
              <span>Others</span>
              {collapsed.others ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronUp className="ml-2" />
              )}
            </h2>
            {!collapsed.others && (
              <div className="flex flex-wrap justify-center gap-8">
                {skills.others.map((skill, index) => (
                  <SkillCard key={index} name={skill} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
