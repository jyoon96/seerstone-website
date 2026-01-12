import React from 'react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="w-full py-20 border-t border-light-grey bg-white text-sm text-charcoal/70">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 flex flex-col justify-between h-full">
             <div className="text-xl font-bold text-jet tracking-tight uppercase mb-6 flex items-center gap-3">
               <div className="h-8 w-auto text-navy">
                 <Logo className="h-full w-auto" />
               </div>
             </div>
             <p className="text-charcoal/40 text-xs leading-relaxed max-w-[200px]">
               Building the infrastructure of tomorrow through intelligence and scale.
             </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-jet mb-6 uppercase tracking-widest text-[10px]">Americas</h4>
            <ul className="space-y-3 font-light">
              <li className="hover:text-navy cursor-default transition-colors">Los Angeles, USA</li>
              <li className="hover:text-navy cursor-default transition-colors">Boston, USA</li>
              <li className="hover:text-navy cursor-default transition-colors">Vancouver, CAN</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-jet mb-6 uppercase tracking-widest text-[10px]">Global Hubs</h4>
            <ul className="space-y-3 font-light">
              <li className="hover:text-navy cursor-default transition-colors">Guangzhou, CN</li>
              <li className="hover:text-navy cursor-default transition-colors">Dong Guan, CN</li>
              <li className="hover:text-navy cursor-default transition-colors">Seoul, KR</li>
              <li className="hover:text-navy cursor-default transition-colors">Dubai, UAE</li>
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="font-bold text-jet mb-6 uppercase tracking-widest text-[10px]">Inquiries</h4>
             <button 
               onClick={scrollToContact}
               className="text-navy font-medium hover:underline decoration-1 underline-offset-4 transition-all mb-6"
             >
               General Inquiry Form &rarr;
             </button>
             <p className="text-charcoal/40 text-xs font-mono">
               contact@seerstone.vip<br/>
               investors@seerstone.vip
             </p>
          </div>
        </div>
        
        <div className="border-t border-light-grey pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-charcoal/30 uppercase tracking-widest font-medium">
           <div className="flex gap-8">
             <span>© 2026 SeerStone Holdings</span>
             <span>All Rights Reserved</span>
           </div>
           <div className="flex gap-8 mt-4 md:mt-0">
             <span className="cursor-pointer hover:text-charcoal transition-colors">Privacy Policy</span>
             <span className="cursor-pointer hover:text-charcoal transition-colors">Terms of Service</span>
           </div>
        </div>
      </div>
    </footer>
  );
};