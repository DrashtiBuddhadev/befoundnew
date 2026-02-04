import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (!section || !content || !image) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image parallax
      gsap.fromTo(
        image,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Subtle parallax on scroll
      gsap.to(image, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-32 z-60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <h2 className="heading-lg">
              Brand experience that's on point,
              <br />
              <span className="text-white/50">or smarter operations and savings?</span>
            </h2>

            <p className="body-lg text-white/70 max-w-lg">
              We don't just build websites—we create digital ecosystems that work
              tirelessly for your business. From seamless user experiences to
              automated workflows, every pixel serves a purpose.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-text">See our process</button>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 mb-4">Trusted by leading brands</p>
              <div className="flex items-center gap-6 opacity-50">
                {['Stripe', 'Notion', 'Figma', 'Vercel'].map((brand) => (
                  <span key={brand} className="text-sm font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/cta-devices.png"
                alt="Responsive design showcase"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
