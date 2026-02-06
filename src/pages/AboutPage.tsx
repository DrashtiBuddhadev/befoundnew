import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import AboutHero from './about/AboutHero';
import StudioStory from './about/StudioStory';
import AgencySection from './about/AgencySection';
import FounderSection from './about/FounderSection';
import PhilosophySection from '../home/philosophySection/PhilosophySection';
import CtaSection from '@/home/ctaSection/CtaSection';

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <AboutHero />

      {/* Studio Story */}
      <StudioStory />

      {/* Agency Section with Zoom Parallax */}
      <AgencySection />

      {/* Founder Section */}
      <FounderSection />

      {/* Philosophy Section (2nd Part) */}
      <PhilosophySection />
      <CtaSection />
    </div>
  );
}
