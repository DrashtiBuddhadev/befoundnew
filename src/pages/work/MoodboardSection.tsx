import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Moodboard } from './projectsData';

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: Moodboard['images'];
  startIndex: number;
  onClose: () => void;
}) {
  const [active, setActive] = useState(startIndex);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setActive((a) => (a - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((a) => (a + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    const el = thumbsRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
        onClick={onClose}
      >
        {/* subtle radial glow — same one used in the project hero */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600, height: 600,
            top: '38%', left: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 65%)',
          }}
        />

        {/* close — same square motif as site buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-5 right-5 z-10 w-10 h-10 border border-white/[0.15] flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </button>

        {/* prev */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/[0.12] flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* next */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/[0.12] flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* hero image */}
        <div
          className="relative z-10 flex-1 flex items-center justify-center px-14 py-6"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={images[active].src}
                alt={images[active].caption}
                className="max-h-[calc(100vh-200px)] max-w-[calc(100vw-140px)] object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* caption */}
        <motion.p
          key={`cap-${active}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.08 }}
          className="relative z-10 text-[11px] uppercase tracking-widest text-white/40 mb-4"
        >
          {images[active].caption}
        </motion.p>

        {/* thumbnail strip */}
        <div
          ref={thumbsRef}
          className="relative z-10 flex gap-2 px-6 pb-5 overflow-x-auto"
          onClick={(e) => e.stopPropagation()}
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((img, i) => {
            const isActive = i === active;
            return (
              <button key={i} onClick={() => setActive(i)} className="shrink-0 group">
                <div
                  className={`
                    relative w-16 h-10 sm:w-20 sm:h-12 overflow-hidden transition-all duration-300
                    ${isActive ? 'border border-indigo-500' : 'border border-white/[0.10] opacity-40 group-hover:opacity-60'}
                  `}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  {/* indigo sweep on active */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-indigo-400" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function MoodboardSection({ moodboard }: MoodboardSectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── section label ─────────────────────────────────────────── */}
        <div className="reveal-item flex items-center gap-3 mb-14">
          <div className="w-8 h-[2px] bg-indigo-500" />
          <span className="text-xs font-medium tracking-widest uppercase text-white/40">
            Moodboard
          </span>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ROW 1 — COLOUR PALETTE
            Thin tall swatches in a horizontal strip with dividers.
            Matches the site's minimal, editorial tone.
            ══════════════════════════════════════════════════════════════ */}
        <div className="reveal-item mb-16">
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-5">
            Colour Palette
          </p>

          <div className="flex">
            {moodboard.palette.map((swatch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="group flex-1 relative"
              >
                {/* tall swatch block */}
                <div
                  className="relative h-28 sm:h-36 border-r border-white/[0.06] last:border-r-0 transition-all duration-400 group-hover:h-32 sm:group-hover:h-40"
                  style={{ backgroundColor: swatch.color }}
                >
                  {/* indigo line at bottom — reveals on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-500" />
                </div>

                {/* hex + label below — slides down slightly on hover */}
                <div className="pt-3 pb-1 text-center">
                  <p className="text-[9px] font-mono text-white/40 tracking-wider">
                    {swatch.color}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mt-0.5">
                    {swatch.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="reveal-item h-[1px] bg-white/[0.06] mb-0" />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MOCKUPS & DESIGN ASSETS — Full Width Carousel with White BG
          ══════════════════════════════════════════════════════════════ */}
      <div className="reveal-item bg-white py-16 md:py-20 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-8 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-black/40">
            Mockups & Design Assets
          </p>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/40 hover:border-black/30 hover:text-black hover:bg-black/5 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/40 hover:border-black/30 hover:text-black hover:bg-black/5 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrolling container */}
        <style>{`
          .mockups-scroll::-webkit-scrollbar {
            display: none;
          }
          .mockups-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div ref={scrollContainerRef} className="mockups-scroll overflow-x-auto overflow-y-hidden pb-4">
          <div className="flex gap-6 pl-6 pr-6 sm:pl-12 sm:pr-12 lg:pl-20 lg:pr-20">
            {moodboard.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[35vw]"
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative overflow-hidden block w-full cursor-pointer"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                  {/* center "View image" text */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium tracking-wide">
                      View image
                    </span>
                  </div>

                  {/* indigo bottom sweep — always present */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-indigo-400" />
                </button>

                {/* caption below image */}
                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-widest text-black/40">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── lightbox ──────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={moodboard.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}

interface MoodboardSectionProps {
  moodboard: Moodboard;
}
