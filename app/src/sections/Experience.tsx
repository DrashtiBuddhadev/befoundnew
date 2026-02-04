import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: '01',
    title: '5+ Years',
    subtitle: 'Experience',
    description: 'Bridging the gap between creative design and technical engineering.',
    image: '/images/exp-lines-dark.png',
    bgColor: 'bg-[#0a0a0a]',
    textColor: 'text-white',
    borderColor: 'border-white/10',
  },
  {
    number: '02',
    title: '1:1',
    subtitle: 'Design Match',
    description: 'Pixel-perfect execution. No developer interpretation.',
    image: '/images/exp-lines-light.png',
    bgColor: 'bg-[#f0f0f0]',
    textColor: 'text-black',
    borderColor: 'border-black/10',
  },
  {
    number: '03',
    title: '90+',
    subtitle: 'Performance',
    description: 'Fast load times that keep users engaged and buying.',
    image: '/images/exp-radial.png',
    bgColor: 'bg-[#0a0a0a]',
    textColor: 'text-white',
    borderColor: 'border-white/10',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;
    const banner = bannerRef.current;

    if (!section || !cardsContainer || !banner) return;

    const ctx = gsap.context(() => {
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
            toggleActions: 'play none none reverse',
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
      className="relative w-full bg-black text-white py-20 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Cards grid - 3 columns */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-4 mb-4"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative ${card.bgColor} ${card.textColor} rounded-xl overflow-hidden min-h-[320px] flex flex-col border ${card.borderColor}`}
            >
              {/* Content at top */}
              <div className="p-5 relative z-10">
                <h3 className="text-2xl font-normal mb-1">
                  {card.title} <span className="font-light">{card.subtitle}</span>
                </h3>
                <p className={`text-sm ${card.textColor === 'text-white' ? 'text-white/50' : 'text-black/50'} max-w-[200px]`}>
                  {card.description}
                </p>
              </div>

              {/* Image in middle/bottom */}
              <div className="flex-1 relative flex items-end justify-center p-4">
                <img
                  src={card.image}
                  alt={card.subtitle}
                  className="w-3/4 h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Number at bottom left */}
              <div className={`absolute bottom-4 left-5 text-sm ${card.textColor === 'text-white' ? 'text-white/30' : 'text-black/30'}`}>
                {card.number}
              </div>
            </div>
          ))}
        </div>

        {/* Banner - full width */}
        <div
          ref={bannerRef}
          className="bg-[#f0f0f0] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-black/5"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-normal text-black mb-2">
              300% Growth & Zero Data Loss
            </h3>
            <p className="text-sm text-black/50 max-w-xl">
              I execute flawless migrations (301 redirects) to preserve your domain authority, while the new high-performance architecture is engineered to triple your organic traffic.
            </p>
          </div>
          
          {/* Triangle graphic */}
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src="/images/exp-triangle.png"
              alt="Growth"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Number */}
          <div className="text-sm text-black/30 md:self-end">
            04
          </div>
        </div>
      </div>
    </section>
  );
}
