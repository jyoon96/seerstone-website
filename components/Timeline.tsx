import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE_EVENTS } from '../constants';

const EASE = [0.16, 1, 0.3, 1];

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="timeline" className="relative w-full py-32 md:py-44 bg-dark-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-5 mb-6"
        >
          <div className="divider-gold" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-warm-400">
            03 — Timeline
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-warm-50 mb-20 md:mb-28 leading-[1.05]"
        >
          Our <span className="italic text-warm-300">Journey.</span>
        </motion.h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-dark-600/30" />

          {/* Events */}
          <div className="space-y-16 md:space-y-0">
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineItem key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  event: typeof TIMELINE_EVENTS[0];
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
      className="relative md:flex md:items-start group md:py-12"
    >
      {/* Year */}
      <div className="md:w-[200px] md:flex-shrink-0 mb-4 md:mb-0 md:text-right md:pr-12">
        <span className="text-4xl md:text-5xl font-light text-warm-400/80 tracking-tight font-serif">
          {event.year}
        </span>
      </div>

      {/* Dot */}
      <div className="hidden md:flex items-center justify-center absolute left-[200px] top-14 -translate-x-1/2">
        <div className="w-3 h-3 rounded-full bg-dark-950 border-2 border-warm-400/50 group-hover:border-warm-400 group-hover:bg-warm-400/20 transition-all duration-500 z-10" />
      </div>

      {/* Content */}
      <div className="md:pl-20 md:flex-1">
        <h3 className="text-xl md:text-2xl font-semibold text-warm-50 mb-3 group-hover:text-warm-400 transition-colors duration-500">
          {event.title}
        </h3>
        <p className="text-base text-warm-100/40 leading-relaxed max-w-xl mb-4 font-light">
          {event.description}
        </p>

        {(event.milestone || event.target) && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-3 bg-warm-400/5 border border-warm-400/15 px-5 py-3 mt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-warm-400" />
            <span className="text-sm font-medium text-warm-300">
              {event.milestone || event.target}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
