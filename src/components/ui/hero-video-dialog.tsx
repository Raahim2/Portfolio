"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const selectedAnimation = animationVariants[animationStyle];

  // Close on `Escape` key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        className="group relative cursor-pointer"
        onClick={() => setIsVideoOpen(true)}
        aria-label="Open video dialog"
        role="button"
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-105">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
            <div className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md">
              <Play
                className="size-6 text-white"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            aria-hidden={!isVideoOpen}
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative mx-4 w-full max-w-4xl aspect-video"
            >
              <button
                className="absolute -top-10 right-0 p-2 rounded-full bg-neutral-900/50 text-white shadow-lg focus:ring focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video dialog"
              >
                <XIcon className="w-6 h-6" />
              </button>
              <iframe
                src={videoSrc}
                className="w-full h-full rounded-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                loading="lazy"
                title="Video playback"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
