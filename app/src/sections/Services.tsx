import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'LOGO DESIGN',
    description:
      'No matter the size of your brand, we design logos that are clear, unique and built to last. We dive into your values, audience and competition to create a mark that feels unmistakably you. From wordmarks to symbols, we ensure your logo works everywhere—digital, print, merchandise and beyond.',
    image: '/images/service-logo.png',
    features: [
      'Discovery and brand alignment',
      'Moodboards and creative direction',
      'Typography and symbol design',
      'Color psychology and variants',
      'Usage guidelines and file export',
      'Logo animation (optional)',
    ],
  },
  {
    number: '02',
    title: 'BRAND IDENTITY DEVELOPMENT',
    description:
      'A strong brand is the full picture. We create visual systems that bring your brand to life and make it easy to recognize anywhere. From colors and fonts to icons, layouts and rules for using everything right—we make sure your brand feels consistent, confident and true to who you are.',
    image: '/images/service-brand.png',
    features: [
      'Brand strategy and positioning',
      'Color palette and typography',
      'Visual language and icons',
      'Design system and templates',
      'Brand book and guidelines',
      'Application mockups',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      serviceRefs.current.forEach((serviceEl, index) => {
        if (!serviceEl) return;

        const number = serviceEl.querySelector('.service-number');
        const title = serviceEl.querySelector('.service-title');
        const desc = serviceEl.querySelector('.service-desc');
        const image = serviceEl.querySelector('.service-image');
        const features = serviceEl.querySelector('.service-features');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: serviceEl,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.fromTo(
          number,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )
          .fromTo(
            title,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.5'
          )
          .fromTo(
            desc,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.3'
          )
          .fromTo(
            image,
            { x: index % 2 === 0 ? 50 : -50, opacity: 0, scale: 0.95 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8 },
            '-=0.6'
          )
          .fromTo(
            features?.children || [],
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
            '-=0.4'
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-32 z-30"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-20">
          <span className="label text-white/50 block mb-4">What we do</span>
          <h2 className="heading-lg">Services</h2>
        </div>

        {/* Services */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.number}
              ref={(el) => { serviceRefs.current[index] = el; }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-start gap-6">
                  <span className="service-number">{service.number}</span>
                  <div className="pt-4">
                    <h3 className="service-title heading-md mb-4">
                      {service.title}
                    </h3>
                    <p className="service-desc body-md text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <div className="service-features pl-4 space-y-2 mt-8">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <span className="w-1 h-1 rounded-full bg-indigo-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              {/* Image */}
              <div
                className={`service-image relative ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
