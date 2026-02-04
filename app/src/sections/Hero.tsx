import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const buttons = buttonsRef.current;
    const bento = bentoRef.current;

    if (!section || !heading || !buttons || !bento) return;

    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heading.querySelectorAll('.line'),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      )
        .fromTo(
          buttons.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          '-=0.5'
        )
        .fromTo(
          bento.children,
          { y: 60, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
          '-=0.4'
        );

      // Scroll-triggered exit animation
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.5) {
            const exitProgress = (progress - 0.5) * 2;
            gsap.set(section, {
              y: -exitProgress * 100 + 'vh',
              opacity: 1 - exitProgress * 0.8,
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
      className="relative min-h-screen w-full bg-black text-white overflow-hidden z-10"
    >
      {/* Background with subtle gradient and floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-950" />
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          {/* Header text */}
          <div className="pt-12 pb-12">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
            >
              <span className="line block">Built for brands that want to</span>
              <span className="line block">
                <span className="text-indigo-500 font-normal">grow</span> instead of guess
              </span>
            </h1>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex items-center gap-4 mt-10">
              <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white" />
                </div>
                <span className="text-sm font-medium">Plan a call</span>
              </button>
              <span className="text-white/40 text-sm">or</span>
              <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white" />
                </div>
                <span className="text-sm font-medium">View portfolio</span>
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div
            ref={bentoRef}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[500px]"
          >
            {/* Card 01 - Large left card */}
            <div className="md:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-white/5 group">
              <div className="absolute inset-0">
                <img
                  src="/images/bento-speed.png"
                  alt="Speed"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-between p-6">
                <span className="text-indigo-500 text-sm font-medium">01</span>
                <div>
                  <p className="text-2xl sm:text-3xl font-light mb-2">
                    One team.
                  </p>
                  <p className="text-2xl sm:text-3xl font-light italic text-white/80">
                    Built for speed.
                  </p>
                  <p className="text-sm text-white/50 mt-4 max-w-xs">
                    No juggling freelancers.
                    <br />
                    No bloated agencies.
                  </p>
                  <p className="text-sm text-white/70 mt-4">
                    We cover strategy, content, tech and automation in one go.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 02 - Strategy */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-white/5 group">
              <div className="absolute inset-0">
                <img
                  src="/images/bento-strategy.png"
                  alt="Strategy"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-between p-6 min-h-[200px]">
                <span className="text-indigo-500 text-sm font-medium">02</span>
                <div>
                  <p className="text-xl font-light italic mb-2">Strategy</p>
                  <p className="text-xl font-light">before screens</p>
                  <p className="text-sm text-white/50 mt-3 max-w-xs">
                    We start with what your audience's needs and build a site that moves them to action.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 03 - Built to think */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-white/5 group">
              <div className="absolute inset-0">
                <img
                  src="/images/bento-think.png"
                  alt="Think"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-between p-6 min-h-[200px]">
                <span className="text-indigo-500 text-sm font-medium">03</span>
                <div>
                  <p className="text-xl font-light">
                    Built to <span className="italic">think</span>
                  </p>
                  <p className="text-sm text-white/50 mt-3 max-w-xs">
                    Smart and intergrated systems that scale <span className="italic">with you.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 04 - Our formula */}
            <div className="md:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-white/5 group">
              <div className="absolute inset-0">
                <img
                  src="/images/bento-formula.png"
                  alt="Formula"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 min-h-[200px]">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Our formula</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Play className="w-2 h-2 fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
