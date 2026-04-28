import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';



const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
            <Terminal size={18} className="text-white" />
          </div>
          <span className="font-bold tracking-tight text-lg hidden sm:block">SF.dev</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-text-muted">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/SHAIK-FIRDOS-01" target="_blank" className="p-2 hover:bg-white/5 rounded-full transition-colors text-text-muted hover:text-primary">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/shaikfirdos01" target="_blank" className="p-2 hover:bg-white/5 rounded-full transition-colors text-text-muted hover:text-primary">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>



          <a href="mailto:shaikfirdos340@gmail.com" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-semibold transition-all border border-primary/20">
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
