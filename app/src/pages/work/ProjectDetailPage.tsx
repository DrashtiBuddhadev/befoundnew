import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ExternalLink } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import { getProjectById, projects } from './projectsData';
import KeyHighlights from './KeyHighlights';
import CtaSection from '../../home/ctaSection/CtaSection';

gsap.registerPlugin(ScrollTrigger);

// ─── sidebar meta row ──────────────────────────────────────────────────────
function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4 border-b border-white/[0.08]">
      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</p>
      <p className="text-sm text-white/80 leading-relaxed">{value}</p>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(Number(id));

  const highlightsRef = useRef<HTMLDivElement>(null);
  const galleryRef    = useRef<HTMLDivElement>(null);

  // ── smooth scroll ──────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  // ── GSAP scroll reveals ────────────────────────────────────────────
  useEffect(() => {
    if (!project) return;

    const sections = [highlightsRef, galleryRef];
    const ctxs: ReturnType<typeof gsap.context>[] = [];

    sections.forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          el.querySelectorAll('.reveal-item'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, el);
      ctxs.push(ctx);
    });

    return () => ctxs.forEach((c) => c.revert());
  }, [project]);

  // ── guard ──────────────────────────────────────────────────────────
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
        <p className="text-white/50 mb-4">Project not found.</p>
        <button
          onClick={() => navigate('/work')}
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Back to Work
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail-page bg-[#0a0a0a] min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1  –  SPLIT SCREEN  (sidebar meta  |  giant "Project" title)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex bg-[#0a0a0a] overflow-hidden">

        {/* ── LEFT  –  narrow sidebar ────────────────────────────────── */}
        <aside className="
          relative z-10
          w-[38vw] sm:w-[32vw] lg:w-[28vw] xl:w-[24vw]
          min-h-screen
          flex flex-col justify-between
          px-6 sm:px-8 lg:px-10
          pt-24 pb-10
          border-r border-white/[0.06]
        ">
          {/* back link */}
          <div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Projects
            </Link>

            {/* project name */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-base font-semibold text-white mb-1"
            >
              {project.title}
            </motion.h2>

            {/* meta rows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6"
            >
              <MetaRow label="Country"       value={project.country} />
              <MetaRow label="Industry"      value={project.industry} />
              <MetaRow label="Tools"         value={project.tools} />
              <MetaRow label="Functionality" value={project.functionality} />
            </motion.div>
          </div>

          {/* ── "Live Website" square button ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10"
          >
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-3
                  px-5 py-3
                  border border-white/30 hover:border-indigo-500
                  bg-white/[0.04] hover:bg-indigo-500
                  transition-all duration-300
                "
              >
                <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span className="text-[11px] uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Live Website</span>
              </a>
            ) : (
              <div className="
                inline-flex items-center gap-3
                px-5 py-3
                border border-white/[0.15]
                bg-white/[0.03]
                opacity-40
              ">
                <ExternalLink className="w-4 h-4 text-white/40" />
                <span className="text-[11px] uppercase tracking-widest text-white/40">Live Website</span>
              </div>
            )}
          </motion.div>
        </aside>

        {/* ── RIGHT  –  image bg + giant title overlay ──────────── */}
        <div className="
          relative z-10
          flex-1
          min-h-screen
          overflow-hidden
        ">
          {/* full-bleed project image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* dark gradient overlay — heavier at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t
            from-[#0a0a0a]
            via-[#0a0a0a]/70
            to-[#0a0a0a]/40
          " />

          {/* subtle grid texture on top of image */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
                backgroundSize: '72px 72px',
              }}
            />
          </div>

          {/* indigo radial glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 500, height: 500,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
            }}
          />

          {/* giant "Project" watermark — dead-centre of the right panel */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              absolute inset-0
              flex items-center justify-center
              text-[18vw] sm:text-[15vw] lg:text-[13vw] xl:text-[11vw]
              font-bold leading-[0.85] tracking-tight
              text-white/[0.10]
              select-none pointer-events-none
              z-10
            "
          >
            Project
          </motion.h1>

          {/* bottom-left: project name + overview */}
          <div className="absolute bottom-0 left-0 px-8 sm:px-12 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                {project.title}
                <span className="text-white/35 font-light ml-3">– {project.category}</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 max-w-xl text-base text-white/60 leading-relaxed"
            >
              {project.overview}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2  –  KEY HIGHLIGHTS  (auto-play stepper)
          ══════════════════════════════════════════════════════════════════════ */}
      <div ref={highlightsRef}>
        <KeyHighlights highlights={project.highlights} />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4  –  3-CARD STRIP  (prev · current · next project)
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={galleryRef} className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/[0.06]">
        {/* label */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-10">
          <div className="reveal-item flex items-center gap-3">
            <div className="w-8 h-[2px] bg-indigo-500" />
            <span className="text-xs font-medium tracking-widest uppercase text-white/40">
              Featured Web Design projects
            </span>
          </div>
        </div>

        {/* cards */}
        <div className="reveal-item max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {(() => {
              const idx = projects.findIndex((p) => p.id === project.id);
              const len = projects.length;
              const indices = [
                (idx - 1 + len) % len,
                idx,
                (idx + 1) % len,
              ];
              return indices.map((pIdx) => {
                const p = projects[pIdx];
                return (
                  <Link
                    key={p.id}
                    to={`/work/${p.id}`}
                    className="group relative overflow-hidden rounded-sm cursor-pointer block"
                  >
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-900 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

                      {/* square View CTA */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                          <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-sm font-medium text-white tracking-wide">View</span>
                        </div>
                      </div>

                      {/* indigo bar */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-500" />
                    </div>

                    {/* title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none">
                      <h3 className="text-lg md:text-xl font-semibold text-white">{p.title}</h3>
                      <p className="text-xs text-white/50 mt-0.5">{p.category}</p>
                    </div>
                  </Link>
                );
              });
            })()}
          </div>
        </div>

        {/* bottom nav links */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-16 pt-10 border-t border-white/[0.06] flex items-center justify-between">
          <Link
            to="/work"
            className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to all projects</span>
          </Link>

          <Link
            to="/work"
            className="flex items-center gap-3 text-white/50 hover:text-indigo-400 transition-colors group"
          >
            <span className="text-sm">View more work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <CtaSection />
    </div>
  );
}
