import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

interface Metric {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const METRICS: Metric[] = [
  { prefix: '$', value: 100, suffix: 'M+', label: 'Revenue Generated' },
  { value: 200, suffix: 'K', label: 'Orders Per Day' },
  { value: 7, suffix: '', label: 'Global Offices' },
  { value: 40, suffix: '+', label: 'Markets Served' },
];

const AnimatedCounter: React.FC<{ metric: Metric; delay: number }> = ({ metric, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const increment = metric.value / steps;

      const interval = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCount(metric.value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, metric.value, delay]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-5xl md:text-6xl lg:text-7xl font-light text-warm-50 tracking-tight mb-3">
        <span className="text-warm-400">{metric.prefix || ''}</span>
        {count}
        <span className="text-warm-400">{metric.suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-warm-100/30 font-medium">
        {metric.label}
      </div>
    </div>
  );
};

export const Metrics: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-dark-950 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #C8A97E 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-warm-400">
            By The Numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: EASE }}
            >
              <AnimatedCounter metric={metric} delay={index * 200} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
