import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import './ProjectsSection.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Kaizen Dezain',
    category: 'Brand Identity & Web Design',
    image: '/images/work/Kaizen Dezain Mockup.png',
    year: '2024',
  },
  {
    id: 2,
    title: 'NW9 Studio',
    category: 'Design System & Development',
    image: '/images/work/NW9 Design System Mockup.png',
    year: '2024',
  },
  {
    id: 3,
    title: 'Muse & Masterpiece',
    category: 'E-commerce & Branding',
    image: '/images/work/Muse & Masterpiece Mockup.png',
    year: '2024',
  },
  {
    id: 4,
    title: 'Weston Dental',
    category: 'Healthcare & SEO',
    image: '/images/work/Weston Dental Mockup.png',
    year: '2025',
  },
  {
    id: 5,
    title: 'NW9 Development',
    category: 'Custom Engineering',
    image: '/images/work/NW9 Development Services Mockup.png',
    year: '2025',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const slider = sliderRef.current;

    if (!section || !header || !slider) return;

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

      // Cards animation
      gsap.fromTo(
        slider.querySelectorAll('.project-card'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: slider,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const checkScrollPosition = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 0);
    setCanScrollRight(
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();

    return () => slider.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.querySelector('.project-card')?.clientWidth || 400;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="projects-section relative w-full bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex-1">
            <div className="animate-item flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-white/30" />
              <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                Selected Work
              </span>
            </div>
            <h2 className="animate-item text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight max-w-2xl">
              Brand experience that's on point,
              <br />
              <span className="text-white/50">or smarter operations and savings?</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="animate-item flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`nav-arrow w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'border-white/20 hover:bg-white hover:border-white text-white hover:text-black'
                  : 'border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`nav-arrow w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'border-white/20 hover:bg-white hover:border-white text-white hover:text-black'
                  : 'border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Slider */}
      <div
        ref={sliderRef}
        className="projects-slider flex gap-6 overflow-x-auto px-6 sm:px-12 lg:px-20 pb-4 scroll-smooth"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card group relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] aspect-[4/3] overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0 bg-neutral-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              {/* Top - Year Badge */}
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.year}
                </span>
                <span className="text-xs font-mono text-white/40 border border-white/20 px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>

              {/* Center - View Project Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="view-project-btn flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-16 h-16 border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white tracking-wide">
                    View project
                  </span>
                </div>
              </div>

              {/* Bottom - Project Info */}
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </p>
              </div>
            </div>

            {/* Border overlay on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
          </div>
        ))}

        {/* View All Card */}
        <div className="project-card view-all-card group relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] aspect-[4/3] overflow-hidden cursor-pointer border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <div className="w-20 h-20 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
              <ArrowRight className="w-8 h-8 text-white group-hover:text-black transition-colors duration-500" />
            </div>
            <div className="text-center">
              <p className="text-xl font-medium text-white mb-2">View all projects</p>
              <p className="text-sm text-white/40">Explore our complete portfolio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats/Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-16 md:mt-20">
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            Crafting digital experiences since <span className="text-white/60">2025</span>
          </p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-light text-white">30+</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Projects</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-light text-white">20+</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Clients</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-light text-white">100%</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
