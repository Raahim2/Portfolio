"use client";

import React, { useEffect, useState } from "react";
import ShinyButton from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import WordRotate from "@/components/ui/word-rotate";
import BoxReveal from "@/components/ui/box-reveal";
import { Cloud } from "./Cloud";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury'>('light');

  // Morphing text items
  const words = [
    "Android Dev",
    "Web Dev",
    "AI/ML",
    "UI/UX Design",
  ];

  // Load theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'fire' | 'luxury';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const themeClasses = {
    light: {
      bg: "bg-gradient-to-r from-white via-blue-100 to-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text  font-bold leading-none tracking-tighter text-transparent",
    },
    dark: {
      bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#6B21A8] via-[#9333EA] to-[#D946EF] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    fire: {
      bg: "bg-gradient-to-r from-white via-orange-300 to-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    luxury: {
      bg: "bg-gradient-to-r from-white to-yellow-200",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#FFD700] via-[#FFAC33] to-[#FF6347] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
  };

  return (
    <header className={`relative h-[60vh] md:h-[80vh] w-full ${themeClasses[theme].bg}`}>
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full skew-y-12"
        )}
      />

      <div className="absolute top-0 right-0 z-20 sm:hidden">
        <Cloud />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-8 sm:px-10 text-center">
        {/* Compatibility Section */}
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="flex w-fit items-center gap-4 rounded-md border border-gray-200 bg-gray-100 px-4 py-2">
            <span className="text-gray-600 text-sm font-semibold">Skilled in:</span>
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.flyonui.com/fy-assets/icons/html-icon.png"
                alt="HTML"
                className="h-8"
              />
              <img
                src="https://cdn.flyonui.com/fy-assets/icons/react-icon.png"
                alt="React"
                className="h-8"
              />
              <img
                src="https://cdn.flyonui.com/fy-assets/icons/vue-vite-icon.png"
                alt="Vue"
                className="h-8"
              />
              <span className="text-sm text-gray-500">+ More</span>
            </div>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h1 className="my-2 text-2xl md:text-5xl font-bold leading-tight">
            Transforming the <br /> digital world with
            <span className="inline align-baseline">
              <WordRotate
                className={`${themeClasses[theme].txt}`}
                words={words}
              />
            </span>
          </h1>
        </BoxReveal>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <ShinyButton className="py-2">Get Started</ShinyButton>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <RainbowButton>
              <code>npm i -D Resume@latest</code>
            </RainbowButton>
          </BoxReveal>
        </div>
      </div>
    </header>
  );
};

export default Header;
