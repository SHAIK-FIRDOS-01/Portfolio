import React from 'react';
import { Mail, ChevronUp } from 'lucide-react';


const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-black mb-2">Shaik <span className="text-gradient">Firdos</span></h3>
          <p className="text-text-muted text-sm">Building the bridge between AI research and production.</p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: <i className="fa-brands fa-github text-xl"></i>, href: "https://github.com/SHAIK-FIRDOS-01" },
            { icon: <i className="fa-brands fa-linkedin text-xl"></i>, href: "https://www.linkedin.com/in/shaikfirdos01" },
            { icon: <i className="fa-brands fa-x-twitter text-xl"></i>, href: "#" },
            { icon: <Mail size={20} />, href: "mailto:shaikfirdos340@gmail.com" }
          ].map((social, i) => (



            <a 
              key={i} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl hover:bg-white/10 hover:text-primary transition-all border-white/10"
            >

              {social.icon}
            </a>
          ))}
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all border-white/10 group"
        >
          <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold">
        <span>© 2024 SHAIK FIRDOS. ALL RIGHTS RESERVED.</span>
        <span className="hidden sm:block">BUILT WITH ANTIGRAVITY & REACT</span>
      </div>
    </footer>
  );
};

export default Footer;
