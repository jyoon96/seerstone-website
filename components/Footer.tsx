import React from 'react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full pt-20 pb-12 bg-dark-950 border-t border-dark-600/20">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section: Large branding */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-auto text-warm-100/80">
              <Logo className="h-full w-auto" />
            </div>
          </div>
          <p className="text-sm text-warm-100/20 max-w-sm font-light leading-relaxed">
            Building the infrastructure of tomorrow through intelligence and scale. Global operations, local precision.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-400/50 mb-6">
              Americas
            </h4>
            <ul className="space-y-3">
              {['Los Angeles, USA', 'Boston, USA', 'Vancouver, CAN'].map((loc) => (
                <li key={loc} className="text-sm text-warm-100/25 font-light hover:text-warm-100/50 transition-colors duration-300 cursor-default">
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-400/50 mb-6">
              Global Hubs
            </h4>
            <ul className="space-y-3">
              {['Guangzhou, CN', 'Dong Guan, CN', 'Seoul, KR', 'Dubai, UAE'].map((loc) => (
                <li key={loc} className="text-sm text-warm-100/25 font-light hover:text-warm-100/50 transition-colors duration-300 cursor-default">
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-400/50 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Careers', id: 'careers' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-warm-100/25 font-light hover:text-warm-400 transition-colors duration-300 link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-400/50 mb-6">
              Inquiries
            </h4>
            <button
              onClick={scrollToContact}
              className="text-sm text-warm-400/70 font-light hover:text-warm-400 transition-colors duration-300 link-hover mb-6 text-left"
            >
              General Inquiry Form &rarr;
            </button>
            <p className="text-[11px] text-warm-100/20 font-mono leading-relaxed">
              contact@seerstone.vip<br />
              investors@seerstone.vip
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-600/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 text-[10px] text-warm-100/15 uppercase tracking-[0.2em] font-medium">
            <span>&copy; 2026 SeerStone Holdings</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex gap-8 text-[10px] text-warm-100/15 uppercase tracking-[0.2em] font-medium">
            <span className="hover:text-warm-100/40 transition-colors duration-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-warm-100/40 transition-colors duration-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
