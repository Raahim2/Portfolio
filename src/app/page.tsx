"use client";

import Navbar from "./Components/NavBar";
import Header from "./Components/Header";
import Themes from "./Components/Themes";
import Stats from "./Components/Stats";
import ProjectPage from "./Components/ProjectPage";
import Education from "./Components/Education";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker'>('light');

  return (
    <div className="w-full h-screen">
      <div>
        <Navbar theme={theme}/>
        <Header theme={theme}/>
        <Themes theme={theme} setTheme={setTheme}/>
        <Education theme={theme}/>
        <Stats theme={theme} s1={23} s2={12} s3={16} s4={3}/>
        <ProjectPage theme={theme}/>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}