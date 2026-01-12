import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { CORE_COMPETENCIES } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Heading & Visual Visualization */}
        <div className="lg:col-span-4">
          <span className="block text-sm font-bold uppercase tracking-widest text-navy mb-4">01 — About Us</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-jet mb-6">
            Precision <br /> at Scale.
          </h2>
          
          <div className="w-full mt-12 relative group">
            <div className="h-[400px] w-full bg-light-grey/10 border border-light-grey rounded-sm overflow-hidden relative shadow-sm">
               {/* High-key abstract network visualization */}
               <img 
                 src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop"
                 alt="Global Connectivity Abstract"
                 className="w-full h-full object-cover filter grayscale contrast-110 brightness-110 opacity-90 hover:scale-105 transition-transform duration-1000 ease-out"
               />
               
               {/* Aesthetic overlay to soften the image and integrate with white background */}
               <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
               <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>

               {/* Technical Label Overlay */}
               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] text-charcoal/60 font-mono border border-light-grey rounded-xs shadow-sm">
                 FIG 1.1: NETWORK TOPOLOGY
               </div>
            </div>
            <p className="text-xs text-center text-charcoal/50 mt-4 font-mono uppercase tracking-widest">
              Live Network Topology
            </p>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8">
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12 font-light">
            SeerStone is a global holding company designed for the modern economy. We have moved beyond traditional corporate structures to focus on speed, efficiency, and data-driven decision-making. 
            <br /><br />
            By integrating proprietary market intelligence with our own supply chain infrastructure, we operate with exceptional efficiency. Our model allows us to identify consumer trends, manufacture products, and deliver them worldwide faster than legacy competitors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-light-grey">
            {CORE_COMPETENCIES.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-jet mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};