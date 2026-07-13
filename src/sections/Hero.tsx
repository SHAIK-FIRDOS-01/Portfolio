import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import TerminalContent from '../components/TerminalContent';
import Typewriter from '../components/Typewriter';
import useMagnetic from '../hooks/useMagnetic';

const Hero: React.FC = () => {
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  
  useMagnetic(btn1Ref);
  useMagnetic(btn2Ref);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row pt-24 md:pt-0 overflow-x-hidden bg-transparent">
      
      {/* Left side text content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center my-auto px-6 md:px-16 lg:px-24 z-10 py-10 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#0a0a0a] text-[#a1a1aa] text-xs font-medium tracking-wide mb-8 hover:border-[#3b82f6]/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
            System Architect & Full-Stack Developer
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-6 leading-[1.1] text-white drop-shadow-xl min-h-[160px] md:min-h-[220px]">
            Engineering
            <br />
            <Typewriter 
              words={["Digital Experiences", "Scalable Systems", "AI Pipelines", "Neural Networks"]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#71717a]"
              typingSpeed={50}
              deletingSpeed={30}
              delayBeforeDelete={1500}
            />
            <br />
            That Scale.
          </h1>

          <p className="text-[#a1a1aa] text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light">
            I am <span className="text-white font-medium">Shaik Firdos</span>. 
            I architect high-performance web applications and AI data pipelines that drive business growth. Specialized in distributed systems and LLM integrations.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.a 
              ref={btn1Ref}
              href="#projects" 
              className="spatial-btn group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#030303] relative z-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See The Impact
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              ref={btn2Ref}
              href="/SHAIK_FIRDOS.pdf" 
              download="Shaik_Firdos_Resume.pdf"
              className="spatial-btn-secondary group focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#030303] relative z-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Right side Visual Area - Terminal */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-screen relative flex items-center justify-center p-6 z-10 my-auto">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#030303]/10 to-[#030303] z-0 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10"
        >
           <TerminalContent />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
