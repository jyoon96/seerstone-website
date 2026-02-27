import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [loaded, setLoaded] = useState(false);

  const yText = useTransform(scrollY, [0, 800], [0, -150]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  // Mouse tracking for ambient orbs
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 40, stiffness: 90 };
  const orbX1 = useSpring(useTransform(mouseX, [0, 1], [-60, 60]), springConfig);
  const orbY1 = useSpring(useTransform(mouseY, [0, 1], [-40, 40]), springConfig);
  const orbX2 = useSpring(useTransform(mouseX, [0, 1], [40, -40]), springConfig);
  const orbY2 = useSpring(useTransform(mouseY, [0, 1], [30, -30]), springConfig);
  const orbX3 = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { damping: 50, stiffness: 70 });
  const orbY3 = useSpring(useTransform(mouseY, [0, 1], [20, -20]), { damping: 50, stiffness: 70 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headlineWords = [
    { text: 'The Future', serif: false },
    { text: 'of Integrated', serif: true },
    { text: 'Commerce.', serif: false },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-dark-950"
    >
      {/* Ambient Gradient Orbs */}
      <motion.div
        className="orb orb-gold w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        style={{ x: orbX1, y: orbY1, top: '10%', right: '10%', position: 'absolute' }}
      />
      <motion.div
        className="orb orb-purple w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
        style={{ x: orbX2, y: orbY2, bottom: '15%', left: '5%', position: 'absolute' }}
      />
      <motion.div
        className="orb orb-blue w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        style={{ x: orbX3, y: orbY3, top: '40%', left: '40%', position: 'absolute' }}
      />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,169,126,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,126,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-10 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 flex-grow flex flex-col justify-center max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-32"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1, ease: EASE_OUT_EXPO as unknown as number[] }}
          className="flex items-center gap-5 mb-12 md:mb-16"
        >
          <div className="divider-gold" />
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase text-warm-400">
            Global Infrastructure Holdings
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10 md:mb-14" data-cursor="text">
          {headlineWords.map((word, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={loaded ? { y: '0%' } : {}}
                transition={{
                  delay: 0.3 + index * 0.12,
                  duration: 1.2,
                  ease: EASE_OUT_EXPO as unknown as number[],
                }}
              >
                <h1
                  className={`text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] tracking-[-0.04em] ${
                    word.serif
                      ? 'font-serif italic text-warm-300 font-normal'
                      : 'font-sans font-semibold text-warm-50'
                  }`}
                >
                  {word.text}
                </h1>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subtext + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 1, ease: EASE_OUT_EXPO as unknown as number[] }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <p className="text-sm md:text-base text-stone-muted max-w-md leading-relaxed font-light">
            SeerStone combines advanced artificial intelligence with owned global logistics to build category-defining brands across every continent.
          </p>

          <div className="flex gap-4">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="magnetic-btn px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold bg-warm-400 text-dark-950 hover:bg-warm-300 transition-colors duration-500"
            >
              Explore
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="magnetic-btn px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold border border-dark-500 text-warm-100 hover:border-warm-400 hover:text-warm-400 transition-all duration-500"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-20 w-full py-5 border-t border-dark-600/40"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-4 md:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-100/50">
              All Systems Operational
            </span>
          </div>

          <div className="hidden md:flex gap-x-8 text-[10px] font-medium tracking-[0.2em] uppercase text-dark-300">
            {['Guangzhou', 'Dong Guan', 'Seoul', 'Dubai', 'Los Angeles', 'Massachusetts', 'Vancouver'].map((loc) => (
              <span key={loc} className="hover:text-warm-400 transition-colors duration-300 cursor-none">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-dark-300 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-warm-400/60 to-transparent"
        />
      </motion.div>
    </div>
  );
};
