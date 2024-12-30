"use client";

import Navbar from "./Components/NavBar";
import Header from "./Components/Header";
import Themes from "./Components/Themes";
import ProjectPage from "./Components/ProjectPage";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury' | 'blue' | 'green'>('light');

  return (
    <div>
      <Navbar theme={theme}  />
      <Header theme={theme} />
      <Themes theme={theme} setTheme={setTheme} />
      <ProjectPage theme={theme} />
    </div>
  );
}
