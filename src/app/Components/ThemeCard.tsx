import React from "react";

type Theme = "light" | "dark" | "fire" | "luxury" | "blue" | "green";

interface ThemeCardProps {
  themeName: Theme; // Name of the theme (e.g., "light", "dark")
  setTheme: React.Dispatch<React.SetStateAction<Theme>>; // State setter for the theme
}

const ThemeCard: React.FC<ThemeCardProps> = ({ themeName, setTheme }) => {
  const handleThemeChange = () => {
    setTheme(themeName); // Set the selected theme
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={handleThemeChange}
        className={`border-2 border-gray-800 rounded-lg w-20 h-20 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent`}
      >
        <img src="/medal.svg" alt="Theme Icon" className="w-12 h-12" />
      </div>
      {/* Theme name outside the box */}
      <p className="mt-2 text-sm font-semibold text-black capitalize">{themeName}</p>
    </div>
  );
};

export default ThemeCard;
