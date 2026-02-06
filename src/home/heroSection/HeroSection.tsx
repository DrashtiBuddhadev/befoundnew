import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
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

      // No scroll effects - just entrance animations
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        /* Video Background - Optimized for clarity */
        .video-background {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        /* Feature card styles */
        .feature-card {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .feature-card-shine {
          position: absolute;
          inset: 0;
          z-index: 10;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.03) 45%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.03) 55%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .feature-card:hover .feature-card-shine {
          opacity: 1;
        }

        .feature-card-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .feature-grad {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, #0a0a0a 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }

        .feature-grad.larger {
          height: 80%;
        }

        .feature-card-content {
          position: relative;
          z-index: 5;
          height: 100%;
        }

        .featured-card-image {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .feature-card:hover .featured-card-image {
          animation: smoothZoom 2s ease-in-out infinite;
        }

        @keyframes smoothZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }

        .featured-card-image._2nd {
          width: 60%;
          object-position: right center;
        }

        .featured-card-image._2nd.fw {
          width: 70%;
          height: 100%;
          right: 0;
          top: 0;
          object-position: right bottom;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen w-full bg-black text-white overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-background absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 pt-32 pb-12">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
            {/* Header text */}
            <div className="pt-24 pb-12">
              <h1
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
              >
                <span className="line block">Designed to feel premium.</span>
                <span className="line block">
                  <span className="text-indigo-500 font-normal">Built to perform.</span>
                </span>
              </h1>

              {/* Buttons */}
              <div ref={buttonsRef} className="flex items-center gap-4 mt-10">
                <button className="flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 bg-white/10 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white" />
                  </div>
                  <span className="text-sm font-medium">Plan a call</span>
                </button>
                <span className="text-white/40 text-sm">or</span>
                <button className="flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 bg-white/10 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white" />
                  </div>
                  <span className="text-sm font-medium">View portfolio</span>
                </button>
              </div>
            </div>

            {/* Bento Grid - 2 rows × 3 columns */}
            <div
              ref={bentoRef}
              className="flex-1 grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto] md:grid-rows-2 gap-5"
            >
              {/* Card 01 - Column 1, Row 1-2 (spans 2 rows) */}
              <div className="md:row-span-2 feature-card border border-white/10 min-h-[320px] md:min-h-full">
                <div className="feature-card-shine" />
                <div className="feature-card-bg">
                  <img
                    src="/images/hero/card-01.jpg"
                    alt="Speed lines"
                    className="featured-card-image"
                  />
                  <div className="feature-grad" />
                </div>
                <div className="feature-card-content flex flex-col justify-between p-6">
                  <span className="text-indigo-400 text-sm font-medium">01</span>
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

              {/* Card 02 - Column 2-3, Row 1 (spans 2 columns) */}
              <div className="md:col-span-2 feature-card border border-white/10 min-h-[280px]">
                <div className="feature-card-shine" />
                <div className="feature-card-bg">
                  <img
                    src="/images/hero/card-02.jpg"
                    alt="Funnel layers"
                    className="featured-card-image _2nd"
                  />
                  <div className="feature-grad larger" />
                </div>
                <div className="feature-card-content flex flex-col p-6">
                  <span className="text-indigo-400 text-sm font-medium mb-auto">02</span>
                  <div>
                    <p className="text-xl font-light">
                      <span className="italic">Strategy</span> before
                    </p>
                    <p className="text-xl font-light">screens</p>
                    <p className="text-sm text-white/50 mt-3 max-w-[240px]">
                      We start with what your audience's needs and build a site that moves them to action.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 03 - Column 2, Row 2 */}
              <div className="feature-card border border-white/10 min-h-[240px]">
                <div className="feature-card-shine" />
                <div className="feature-card-bg">
                  <img
                    src="/images/hero/card-03.jpg"
                    alt="Bar chart"
                    className="featured-card-image _2nd"
                  />
                  <div className="feature-grad" />
                </div>
                <div className="feature-card-content flex flex-col p-6">
                  <span className="text-indigo-400 text-sm font-medium mb-auto">03</span>
                  <div>
                    <p className="text-xl font-light">
                      Built to <span className="italic">think</span>
                    </p>
                    <p className="text-sm text-white/50 mt-3 max-w-[180px]">
                      Smart and intergrated systems that scale <span className="italic">with you.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 04 - Column 3, Row 2 */}
              <div className="feature-card border border-white/10 min-h-[240px]">
                <div className="feature-card-shine" />
                <div className="feature-card-bg">
                  <img
                    src="/images/hero/card-04.jpg"
                    alt="Hand with tablet"
                    className="featured-card-image _2nd fw"
                  />
                  <div className="feature-grad" />
                </div>
                <div className="feature-card-content flex flex-col justify-between p-6">
                  <span className="text-indigo-400 text-sm font-medium">04</span>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Our formula</span>
                    <div className="w-8 h-8 bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
