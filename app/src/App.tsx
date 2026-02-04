import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import Services from './sections/Services';
import Impact from './sections/Impact';
import Experience from './sections/Experience';
import CTA from './sections/CTA';
import FinalCTA from './sections/FinalCTA';
import FAQ from './sections/FAQ';

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
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <Philosophy />
        <Services />
        <Impact />
        <Experience />
        <CTA />
        <FinalCTA />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
