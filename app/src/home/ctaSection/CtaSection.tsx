import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import './CtaSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;

    if (!section || !line1 || !line2) return;

    const ctx = gsap.context(() => {
      // Line 1 animation
      gsap.fromTo(
        line1,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Line 2 animation with delay
      gsap.fromTo(
        line2,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section relative w-full bg-[#fafafa] overflow-hidden"
    >
      {/* Main CTA Area */}
      <Link
        to="/contact"
        className="cta-link block relative py-32 md:py-40 lg:py-48 group cursor-pointer"
      >
        {/* Hover Background */}
        <div className="absolute inset-0 bg-[#0a0a0a] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center">
            {/* Line 1 */}
            <div ref={line1Ref} className="overflow-hidden mb-2 md:mb-4">
              <h2 className="cta-text text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[100px] font-light tracking-[-0.02em] leading-[1.1] text-black group-hover:text-white transition-colors duration-500">
                So, are you <span className="text-black/40 group-hover:text-white/40 transition-colors duration-500">'ready'</span> to
              </h2>
            </div>

            {/* Line 2 */}
            <div ref={line2Ref} className="overflow-hidden">
              <h2 className="cta-text text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[100px] font-light tracking-[-0.02em] leading-[1.1]">
                <span className="text-indigo-600 group-hover:text-indigo-400 transition-colors duration-500">Stand out</span>
                <span className="text-black group-hover:text-white transition-colors duration-500">?</span>
              </h2>
            </div>

            {/* Hover CTA Text */}
            <div className="mt-12 md:mt-16 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
              <span className="inline-flex items-center gap-3 text-white/80 text-lg md:text-xl">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-black/10 group-hover:border-white/20 transition-colors duration-500" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-black/10 group-hover:border-white/20 transition-colors duration-500" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-black/10 group-hover:border-white/20 transition-colors duration-500" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-black/10 group-hover:border-white/20 transition-colors duration-500" />
      </Link>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />
    </section>
  );
}
