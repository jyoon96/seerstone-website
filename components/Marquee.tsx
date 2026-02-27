import React from 'react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false, className = '' }) => {
  const duplicated = [...items, ...items];

  return (
    <div className={`w-full overflow-hidden border-y border-dark-600/50 py-5 ${className}`}>
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {duplicated.map((item, i) => (
          <span key={i} className="flex items-center mx-8 md:mx-12">
            <span className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase text-stone-muted/70">
              {item}
            </span>
            <span className="ml-8 md:ml-12 w-1 h-1 rounded-full bg-warm-400/40" />
          </span>
        ))}
      </div>
    </div>
  );
};