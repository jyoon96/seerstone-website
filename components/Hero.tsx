import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { GLOBAL_LOCATIONS } from '../constants';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for scroll
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Mouse parallax simulation using MotionValues for performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // Move up to 20px
    const y = (clientY / innerHeight - 0.5) * 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  // Invert X for text to create parallax depth (text moves opposite to background)
  const springXText = useSpring(useTransform(mouseX, value => value * -0.5), springConfig);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[900px] flex flex-col justify-between overflow-hidden bg-charcoal"
    >
      {/* Background Image - Architectural/Abstract Structure */}
      <motion.div 
        style={{ y: yBackground, x: springX, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-charcoal/30 z-10"></div>
        {/* Using a high-end architectural abstract image instead of nature/flowers */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
          alt="SeerStone Architecture" 
          className="w-full h-full object-cover opacity-60 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
      </motion.div>

      {/* Grid Overlay for "Tech" feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-20 flex-grow flex flex-col justify-center max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-32">
        <motion.div 
          style={{ opacity: textOpacity, x: springXText }}
          className="max-w-6xl"
        >
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
             <div className="h-[2px] w-8 bg-navy"></div>
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-navy">Global Infrastructure Holdings</span>
          </motion.div>

          {/* Main Headline with stagger effect */}
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-jet mb-10 leading-[0.85] -ml-1">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                The Future of
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block text-navy italic serif font-light"
              >
                Integrated Commerce.
              </motion.span>
            </div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-2xl text-charcoal/70 max-w-2xl mb-12 font-light leading-relaxed border-l-2 border-charcoal/10 pl-8 py-2"
          >
            SeerStone combines advanced artificial intelligence with owned global logistics to build category-defining brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4"
          >
            <Button variant="primary">View Capabilities</Button>
            <Button variant="outline" className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white">Our Portfolio</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Global Presence Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-20 w-full py-6 border-t border-charcoal/10 bg-white/60 backdrop-blur-md"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-6 md:justify-between">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-jet">System Status: Operational</span>
          </div>
          
          <div className="hidden md:flex gap-x-8 text-[10px] font-medium tracking-widest uppercase text-charcoal/50">
            {GLOBAL_LOCATIONS.map((loc, index) => (
              <span key={loc} className="hover:text-navy transition-colors cursor-default">{loc}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};