// components/ProjectCard.tsx
import React from 'react';
// import { FaGlobe } from 'react-icons/fa'; // For the website icon

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  githubLink: string;
  videoSrc: string;
  timePeriod: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
  githubLink,
  videoSrc,
  timePeriod,
}) => {
  return (
    <div className="rounded-lg bg-white text-black flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      {/* Video Section */}
      <a className="block cursor-pointer" href={link}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        ></video>
      </a>

      {/* Card Content Section */}
      <div className="flex flex-col px-2">
        <div className="space-y-1">
          <h3 className="font-semibold tracking-tight mt-1 text-base">{title}</h3>
          <time className="font-sans text-xs">{timePeriod}</time>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div className="flex items-center pt-2 px-2 pb-2">
        <div className="flex flex-row flex-wrap items-start gap-1">
          <a target="_blank" href={link}>
            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
              {/* <FaGlobe className="text-3xl" /> */}
              Website
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
