"use client"

import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode, SiReplit } from 'react-icons/si';
import ContactFormModal from './ContactFormModal'; // Updated ContactFormModal
import { motion } from 'framer-motion';

interface FooterProps {
  theme: 'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen); 
  const themeClasses = {
    light: {
      bg: "from-white to-white",
      color:"black",
      txt: "from-[#1a1a1a] via-[#4d4d4d] to-[#1a1a1a]",
    },
    dark: {
      bg: "from-gray-800 via-gray-900 to-black",
      color:"white",
      txt: "from-[#6B21A8] via-[#9333EA] to-[#D946EF]",
    },
    fire: {
      bg: "from-white via-orange-100 to-white",
      color:"black",
      txt: "from-[#ffd319] via-[#ff2975] to-[#8c1eff]",

    },
    luxury: {
      bg: "from-white via-yellow-100 to-white",
      color:"black",
      txt: "from-[#FFD700] via-[#FFAC33] to-[#FF6347] ",

    },
    lightning: {
      bg: "from-white via-blue-100 to-white",
      color:"black",
      txt: "from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] ",

    },
    hacker: {
      bg: "from-green-700 via-green-900 to-green-900 ",
      color:"white",
      txt: "from-[#22C55E] via-[#10B981] to-[#4ADE80] ",

    },
  };

  return (
    <footer className={`bg-gradient-to-r  p-4 sm:p-6 ${themeClasses[theme].bg}`}>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            
            <motion.button
            onClick={toggleModal}
            className={`fixed bottom-6 right-6 bg-primary-700 text-${themeClasses[theme].color} rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110`}
            aria-label="Contact Us"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={24} />
          </motion.button>

        <ContactFormModal isOpen={isModalOpen} toggleModal={toggleModal} />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className={`mb-6 text-sm font-semibold uppercase text-${themeClasses[theme].color}`}>
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#Education" className="hover:underline">
                  Education
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#Projects" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#Skills" className="hover:underline">
                    Skills
                  </a>
                </li>
                <li>
                  <button onClick={toggleModal}> 
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={`mb-6 text-sm font-semibold  uppercase text-${themeClasses[theme].color}`}>
                Follow Us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/Raahim2" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.linkedin.com/in/raahim-shaikh-5a186024a" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://replit.com/@RaahimShaikh" className="hover:underline">
                    Replit
                  </a>
                </li>
                <li className="">
                  <a href="https://www.leetcode.com/Raahim2" className="hover:underline">
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{' '}
            <a href="/" className="hover:underline">
              Raahim
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/Raahim2"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/raahim-shaikh-5a186024a"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/raahimshaikferoz"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiHackerrank className="w-5 h-5" />
            </a>
            <a
              href="https://www.leetcode.com/Raahim2"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiLeetcode className="w-5 h-5" />
            </a>
            <a
              href="https://replit.com/@RaahimShaikh"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"


            >
              <SiReplit className="w-5 h-5 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
