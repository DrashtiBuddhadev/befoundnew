import { motion } from 'framer-motion';
import type { WireframeStep } from './projectsData';

interface WireframeSectionProps {
  steps: WireframeStep[];
}

export default function WireframeSection({ steps }: WireframeSectionProps) {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-indigo-500" />
            <span className="text-xs font-medium tracking-widest uppercase text-black/40">
              Design Evolution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            From Wireframe to Reality
          </h2>
          <p className="text-base md:text-lg text-black/60 max-w-3xl">
            Follow the journey from initial concepts to polished designs, showcasing
            our iterative process and key learnings at each stage.
          </p>
        </div>

        {/* Progressive Wireframe Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-dense'
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                {/* Type Badge */}
                <span
                  className={`inline-block px-4 py-1.5 text-xs font-medium rounded-full mb-4 ${
                    step.type === 'low-fidelity'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : step.type === 'high-fidelity'
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  {step.type === 'low-fidelity'
                    ? 'Low-Fidelity Wireframe'
                    : step.type === 'high-fidelity'
                    ? 'High-Fidelity Design'
                    : 'Final Design'}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-black/60 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Learnings/Insights */}
                {step.learnings && (
                  <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">💡</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-indigo-900 mb-2">
                          Key Learning
                        </h4>
                        <p className="text-sm text-indigo-700 leading-relaxed">
                          {step.learnings}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Wireframe Image */}
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/10 border border-black/5">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm font-medium">
                          Click to view full size
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-black/10 text-center"
        >
          <p className="text-sm text-black/50 uppercase tracking-widest">
            Iterative design process
          </p>
        </motion.div>
      </div>
    </section>
  );
}
