import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import { getProjectBySlug } from '../../lib/sanity/api';
import type { SanityProject } from '../../lib/sanity/types';
import CtaSection from '../../home/ctaSection/CtaSection';
import WireframeSection from './WireframeSection';
import DesignProgressionTimeline from './DesignProgressionTimeline';

// ─── sidebar meta row ──────────────────────────────────────────────────────
function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4 border-b border-white/[0.08]">
      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</p>
      <p className="text-sm text-white/80 leading-relaxed">{value}</p>
    </div>
  );
}

export default function ProjectDetailPageSanity() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<SanityProject | null>(null);
  const [loading, setLoading] = useState(true);

  // ── fetch project data ──────────────────────────────────────────────
  useEffect(() => {
    async function fetchProject() {
      if (!slug) return;
      
      try {
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProject();
  }, [slug]);

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

  // ── loading state ──────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/50">Loading project...</p>
        </div>
      </div>
    );
  }

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

  // Helper to determine which type-specific fields to show
  const isBranding = project._type === 'brandingProject';
  const isDesign = project._type === 'websiteDesignProject';
  const isDevelopment = project._type === 'websiteDevelopmentProject';
  const isSEO = project._type === 'seoProject';

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
              {project.functionality && (
                <MetaRow label="Functionality" value={project.functionality} />
              )}
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
              src={project.heroImage}
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
          SECTION 2  –  VIDEO SHOWCASE  (Gumlet embed on white background)
          ══════════════════════════════════════════════════════════════════════ */}
      {project.videoUrl && (
        <section className="relative bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

            {/* section label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[2px] bg-indigo-500" />
              <span className="text-xs font-medium tracking-widest uppercase text-black/40">
                Project Showcase
              </span>
            </div>

            {/* video container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="relative w-full rounded-sm overflow-hidden shadow-2xl shadow-black/10"
              style={{ aspectRatio: '16/9' }}
            >
              <iframe
                loading="lazy"
                title="Gumlet video player"
                src={`${project.videoUrl}?autoplay=true&loop=true&muted=true&controls=false`}
                style={{
                  border: 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                }}
                referrerPolicy="origin"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </motion.div>

            {/* optional caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-center text-xs uppercase tracking-widest text-black/30"
            >
              Watch the full project walkthrough
            </motion.p>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3  –  DESIGN PROGRESSION TIMELINE (Design Projects Only)
          ══════════════════════════════════════════════════════════════════════ */}
      {isDesign && project.designProgression && project.designProgression.length > 0 && (
        <DesignProgressionTimeline stages={project.designProgression} />
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4  –  WIREFRAME EVOLUTION (Design Projects Only)
          ══════════════════════════════════════════════════════════════════════ */}
      {isDesign && project.wireframes && project.wireframes.length > 0 && (
        <WireframeSection steps={project.wireframes} />
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5  –  CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <CtaSection />
    </div>
  );
}
