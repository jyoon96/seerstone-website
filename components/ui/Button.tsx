import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "magnetic-btn px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-500";
  const variants = {
    primary: "bg-warm-400 text-dark-950 hover:bg-warm-300",
    outline: "border border-dark-500 text-warm-100 hover:border-warm-400 hover:text-warm-400"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
