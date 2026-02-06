import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    year: '2025',
    title: 'UI/UX Design',
    description:
      "A design isn't just 'how it looks', it's how it feels. We craft digital experiences that are both stunning and simple to use. We dive deep into your users' world to create interfaces that guide them effortlessly from homepage to happy customer. When everything is fighting for attention, nothing stands out. So we simplify. We prioritize your objectives and design with discipline and intent.",
    image: '/images/work/Kaizen Dezain Mockup.png',
    tags: ['Figma UI Design', 'User Experience (UX)', 'Wireframes', 'Responsive Planning'],
  },
  {
    year: '2025',
    title: 'Web Development',
    description:
      "Not every brand needs the same platform and not every platform suits the same goals. We build on WordPress, Shopify, and Webflow to engineer the right environment for your business to live, grow, and scale. Development should be invisible not in capability, but in experience. We build websites that are fast, secure, and structurally sound.",
    image: '/images/work/Muse & Masterpiece Mockup.png',
    tags: ['Pixel Perfect Translation', 'Shpify, Wordpress, Webflows', 'Client-First Framework- MERN Stack', 'Technical SEO'],
  },
  {
    year: '2025',
    title: 'End-to-End Package',
    description:
      "The friction free solution. One team, one vision, one process, from concept to deployment. No misalignment, no handover issues, no wasted iteration. When design and development live together, things move faster, cleaner, and with more precision. The result? A finished product that looks right, works right, and feels intentional from end to end.",
    image: '/images/work/NW9 Design System Mockup.png',
    tags: ['Full Project Lifecycle', 'Design + Development + SEO', 'Unified Vision', 'Rapid Iteration', 'Post-Launch Maintenance Support'],
  },
  {
    year: '2025',
    title: 'Custom Engineering',
    description:
      "When templated solutions hit a ceiling, we go custom. From advanced motion to full web applications, we engineer digital experiences that feel intentional, immersive, and technically sound. Using modern frameworks and automation, we develop interfaces, products, and interactions that are performant, lightweight, and future-ready.",
    image: '/images/work/NW9 Development Services Mockup.png',
    tags: ['Advanced Motion (GSAP)', 'Framer Motion ', 'Web Applications', 'Modern Frontend', 'API & Automation'],
  },
  {
    year: '2025',
    title: 'SEO',
    description:
      "People Google everything. The question is: do they find you or your competitor? We fine tune the foundation of your site so search engines trust you, users discover you, and conversions follow. Clean structure, compelling content, smart keywords, fast performance, all aligned with how real users search and buy. Organic growth, sustainable results, measurable impact. No gimmicks.",
    image: '/images/work/Weston Dental Mockup.png',
    tags: ['Technical SEO', 'On-Page SEO', 'Performance Optimization', 'Analytics & Reporting'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !header || !cardsContainer) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.querySelectorAll('.animate-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stacking cards effect
      const cards = cardsContainer.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Skip last card

        ScrollTrigger.create({
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(card, {
              scale: 1 - progress * 0.05,
              opacity: 1 - progress * 0.3,
              duration: 0.1,
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section relative w-full bg-[#0a0a0a] text-white overflow-visible"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <div className="animate-item flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-white/30" />
              <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                What we do
              </span>
            </div>
            <h2 className="animate-item text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Services
            </h2>
          </div>
          <div className="animate-item lg:text-right">
            <p className="text-lg text-white/50 max-w-md lg:ml-auto">
              End-to-end solutions for brands that want to stand out and scale with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div ref={cardsContainerRef} className="relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card sticky top-0"
            style={{ zIndex: index + 1 }}
          >
            <div className="min-h-screen lg:min-h-[90vh] xl:min-h-screen bg-[#0a0a0a] border-t border-white/10">
              <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[90vh] xl:min-h-screen">
                {/* Left - Image */}
                <div className="relative flex items-center justify-center p-8 lg:p-16 bg-[#0f0f0f]">
                  <div className="absolute top-6 left-6 lg:top-10 lg:left-10">
                    <span className="text-xs font-mono text-white/30 border border-white/20 px-3 py-1.5">
                      {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
                  />
                </div>

                {/* Right - Content */}
                <div className="flex flex-col justify-center p-8 lg:p-8 xl:p-12 2xl:p-16">
                  <div className="max-w-xl">
                    {/* Year */}
                    <p className="text-sm font-mono text-white/40 mb-4 lg:mb-3 xl:mb-6">( {service.year} )</p>

                    {/* Title */}
                    <h3 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium tracking-tight text-white mb-4 lg:mb-4 xl:mb-6 2xl:mb-8">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-sm xl:text-base 2xl:text-lg text-white/60 leading-relaxed mb-6 lg:mb-6 xl:mb-8 2xl:mb-12">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="space-y-0 border-t border-white/10">
                      {service.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="py-4 border-b border-white/10 text-sm text-white/70 hover:text-white hover:pl-2 transition-all cursor-pointer"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
