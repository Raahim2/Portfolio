// components/ProjectCard.tsx
import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // For the website icon
import { CardContainer, CardBody } from '@/components/ui/3d-card'
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

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
    <CardContainer className='w-[100%]'>
      <CardBody>
       


    <div className="rounded-lg bg-white text-black flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      {/* Video Section */}
      <div>
      {/* The HeroVideoDialog will be used here */}
      <HeroVideoDialog
        className="dark:hidden "
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/defyovyob/video/upload/v1735311180/klp84r6q3llxiochqn8i.mp4"
        thumbnailSrc="https://www.vdocipher.com/blog/wp-content/uploads/2023/12/DALL%C2%B7E-2023-12-10-20.21.58-A-creative-and-visually-appealing-featured-image-for-a-blog-about-video-thumbnails-for-various-social-platforms-like-YouTube-Instagram-and-TikTok-s-1024x585.png" // Thumbnail image URL
        thumbnailAlt="Hero Video"
      />
      
      {/* If you want to wrap the video in a clickable link, use this */}
      
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
          <a target="_blank" href={link}>
            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
              <FaGlobe className="text-sm" />
              Website
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
