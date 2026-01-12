import React from 'react';
import { Section } from './ui/Section';
import { LOGISTICS_STATS } from '../constants';

export const Logistics: React.FC = () => {
  return (
    <Section id="logistics" className="bg-light-grey/20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
           <div className="relative overflow-hidden aspect-[4/3] group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop" 
                alt="VerumLogistics Facility" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale contrast-125 brightness-105"
              />
              <div className="absolute inset-0 border border-black/5 opacity-50"></div>
           </div>
           <div className="mt-4 flex justify-between text-xs text-charcoal/50 uppercase tracking-widest font-mono">
              <span>Dong Guan Facility</span>
              <span>Coordinates: 23.0207° N, 113.7518° E</span>
           </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2">
          <span className="block text-sm font-bold uppercase tracking-widest text-navy mb-4">02 — Logistics</span>
          <h2 className="text-4xl font-medium tracking-tight text-jet mb-2">VerumLogistics.</h2>
          <h3 className="text-xl text-charcoal/60 mb-8 font-light italic serif">Supply chain integrity is the foundation of our success.</h3>
          
          <p className="text-base text-charcoal/80 leading-relaxed mb-8">
            Through our subsidiary, VerumLogistics, we maintain full control over our manufacturing and distribution channels.
            Located in Dong Guan, our 10,000 SQM facility is the central hub of our global network. Unlike companies that rely on third-party providers, we own the process from the factory floor to the customer’s door. This vertical integration ensures higher quality standards and superior margin control.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-charcoal/10 py-8 mb-8">
             {LOGISTICS_STATS.map((stat) => (
               <div key={stat.label}>
                 <div className="text-xs uppercase tracking-widest text-charcoal/50 mb-1">{stat.label}</div>
                 <div className="text-xl font-semibold text-navy">{stat.value}</div>
               </div>
             ))}
          </div>

          <p className="text-sm text-charcoal/60 italic">
            * VerumLogistics is currently accepting select enterprise partners looking to upgrade their supply chain capabilities.
          </p>
        </div>
      </div>
    </Section>
  );
};