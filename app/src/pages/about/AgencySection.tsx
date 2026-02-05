import { motion } from 'framer-motion';
import { ZoomParallax } from '../../components/ui/zoom-parallax';
import { ArrowUpRight } from 'lucide-react';

const workImages = [
  {
    src: '/images/work/Kaizen Dezain Mockup.png',
    alt: 'Kaizen Dezain Project',
  },
  {
    src: '/images/work/NW9 Design System Mockup.png',
    alt: 'NW9 Design System',
  },
  {
    src: '/images/work/Muse & Masterpiece Mockup.png',
    alt: 'Muse & Masterpiece',
  },
  {
    src: '/images/work/Weston Dental Mockup.png',
    alt: 'Weston Dental',
  },
  {
    src: '/images/work/NW9 Development Services Mockup.png',
    alt: 'NW9 Development',
  },
  {
    src: '/images/work/mockup.png',
    alt: 'Project Mockup',
  },
  {
    src: '/images/work/Kaizen Dezain Mockup.png',
    alt: 'Featured Work',
  },
];

export default function AgencySection() {
  return (
    <section className="relative bg-white">
      {/* Pre-parallax intro */}
      <div className="relative z-10 bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-black/40"
            >
              [ 1 ] Be the brand they never stop talking about
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-[1.2] max-w-5xl"
          >
            Design on the web isn't static anymore. Today's brands need{' '}
            <span className="font-medium">energy</span>,{' '}
            <span className="font-medium">personality</span> and{' '}
            <span className="font-medium">meaning</span>.
          </motion.h2>
        </div>
      </div>

      {/* Zoom Parallax Gallery */}
      <ZoomParallax images={workImages} />

      {/* Vision & Mission - After parallax */}
      <div className="relative z-10 bg-[#0a0a0a] py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:mb-32"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-white/30 block mb-6">Our Vision</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                Build experiences that create <span className="text-indigo-400">real impact</span>.
              </h3>
            </div>
            <div className="flex items-end">
              <p className="text-lg text-white/50 leading-relaxed">
                Experiences that convert, communicate value clearly, and serve as a premium gateway between our clients and their audiences.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-white/30 block mb-6">Our Mission</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                Bridge the gap between <span className="text-white/40">templates</span> and <span className="text-indigo-400">over-engineering</span>.
              </h3>
            </div>
            <div className="flex flex-col justify-end gap-8">
              <p className="text-lg text-white/50 leading-relaxed">
                We aim to be a single, reliable partner for our clients' digital needs by delivering thoughtful design, solid engineering, and measurable outcomes without unnecessary complexity or inflated costs.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-white"
              >
                <span className="text-sm font-medium">Work with us</span>
                <span className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-black transition-colors" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
