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
    description:
      "Currently pursuing my Bachelor's in Computer Science Engineering (IoT , Cybersecurity , Blockchain), focusing on Software Development, Machine Learning, and Data Science.",
  },
  {
    id: 2,
    school: "Mithibai College",
    year: "2021 - 2023",
    status: "Completed",
    description:
      "Pursued higher studies at Mithibai College, focusing on Physics Chemistry & Maths",
  },
  {
    id: 3,
    school: "Bombay Cambridge School",
    year: "2011 - 2021",
    status: "Completed",
    description:
      "Attended Bombay Cambridge School from 2011 to 2021, focusing on foundational subjects like English, Math, Science.",
  },
];

const Education: React.FC<EducationProps> = ({ theme }) => {
  const themeClasses = {
    light: {
      bg: "bg-gradient-to-r from-white via-blue-100 to-white",
      txt: "bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text font-bold leading-none text-transparent",
    },
    dark: {
      bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
      txt: "bg-gradient-to-b from-[#6B21A8] via-[#9333EA] to-[#D946EF] bg-clip-text font-bold leading-none text-transparent",
    },
    fire: {
      bg: "bg-gradient-to-r from-white via-orange-200 to-white",
      txt: "bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text font-bold leading-none text-transparent",
    },
    luxury: {
      bg: "bg-gradient-to-r from-white via-yellow-200 to-white",
      txt: "bg-gradient-to-b from-[#FFD700] via-[#FFAC33] to-[#FF6347] bg-clip-text font-bold leading-none text-transparent",
    },
    lightning: {
      bg: "bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500",
      txt: "bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text font-bold leading-none text-transparent",
    },
    hacker: {
      bg: "bg-gradient-to-r from-green-500 via-green-200 to-green-500",
      txt: "bg-gradient-to-b from-[#22C55E] via-[#10B981] to-[#4ADE80] bg-clip-text font-bold leading-none text-transparent",
    },
  };

  return (
    <div className={cn(themeClasses[theme].bg)}>
      <Info name="Education" title="My Education FlowChart" desc="A timeline showcasing my academic journey, from foundational studies to my current studies" />
      <AnimatedList className="relative w-3/4 mx-auto p-6 rounded-2xl ">
        {educationData.map((education) => (
          <li
            key={education.id}
            className="mb-8 p-6 bg-transparent dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {education.school}{" "}
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                {education.status}
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
              {education.year}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {education.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path d="M16 3H8c-1.1 0-1.99.9-1.99 2L6 19c0 1.1.89 2 1.99 2h8c1.1 0 1.99-.9 1.99-2L18 5c0-1.1-.89-2-1.99-2zm-2 16H10v-2h4v2zm0-4H10V7h4v8z" />
              </svg>
              Download Certificate
            </a>
          </li>
        ))}
      </AnimatedList>
    </div>
  );
};

export default Education;
