import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-light-grey py-3' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <a href="#" onClick={scrollToTop} className={`text-2xl font-bold tracking-tight uppercase flex items-center gap-3 group ${isScrolled ? 'text-jet' : 'text-jet'}`}>
           <div className="h-10 w-auto">
             <Logo className="h-full w-auto" />
           </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xs font-semibold tracking-widest uppercase text-charcoal/80">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-navy transition-colors">About</a>
          <a href="#logistics" onClick={(e) => scrollToSection(e, 'logistics')} className="hover:text-navy transition-colors">Logistics</a>
          <a href="#timeline" onClick={(e) => scrollToSection(e, 'timeline')} className="hover:text-navy transition-colors">History</a>
          <a href="#careers" onClick={(e) => scrollToSection(e, 'careers')} className="hover:text-navy transition-colors">Careers</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-navy transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-light-grey py-8 px-6 flex flex-col gap-6 text-lg shadow-xl animate-in slide-in-from-top-5">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#logistics" onClick={(e) => scrollToSection(e, 'logistics')}>Logistics</a>
          <a href="#timeline" onClick={(e) => scrollToSection(e, 'timeline')}>History</a>
          <a href="#careers" onClick={(e) => scrollToSection(e, 'careers')}>Careers</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
};