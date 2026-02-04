import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ImpactSection.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: 'Marketing costs',
    value: '-87%',
    trend: 'down',
    chart: 'bar',
  },
  {
    label: 'Impressions',
    value: '+360%',
    trend: 'up',
    chart: 'line',
  },
  {
    label: 'NET sales value',
    value: '+256%',
    trend: 'up',
    chart: 'area',
  },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cards.children,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate numbers
      const numberElements = cards.querySelectorAll('.stat-value');
      numberElements.forEach((el) => {
        const value = el.textContent || '';
        const isNegative = value.startsWith('-');

        gsap.fromTo(
          el,
          { textContent: isNegative ? '-0%' : '+0%' },
          {
            textContent: value,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-32 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <h2 ref={headingRef} className="heading-lg mb-16">
          Impact we made
          <br />
          <span className="text-white/50">in numbers.</span>
        </h2>

        {/* Stats grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900/50 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Label */}
              <p className="text-sm text-white/50 mb-4">{stat.label}</p>

              {/* Value */}
              <p
                className={`stat-value text-4xl sm:text-5xl font-bold mb-6 ${
                  stat.trend === 'up' ? 'text-indigo-500' : 'text-emerald-500'
                }`}
              >
                {stat.value}
              </p>

              {/* Chart visualization */}
              <div className="h-24 flex items-end gap-1">
                {stat.chart === 'bar' && (
                  <>
                    {[40, 60, 45, 80, 55, 70, 35, 50, 65, 30].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white/10 rounded-t-sm transition-all duration-500 group-hover:bg-white/20"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </>
                )}
                {stat.chart === 'line' && (
                  <svg
                    viewBox="0 0 100 40"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,35 Q10,30 20,32 T40,25 T60,20 T80,15 T100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-indigo-500"
                    />
                    <path
                      d="M0,35 Q10,30 20,32 T40,25 T60,20 T80,15 T100,5 L100,40 L0,40 Z"
                      fill="currentColor"
                      className="text-indigo-500/20"
                    />
                  </svg>
                )}
                {stat.chart === 'area' && (
                  <svg
                    viewBox="0 0 100 40"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,30 Q20,28 40,20 T80,10 T100,5 L100,40 L0,40 Z"
                      fill="currentColor"
                      className="text-emerald-500/30"
                    />
                    <path
                      d="M0,30 Q20,28 40,20 T80,10 T100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-emerald-500"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
