import HeroSection from "@/src/components/HeroSection";
import NavBar from "@/src/components/NavBar";
import AboutSection from "@/src/components/AboutSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import EmailSection from "@/src/components/EmailSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
