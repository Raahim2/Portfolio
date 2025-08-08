// components/SkillCard.jsx
"use client";

import React from 'react';
import Image from 'next/image';

const SkillCard = ({ name, outlineIconUrl, filledIconUrl, className = '' }) => {
  return (
    <div
      className={`
        -ml-px -mt-px 
        group relative
        flex flex-col items-center justify-center
        overflow-hidden
        border border-gray-800
        transition-all duration-300
        p-2
        ${className}
      `}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-t" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(6,182,212,0.3) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
          maskImage:
            'radial-gradient(ellipse 100% 60% at 50% 0%, black 15%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 60% at 50% 0%, black 15%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-44 sm:w-24 md:w-44 aspect-[104/42] translate-y-2 sm:translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <Image
            src={outlineIconUrl}
            alt={`${name} outline icon`}
            layout="fill"
            objectFit="contain"
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src={filledIconUrl}
            alt={`${name} filled icon`}
            layout="fill"
            objectFit="contain"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"
          />
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-75">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
