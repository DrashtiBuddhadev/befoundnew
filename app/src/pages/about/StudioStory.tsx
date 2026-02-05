import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StudioStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative bg-[#fafafa] py-32 md:py-48 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section label */}
        <motion.div
          style={{ opacity }}
          className="mb-20"
        >
          <span className="text-sm text-black/40 tracking-widest uppercase">Our Story</span>
        </motion.div>

        {/* Main content - Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left side - Large statement */}
          <motion.div
            style={{ y }}
            className="lg:col-span-7 lg:pr-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-black tracking-tight">
              Design shapes how people{' '}
              <span className="text-indigo-600">perceive</span> you,{' '}
              <span className="text-black/40">trust</span> you, and decide to{' '}
              <span className="italic font-serif">engage</span>.
            </h2>
          </motion.div>

          {/* Right side - Supporting text */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-lg text-black/60 leading-relaxed">
                When it's clear, intentional, and thoughtfully executed, it removes friction and builds confidence. When it isn't, even the strongest ideas struggle to land.
              </p>
              <p className="text-lg text-black/60 leading-relaxed">
                We work with founders, startups, and growing teams to design and build digital products that feel considered, perform reliably, and age well over time.
              </p>

              {/* Accent line */}
              <div className="pt-8">
                <div className="w-20 h-1 bg-indigo-500" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-32 lg:mt-48"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-black/80 leading-relaxed max-w-5xl">
            Our work lives at the intersection of{' '}
            <span className="text-indigo-600 font-medium">strategy</span>,{' '}
            <span className="text-indigo-600 font-medium">design</span>, and{' '}
            <span className="text-indigo-600 font-medium">technology</span>—where ideas become systems, and systems create outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
