import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './PhilosophySection.css';

gsap.registerPlugin(ScrollTrigger);

const workImages = [
  '/images/work/Kaizen Dezain Mockup.png',
  '/images/work/Muse & Masterpiece Mockup.png',
  '/images/work/NW9 Design System Mockup.png',
  '/images/work/NW9 Development Services Mockup.png',
  '/images/work/Weston Dental Mockup.png',
  '/images/work/mockup.png',
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    const pillars = pillarsRef.current;

    if (!section || !top || !bottom || !pillars) return;

    const ctx = gsap.context(() => {
      // Top section animation
      gsap.fromTo(
        top.querySelectorAll('.animate-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: top,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Bottom section animation
      gsap.fromTo(
        bottom.querySelectorAll('.animate-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bottom,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Pillars animation - dramatic stagger one by one
      gsap.fromTo(
        pillars.querySelectorAll('.pillar-card'),
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillars,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animated words in bottom section
      const words = bottom.querySelectorAll('.highlight-word');
      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          { backgroundSize: '0% 100%' },
          {
            backgroundSize: '100% 100%',
            duration: 0.6,
            delay: i * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: word,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Black card entrance
      const blackCard = bottom.querySelector('.black-card');
      if (blackCard) {
        gsap.fromTo(
          blackCard,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: blackCard,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % workImages.length);
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="philosophy-section relative w-full bg-[#f5f5f5] text-black"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">

        {/* Top Section - Hero Statement */}
        <div ref={topRef} className="mb-20 md:mb-32">
          <div className="animate-item flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-xs font-medium tracking-widest uppercase text-black/50">
              Our Philosophy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="animate-item text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-8">
                Design is a <span className="text-indigo-500">strategic advantage</span> — not a luxury.
              </h2>
              <p className="animate-item text-lg sm:text-xl text-black/70 leading-relaxed max-w-2xl">
                Aesthetics, clarity, and user experience shape how customers engage, decide, and convert. Clean interfaces reduce friction, improve trust, and make digital products feel effortless.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-end">
              <div className="animate-item w-full p-6 md:p-8 bg-white border border-black/5 shadow-sm">
                <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                  Typography, layout, and visual hierarchy aren't styling — they are <span className="font-medium text-black">tools that direct attention</span>, communicate value, and guide behavior.
                </p>
                <div className="mt-6 pt-6 border-t border-black/10 flex items-center justify-between">
                  <span className="text-sm text-black/50">When executed well</span>
                  <ArrowRight className="w-4 h-4 text-black/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid - New Design */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-12">

          {/* Card 01 - Navigate / Shape */}
          <div className="pillar-card group bg-white overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] border border-black/5">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-black/5">
              <h3 className="text-xl md:text-2xl font-medium">Navigate</h3>
              <span className="text-xs text-black/40 font-mono">[ 1. design ]</span>
            </div>

            {/* Icon */}
            <div className="flex-1 flex items-center justify-center p-8">
              <svg className="grid-icon w-20 h-20" viewBox="0 0 64 64" aria-hidden="true">
                <circle className="c-1" cx="20" cy="20" r="12" fill="#d4d4d4" />
                <circle className="c-2" cx="44" cy="20" r="12" fill="#282828" />
                <circle className="c-3" cx="20" cy="44" r="12" fill="#d4d4d4" />
                <circle className="c-4" cx="44" cy="44" r="12" fill="#282828" />
              </svg>
            </div>

            {/* Bottom */}
            <div className="p-5 mt-auto">
              <div className="flex items-end justify-between gap-4">
                <p className="text-sm text-black/70 leading-relaxed max-w-[240px]">
                  Brands become easier to explore, understand, and interact with through intentional design.
                </p>
                <div className="arrow-btn flex-shrink-0 w-10 h-10 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Marquee */}
              <div className="marquee-container mt-5 pt-4 border-t border-black/5 overflow-hidden">
                <div className="marquee-content">
                  <span>strategy</span>
                  <span>webdesign</span>
                  <span>branding</span>
                  <span>visual design</span>
                  <span>strategy</span>
                  <span>webdesign</span>
                  <span>branding</span>
                  <span>visual design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 - Understand / Build */}
          <div className="pillar-card group bg-white overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] border border-black/5">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-black/5">
              <h3 className="text-xl md:text-2xl font-medium">Understand</h3>
              <span className="text-xs text-black/40 font-mono">[ 2. development ]</span>
            </div>

            {/* Icon */}
            <div className="flex-1 flex items-center justify-center p-8">
              <svg className="bars-icon w-20 h-12" viewBox="0 0 70 45" aria-hidden="true">
                <rect className="bar-1" x="0" y="0" width="4" height="45" fill="#d4d4d4" />
                <rect className="bar-2" x="11" y="0" width="4" height="45" fill="#d4d4d4" />
                <rect className="bar-3" x="22" y="0" width="4" height="45" fill="#d4d4d4" />
                <rect className="bar-4" x="33" y="0" width="4" height="45" fill="#282828" />
                <rect className="bar-5" x="44" y="0" width="4" height="45" fill="#282828" />
                <rect className="bar-6" x="55" y="0" width="4" height="45" fill="#d4d4d4" />
                <rect className="bar-7" x="66" y="0" width="4" height="45" fill="#d4d4d4" />
              </svg>
            </div>

            {/* Bottom */}
            <div className="p-5 mt-auto">
              <div className="flex items-end justify-between gap-4">
                <p className="text-sm text-black/70 leading-relaxed max-w-[240px]">
                  Clear visual hierarchy communicates value and meaning without cognitive overload.
                </p>
                <div className="arrow-btn flex-shrink-0 w-10 h-10 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Marquee */}
              <div className="marquee-container mt-5 pt-4 border-t border-black/5 overflow-hidden">
                <div className="marquee-content">
                  <span>development</span>
                  <span>gsap</span>
                  <span>react</span>
                  <span>interaction</span>
                  <span>development</span>
                  <span>gsap</span>
                  <span>react</span>
                  <span>interaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 - Remember / Accelerate */}
          <div className="pillar-card group bg-white overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] border border-black/5">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-black/5">
              <h3 className="text-xl md:text-2xl font-medium">Remember</h3>
              <span className="text-xs text-black/40 font-mono">[ 3. seo ]</span>
            </div>

            {/* Icon */}
            <div className="flex-1 flex items-center justify-center p-8">
              <svg className="circle-icon w-20 h-20" viewBox="0 0 64 64" aria-hidden="true">
                <circle className="bg-ring" cx="32" cy="32" r="26" fill="none" stroke="#d4d4d4" strokeWidth="3" />
                <circle className="loader-ring" cx="32" cy="32" r="26" fill="none" stroke="#282828" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bottom */}
            <div className="p-5 mt-auto">
              <div className="flex items-end justify-between gap-4">
                <p className="text-sm text-black/70 leading-relaxed max-w-[240px]">
                  Memorable experiences create lasting impressions that drive preference and loyalty.
                </p>
                <div className="arrow-btn flex-shrink-0 w-10 h-10 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Marquee */}
              <div className="marquee-container mt-5 pt-4 border-t border-black/5 overflow-hidden">
                <div className="marquee-content">
                  <span>seo</span>
                  <span>visibility</span>
                  <span>rankings</span>
                  <span>organic growth</span>
                  <span>seo</span>
                  <span>visibility</span>
                  <span>rankings</span>
                  <span>organic growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - What is BeFound - Full Width */}
      </div>

      {/* BeFound Section - Full Bleed */}
      <div ref={bottomRef} className="befound-section relative w-full bg-[#0a0a0a] overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1800px] mx-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 sm:px-12 lg:px-20 py-8 border-b border-white/5">
            <span className="text-xs font-mono tracking-widest text-white/30 uppercase">
              What is BeFound?
            </span>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/30">{String(activeImageIndex + 1).padStart(2, '0')} / {String(workImages.length).padStart(2, '0')}</span>
              <div className="flex gap-1">
                {workImages.map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-[2px] rounded-full transition-all duration-500 ${
                      i === activeImageIndex ? 'bg-white' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[80vh]">

            {/* Left - Content */}
            <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
              <div className="animate-item">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] text-white mb-10 tracking-tight">
                  Stay ahead.<br />
                  <span className="text-white/40">Stay relevant.</span><br />
                  <span className="text-indigo-400">Stay found.</span>
                </h3>
              </div>

              <div className="animate-item mb-12">
                <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-md">
                  We combine design, technology, and strategy to build digital experiences that make brands impossible to ignore.
                </p>
              </div>

              <div className="animate-item flex items-center gap-6">
                <a
                  href="#about"
                  className="group inline-flex items-center gap-3 text-white text-sm font-medium"
                >
                  <span className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:text-black transition-colors" />
                  </span>
                  <span className="group-hover:text-indigo-400 transition-colors">Explore our work</span>
                </a>
              </div>
            </div>

            {/* Right - Mockup Showcase */}
            <div className="lg:col-span-7 relative flex items-center justify-center py-12 lg:py-0">
              {/* Mockup Container */}
              <div className="mockup-showcase relative w-full h-full flex items-center justify-center px-6 lg:px-0">
                {workImages.map((img, index) => (
                  <div
                    key={index}
                    className={`mockup-slide absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                      index === activeImageIndex
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 translate-y-8'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Work mockup ${index + 1}`}
                      className="max-w-full max-h-[60vh] lg:max-h-[70vh] w-auto h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Floating accent */}
              <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16">
                <div className="text-right">
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Featured Work</p>
                  <p className="text-sm text-white/60 font-medium">Design & Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-t border-white/5">
            <div className="stat-block bg-[#0a0a0a] px-6 sm:px-12 py-8 group hover:bg-white/5 transition-colors">
              <p className="text-3xl lg:text-4xl font-light text-white mb-2 group-hover:text-indigo-400 transition-colors">30+</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Projects</p>
            </div>
            <div className="stat-block bg-[#0a0a0a] px-6 sm:px-12 py-8 group hover:bg-white/5 transition-colors">
              <p className="text-3xl lg:text-4xl font-light text-white mb-2 group-hover:text-indigo-400 transition-colors">20+</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Clients</p>
            </div>
            <div className="stat-block bg-[#0a0a0a] px-6 sm:px-12 py-8 group hover:bg-white/5 transition-colors">
              <p className="text-3xl lg:text-4xl font-light text-white mb-2 group-hover:text-indigo-400 transition-colors">100%</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Satisfaction</p>
            </div>
            <div className="stat-block bg-[#0a0a0a] px-6 sm:px-12 py-8 group hover:bg-white/5 transition-colors">
              <p className="text-3xl lg:text-4xl font-light text-white mb-2 group-hover:text-indigo-400 transition-colors">2025</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Est.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
