"use client";

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const SkillCard = ({
  name,
  className,
}: {
  name: string; // Skill name, which will be used to load the SVG icon
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");
  const [iconSrc, setIconSrc] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);

    // Generate icon path based on the skill name
    const iconPath = `/SVG/Skills/${name.toLowerCase().replace(/\s+/g, '_')}.svg`; // Replaces spaces with underscores


    setIconSrc(iconPath);
  }, [name]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
  <div className="flex flex-col items-center p-4 relative rounded-lg shadow-md  w-30 h-30 sm:w-40 md:w-44 lg:w-48 xl:w-48 sm:h-40 md:h-44 lg:h-48 xl:h-48">
    <Icon className="absolute h-3 w-3 -top-2 -left-2 dark:text-white text-black sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-4 lg:w-4 xl:h-4 xl:w-4" />
    <Icon className="absolute h-3 w-3 -bottom-2 -left-2 dark:text-white text-black sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-4 lg:w-4 xl:h-4 xl:w-4" />
    <Icon className="absolute h-3 w-3 -top-2 -right-2 dark:text-white text-black sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-4 lg:w-4 xl:h-4 xl:w-4" />
    <Icon className="absolute h-3 w-3 -bottom-2 -right-2 dark:text-white text-black sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-4 lg:w-4 xl:h-4 xl:w-4" />

    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-2xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-20 xl:w-20">
            <div className="absolute w-full h-full  rounded-full" />
            {iconSrc && (
              <img
                src={iconSrc}
                alt={name}
                className="z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 object-contain"
              />
            )}
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
);

  
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(150px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "10";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};