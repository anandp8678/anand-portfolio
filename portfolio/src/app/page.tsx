"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Passion from "@/components/sections/Passion";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import GreatWorks from "@/components/sections/GreatWorks";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import BeyondCode from "@/components/sections/BeyondCode";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";

export default function Home() {
  useEffect(() => {
    // Hide loading screen after 2s
    const timer = setTimeout(() => {
      const loader = document.getElementById("loading-screen");
      if (loader) loader.classList.add("hidden");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <div className="noise-overlay" />
      <BackgroundBlobs />

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Passion />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GreatWorks />
        <Education />
        <Certifications />
        <BeyondCode />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
