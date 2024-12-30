"use client";

import { useState, useEffect } from "react";
import Info from "./Info";



// Define the allowed theme types explicitly
type Theme = "light" | "dark" | "fire" | "luxury";

const ThemeSection: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Retrieve theme from localStorage when the component mounts
    const savedTheme = localStorage.getItem("theme") as Theme | null;  // Ensure the saved theme is a valid one
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
    window.location.reload(); // Reload page to apply theme changes
  };

  // Theme classes for dynamic styling
  const themeClasses: Record<Theme, string> = {
    light: "bg-gradient-to-r from-white via-blue-100 to-white text-black",
    dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
    fire: "bg-gradient-to-r from-white via-orange-300 to-white text-black",
    luxury: "bg-gradient-to-r from-white  via-yellow-200 to-white text-black",

  };

  return (
    
    <section className={`${themeClasses[theme]} py-16`}>
      <Info name="Select Theme" title="Before Getting Started, Explore Our Themes" desc="Choose from a variety of beautifully designed themes to jumpstart the exploration"/>
      
  
      <div className="container mx-auto px-6 text-center">
       
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Theme 1 (Light) */}
          <div
            onClick={() => handleThemeChange("light")}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center items-center">
              <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Light</h3>
              <p className="text-gray-500 mt-2">A sleek, modern design for your app.</p>
            </div>
          </div>

          {/* Theme 2 (Dark) */}
          <div
            onClick={() => handleThemeChange("dark")}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="w-full h-48 bg-gradient-to-r from-green-400 to-blue-400 flex justify-center items-center">
              <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h14v18H5z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Dark</h3>
              <p className="text-gray-500 mt-2">An innovative dashboard theme with vibrant colors.</p>
            </div>
          </div>

          {/* Theme 3 (Fire) */}
          <div
            onClick={() => handleThemeChange("fire")}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="w-full h-48 bg-gradient-to-r from-pink-500 to-yellow-500 flex justify-center items-center">
              <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Fire</h3>
              <p className="text-gray-500 mt-2">A clean and modern landing page template.</p>
            </div>
          </div>

          {/* Theme 4 (Luxury) */}
          <div
            onClick={() => handleThemeChange("luxury")}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-teal-500 flex justify-center items-center">
              <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Luxury</h3>
              <p className="text-gray-500 mt-2">A theme ideal for building admin interfaces.</p>
            </div>
          </div>

          
        </div>

        

      </div>
    </section>
  );
};

export default ThemeSection;
