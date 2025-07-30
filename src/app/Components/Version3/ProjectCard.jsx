// src/components/Version2/ProjectCard.js

import React from 'react';
import PropTypes from 'prop-types';
import { FaGlobe, FaDownload, FaGithub } from 'react-icons/fa';
import { CardContainer, CardBody } from '@/components/ui/3d-card';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const ProjectCard = ({
  title,
  description,
  techStack,
  link,
  githubLink,
  videoSrc,
  timePeriod,
  projectType,
  thumbnailURL
}) => {
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="h-full">
        
        <div className="group rounded-xl bg-gray-950/60 text-neutral-50 flex flex-col overflow-hidden border border-neutral-800
                        hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2
                        transition-all duration-300 ease-in-out h-full backdrop-blur-sm">
          
          {/* Video Section */}
          <div className="overflow-hidden ">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc={videoSrc}
              thumbnailSrc={thumbnailURL}
              thumbnailAlt={`${title} project thumbnail`}
            />
          </div>

          {/* Card Content Section */}
          <div className="flex flex-col p-4 flex-grow">
            <div className="space-y-1.5">
              <h3 className="font-bold tracking-tight text-lg text-neutral-100">{title}</h3>
              <time className="font-sans text-xs text-neutral-400">{timePeriod}</time>
              <div className="prose max-w-full text-pretty font-sans text-sm text-neutral-400 dark:prose-invert">
                <p>{description}</p>
              </div>
            </div>
          </div>

          {/* Tech Stack & Buttons Wrapper */}
          <div className="mt-auto p-4 pt-2">
            {/* Tech Stack Section */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center rounded-md font-semibold bg-neutral-800 text-neutral-300 px-2.5 py-1 text-xs"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Button Section */}
            <div className="flex flex-row flex-wrap items-center gap-3">
              {projectType === 'web' && (
                <a target="_blank" href={link} rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md font-semibold bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors gap-2 px-4 py-2 text-xs">
                  <FaGlobe />
                  Website
                </a>
              )}
              {projectType === 'app' && (
                <a target="_blank" href={link} rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md font-semibold bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors gap-2 px-4 py-2 text-xs">
                  <FaDownload />
                  Download
                </a>
              )}
              
              <a target="_blank" href={githubLink} rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md font-semibold bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors gap-2 px-4 py-2 text-xs">
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

// PropTypes remain the same
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  videoSrc: PropTypes.string,
  timePeriod: PropTypes.string.isRequired,
  projectType: PropTypes.oneOf(['web', 'app']).isRequired,
  thumbnailURL: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  videoSrc: '',
};

export default ProjectCard;