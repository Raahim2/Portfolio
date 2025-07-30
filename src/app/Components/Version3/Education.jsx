// src/components/HowItWorks.js

import React from 'react';
import Card from './Card';
import Starter from './Starter';

// Updated data to match the screenshot's content and style
const cardData = [
  {
    number: '001',
    title: 'Bombay Cambridge School',
    imageUrl: '/images/BCG.png', 
  },
  {
    number: '002',
    title: 'Mithibai College',
    imageUrl: '/images/Mithibai.png', // Assuming this is a local image
  },
  {
    number: '003',
    title: 'DJ Sanghvi College of Engineering',
    imageUrl: '/images/DJSCE.png', // Assuming this is a local image
  },
];

const Education = () => {
  return (
    // Section container with a dark background and vertical padding
    <section className=" text-white w-full pt-20 lg:py-24" id='education'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Starter component for the title and description */}
        <Starter 
          title="My Education"
          text1="Academic foundations "
          text2="that shaped my journey."
        />

        {/* Grid for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-800 md:divide-x md:divide-gray-800">
          {cardData.map((card, index) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              imageUrl={card.imageUrl}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;