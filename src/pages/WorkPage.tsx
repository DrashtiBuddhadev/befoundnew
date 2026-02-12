import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import CtaSection from '../home/ctaSection/CtaSection';
import './WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

// ─── project data organized by category ─────────────────────────────────
const projectsByCategory = {
  branding: {
    title: 'Logo & Branding',
    subtitle: 'Identity that resonates',
    projects: [
      {
        id: 15,
        title: 'Soulful Swaad',
        category: 'Logo and Branding',
        image: '/images/logo&branding/1.jpg',
        year: '2025',
        description: 'A heartfelt brand identity for a mother-daughter Gujarati cloud kitchen celebrating authentic homemade flavors and culinary heritage.',
      },
      {
        id: 1,
        title: 'Kaizen Dezain',
        category: 'Logo and Branding',
        image: '/images/work/Kaizen Dezain Mockup.png',
        year: '2024',
        description: 'A complete brand-identity system for a premium Japanese-inspired design consultancy.',
      },
    ],
  },
  design: {
    title: 'Website Design',
    subtitle: 'Experiences that convert',
    projects: [
      {
        id: 14,
        title: 'PeopleVerse',
        category: 'Website Design',
        image: '/images/website design/peopleverse/Home page.jpg',
        video: null,
        year: '2025',
        description: 'A comprehensive HR management platform design featuring intuitive wireframes, modern UI, and seamless user experience.',
      },
      {
        id: 5,
        title: 'NW9 Studio',
        category: 'Website Design',
        image: '/images/work/NW9 Design System Mockup.png',
        video: null,
        year: '2024',
        description: 'Scalable design-system architecture paired with a component library built for the NW9 creative team.',
      },
    ],
  },
  development: {
    title: 'Website Development',
    subtitle: 'Built to perform',
    projects: [
      {
        id: 13,
        title: 'LumnLab',
        category: 'Website Development',
        image: '/images/work/lumnlab.png',
        year: '2025',
        description: 'A modern technology platform built with React.js featuring sleek UI and seamless user experience.',
      },
      { 
        id: 6,
        title: 'Blue Escape Holidays',
        category: 'Website Development',
        image: '/images/work/blueEscape.png',
        year: '2025',
        description: 'A full-stack travel booking platform with custom package builder, admin panel, and seamless user experience.',
      },
      {
        id: 2,
        title: 'Muse & Masterpiece',
        category: 'Website Development',
        image: '/images/work/Muse & Masterpiece Mockup.png',
        year: '2024',
        description: 'An immersive e-commerce experience that blends editorial storytelling with seamless product discovery.',
      },
      {
        id: 9,
        title: 'United Internationals',
        category: 'Website Development',
        image: '/images/work/united.png',
        year: '2025',
        description: 'A professional corporate website showcasing business services with clean design and effective communication.',
      },
      {
        id: 3,
        title: 'Weston Dental',
        category: 'Website Development',
        image: '/images/work/Weston Dental Mockup.png',
        year: '2025',
        description: 'A trust-first digital presence for a leading dental practice, optimised for search and local discovery.',
      },
      {
        id: 7,
        title: 'Crazy Virality',
        category: 'Website Development',
        image: '/images/work/crazyvirality.png',
        year: '2025',
        description: 'A bold digital marketing agency website built to showcase services and drive client engagement.',
      },
    ],
  },
};

// ─── component ──────────────────────────────────────────────────────────────
export default function WorkPage() {
  const navigate = useNavigate();
  const brandingRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);

  // Pagination state for development section
  const [devPage, setDevPage] = useState(0);
  const projectsPerPage = 3;

  // ── smooth scroll ──────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);

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

  // ── GSAP horizontal scroll animations ───────────────────────────────────────────────
  useEffect(() => {
    const sections = [brandingRef.current, designRef.current, devRef.current];

    sections.forEach((section) => {
      if (!section) return;

      const ctx = gsap.context(() => {
        const cards = section.querySelectorAll('.work-card');

        gsap.fromTo(
          cards,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, section);

      return () => ctx.revert();
    });
  }, []);

  const renderProjectSection = (
    sectionData: { title: string; subtitle: string; projects: any[] },
    ref: React.RefObject<HTMLDivElement | null>,
    isDark: boolean = false,
    enablePagination: boolean = false
  ) => {
    const bgColor = isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]';
    const textColor = isDark ? 'text-white' : 'text-black';
    const accentColor = isDark ? 'text-white/40' : 'text-black/50';

    // Pagination logic
    const totalPages = enablePagination ? Math.ceil(sectionData.projects.length / projectsPerPage) : 1;
    const startIndex = enablePagination ? devPage * projectsPerPage : 0;
    const endIndex = enablePagination ? startIndex + projectsPerPage : sectionData.projects.length;
    const displayProjects = sectionData.projects.slice(startIndex, endIndex);

    const handlePrevPage = () => {
      if (devPage > 0) {
        setDevPage(devPage - 1);
      }
    };

    const handleNextPage = () => {
      if (devPage < totalPages - 1) {
        setDevPage(devPage + 1);
      }
    };

    return (
      <section className={`relative ${bgColor} py-24 md:py-32`}>
        <div className="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-indigo-500' : 'bg-indigo-500'}`} />
              <span className={`text-xs font-medium tracking-widest uppercase ${accentColor}`}>
                {sectionData.title}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium leading-tight ${textColor}`}>
                {sectionData.subtitle}
              </h2>
              {enablePagination && totalPages > 1 && (
                <div className="hidden md:flex items-center gap-3">
                  <button
                    onClick={handlePrevPage}
                    disabled={devPage === 0}
                    className={`w-10 h-10 border ${isDark ? 'border-white/20' : 'border-black/10'} flex items-center justify-center transition-all duration-300
                      ${devPage === 0
                        ? 'opacity-40 cursor-not-allowed'
                        : `${isDark ? 'hover:bg-white hover:text-black text-white' : 'hover:bg-black hover:text-white text-black'}`
                      }`}
                    aria-label="Previous projects"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={devPage === totalPages - 1}
                    className={`w-10 h-10 border ${isDark ? 'border-white/20' : 'border-black/10'} flex items-center justify-center transition-all duration-300
                      ${devPage === totalPages - 1
                        ? 'opacity-40 cursor-not-allowed'
                        : `${isDark ? 'hover:bg-white hover:text-black text-white' : 'hover:bg-black hover:text-white text-black'}`
                      }`}
                    aria-label="Next projects"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div ref={ref} className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 pb-4">
              {displayProjects.map((project) => (
                <div
                  key={project.id}
                  className="work-card group relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] cursor-pointer"
                  onClick={() => navigate(`/work/${project.id}`)}
                >
                  {/* Image container */}
                  <div className={`relative w-full aspect-[4/3] overflow-hidden border ${isDark ? 'border-white/10' : 'border-black/10'} ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />

                    {/* Center arrow (appears on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="w-14 h-14 border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                        <span className="text-sm font-medium text-white tracking-wide">
                          View case study
                        </span>
                      </div>
                    </div>

                    {/* Indigo bottom-bar */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  </div>

                  {/* Card info */}
                  <div className="mt-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-lg md:text-xl font-medium ${textColor} group-hover:text-indigo-500 transition-colors`}>
                        {project.title}
                      </h3>
                      <span className={`text-xs font-mono ${accentColor}`}>{project.year}</span>
                    </div>
                    <p className={`text-sm ${accentColor} leading-relaxed`}>
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="work-page">
      {/* ── Hero with Video ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-white/30" />
                <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                  Portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-6">
                <span className="text-white">Work that</span>
                <br />
                <span className="text-indigo-400">speaks for itself</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
                Every project, every story.
              </p>

              <p className="text-base text-white/50 leading-relaxed">
                From concept to completion, we craft digital experiences that drive real results. Browse our portfolio of branding, design, and development work.
              </p>
            </motion.div>

            {/* Right - Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-end"
            >
              <div className="w-full p-8 bg-white/5 border border-white/10">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-3xl font-light text-white mb-1">30+</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-white mb-1">20+</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Clients</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40">Results that matter</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2"
              >
                <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Logo & Branding Section ────────────────────────────────────── */}
      {renderProjectSection(projectsByCategory.branding, brandingRef, false, false)}

      {/* ── Website Design Section ─────────────────────────────────────── */}
      {renderProjectSection(projectsByCategory.design, designRef, true, false)}

      {/* ── Website Development Section ────────────────────────────────── */}
      {renderProjectSection(projectsByCategory.development, devRef, false, true)}

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CtaSection />
    </div>
  );
}
