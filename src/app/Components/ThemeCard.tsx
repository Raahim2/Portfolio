import React from "react";
import FadeInOnScroll from "./ScrollAnimation";

type Theme = "light" | "dark" | "fire" | "luxury" | "lightning" | "hacker";

interface ThemeCardProps {
  themeName: Theme; 
  setTheme: React.Dispatch<React.SetStateAction<Theme>>; // State setter for the theme
}

const ThemeCard: React.FC<ThemeCardProps> = ({ themeName, setTheme }) => {
  const handleThemeChange = () => {
    setTheme(themeName); // Set the selected theme
  };

  return (
    <FadeInOnScroll>
    <div className="flex flex-col items-center">
      <div
        onClick={handleThemeChange}
        className={`border-2 border-gray-800 rounded-lg w-20 h-20 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent`}
      >
        <img src={`/SVG/${themeName}.svg`} alt="Theme Icon" className="w-12 h-12" />
      </div>
      <p className="mt-2 text-sm font-semibold text-black capitalize">{themeName}</p>
    </div>
    </FadeInOnScroll>
    

  );
};

export default ThemeCard;
