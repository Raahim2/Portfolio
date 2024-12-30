import React from "react";
import Info from './Info';
import Slide from "./SlideAnimation";
import NumberTicker from "@/components/ui/number-ticker";

interface StatsProps {
  theme: "light" | "dark" | "fire" | "luxury" | "blue" | "green";
  s1: number;
  s2: number;
  s3: number;
  s4: number;
}

const Stats: React.FC<StatsProps> = ({ theme, s1, s2, s3, s4 }) => {
    const themeClasses = {
        light: {
          bg: "bg-gradient-to-r from-white via-blue-100 to-white",
          txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
        },
        dark: {
          bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
          txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#6B21A8] via-[#9333EA] to-[#D946EF] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
        },
        fire: {
          bg: "bg-gradient-to-r from-white via-orange-200 to-white",
          txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
        },
        luxury: {
          bg: "bg-gradient-to-r from-white via-yellow-200 to-white",
          txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#FFD700] via-[#FFAC33] to-[#FF6347] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
        },
        blue: {
          bg: "bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500",
          txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
        },
        green: {
          bg: "bg-gradient-to-r from-green-500 via-green-200 to-green-500",
          txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#22C55E] via-[#10B981] to-[#4ADE80] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
        },
      };

  return (
    <section className={`${themeClasses[theme].bg}`}>
      <div className="container px-5 py-24 mx-auto">
        <Info name="My Stats" title="Key Achievements" desc="Explore a concise overview of my professional journey through key metrics that reflect my contributions, growth, and impact in various fields." />
        
        <Slide>

        <div className="flex flex-wrap -m-4 text-center w-3/4 mx-auto">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <NumberTicker value={s1} />+
              </h2>

              <p className="leading-relaxed">Projects</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <NumberTicker value={s2}/>+
              </h2>
              <p className="leading-relaxed">Certifications</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
              <NumberTicker value={s3} />+
              </h2>
              <p className="leading-relaxed">Known Frameworks</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <NumberTicker value={s4} />+
              </h2>
              <p className="leading-relaxed">Hackerthons Experience</p>
            </div>
          </div>
        </div>
        </Slide>


      </div>
    </section>
  );
};

export default Stats;
