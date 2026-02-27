import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LOGISTICS_STATS } from '../constants';

const EASE = [0.16, 1, 0.3, 1];

const ENTITIES = [
  {
    name: 'VerumLogistics',
    tagline: 'Supply Chain Integrity',
    description: 'Full control over manufacturing and distribution. Our 10,000 SQM facility in Dong Guan is the central hub of our global network — from factory floor to customer door.',
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop',
    location: 'Dong Guan, CN',
    coords: '23.0207° N, 113.7518° E',
    stats: LOGISTICS_STATS,
  },
  {
    name: 'SeerStone Brands',
    tagline: 'Category-Defining Portfolio',
    description: 'A curated portfolio of consumer brands engineered for quality and longevity. Each brand is built on proprietary data intelligence and vertically integrated supply chains.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop',
    location: 'Global',
    coords: 'Multi-Region Operations',
    stats: [
      { label: 'Active Brands', value: '12+' },
      { label: 'Markets', value: '40+' },
      { label: 'Model', value: 'Vertical D2C' },
    ],
  },
  {
    name: 'SeerStone AI',
    tagline: 'Market Intelligence Engine',
    description: 'Proprietary algorithms that predict and adapt to consumer demand in real-time. Our AI infrastructure processes millions of signals daily to drive every business decision.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    location: 'Los Angeles, US',
    coords: '34.0522° N, 118.2437° W',
    stats: [
      { label: 'Signals/Day', value: '50M+' },
      { label: 'Accuracy', value: '94.7%' },
      { label: 'Latency', value: '<200ms' },
    ],
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative w-full py-32 md:py-44 bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-5 mb-6"
        >
          <div className="divider-gold" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-warm-400">
            02 — Portfolio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-warm-50 mb-20 md:mb-28 leading-[1.05]"
        >
          Our <span className="italic text-warm-300">Entities.</span>
        </motion.h2>

        {/* Entity Cards */}
        <div className="space-y-24 md:space-y-32">
          {ENTITIES.map((entity, index) => (
            <EntityCard key={entity.name} entity={entity} index={index} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface EntityCardProps {
  entity: typeof ENTITIES[0];
  index: number;
  isReversed: boolean;
}

const EntityCard: React.FC<EntityCardProps> = ({ entity, index, isReversed }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: EASE }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
      style={{ direction: 'ltr' }}
    >
      {/* Image */}
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative overflow-hidden aspect-[4/3] bg-dark-800 border border-dark-600/30 group">
          <motion.img
            style={{ y: imageY }}
            src={entity.image}
            alt={entity.name}
            className="w-full h-[120%] object-cover opacity-50 grayscale contrast-125 brightness-105 group-hover:opacity-65 group-hover:grayscale-[50%] transition-all duration-1000 ease-out absolute top-0 left-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/30 to-transparent" />

          {/* Overlay label */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-warm-400/70">
              {entity.location}
            </span>
            <span className="text-[9px] font-mono tracking-[0.15em] text-warm-100/30">
              {entity.coords}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono text-warm-400/50">0{index + 1}</span>
          <div className="h-px w-12 bg-dark-600/50" />
        </div>

        <h3 className="text-3xl md:text-4xl font-serif text-warm-50 mb-2">
          {entity.name}
        </h3>
        <p className="text-base font-serif italic text-warm-300/60 mb-8">
          {entity.tagline}
        </p>

        <p className="text-base text-warm-100/50 leading-relaxed mb-10 font-light max-w-lg">
          {entity.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 border-t border-dark-600/40 pt-8">
          {entity.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[9px] uppercase tracking-[0.2em] text-warm-100/30 mb-2 font-medium">
                {stat.label}
              </div>
              <div className="text-lg md:text-xl font-semibold text-warm-400">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
