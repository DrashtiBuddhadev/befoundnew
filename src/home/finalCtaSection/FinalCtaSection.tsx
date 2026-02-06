import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './FinalCtaSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const button = buttonRef.current;

    if (!section || !text || !button) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          // Entrance (0-50%)
          if (progress <= 0.5) {
            const entranceProgress = progress * 2;
            gsap.set(text, {
              scale: 0.8 + entranceProgress * 0.2,
              opacity: entranceProgress,
            });
            gsap.set(button, {
              y: 30 * (1 - entranceProgress),
              opacity: entranceProgress,
            });
          }
          // Settle (50%)
          else if (progress <= 0.5) {
            gsap.set(text, { scale: 1, opacity: 1 });
            gsap.set(button, { y: 0, opacity: 1 });
          }
          // Exit (50-100%)
          else {
            const exitProgress = (progress - 0.5) * 2;
            gsap.set(section, {
              y: -exitProgress * 100 + 'vh',
              opacity: 1 - exitProgress * 0.5,
            });
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white text-black flex flex-col items-center justify-center z-70"
    >
      <div className="text-center px-6">
        <h2
          ref={textRef}
          className="heading-xl mb-12"
          style={{ transform: 'scale(0.8)', opacity: 0 }}
        >
          So, are you ready to{' '}
          <span className="relative inline-block">
            Stand
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-500/30 -z-10" />
          </span>{' '}
          out?
        </h2>

        <button
          ref={buttonRef}
          className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-colors group"
          style={{ transform: 'translateY(30px)', opacity: 0 }}
        >
          Let's talk
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-black rounded-full" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-indigo-500 rounded-full" />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-neutral-400 rounded-full" />
      <div className="absolute bottom-20 right-20 w-4 h-4 border border-black/20 rounded-full" />
    </section>
  );
}
