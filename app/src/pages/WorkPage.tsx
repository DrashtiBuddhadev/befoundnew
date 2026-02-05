import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import CtaSection from '../home/ctaSection/CtaSection';
import './WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

// ─── project data (single source of truth) ─────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'Kaizen Dezain',
    category: 'Brand Identity',
    tags: ['Brand Identity', 'Web Design'],
    image: '/images/work/Kaizen Dezain Mockup.png',
    year: '2024',
    description:
      'A complete brand-identity system and marketing site for a premium Japanese-inspired design consultancy.',
  },
  {
    id: 2,
    title: 'NW9 Studio',
    category: 'Design System',
    tags: ['Design System', 'Development'],
    image: '/images/work/NW9 Design System Mockup.png',
    year: '2024',
    description:
      'Scalable design-system architecture paired with a component library built for the NW9 creative team.',
  },
  {
    id: 3,
    title: 'Muse & Masterpiece',
    category: 'E-commerce',
    tags: ['E-commerce', 'Branding'],
    image: '/images/work/Muse & Masterpiece Mockup.png',
    year: '2024',
    description:
      'An immersive e-commerce experience that blends editorial storytelling with seamless product discovery.',
  },
  {
    id: 4,
    title: 'Weston Dental',
    category: 'Healthcare',
    tags: ['Healthcare', 'SEO'],
    image: '/images/work/Weston Dental Mockup.png',
    year: '2025',
    description:
      'A trust-first digital presence for a leading dental practice, optimised for search and local discovery.',
  },
  {
    id: 5,
    title: 'NW9 Development',
    category: 'Engineering',
    tags: ['Custom Engineering', 'Development'],
    image: '/images/work/NW9 Development Services Mockup.png',
    year: '2025',
    description:
      'Purpose-built custom tooling and internal platforms delivered for the NW9 engineering division.',
  },
];

// derive unique filter labels from project tags
const ALL = 'All';
const categories = [ALL, ...new Set(projects.flatMap((p) => p.tags))];

// ─── component ──────────────────────────────────────────────────────────────
export default function WorkPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>(ALL);
  const navigate = useNavigate();

  // ── smooth scroll (mirrors AboutPage pattern) ──────────────────────────
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

  // ── GSAP grid-card reveal ───────────────────────────────────────────────
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.querySelectorAll('.work-card'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [activeFilter]); // re-trigger when filter changes

  const filtered =
    activeFilter === ALL
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="work-page">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* subtle grid pattern (same as AboutHero) */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full pt-32 pb-20">
          {/* top-row meta (mirrors AboutHero layout) */}
          <div className="flex items-start justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[2px] bg-white/30" />
              <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                Portfolio
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm text-white/60 max-w-xs text-right hidden md:block"
            >
              Every project, every story.
            </motion.p>
          </div>

          {/* main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.9] tracking-tight"
          >
            <span className="text-white">WORK</span>
            <br />
            <span className="text-white/20">BE</span>
            <span className="text-indigo-500">FOUND</span>
          </motion.h1>

          {/* scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center gap-2"
          >
            <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] sticky top-20 z-[50]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-5 flex flex-wrap items-center gap-3 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`work-filter-btn text-sm transition-all duration-300 px-4 py-1.5 border ${
                activeFilter === cat
                  ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}

          {/* project count */}
          <span className="ml-auto text-xs text-white/30 font-mono">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* ── Project Grid ────────────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] py-20 md:py-28">
        <div
          ref={gridRef}
          className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="work-card group relative overflow-hidden cursor-pointer"
              onClick={() => navigate(`/work/${project.id}`)}
            >
              {/* image container */}
              <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />

                {/* center arrow (appears on hover) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-14 h-14 border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-medium text-white tracking-wide">
                      View project
                    </span>
                  </div>
                </div>

                {/* indigo bottom-bar (CSS ::after equivalent via inline) */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>

              {/* card info row */}
              <div className="flex items-start justify-between mt-4">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 mt-0.5">{project.category}</p>
                </div>
                <span className="text-xs font-mono text-white/30">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA (reuse shared component) ────────────────────────────────── */}
      <CtaSection />
    </div>
  );
}
