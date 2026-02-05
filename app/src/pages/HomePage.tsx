import HeroSection from '../home/heroSection/HeroSection';
import PhilosophySection from '../home/philosophySection/PhilosophySection';
import ServicesSection from '../home/servicesSection/ServicesSection';
import ExperienceSection from '../home/experienceSection/ExperienceSection';
import ProjectsSection from '../home/projectsSection/ProjectsSection';
import CtaSection from '../home/ctaSection/CtaSection';
import FaqSection from '../home/faqSection/FaqSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
