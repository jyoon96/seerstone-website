import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { JOB_POSITIONS } from '../constants';

const EASE = [0.16, 1, 0.3, 1];

export const Careers: React.FC = () => {
  return (
    <section id="careers" className="relative w-full py-32 md:py-44 bg-dark-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex items-center gap-5 mb-6"
            >
              <div className="divider-gold" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-warm-400">
                04 — Careers
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-50 mb-8 leading-[1.05]"
            >
              Join the{' '}
              <span className="italic text-warm-300">Team.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
              className="text-base text-warm-100/40 leading-relaxed mb-10 font-light max-w-sm"
            >
              SeerStone is a collective of industry experts, engineers, and strategists. We are looking for high-performance individuals who are ready to solve complex problems in the global trade sector.
            </motion.p>

            <motion.a
              href="mailto:careers@seerstone.vip"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:inline-flex magnetic-btn items-center gap-3 px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold border border-warm-400/30 text-warm-400 hover:bg-warm-400 hover:text-dark-950 transition-all duration-500"
            >
              View All Positions
              <ArrowUpRight size={14} />
            </motion.a>
          </div>

          {/* Right: Job Listings */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {JOB_POSITIONS.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: EASE }}
                  className="group border-b border-dark-600/30 first:border-t"
                >
                  <a
                    href="mailto:careers@seerstone.vip"
                    className="flex flex-col sm:flex-row justify-between sm:items-center py-7 px-2 hover:px-6 transition-all duration-500"
                  >
                    <div className="mb-3 sm:mb-0">
                      <h4 className="text-lg font-medium text-warm-50 group-hover:text-warm-400 transition-colors duration-500">
                        {job.title}
                      </h4>
                      <div className="flex gap-4 text-[11px] text-warm-100/30 mt-1.5 tracking-wide">
                        <span className="uppercase">{job.department}</span>
                        <span className="text-dark-500">|</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-warm-100/20 group-hover:text-warm-400 transition-all duration-500">
                      <span className="text-[11px] font-medium tracking-[0.15em] uppercase">Apply</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="mailto:careers@seerstone.vip"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:hidden inline-flex magnetic-btn items-center gap-3 mt-10 px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold border border-warm-400/30 text-warm-400 hover:bg-warm-400 hover:text-dark-950 transition-all duration-500 w-full justify-center"
            >
              View All Positions
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
