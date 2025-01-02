import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const ContactFormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 bg-primary-700 text-black rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        aria-label="Contact Us"
        whileHover={{ rotate: 15, scale: 1.1 }} // Adding a hover animation
        whileTap={{ scale: 0.95 }} // Tap feedback
      >
        <FaEnvelope size={24} /> {/* Interactive envelope icon */}
      </motion.button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleModal}
        ></div>
      )}

      {/* Modal Content */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              aria-label="Close"
            >
              ✖
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
              Contact Us
            </h2>

            {/* Modal Body */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-700 text-black border py-2 px-4 rounded-lg shadow hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ContactFormModal;
