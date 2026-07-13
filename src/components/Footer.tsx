import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-[#27272a] bg-[#030303]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2 tracking-tight text-white">Shaik <span className="text-[#a1a1aa]">Firdos</span></h3>
          <p className="text-[#a1a1aa] text-sm max-w-sm font-light leading-relaxed">
            Engineering production-grade AI pipelines and high-performance backend systems.
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#27272a] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#18181b] hover:border-[#3f3f46] text-[#a1a1aa] hover:text-white transition-all group"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#27272a]/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wide text-[#a1a1aa] font-medium">
        <span>© 2026 Shaik Firdos. All rights reserved.</span>
        <span className="text-white">System Architect</span>
      </div>
    </footer>
  );
};

export default Footer;
