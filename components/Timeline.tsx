import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { TIMELINE_EVENTS } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <Section id="timeline">
      <div className="mb-16 md:mb-24">
        <span className="block text-sm font-bold uppercase tracking-widest text-navy mb-4">03 — History & Vision</span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-jet">Milestones.</h2>
      </div>

      <div className="relative border-l border-light-grey ml-4 md:ml-0 md:border-l-0">
        {TIMELINE_EVENTS.map((event, index) => (
          <motion.div 
            key={event.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative pl-12 md:pl-0 md:flex md:gap-12 pb-16 last:pb-0"
          >
            {/* Timeline Dot (Mobile: Absolute Left, Desktop: Relative) */}
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-white border-2 border-navy rounded-full md:hidden z-10"></div>

            {/* Year Column */}
            <div className="md:w-1/4 mb-2 md:mb-0 md:text-right relative">
               <span className="text-3xl font-light text-navy block md:sticky md:top-32">{event.year}</span>
               {/* Desktop Line/Dot */}
               <div className="hidden md:block absolute right-[-29px] top-4 w-3 h-3 bg-white border-2 border-navy rounded-full z-10"></div>
               <div className="hidden md:block absolute right-[-24px] top-4 w-[1px] h-full bg-light-grey -z-0 last:hidden"></div>
            </div>

            {/* Content Column */}
            <div className="md:w-3/4 md:pl-12 md:border-l md:border-light-grey">
              <h3 className="text-xl font-semibold text-jet mb-2">{event.title}</h3>
              <p className="text-charcoal/80 leading-relaxed max-w-2xl mb-4">
                {event.description}
              </p>
              
              {(event.milestone || event.target) && (
                <div className="bg-light-grey/30 p-4 border-l-2 border-navy inline-block rounded-r-sm">
                  <p className="text-sm font-medium text-navy">
                    {event.milestone || event.target}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};