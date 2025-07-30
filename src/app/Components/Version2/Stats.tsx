import React from "react";
import Info from './Info';
import Slide from "./SlideAnimation";
import NumberTicker from "@/components/ui/number-ticker";

interface StatsProps {
  theme: "light" | "dark" | "fire" | "luxury" | "lightning" | "hacker";
  s1: number;
  s2: number;
  s3: number;
  s4: number;
}

const Stats: React.FC<StatsProps> = ({ theme, s1, s2, s3, s4 }) => {
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
    <section className={`bg-gradient-to-r  ${themeClasses[theme].bg}`}>
      <div className="container px-5 py-24 mx-auto">
        <Info theme={theme} name="My Stats" title="Key Achievements" desc="Explore a concise overview of my professional journey through key metrics that reflect my contributions, growth, and impact in various fields." />
        
        <Slide>

        <div className="flex flex-wrap -m-4 text-center w-3/4 mx-auto">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className={`border-2 border-${themeClasses[theme].color} px-4 py-6 rounded-lg`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`text-${themeClasses[theme].color} w-12 h-12 mb-3 inline-block`}
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className={`title-font font-medium text-3xl text-${themeClasses[theme].color} `}>
                <NumberTicker value={s1} className={`text-${themeClasses[theme].color}`}/>+
              </h2>

              <p className={`leading-relaxed text-${themeClasses[theme].color}`}>Projects</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className={`border-2 border-${themeClasses[theme].color} px-4 py-6 rounded-lg text-${themeClasses[theme].color}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`text-${themeClasses[theme].color} w-12 h-12 mb-3 inline-block`}
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl">
                <NumberTicker value={s2} className={`text-${themeClasses[theme].color}`}/>+
              </h2>
              <p className="leading-relaxed">Certifications</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className={`border-2 border-${themeClasses[theme].color} px-4 py-6 rounded-lg text-${themeClasses[theme].color}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`text-${themeClasses[theme].color} w-12 h-12 mb-3 inline-block`}
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl">
              <NumberTicker value={s3} className={`text-${themeClasses[theme].color}`}/>+
              </h2>
              <p className="leading-relaxed">Frameworks</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className={`border-2 border-${themeClasses[theme].color} px-4 py-6 rounded-lg text-${themeClasses[theme].color}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`text-${themeClasses[theme].color} w-12 h-12 mb-3 inline-block`}
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl">
                <NumberTicker value={s4} className={`text-${themeClasses[theme].color}`}/>+
              </h2>
              <p className="leading-relaxed">Hackerthons</p>
            </div>
          </div>
        </div>
        </Slide>


      </div>
    </section>
  );
};

export default Stats;
