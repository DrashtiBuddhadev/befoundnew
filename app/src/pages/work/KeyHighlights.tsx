import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Highlight } from './projectsData';
import { cn } from '@/lib/utils';

interface KeyHighlightsProps {
  highlights: Highlight[];
  autoPlayInterval?: number;
}

export default function KeyHighlights({
  highlights,
  autoPlayInterval = 4000,
}: KeyHighlightsProps) {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef             = useRef(0); // mutable counter — avoids nested setState

  // ── auto-play ticker ──────────────────────────────────────────────
  useEffect(() => {
    const tick = 100; // ms per tick
    const step = (100 / autoPlayInterval) * tick;

    const timer = setInterval(() => {
      progressRef.current += step;
      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setCurrent((c) => (c + 1) % highlights.length);
        setProgress(0);
      } else {
        setProgress(progressRef.current);
      }
    }, tick);

    return () => clearInterval(timer);
  }, [autoPlayInterval, highlights.length]);

  // ── manual select resets progress ─────────────────────────────────
  const select = (i: number) => {
    progressRef.current = 0;
    setCurrent(i);
    setProgress(0);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* section label */}
        <div className="reveal-item flex items-center gap-3 mb-14">
          <div className="w-8 h-[2px] bg-indigo-500" />
          <span className="text-xs font-medium tracking-widest uppercase text-white/40">
            Key Highlights
          </span>
        </div>

        {/* two-col: steps left | image right */}
        <div className="reveal-item grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* ── LEFT – step list ─────────────────────────────────── */}
          <div className="space-y-0">
            {highlights.map((h, i) => {
              const isActive = i === current;
              return (
                <div key={i}>
                  {/* clickable row */}
                  <button
                    onClick={() => select(i)}
                    className="w-full text-left flex items-start gap-5 py-5 group"
                  >
                    {/* square step indicator */}
                    <motion.div
                      animate={{
                        backgroundColor: isActive ? 'rgb(99 102 241)' : 'transparent',
                        borderColor:     isActive ? 'rgb(99 102 241)' : 'rgba(255,255,255,0.15)',
                      }}
                      transition={{ duration: 0.35 }}
                      className="mt-0.5 w-9 h-9 shrink-0 border flex items-center justify-center"
                    >
                      <span
                        className={cn(
                          'text-xs font-mono font-bold transition-colors duration-350',
                          isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                        )}
                      >
                        {h.step}
                      </span>
                    </motion.div>

                    {/* text */}
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        animate={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.45)' }}
                        transition={{ duration: 0.35 }}
                        className="text-lg font-semibold leading-snug"
                      >
                        {h.title}
                      </motion.h3>

                      {/* content slides down only when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            key="content"
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="text-sm text-white/45 leading-relaxed overflow-hidden"
                          >
                            {h.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>

                  {/* progress bar — only under the active row */}
                  <div className="ml-14 h-[2px] bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-500"
                      style={{ width: `${isActive ? progress : 0}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT – image panel ──────────────────────────────── */}
          <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              {highlights.map((h, i) =>
                i === current ? (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full h-full object-cover"
                    />
                    {/* bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
