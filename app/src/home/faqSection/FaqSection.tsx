import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, ArrowRight } from 'lucide-react';
import './FaqSection.css';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What is the typical investment for a project?',
    answer:
      'Project investments typically range from $10,000 to $100,000+ depending on scope, complexity, and timeline. We provide detailed proposals after our initial discovery call to ensure transparency and alignment with your budget.',
  },
  {
    question: 'Do you offer unpaid tests or pilot phases?',
    answer:
      'We do not perform unpaid tests. Our portfolio is the validation of our skills. However, for complex projects, we are happy to start with a smaller, paid discovery milestone to ensure we are a perfect fit before committing to the full scope.',
  },
  {
    question: 'Do you use standard Webflow interactions or custom code?',
    answer:
      'We use a hybrid approach. While we leverage native platform interactions for efficiency, we often write custom CSS and JavaScript (GSAP) to achieve unique, performance-optimized animations that set your site apart from templates.',
  },
  {
    question: 'Will the animations slow down my website?',
    answer:
      'Not at all. We prioritize performance alongside aesthetics. All animations are GPU-accelerated, use modern techniques like CSS transforms, and are optimized to maintain 60fps. Our sites consistently score 90+ on Core Web Vitals.',
  },
  {
    question: 'What platforms do you build on?',
    answer:
      'We specialize in Webflow, WordPress, Shopify, and custom React/Next.js solutions. For e-commerce, we work with Shopify and WooCommerce. The choice depends on your specific needs, scale, and long-term goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timeline varies by scope. A landing page might take 2-3 weeks, while a full website with custom animations and CMS integration typically takes 6-10 weeks. We provide a detailed timeline during our proposal phase.',
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const items = itemsRef.current;

    if (!section || !header || !items) return;

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

      // Items stagger animation
      gsap.fromTo(
        items.querySelectorAll('.faq-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: items,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="faq-section relative w-full bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
          <div>
            <div className="animate-item flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-white/30" />
              <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                FAQ
              </span>
            </div>
            <h2 className="animate-item text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
              Questions?
              <br />
              <span className="text-white/50">We have answers.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="animate-item text-base lg:text-lg text-white/50 leading-relaxed max-w-md">
              Everything you need to know about working with us. Can't find what you're looking for? Let's talk.
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <div ref={itemsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item group relative bg-white/[0.02] border transition-all duration-500 cursor-pointer ${
                openIndex === index
                  ? 'border-indigo-500/50 bg-white/[0.04]'
                  : 'border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
              }`}
              onClick={() => toggleItem(index)}
            >
              {/* Question */}
              <div className="flex items-start justify-between gap-4 p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className={`text-xs font-mono mt-1 transition-colors duration-300 ${
                    openIndex === index ? 'text-indigo-400' : 'text-white/30'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-base md:text-lg font-medium leading-snug transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-500 ${
                  openIndex === index
                    ? 'bg-indigo-500 border-indigo-500 rotate-45'
                    : 'border-white/20 group-hover:border-white/40'
                }`}>
                  <Plus className={`w-4 h-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-white/50'
                  }`} />
                </div>
              </div>

              {/* Answer */}
              <div className={`faq-answer overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="pl-8 md:pl-12 border-l border-white/10">
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div className={`absolute bottom-0 left-0 h-[2px] bg-indigo-500 transition-all duration-500 ${
                openIndex === index ? 'w-full' : 'w-0'
              }`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Still have questions?</p>
              <p className="text-2xl md:text-3xl font-light text-white">
                Let's discuss your <span className="text-indigo-400">project</span>.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4"
            >
              <span className="text-white/70 group-hover:text-white transition-colors">Get in touch</span>
              <span className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
