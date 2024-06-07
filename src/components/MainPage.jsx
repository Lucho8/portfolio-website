import React from 'react'
import HeroSection from "@/src/components/HeroSection";
import AboutSection from "@/src/components/AboutSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import EmailSection from "@/src/components/EmailSection";
import Footer from "@/src/components/Footer";

const MainPage = () => {
  return (
    <div>
    <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      </div>
  )
}

export default MainPage