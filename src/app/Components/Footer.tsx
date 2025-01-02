import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode, SiReplit } from 'react-icons/si';
import ContactFormModal from './ContactFormModal'; // Updated ContactFormModal

interface FooterProps {
  theme: 'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const themeClasses = {
    light: 'bg-gradient-to-r from-white via-blue-100 to-white text-black',
    dark: 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white',
    fire: 'bg-gradient-to-r from-white via-orange-300 to-white text-black',
    luxury: 'bg-gradient-to-r from-white via-yellow-200 to-white text-black',
    lightning: 'bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 text-white',
    hacker: 'bg-gradient-to-r from-green-500 via-green-300 to-green-500 text-white',
  };

  return (
    <footer className={`p-4 sm:p-6 ${themeClasses[theme]}`}>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            
            {/* Floating Contact Form Modal */}
            <ContactFormModal />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/Raahim2" className="hover:underline">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
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
              <SiReplit className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
