"use client";

import Navbar from "../Components/Version2/NavBar";
import Header from "../Components/Version2/Header";
import Themes from "../Components/Version2/Themes";
import Stats from "../Components/Version2/Stats";
import ProjectPage from "../Components/Version2/ProjectPage";
import Education from "../Components/Version2/Education";
import Skills from "../Components/Version2/Skills";
import Footer from "../Components/Version2/Footer";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function v2() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker'>('lightning');


  return (
    <div className="w-full h-screen">
      <div>
        <Navbar theme={theme}setTheme={setTheme}/>
        <Header theme={theme}/>
        <Themes theme={theme} setTheme={setTheme}/>
        <Education theme={theme}/>
        <Stats theme={theme} s1={23} s2={12} s3={16} s4={3}/>
        <ProjectPage theme={theme}/>
        <Skills theme={theme}/>
        <Footer theme={theme}/>
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