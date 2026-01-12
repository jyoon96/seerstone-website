import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, noPadding = false }) => {
  return (
    <section id={id} className={`w-full ${noPadding ? '' : 'py-24 md:py-32'} ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
};