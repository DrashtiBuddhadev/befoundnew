import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DesignProgression } from './projectsData';

interface DesignProgressionTimelineProps {
  stages: DesignProgression[];
}

export default function DesignProgressionTimeline({ stages }: DesignProgressionTimelineProps) {
  const [activeStage, setActiveStage] = useState(0);

  const stageIcons: Record<string, string> = {
    research: '🔍',
    wireframe: '📐',
    prototype: '🎨',
    final: '✨',
  };

  const stageLabels: Record<string, string> = {
    research: 'Research',
    wireframe: 'Wireframe',
    prototype: 'Prototype',
    final: 'Final',
  };

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-indigo-500" />
            <span className="text-xs font-medium tracking-widest uppercase text-white/40">
              Design Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl">
            Explore each phase of our design process, from initial research to final
            delivery, with insights and learnings along the way.
          </p>
        </div>

        {/* Horizontal Timeline Navigation */}
        <div className="relative mb-16">
          <div className="flex justify-between items-center">
            {stages.map((stage, index) => (
              <button
                key={index}
                onClick={() => setActiveStage(index)}
                className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                  activeStage === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                {/* Stage Icon/Number */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    activeStage === index
                      ? 'border-indigo-500 bg-indigo-500/20 scale-110'
                      : 'border-white/20 bg-white/5'
                  }`}
                >
                  <span className="text-2xl md:text-3xl">
                    {stageIcons[stage.stage] || index + 1}
                  </span>
                </div>

                {/* Stage Label */}
                <span className="text-xs md:text-sm uppercase tracking-wider text-white/80 font-medium">
                  {stageLabels[stage.stage] || stage.stage}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Line */}
          <div className="absolute top-7 md:top-8 left-0 right-0 h-[2px] bg-white/10 -z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{
                width: `${(activeStage / (stages.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Stage Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Text Content */}
            <div className="space-y-6">
              {/* Stage Badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                <span className="text-xl">
                  {stageIcons[stages[activeStage].stage]}
                </span>
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                  {stageLabels[stages[activeStage].stage]}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                {stages[activeStage].title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                {stages[activeStage].description}
              </p>

              {/* Learnings/Insights */}
              {stages[activeStage].learnings && (
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-lg">💡</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Key Insight
                      </h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {stages[activeStage].learnings}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                  disabled={activeStage === 0}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                    activeStage === 0
                      ? 'border-white/10 text-white/30 cursor-not-allowed'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  ← Previous
                </button>
                <button
                  onClick={() =>
                    setActiveStage(Math.min(stages.length - 1, activeStage + 1))
                  }
                  disabled={activeStage === stages.length - 1}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                    activeStage === stages.length - 1
                      ? 'border-white/10 text-white/30 cursor-not-allowed'
                      : 'border-indigo-500/50 bg-indigo-500/10 text-white hover:bg-indigo-500/20'
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Visual Content */}
            <div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                {/* Image Container */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/40">
                  <img
                    src={stages[activeStage].image}
                    alt={stages[activeStage].title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {stages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStage === index
                  ? 'w-12 bg-indigo-500'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to stage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
