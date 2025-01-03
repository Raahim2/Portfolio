import React from 'react';
import { FaGlobe, FaDownload, FaGithub } from 'react-icons/fa'; // Added GitHub icon
import { CardContainer, CardBody } from '@/components/ui/3d-card';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  githubLink: string;
  videoSrc: string;
  timePeriod: string;
  projectType: string; // New prop for project type
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
  githubLink,
  videoSrc,
  timePeriod,
  projectType,
}) => {
  return (
    <CardContainer className="w-[100%]">
      <CardBody>
        <div className="rounded-lg bg-white text-black flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
          {/* Video Section */}
          <div>
            <HeroVideoDialog
              className="dark:hidden"
              animationStyle="from-center"
              videoSrc={videoSrc}
              thumbnailSrc="https://www.vdocipher.com/blog/wp-content/uploads/2023/12/DALL%C2%B7E-2023-12-10-20.21.58-A-creative-and-visually-appealing-featured-image-for-a-blog-about-video-thumbnails-for-various-social-platforms-like-YouTube-Instagram-and-TikTok-s-1024x585.png"
              thumbnailAlt="Hero Video"
            />
          </div>

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
          <div className="flex items-center py-2 px-2 pb-2">
            <div className="flex flex-row flex-wrap items-start gap-1">
              {projectType === 'web' && (
                <a target="_blank" href={link} rel="noopener noreferrer">
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    <FaGlobe className="text-sm" />
                    Website
                  </div>
                </a>
              )}
              {projectType === 'app' && (
                <a target="_blank" href={link} rel="noopener noreferrer">
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    <FaDownload className="text-sm" />
                    Download APK
                  </div>
                </a>
              )}
              
              {/* GitHub Button */}
              <a target="_blank" href={githubLink} rel="noopener noreferrer">
                <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80 flex gap-2 px-2 py-1 text-[10px]">
                  <FaGithub className="text-sm" />
                  GitHub
                </div>
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
