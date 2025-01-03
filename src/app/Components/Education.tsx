import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for conditional classNames
import { AnimatedList } from "@/components/ui/animated-list"; // Import AnimatedList component
import Info from "./Info";

type Theme = "light" | "dark" | "fire" | "luxury" | "lightning" | "hacker";

interface EducationProps {
  theme: Theme;
}

const educationData = [
  {
    id: 1,
    school: "DJ Sanghvi College of Engineering",
    year: "2023 - 2027",
    status: "Current",
    web:"https://www.djsce.ac.in/",
    description:
      "Currently pursuing my Bachelor's in Computer Science Engineering (IoT , Cybersecurity , Blockchain), focusing on Software Development, Machine Learning, and Data Science.",
  },
  {
    id: 2,
    school: "Mithibai College",
    year: "2021 - 2023",
    status: "Completed",
    web:"https://mithibai.ac.in/",
    description:
      "Pursued higher studies at Mithibai College, focusing on Physics Chemistry & Maths",
  },
  {
    id: 3,
    school: "Bombay Cambridge School",
    year: "2011 - 2021",
    status: "Completed",
    web:"https://bciswest.org/",
    description:
      "Attended Bombay Cambridge School from 2011 to 2021, focusing on foundational subjects like English, Math, Science.",
  },
];

const Education: React.FC<EducationProps> = ({ theme }) => {
  const themeClasses = {
    light: {
      bg: "bg-gradient-to-r from-white to-white",
      heading: "from-[#1a1a1a] via-[#4d4d4d] to-[#1a1a1a]",
      txt: "black",
    },
    dark: {
      bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
      heading: "from-[#6B21A8] via-[#9333EA] to-[#D946EF]",
      txt: "white",
    },
    fire: {
      bg: "bg-gradient-to-r from-white via-orange-100 to-white",
      heading: "from-[#ffd319] via-[#ff2975] to-[#8c1eff]",
      txt: "black",
    },
    luxury: {
      bg: "bg-gradient-to-r from-white via-yellow-100 to-white",
      heading: "from-[#FFD700] via-[#FFAC33] to-[#FF6347]",
      txt: "black",
    },
    lightning: {
      bg: "bg-gradient-to-r from-white via-blue-100 to-white",
      heading: "from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]",
      txt: "black",
    },
    hacker: {
      bg: "bg-gradient-to-r from-green-700 via-green-900 to-green-900",
      heading: "from-[#22C55E] via-[#10B981] to-[#4ADE80] ",
      txt: "white",
    },
  };

  return (
    <div className={cn(themeClasses[theme].bg)} id="Education">
      <Info theme={theme} name="Education" title="My Education FlowChart" desc="A timeline showcasing my academic journey, from foundational studies to my current studies" />
      <AnimatedList className="relative w-3/4 mx-auto p-6 rounded-2xl ">
        {educationData.map((education) => (
          <li
            key={education.id}
            className="mb-8 p-6 bg-transparent dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -start-3 ring-4 ring-black ">
              <svg
                className="w-2.5 h-2.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className={`bg-clip-text bg-gradient-to-b pointer-events-none z-10 whitespace-pre-wrap text-transparent max-w-2xl tracking-tight leading-none     flex items-center mb-2 text-2xl font-semibold ${themeClasses[theme].heading}` }>
              {education.school}{" "}
              <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ms-3 text-${themeClasses[theme].txt} p-4`}>
                {education.status}
              </span>
            </h3>
            <time className={`block mb-2 text-sm font-normal text-${themeClasses[theme].txt}`}>
              {education.year}
            </time>
            <p className={`mb-4 text-base font-normal text-${themeClasses[theme].txt}`}>
              {education.description}
            </p>
            <a
              href={education.web}
              className={`bg-gradient-to-r inline-flex items-center px-5 py-2 text-sm font-medium text-white ${themeClasses[theme].heading} rounded-lg `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path d="M16 3H8c-1.1 0-1.99.9-1.99 2L6 19c0 1.1.89 2 1.99 2h8c1.1 0 1.99-.9 1.99-2L18 5c0-1.1-.89-2-1.99-2zm-2 16H10v-2h4v2zm0-4H10V7h4v8z" />
              </svg>
              Website
            </a>
          </li>
        ))}
      </AnimatedList>
    </div>
  );
};

export default Education;
