"use client"

import { useEffect } from "react";
import Navbar from "./Components/NavBar";
// import Header from "./Components/Header";
// import ThemeSection from "./Components/Themes";
// import ProjectPage from "./Components/ProjectPage";


export default function Home() {
  useEffect(() => {
    localStorage.setItem("theme", "light");
  }, []); 

  return (
    <div>
      <Navbar/>
      {/* <Header/>
      <ThemeSection/>
      <ProjectPage/>
       */}
    </div>
  );
}
