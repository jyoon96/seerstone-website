import React from 'react';
import { motion } from 'framer-motion';
import { CORE_COMPETENCIES } from '../constants';

const EASE = [0.16, 1, 0.3, 1];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 md:py-44 bg-dark-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-5 mb-6"
        >
          <div className="divider-gold" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-warm-400">
            01 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: EASE }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] text-warm-50 mb-8"
            >
              Precision{' '}
              <span className="italic text-warm-300">at Scale.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: EASE }}
              className="relative mt-12 hidden lg:block"
            >
              <div className="aspect-[4/5] w-full bg-dark-800 border border-dark-600/50 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                  alt="Architecture"
                  className="w-full h-full object-cover opacity-50 grayscale contrast-125 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-warm-400/60">
                    FIG 1.1 — Global Network Infrastructure
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="text-lg md:text-xl text-warm-100/60 leading-relaxed mb-6 font-light"
            >
              SeerStone is a global holding company designed for the modern economy. We have moved beyond traditional corporate structures to focus on speed, efficiency, and data-driven decision-making.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-lg md:text-xl text-warm-100/60 leading-relaxed mb-16 font-light"
            >
              By integrating proprietary market intelligence with our own supply chain infrastructure, we operate with exceptional efficiency. Our model allows us to identify consumer trends, manufacture products, and deliver them worldwide faster than legacy competitors.
            </motion.p>

            <div className="border-t border-dark-600/50 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {CORE_COMPETENCIES.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: EASE }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono text-warm-400/50">0{index + 1}</span>
                      <div className="h-px flex-1 bg-dark-600/50 group-hover:bg-warm-400/30 transition-colors duration-700" />
                    </div>
                    <h3 className="text-base font-semibold text-warm-50 mb-3 group-hover:text-warm-400 transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm text-warm-100/40 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 pl-8 border-l border-warm-400/30"
            >
              <p className="text-2xl md:text-3xl font-serif italic text-warm-300/60 leading-relaxed">
                "We don't follow markets — we architect them."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
