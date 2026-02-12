import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import CtaSection from '@/home/ctaSection/CtaSection';

gsap.registerPlugin(ScrollTrigger);

// SVG Graphics for service cards
const GridIcon = () => (
  <svg className="w-20 h-20 icon-graphic" viewBox="0 0 64 64" aria-hidden="true">
    <circle className="icon-element transition-all duration-500" cx="20" cy="20" r="10" />
    <circle className="icon-accent transition-all duration-500" cx="44" cy="20" r="10" />
    <circle className="icon-element transition-all duration-500" cx="20" cy="44" r="10" />
    <circle className="icon-accent transition-all duration-500" cx="44" cy="44" r="10" />
  </svg>
);

const BarsIcon = () => (
  <svg className="w-20 h-12 icon-graphic" viewBox="0 0 70 45" aria-hidden="true">
    {[0, 11, 22, 33, 44, 55, 66].map((x, i) => (
      <rect
        key={i}
        className={`transition-all duration-500 ${i === 3 || i === 4 ? 'icon-accent' : 'icon-element'}`}
        x={x}
        y="0"
        width="4"
        height="45"
      />
    ))}
  </svg>
);

const CircleIcon = () => (
  <svg className="w-20 h-20 icon-graphic" viewBox="0 0 64 64" aria-hidden="true">
    <circle className="icon-element-stroke" cx="32" cy="32" r="24" fill="none" strokeWidth="2" />
    <circle
      className="icon-accent-stroke transition-all duration-500"
      cx="32"
      cy="32"
      r="24"
      fill="none"
      strokeWidth="2"
      strokeDasharray="150"
      strokeDashoffset="50"
      strokeLinecap="round"
    />
  </svg>
);

const DiamondIcon = () => (
  <svg className="w-20 h-20 icon-graphic" viewBox="0 0 64 64" aria-hidden="true">
    <rect
      className="icon-element-stroke"
      x="32"
      y="8"
      width="24"
      height="24"
      transform="rotate(45 32 32)"
      fill="none"
      strokeWidth="2"
    />
    <rect
      className="icon-accent transition-all duration-500"
      x="32"
      y="20"
      width="12"
      height="12"
      transform="rotate(45 32 32)"
    />
  </svg>
);

// Service data with detailed information
const serviceDetails = {
  'ui-ux-design': {
    title: 'UI/UX Design',
    tagline: 'Design that feels',
    taglineAccent: 'as good as it looks',
    intro: "A design isn't just 'how it looks', it's how it feels.",
    description:
      "We craft digital experiences that are both stunning and simple to use. We dive deep into your users' world to create interfaces that guide them effortlessly from homepage to happy customer.",
    services: [
      {
        number: '01',
        title: 'Full Custom',
        subtitle: 'Website Design',
        description: 'Bespoke design solutions tailored to your brand identity and business goals. We create unique, custom websites from scratch.',
        footnote: 'Design that stands out.',
        icon: <GridIcon />,
        tags: ['Brand-aligned aesthetics', 'Custom illustrations', 'Unique layouts', 'Scalable design systems'],
      },
      {
        number: '02',
        title: 'Landing Page',
        subtitle: 'Design',
        description: 'High-converting landing pages designed to capture attention and drive action. Optimized for conversion at every scroll.',
        footnote: 'Conversions that count.',
        icon: <BarsIcon />,
        tags: ['Conversion-focused layouts', 'A/B testing ready', 'Mobile-first approach', 'Fast loading optimized'],
      },
      {
        number: '03',
        title: 'UI/UX',
        subtitle: 'Design',
        description: 'User-centric design that prioritizes usability and delightful interactions. Research-backed experiences that users love.',
        footnote: 'Designed for humans.',
        icon: <CircleIcon />,
        tags: ['User research', 'Wireframing & prototyping', 'Usability testing', 'Interactive prototypes'],
      },
      {
        number: '04',
        title: 'Presentation',
        subtitle: 'Template Designs',
        description: 'Professional presentation templates that communicate your message with impact. Consistent, editable, and visually stunning.',
        footnote: 'Tell your story.',
        icon: <DiamondIcon />,
        tags: ['Brand consistency', 'Editable templates', 'Multiple formats', 'Visual storytelling'],
      },
    ],
    showcaseProjects: [
      {
        id: 2,
        title: 'NW9 Studio',
        category: 'Website Design',
        image: '/images/work/NW9 Design System Mockup.png',
      },
      {
        id: 1,
        title: 'Kaizen Dezain',
        category: 'Website Design',
        image: '/images/work/Kaizen Dezain Mockup.png',
      },
    ],
  },
  'web-development': {
    title: 'Web Development',
    tagline: 'Building digital experiences',
    taglineAccent: 'that perform',
    intro: "Not every brand needs the same platform.",
    description:
      "We build on the right technology stack to engineer the perfect environment for your business to live, grow, and scale. Development should be invisible in experience, not capability.",
    services: [
      {
        number: '01',
        title: 'Full Custom',
        subtitle: 'Coded Site',
        description: 'Built from scratch with modern frameworks for maximum performance and flexibility. Complete control, zero limitations.',
        footnote: 'Built without limits.',
        icon: <GridIcon />,
        tags: ['React/Next.js', 'Custom architecture', 'Optimized performance', 'Scalable codebase'],
      },
      {
        number: '02',
        title: 'WordPress',
        subtitle: 'Development',
        description: 'Powerful, flexible WordPress solutions with custom themes and plugins. The CMS you know, elevated beyond recognition.',
        footnote: 'Power meets flexibility.',
        icon: <BarsIcon />,
        tags: ['Custom themes', 'Plugin development', 'WooCommerce integration', 'SEO optimized'],
      },
      {
        number: '03',
        title: 'Shopify',
        subtitle: 'Development',
        description: 'E-commerce solutions built on Shopify for seamless online selling. Sell smarter, not harder.',
        footnote: 'Commerce made easy.',
        icon: <CircleIcon />,
        tags: ['Custom Shopify themes', 'App integrations', 'Payment gateways', 'Inventory management'],
      },
      {
        number: '04',
        title: 'WooCommerce',
        subtitle: 'Solutions',
        description: 'Complete e-commerce solutions powered by WooCommerce on WordPress. All the flexibility of WordPress, built for selling.',
        footnote: 'WordPress for commerce.',
        icon: <DiamondIcon />,
        tags: ['Product catalog setup', 'Checkout optimization', 'Payment integration', 'Shipping solutions'],
      },
    ],
    showcaseProjects: [
      {
        id: 3,
        title: 'Muse & Masterpiece',
        category: 'E-commerce',
        image: '/images/work/Muse & Masterpiece Mockup.png',
      },
      {
        id: 5,
        title: 'NW9 Development',
        category: 'Development',
        image: '/images/work/NW9 Development Services Mockup.png',
      },
    ],
  },
  'seo': {
    title: 'SEO Services',
    tagline: 'Be found by',
    taglineAccent: 'the people who matter',
    intro: "People Google everything.",
    description:
      "The question is: do they find you or your competitor? We fine-tune the foundation of your site so search engines trust you, users discover you, and conversions follow.",
    services: [
      {
        number: '01',
        title: 'On-Page',
        subtitle: 'SEO',
        description: 'Optimize every element of your website for maximum search visibility. From keywords to content structure.',
        footnote: 'Every detail matters.',
        icon: <GridIcon />,
        tags: ['Keyword optimization', 'Meta tags & descriptions', 'Content optimization', 'Internal linking'],
      },
      {
        number: '02',
        title: 'Off-Page',
        subtitle: 'SEO',
        description: 'Build authority and trust through strategic off-site optimization. Your reputation beyond your website.',
        footnote: 'Build authority.',
        icon: <BarsIcon />,
        tags: ['Link building', 'Brand mentions', 'Social signals', 'Guest posting'],
      },
      {
        number: '03',
        title: 'Google Ads',
        subtitle: '& PPC',
        description: 'Targeted advertising campaigns that deliver measurable ROI. Pay for results, not impressions.',
        footnote: 'Results you can measure.',
        icon: <CircleIcon />,
        tags: ['Keyword research', 'Ad copywriting', 'Bid management', 'Performance tracking'],
      },
      {
        number: '04',
        title: 'GMB Profile',
        subtitle: 'Management',
        description: 'Optimize your Google My Business presence for local search dominance. Own your local market.',
        footnote: 'Local search, amplified.',
        icon: <DiamondIcon />,
        tags: ['Profile optimization', 'Review management', 'Local citations', 'Performance analytics'],
      },
    ],
    showcaseProjects: [
      {
        id: 4,
        title: 'Weston Dental',
        category: 'Healthcare SEO',
        image: '/images/work/Weston Dental Mockup.png',
      },
    ],
  },
  'custom-engineering': {
    title: 'Custom Engineering',
    tagline: 'When standard solutions',
    taglineAccent: "aren't enough",
    intro: "When templated solutions hit a ceiling, we go custom.",
    description:
      "From advanced motion to full web applications, we engineer digital experiences that feel intentional, immersive, and technically sound. Built with modern frameworks and future-ready architecture.",
    services: [
      {
        number: '01',
        title: 'GSAP',
        subtitle: 'Animations',
        description: 'Stunning, performant animations that bring your website to life. Motion that matters, performance that impresses.',
        footnote: 'Motion with purpose.',
        icon: <GridIcon />,
        tags: ['Scroll-triggered animations', 'Complex timelines', 'Interactive elements', 'Smooth transitions'],
      },
      {
        number: '02',
        title: 'Highly Customized',
        subtitle: 'Projects',
        description: 'Bespoke web applications tailored to your unique requirements. No templates. No shortcuts. Just solutions.',
        footnote: 'Built for you.',
        icon: <BarsIcon />,
        tags: ['Custom functionality', 'Unique user experiences', 'Advanced interactions', 'Scalable architecture'],
      },
    ],
    showcaseProjects: [
      {
        id: 5,
        title: 'NW9 Development',
        category: 'Custom Engineering',
        image: '/images/work/NW9 Development Services Mockup.png',
      },
    ],
  },
};

export default function ServiceDetailsPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);

  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;

  // Add CSS for icon animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .icon-element {
        fill: rgba(0, 0, 0, 0.1);
      }
      .icon-accent {
        fill: rgba(99, 102, 241, 0.2);
      }
      .icon-element-stroke {
        stroke: rgba(0, 0, 0, 0.1);
      }
      .icon-accent-stroke {
        stroke: rgba(99, 102, 241, 0.3);
      }

      .service-item:hover .icon-element {
        fill: rgba(0, 0, 0, 0.8);
      }
      .service-item:hover .icon-accent {
        fill: rgba(99, 102, 241, 0.6);
      }
      .service-item:hover .icon-element-stroke {
        stroke: rgba(0, 0, 0, 0.8);
      }
      .service-item:hover .icon-accent-stroke {
        stroke: rgba(99, 102, 241, 0.6);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Smooth scroll
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!servicesRef.current) return;

    const ctx = gsap.context(() => {
      // Services grid animation
      gsap.fromTo(
        servicesRef.current!.querySelectorAll('.service-item'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/services')}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details-page bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full pt-32 pb-20">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Back to Services</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                  {service.title}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
                <span className="text-white">{service.tagline}</span>
                <br />
                <span className="text-indigo-400">{service.taglineAccent}</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
                {service.intro}
              </p>

              <p className="text-base text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {/* Right - Stats/Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-end"
            >
              <div className="w-full p-8 bg-white/5 border border-white/10">
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Every project starts with understanding your goals, your audience, and what success looks like for your business.
                </p>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40">Strategic approach</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="relative bg-[#f5f5f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-xs font-medium tracking-widest uppercase text-black/50">
                What We Provide
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-black">
              Services & Solutions
            </h2>
          </div>

          {/* Services Pillar Grid */}
          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          >
            {service.services.map((item, index) => (
              <div
                key={index}
                className="service-item group bg-white overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] border border-black/5 hover:border-indigo-500/30 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-black/5">
                  <h3 className="text-xl md:text-2xl font-medium text-black">
                    {item.title}
                    <br />
                    <span className="text-indigo-500">{item.subtitle}</span>
                  </h3>
                  <span className="text-xs text-black/40 font-mono">[ {item.number} ]</span>
                </div>

                {/* Icon */}
                <div className="flex-1 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-5 mt-auto">
                  <p className="text-sm text-black/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-end justify-between gap-4 mb-5">
                    <p className="text-xs text-black/50">
                      {item.footnote}
                    </p>
                    <div className="arrow-btn flex-shrink-0 w-10 h-10 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Tags Marquee */}
                  <div className="pt-4 border-t border-black/5 overflow-hidden">
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs text-black/40 border border-black/10 px-2 py-1 group-hover:border-indigo-500/30 group-hover:text-indigo-600 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
