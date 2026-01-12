import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { JOB_POSITIONS } from '../constants';

export const Careers: React.FC = () => {
  return (
    <Section id="careers" className="bg-charcoal text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-4">04 — Careers</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Join the Team.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            SeerStone is a collective of industry experts, engineers, and strategists. We are looking for high-performance individuals who are ready to solve complex problems in the global trade sector.
          </p>
          <div className="hidden lg:block">
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                View Opportunities
             </Button>
          </div>
        </div>

        <div className="flex flex-col">
          {JOB_POSITIONS.map((job, index) => (
            <div 
              key={index}
              className="group border-b border-white/10 py-6 flex flex-col sm:flex-row justify-between sm:items-center hover:bg-white/5 transition-colors px-4 -mx-4 sm:mx-0 sm:px-0"
            >
              <div className="mb-2 sm:mb-0">
                <h4 className="text-lg font-medium text-white group-hover:text-white/90">{job.title}</h4>
                <div className="flex gap-4 text-sm text-white/50 mt-1">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <span className="text-white/30 text-sm font-medium group-hover:text-white transition-colors cursor-pointer mt-4 sm:mt-0">
                Apply &rarr;
              </span>
            </div>
          ))}
          <div className="mt-8 lg:hidden">
             <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-charcoal">
                View Opportunities
             </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};