import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import ContactModal from './ContactModal';

const Navbar: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => setIsContactModalOpen(true);
    window.addEventListener('openContact', handleOpenContact);
    return () => window.removeEventListener('openContact', handleOpenContact);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 nav-blur"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Terminal size={20} className="text-black" />
            </div>
            <span className="font-bold tracking-tight text-xl hidden sm:block text-white">
              SF<span className="text-[#a1a1aa]">.DEV</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#a1a1aa]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/SHAIK-FIRDOS-01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#27272a] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#18181b] hover:border-[#3f3f46] text-[#a1a1aa] hover:text-white transition-all">
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/shaikfirdos01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#27272a] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] text-[#a1a1aa] hover:text-white transition-all">
              <i className="fa-brands fa-linkedin text-lg"></i>
            </a>

            <button 
              onClick={() => setIsContactModalOpen(true)} 
              className="spatial-btn hidden sm:flex text-sm px-5 py-2"
            >
              Hire Me
            </button>
          </div>
        </div>
      </motion.nav>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
