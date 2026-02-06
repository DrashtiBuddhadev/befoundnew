import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
];

export default function FounderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={containerRef} className="relative bg-[#fafafa] overflow-hidden">
      {/* Top label bar */}
      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4">
          <span className="text-sm text-black/40">Our founder</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

            {/* Left - Quote */}
            <motion.div
              style={{ y: textY }}
              className="lg:col-span-4 lg:pr-8"
            >
              <motion.blockquote
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-[1.3] mb-6"
              >
                "Design should solve problems
                <span className="text-indigo-600"> not create new ones</span>."
              </motion.blockquote>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base text-black/50 leading-relaxed"
              >
                With a background spanning design, development, and strategy, our founder brings a holistic perspective to every project.
              </motion.p>
            </motion.div>

            {/* Center - Image */}
            <motion.div
              style={{ y: imageY }}
              className="lg:col-span-4 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] max-w-sm lg:max-w-md mx-auto"
              >
                {/* Image frame */}
                <div className="absolute inset-0 border border-black/10" />

                {/* Main image */}
                <div className="relative h-full w-full overflow-hidden bg-black/5">
                  <img
                    src="/images/founder.png"
                    alt="Drashti Buddhadev - Founder"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face';
                    }}
                  />
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-indigo-500 -z-10" />
              </motion.div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              style={{ y: textY }}
              className="lg:col-span-4 lg:pl-8"
            >
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm md:text-base text-black/60 leading-relaxed mb-8">
                  By owning both the creative direction and technical execution, we ensure that what's imagined is exactly what gets built. The goal has always been the same: Create digital products that feel right, work seamlessly, and stand the test of time.
                </p>

                {/* Founder name */}
                <div className="mb-6 pb-6 border-b border-black/10">
                  <h3 className="text-2xl font-medium text-black mb-2">
                    Drashti Buddhadev
                  </h3>
                  <p className="text-sm text-black/40">
                    Founder, CEO & Creative Director
                  </p>
                </div>

                {/* Social links */}
                <div className="space-y-2">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between py-2 border-b border-transparent hover:border-black/10 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-black group-hover:text-indigo-600 transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-indigo-600 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />
    </section>
  );
}
