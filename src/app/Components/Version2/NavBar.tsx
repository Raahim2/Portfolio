import React, { useState } from 'react';
import Link from 'next/link';
import ContactFormModal from './ContactFormModal';

// Define the NavbarProps interface to specify the theme type and setTheme function
interface NavbarProps {
  theme: 'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker'>>; // setTheme function
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  const toggleModal = () => setIsModalOpen(!isModalOpen); 

  const themeClasses = {
    light: {
      bg: "from-white  to-white",
      heading: "text-black text-xl",
      text: "black"
    },
    dark: {
      bg: "from-gray-800 via-gray-900 to-black text-white",
      heading: "text-purple-500 text-xl",
      text: "white"
    },
    fire: {
      bg: "from-white via-orange-100 to-white",
      heading: "text-orange-500 text-xl",
      text: "black"
    },
    luxury: {
      bg: "from-white via-yellow-100 to-white",
      heading: "text-yellow-500 text-xl",
      text: "black"
    },
    lightning: {
      bg: "from-white via-blue-100 to-white",
      heading: "text-blue-500 text-xl",
      text: "black"
    },
    hacker: {
      bg: "from-green-700 via-green-900 to-green-900 text-white",
      heading: "text-green-500 text-xl",
      text: "white"
    },
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle theme change and update via setTheme
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as 'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker');
  };

  return (
    <header className={`bg-gradient-to-r shadow-md sticky top-0 z-50 ${themeClasses[theme].bg}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <p className={`${themeClasses[theme].heading} font-extrabold`}>Raahim&apos;s Portfolio</p>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#Education" className="hover:text-blue-600">
            Education
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="#Skills" className="hover:text-blue-600">
            Skills
          </Link>
          <button className="hover:text-blue-600" onClick={toggleModal}>
            Contact
          </button>
        </nav>

        {/* Theme Dropdown */}
        <div className="md:flex items-center space-x-4">
          <select
            value={theme}
            onChange={handleThemeChange}
            className={`bg-transparent border border-gray-300  px-4 py-2 rounded-md ${themeClasses[theme].text} `}
          >
            <option value="light" className='text-black'>Light</option>
            <option value="dark" className='text-black'>Dark</option>
            <option value="fire" className='text-black'>Fire</option>
            <option value="luxury" className='text-black'>Luxury</option>
            <option value="lightning" className='text-black'>Lightning</option>
            <option value="hacker" className='text-black'>Hacker</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
         <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <rect width="30" height="4" rx="2" fill={`${themeClasses[theme].text}`}/>
        <rect y="12" width="30" height="4" rx="2" fill={`${themeClasses[theme].text}`}/>
        <rect y="24" width="30" height="4" rx="2" fill={`${themeClasses[theme].text}`}/>
      </svg>

        </button>
      </div>

      {/* Mobile Menu - Toggle visibility based on 'isOpen' state */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <Link href="#Education" className="hover:text-blue-600">
            Education
          </Link>
          <Link href="#Projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="#Skills" className="hover:text-blue-600">
            Skills
          </Link>
          <p className="hover:text-blue-600" onClick={toggleModal}>
            Contact
          </p>
        </div>
      )}

      {/* Render the Contact Form Modal if open */}
      {isModalOpen && <ContactFormModal isOpen={isModalOpen} toggleModal={toggleModal} />}
    </header>
  );
};

export default Navbar;
