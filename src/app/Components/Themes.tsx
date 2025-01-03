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
  
  const themeClasses: Record<Theme, { bg: string, txt: string }> = {
    light: {
      bg: "bg-gradient-to-r from-white to-white",
      txt: "text-black",
    },
    dark: {
      bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
      txt: "text-white",
    },
    fire: {
      bg: "bg-gradient-to-r from-white via-orange-100 to-white",
      txt: "text-black",
    },
    luxury: {
      bg: "bg-gradient-to-r from-white via-yellow-100 to-white",
      txt: "text-black",
    },
    lightning: {
      bg: "bg-gradient-to-r from-white via-blue-100 to-white",
      txt: "text-black",
    },
    hacker: {
      bg: "bg-gradient-to-r from-green-700 via-green-900 to-green-900",
      txt: "text-white",
    },
  };

  // List of themes
  const themes: Theme[] = ["light", "dark", "fire", "luxury", "lightning", "hacker"];

  return (
    <section className={`${themeClasses[theme].bg} py-10 px-4`}>
      <Info
        theme={theme}
        name="Select Theme"
        title="Before Getting Started, Explore Our Themes"
        desc="Choose from a variety of beautifully designed themes to jumpstart the exploration"
      />
      <div className="container mx-auto w-3/4">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
          {themes.map((themeName) => (
            <ThemeCard key={themeName} themeName={themeName} currentTheme={theme} setTheme={setTheme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
