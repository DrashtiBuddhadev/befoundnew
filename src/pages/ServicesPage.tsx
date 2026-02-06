import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import ServicesHero from './services/ServicesHero';
import ServicesSection from '@/home/servicesSection/ServicesSection';
import CtaSection from '@/home/ctaSection/CtaSection';

export default function ServicesPage() {
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
    <div className="services-page bg-black">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
