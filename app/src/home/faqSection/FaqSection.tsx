import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';
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
      'We believe in fair compensation for creative work. Instead of unpaid tests, we offer a paid discovery phase where we dive deep into your brand, goals, and requirements. This ensures we\'re the right fit before committing to a full project.',
  },
  {
    question: 'Do you use standard Webflow interactions or custom code?',
    answer:
      'We use a hybrid approach. While we leverage Webflow\'s native interactions for efficiency, we often write custom CSS and JavaScript to achieve unique, performance-optimized animations that set your site apart.',
  },
  {
    question: 'Will the animations slow down my website?',
    answer:
      'Not at all. We prioritize performance alongside aesthetics. All animations are GPU-accelerated, use modern techniques like CSS transforms, and are optimized to maintain 60fps. Our sites consistently score 90+ on Lighthouse performance metrics.',
  },
  {
    question: 'What platforms do you build on?',
    answer:
      'We specialize in Webflow, Next.js, and React-based solutions. For e-commerce, we work with Shopify and custom headless setups. The choice depends on your specific needs, scale, and long-term goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timeline varies by scope. A landing page might take 2-3 weeks, while a full website with custom animations and CMS integration typically takes 6-10 weeks. We\'ll provide a detailed timeline during our proposal phase.',
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const items = itemsRef.current;

    if (!section || !heading || !items) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        heading,
        { y: 30, opacity: 0 },
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

      // Items stagger animation
      gsap.fromTo(
        items.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: items,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-32 z-80"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="heading-lg text-center mb-16"
        >
          FAQ
        </h2>

        {/* FAQ Items */}
        <div ref={itemsRef} className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-white/10"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-medium pr-8 group-hover:text-indigo-400 transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white text-black border-white'
                      : 'group-hover:border-white/50'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              <div
                className={`faq-content ${openIndex === index ? 'open' : ''}`}
              >
                <div>
                  <p className="pb-6 text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 mb-4">Still have questions?</p>
          <button className="btn-primary">Get in touch</button>
        </div>
      </div>
    </section>
  );
}
