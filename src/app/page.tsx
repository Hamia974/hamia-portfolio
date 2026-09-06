import Nav from "@/components/Nav";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import FeaturedProjects from "@/components/FeaturedProjects";
import Archive from "@/components/Archive";
import Journey from "@/components/Journey";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <BackgroundAtmosphere />
        <Hero />
        <About />
        <WhatIBuild />
        <FeaturedProjects />
        <Archive />
        <Journey />
        <TechStack />
        <Experience />
        <Research />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
