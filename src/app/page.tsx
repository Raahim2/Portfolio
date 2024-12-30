"use client"

import Navbar from "./Components/NavBar";
import Header from "./Components/Header";
import Themes from "./Components/Themes";
import ProjectPage from "./Components/ProjectPage";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Themes/>
      <ProjectPage/>
    </div>
  );
}
