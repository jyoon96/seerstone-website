import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const isHovering = useRef(false);
  const isTextHover = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const ringSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 };

  const springX = useSpring(ringX, ringSpringConfig);
  const springY = useSpring(ringY, ringSpringConfig);

  const onMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX - 4);
    cursorY.set(e.clientY - 4);
    ringX.set(e.clientX - 20);
    ringY.set(e.clientY - 20);
  }, [cursorX, cursorY, ringX, ringY]);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window) return;

    window.addEventListener('mousemove', onMouseMove);

    // Track hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"], input, textarea, select');
      const textTrigger = target.closest('[data-cursor="text"]');

      if (textTrigger) {
        isTextHover.current = true;
        document.body.classList.add('cursor-text');
        document.body.classList.remove('cursor-hover');
      } else if (interactive) {
        isHovering.current = true;
        document.body.classList.add('cursor-hover');
        document.body.classList.remove('cursor-text');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"], input, textarea, select');
      const textTrigger = target.closest('[data-cursor="text"]');

      if (interactive || textTrigger) {
        isHovering.current = false;
        isTextHover.current = false;
        document.body.classList.remove('cursor-hover', 'cursor-text');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onMouseMove]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <motion.div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{
          x: springX,
          y: springY,
        }}
      />
    </>
  );
};