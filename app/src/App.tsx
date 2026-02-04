import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './home/heroSection/HeroSection';
import PhilosophySection from './home/philosophySection/PhilosophySection';
import ServicesSection from './home/servicesSection/ServicesSection';
// import ImpactSection from './home/impactSection/ImpactSection';
import ExperienceSection from './home/experienceSection/ExperienceSection';
import ProjectsSection from './home/projectsSection/ProjectsSection';
import CtaSection from './home/ctaSection/CtaSection';
import FinalCtaSection from './home/finalCtaSection/FinalCtaSection';
import FaqSection from './home/faqSection/FaqSection';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'auto';

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen">

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <CtaSection />
        <FinalCtaSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
