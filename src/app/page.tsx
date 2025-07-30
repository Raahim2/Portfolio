"use client"; 

import NavBar from "@/app/Components/Version3/Navbar"
import HeroSection from "@/app/Components/Version3/Hero";
import Stats from "@/app/Components/Version3/Stats";
import PageWrapper from "@/app/Components/Version3/Wrapper"; // <-- Import the new wrapper
import EducationSection from "@/app/Components/Version3/Education"; // Import if you need it later
import Experience from "@/app/Components/Version3/Experience"; // Import if you need it later
import Projects from "@/app/Components/Version3/Projects"; // Import if you need it later
import Skills from "./Components/Version3/Skills";
import Follow from "./Components/Version3/Follow"; // Import if you need it later
import ContactUs from "./Components/Version3/ContactUs"; // Import if you need it later
import Footer from "./Components/Version3/Footer";


export default function Home() {
  return (
    <PageWrapper>
      <main>
        <NavBar/>
        <HeroSection />
        <Stats />
        <EducationSection />
        <Experience />
        <Projects />
        <Skills />
        <Follow />
        <ContactUs />
        <Footer/>
      </main>
    </PageWrapper>
    
  );
}