"use client";

import Info from "./Info";
import ThemeCard from "./ThemeCard";

// Define the allowed theme types explicitly
type Theme = "light" | "dark" | "fire" | "luxury" | "lightning" | "hacker";

interface ThemeSectionProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ theme, setTheme }) => {
  
  const themeClasses: Record<Theme, string> = {
    light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
    dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
    fire: "bg-gradient-to-r from-white via-orange-200 to-white text-black",
    luxury: "bg-gradient-to-r from-white via-yellow-200 to-white text-black",
    lightning: "bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 text-white", // new theme
    hacker: "bg-gradient-to-r from-green-500 via-green-200 to-green-500 text-white", // new theme
  };

  // List of themes
  const themes: Theme[] = ["light", "dark", "fire", "luxury", "lightning", "hacker"];

  return (
    <section className={`${themeClasses[theme]} py-10 px-4`}>
      <Info
        name="Select Theme"
        title="Before Getting Started, Explore Our Themes"
        desc="Choose from a variety of beautifully designed themes to jumpstart the exploration"
      />
      <div className="container mx-auto w-3/4">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
          {themes.map((themeName) => (
            <ThemeCard key={themeName} themeName={themeName} setTheme={setTheme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
