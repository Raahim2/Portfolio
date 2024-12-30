"use client";

import { useState, useEffect } from "react";
import Info from "./Info";

// Define the allowed theme types explicitly
type Theme = "light" | "dark" | "fire" | "luxury" | "blue" | "green";

interface ThemeSectionProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ theme, setTheme }) => {

  // Effect to load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  // Handle theme change and store it in localStorage
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
    window.location.reload(); // Reload page to apply theme changes
  };

  // Theme classes for dynamic styling
  const themeClasses: Record<Theme, string> = {
    light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
    dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
    fire: "bg-gradient-to-r from-white via-orange-300 to-white text-black",
    luxury: "bg-gradient-to-r from-white via-yellow-200 to-white text-black",
    blue: "bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 text-white", // new theme
    green: "bg-gradient-to-r from-green-500 via-green-300 to-green-500 text-white", // new theme
  };

  return (
    <section className={`${themeClasses[theme]} py-16`}>
      <Info
        name="Select Theme"
        title="Before Getting Started, Explore Our Themes"
        desc="Choose from a variety of beautifully designed themes to jumpstart the exploration"
      />
      <div className="container mx-auto px-6 text-center flex justify-center">
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {/* Theme 1 (Light) */}
          <div
            onClick={() => handleThemeChange("light")}
            className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform duration-300"
          >
            <img src="medal.svg" alt="Medal" className="w-16 h-16 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Light</p>
          </div>

          {/* Theme 2 (Dark) */}
          <div
            onClick={() => handleThemeChange("dark")}
            className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-green-400 to-blue-400 hover:scale-105 transition-transform duration-300"
          >
            <img src="medal.svg" alt="Medal" className="w-16 h-16 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Dark</p>
          </div>

          {/* Theme 3 (Fire) */}
          <div
            onClick={() => handleThemeChange("fire")}
            className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition-transform duration-300"
          >
            <img src="medal.svg" alt="Medal" className="w-16 h-16 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Fire</p>
          </div>

          {/* Theme 4 (Luxury) */}
          <div
            onClick={() => handleThemeChange("luxury")}
            className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-indigo-500 to-teal-500 hover:scale-105 transition-transform duration-300"
          >
            <img src="medal.svg" alt="Medal" className="w-16 h-16 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Luxury</p>
          </div>

          {/* Theme 5 (Blue) */}
          <div
            onClick={() => handleThemeChange("blue")}
            className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-105 transition-transform duration-300"
          >
            <img src="medal.svg" alt="Medal" className="w-16 h-16 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Blue</p>
          </div>

          {/* Theme 6 (Green) */}
          <div
            onClick={() => handleThemeChange("green")}
            className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-green-500 to-green-400 hover:scale-105 transition-transform duration-300"
          >
            <img src="medal.svg" alt="Medal" className="w-16 h-16 text-white" />
            <p className="mt-2 text-sm font-semibold text-white">Green</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
