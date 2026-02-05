import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ExperienceSection.css';

gsap.registerPlugin(ScrollTrigger);

// SVG Graphic Components with hover animations
const DiagonalLinesGraphic = ({ dark = true }: { dark?: boolean }) => {
  const strokeColor = dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)';
  const hoverColor = dark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.3)';
  return (
    <svg viewBox="0 0 160 160" className="svg-graphic svg-diagonal w-32 h-32 md:w-40 md:h-40">
      <defs>
        <clipPath id="triangle-clip-1">
          <polygon points="160,0 160,160 0,160" />
        </clipPath>
      </defs>
      <g className="diagonal-lines" clipPath="url(#triangle-clip-1)" stroke={strokeColor} strokeWidth="1.5" fill="none" style={{ '--hover-stroke': hoverColor } as React.CSSProperties}>
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1={-40 + i * 12}
            y1="0"
            x2={i * 12 + 40}
            y2="200"
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </g>
    </svg>
  );
};

const HexagonLinesGraphic = ({ dark = true }: { dark?: boolean }) => {
  const strokeColor = dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)';
  const hoverColor = dark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.3)';
  return (
    <svg viewBox="0 0 160 160" className="svg-graphic svg-hexagon w-32 h-32 md:w-40 md:h-40">
      <defs>
        <clipPath id="hex-clip">
          <polygon points="80,0 160,40 160,120 80,160 0,120 0,40" />
        </clipPath>
      </defs>
      <g className="hex-lines" clipPath="url(#hex-clip)" stroke={strokeColor} strokeWidth="1.5" fill="none" style={{ '--hover-stroke': hoverColor } as React.CSSProperties}>
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * 12}
            x2="160"
            y2={i * 12}
            style={{ animationDelay: `${i * 0.04}s` }}
          />
        ))}
      </g>
      <polygon
        className="hex-outline"
        points="80,0 160,40 160,120 80,160 0,120 0,40"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        style={{ '--hover-stroke': hoverColor } as React.CSSProperties}
      />
    </svg>
  );
};

const SunburstGraphic = ({ dark = true }: { dark?: boolean }) => {
  const strokeColor = dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)';
  const hoverColor = dark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.3)';
  return (
    <svg viewBox="0 0 160 160" className="svg-graphic svg-sunburst w-32 h-32 md:w-40 md:h-40">
      <g className="sunburst-rays" stroke={strokeColor} strokeWidth="1.5" fill="none" style={{ '--hover-stroke': hoverColor } as React.CSSProperties}>
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x2 = 80 + Math.cos(angle) * 75;
          const y2 = 80 + Math.sin(angle) * 75;
          return <line key={i} x1="80" y1="80" x2={x2} y2={y2} />;
        })}
      </g>
      <circle className="sunburst-circle inner" cx="80" cy="80" r="30" fill="none" stroke={strokeColor} strokeWidth="1.5" style={{ '--hover-stroke': hoverColor } as React.CSSProperties} />
      <circle className="sunburst-circle outer" cx="80" cy="80" r="60" fill="none" stroke={strokeColor} strokeWidth="1.5" style={{ '--hover-stroke': hoverColor } as React.CSSProperties} />
    </svg>
  );
};

const TriangleGraphic = ({ dark = true }: { dark?: boolean }) => {
  const strokeColor = dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)';
  const hoverColor = dark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.3)';
  return (
    <svg viewBox="0 0 180 180" className="svg-graphic svg-triangle w-36 h-36 md:w-44 md:h-44">
      <g fill="none" stroke={strokeColor} strokeWidth="2" style={{ '--hover-stroke': hoverColor } as React.CSSProperties}>
        <polygon className="triangle-1" points="90,20 160,150 20,150" />
        <polygon className="triangle-2" points="90,40 140,130 40,130" />
        <polygon className="triangle-3" points="90,55 120,115 60,115" />
      </g>
    </svg>
  );
};

const processSteps = [
  {
    number: '01',
    title: 'Intent first.',
    subtitle: 'Impact next.',
    description: 'Before pixels or platforms, we seek clarity. We gather requirements, understand your users, and define what success looks like, creatively and commercially.',
    footnote: 'Strategy > assumptions. Always.',
    bgColor: 'bg-[#0a0a0a]',
    textColor: 'text-white',
    accentColor: 'text-indigo-400',
  },
  {
    number: '02',
    title: 'Minimal by choice.',
    subtitle: 'Powerful by design.',
    description: 'We design experiences that feel natural, intuitive, and human. Your brand shows up with precision and not noise, so visitors glide from interest to action.',
    footnote: 'Less clutter. More clarity.',
    bgColor: 'bg-[#f5f5f5]',
    textColor: 'text-black',
    accentColor: 'text-indigo-500',
  },
  {
    number: '03',
    title: 'Built beautifully.',
    subtitle: 'Built correctly.',
    description: 'We engineer with care — from CMS to checkout. Fast, secure, scalable, and future-proof. Tech should enable ideas, not complicate them.',
    footnote: 'Built for today. Ready for tomorrow.',
    bgColor: 'bg-[#0a0a0a]',
    textColor: 'text-white',
    accentColor: 'text-indigo-400',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cardsContainer = cardsRef.current;
    const banner = bannerRef.current;

    if (!section || !header || !cardsContainer || !banner) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.querySelectorAll('.animate-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsContainer.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsContainer,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Banner animation
      gsap.fromTo(
        banner,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: banner,
            start: 'top 85%',
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
      className="process-section relative w-full bg-black text-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <div className="animate-item flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-white/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-white/40">
              Our Process
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="animate-item text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Your brand has a story.<br />
              <span className="text-white/50">We make sure it's seen, felt, heard, found and remembered.</span>
            </h2>
            <div className="animate-item flex items-end">
              <p className="text-base lg:text-lg text-white/50 leading-relaxed">
                We design websites, web-applications and build brands and create moments that turn attention into action. From first impression to lasting impact, we build clarity into every click, scroll, and search.
              </p>
            </div>
          </div>
        </div>

        {/* Process Cards - 3 columns */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5"
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`process-card group relative ${step.bgColor} ${step.textColor} overflow-hidden min-h-[380px] md:min-h-[420px] flex flex-col border ${step.bgColor === 'bg-[#0a0a0a]' ? 'border-white/10' : 'border-black/10'}`}
            >
              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-medium mb-1 leading-tight">
                  {step.title}
                </h3>
                <h3 className={`text-xl md:text-2xl font-medium mb-4 ${step.accentColor}`}>
                  {step.subtitle}
                </h3>
                <p className={`text-sm leading-relaxed ${step.bgColor === 'bg-[#0a0a0a]' ? 'text-white/60' : 'text-black/60'}`}>
                  {step.description}
                </p>
              </div>

              {/* Graphic Area */}
              <div className="relative h-32 md:h-40 flex items-end justify-end pr-4 md:pr-6">
                <div className={`${step.bgColor === 'bg-[#0a0a0a]' ? 'opacity-60' : 'opacity-40'} group-hover:opacity-90 transition-opacity duration-500`}>
                  {index === 0 && <DiagonalLinesGraphic dark={step.bgColor === 'bg-[#0a0a0a]'} />}
                  {index === 1 && <HexagonLinesGraphic dark={step.bgColor === 'bg-[#0a0a0a]'} />}
                  {index === 2 && <SunburstGraphic dark={step.bgColor === 'bg-[#0a0a0a]'} />}
                </div>
              </div>

              {/* Footer */}
              <div className={`px-6 md:px-8 pb-6 md:pb-8 flex items-end justify-between`}>
                <span className={`text-xs ${step.bgColor === 'bg-[#0a0a0a]' ? 'text-white/30' : 'text-black/30'}`}>
                  {step.footnote}
                </span>
                <span className={`text-sm font-mono ${step.bgColor === 'bg-[#0a0a0a]' ? 'text-white/20' : 'text-black/20'}`}>
                  {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner - Full Width Card */}
        <div
          ref={bannerRef}
          className="process-card group relative bg-[#f5f5f5] text-black overflow-hidden border border-black/10"
        >
          <div className="p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl md:text-3xl font-medium mb-2 leading-tight">
                Make it matter.
              </h3>
              <p className="text-lg md:text-xl text-indigo-500 font-medium mb-4">
                SEO / Visibility / Growth
              </p>
              <p className="text-sm md:text-base text-black/60 leading-relaxed max-w-2xl mb-4">
                Being exceptional is pointless if no one finds you. We optimize content, performance, and structure so you show up where users are already searching.
              </p>
              <span className="text-xs text-black/40">
                Be seen. Be chosen. Be remembered.
              </span>
            </div>

            {/* Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                <TriangleGraphic dark={false} />
              </div>
            </div>
          </div>

          {/* Number */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-sm font-mono text-black/20">
            04
          </div>
        </div>
      </div>
    </section>
  );
}
