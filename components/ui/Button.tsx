import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-8 py-3 text-sm tracking-wide uppercase transition-all duration-300 ease-out border font-medium";
  const variants = {
    primary: "bg-navy text-white border-navy hover:bg-charcoal hover:border-charcoal",
    outline: "bg-transparent text-navy border-navy hover:bg-navy hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};