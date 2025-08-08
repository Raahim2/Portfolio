// components/PortfolioFooter.js

import React from 'react';

const yourName = "Raahim";

// The href values are the ID's of your sections
const footerLinks = [
  {
    title: 'Sitemap',
    links: [
      { label: 'Experience', href: 'experience' },
      { label: 'Skills', href: 'skills' },
      { label: 'Education', href: 'education' },
      { label: 'Projects', href: 'projects' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/Raahim2' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raahim-shaikh-5a186024a/' },
      { label: 'Leetcode', href: 'https://leetcode.com/u/Raahim2' },
      { label: 'Resume', href: '/RAAHIM.pdf' },
    ],
  },
];

// --- (UNCHANGED) Social Icons ---
const Icon = ({ path }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={path} fill="currentColor" />
  </svg>
);

const socialLinks = [
    {
    href: 'https://github.com/Raahim2',
    'aria-label': 'GitHub profile',
    icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    href: 'https://www.linkedin.com/in/raahim-shaikh-5a186024a/',
    'aria-label': 'LinkedIn profile',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
];

const Footer = () => {
  // --- (NEW) The smooth scrolling logic, now inside the component ---
  const handleScroll = (e, targetId) => {
    // Prevent the default anchor link behavior
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate the position of the element
      const headerOffset = 80; // Adjust this value to match your fixed header's height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Use the 'window.scrollTo' method for better offset control
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] font-sans text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top section: Logo, tagline, and links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src="/Images/logo.png" alt={`${yourName} Logo`} className='w-24 h-auto' />
            <p className="mt-6 text-base text-neutral-400 max-w-sm">
              Passionate about building modern web applications and solving complex problems.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {/* --- (UPDATED) Conditionally render scroll links or standard links --- */}
                      {column.title === 'Sitemap' ? (
                        <a
                          href={`#${link.href}`} // Standard href for accessibility and fallback
                          onClick={(e) => handleScroll(e, link.href)}
                          className="text-base text-neutral-300 hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-neutral-300 hover:text-white transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar: Copyright and Social Icons */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {yourName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social['aria-label']}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social['aria-label']}
                className="text-neutral-500 hover:text-white transition-colors duration-300"
              >
                <Icon path={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;