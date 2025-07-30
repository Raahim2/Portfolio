import React from "react";
import FadeInOnScroll from "./ScrollAnimation";

type Theme = "light" | "dark" | "fire" | "luxury" | "lightning" | "hacker";

interface ThemeCardProps {
  themeName: Theme; 
  currentTheme: Theme; // Add currentTheme to differentiate the selected theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>; // State setter for the theme
}

const ThemeCard: React.FC<ThemeCardProps> = ({ themeName, currentTheme, setTheme }) => {
  const handleThemeChange = () => {
    setTheme(themeName); // Set the selected theme
  };

  const themeClasses: Record<Theme, { txt: string, border: string }> = {
    light: {
      txt: "text-black",
      border: "border-black",
    },
    dark: {
      txt: "text-white",
      border: "border-white",
    },
    fire: {
      txt: "text-black",
      border: "border-black",
    },
    luxury: {
      txt: "text-black",
      border: "border-black",
    },
    lightning: {
      txt: "text-black",
      border: "border-black",
    },
    hacker: {
      txt: "text-white",
      border: "border-white",
    },
  };

  const isActive = themeName === currentTheme; // Check if the current theme is the selected one

  return (
    <FadeInOnScroll>
      <div className="flex flex-col items-center">
        <div
          onClick={handleThemeChange}
          className={`border-2 rounded-lg w-20 h-20 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent 
            ${themeClasses[currentTheme].border} ${isActive ? "border-4" : ""}`} // Add border-4 if active
        >
          <img src={`/SVG/${themeName}.svg`} alt="Theme Icon" className="w-12 h-12" />
        </div>
        <p className={`mt-2 text-sm font-semibold capitalize ${themeClasses[currentTheme].txt} ${isActive ? "font-bold" : ""}`}>{themeName}</p>
      </div>
    </FadeInOnScroll>
  );
};

export default ThemeCard;
