import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const label = labelRef.current;
    const text = textRef.current;

    if (!section || !label || !text) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.set(section, { y: '100%', opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(section, {
            y: (1 - progress) * 100 + '%',
            opacity: progress,
          });
        },
      });

      // Text reveal animation
      gsap.fromTo(
        label,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        text,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#f3f4f6] text-black flex items-center z-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-32">
        <span
          ref={labelRef}
          className="label text-black/50 block mb-8"
        >
          Manifesto
        </span>

        <p
          ref={textRef}
          className="heading-md font-normal leading-relaxed max-w-4xl"
        >
          For me, design means aesthetics, clean solutions, and attention to UX.
          Create fast. On time. On brief. Bring ideas and adjustments grounded in
          design principles. Typography and animation are my key tools to bring
          interfaces alive. Building my own projects and open to new collaborations.
        </p>

        <div className="mt-16 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-black/50">Creative Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
