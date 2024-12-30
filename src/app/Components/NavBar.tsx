// "use client";

import Link from 'next/link';
// import { useEffect, useState } from 'react';

export default function Navbar() {
  // const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury'>('light');

  // Load theme from localStorage on initial load
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'fire' | 'luxury';
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   }
  // }, []);
  // setTheme("light")
  const theme = "light"

  // Apply theme classes based on the selected theme
  const themeClasses = {
    light: {
      bg: "bg-gradient-to-r from-white via-blue-100 to-white",
      txt: "text-blue-500 text-xl",

    },
    dark: {
      bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
      txt: "text-purple-500 text-xl",
    },
    fire: {
      bg: "bg-gradient-to-r from-white via-orange-300 to-white",
      txt: "text-orange-500 text-xl",
    },
    luxury: {
      bg: "bg-gradient-to-r from-white to-yellow-200",
      txt: "text-yellow-500 text-xl",
    },
  };
  

  return (
      <header className={`shadow-md sticky top-0 z-50 ${themeClasses[theme].bg}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" >
          <p className={`${themeClasses[theme].txt} font-extrabold`} >Raahim&apos;s Portfolio</p>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className=" hover:text-blue-600">
            Education
          </Link>
          <Link href="#pricing" className=" hover:text-blue-600">
            Projects
          </Link>
          <Link href="#about" className=" hover:text-blue-600">
            Skills
          </Link>
          <Link href="#contact" className=" hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
