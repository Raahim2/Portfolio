// components/Navbar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Define your navigation links here
const navLinks = [
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Effect to handle active section highlighting on scroll
  useEffect(() => {
    const sectionElements = navLinks.map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Adjust rootMargin to trigger when section is more centered
    );

    sectionElements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu on link click
  };

  const mobileMenuVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } },
    exit: { y: '-100%', opacity: 0, transition: { type: 'tween', ease: 'easeIn', duration: 0.3 } }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand Name */}
            <div className="flex-shrink-0">
              <a href="#" onClick={(e) => handleScroll(e, 'hero')} className="text-white font-bold text-xl">
              <img src="/Images/logo.png" alt="Logo" className="h-8  inline-block ml-2" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScroll(e, link.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? 'text-white bg-white/10'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                    href='/version2'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  >
                    Prev Version
                  </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white focus:outline-none"
                aria-label="Open main menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-16 left-0 w-full z-40 bg-black/90 backdrop-blur-lg border-b border-neutral-800"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-white/10'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;