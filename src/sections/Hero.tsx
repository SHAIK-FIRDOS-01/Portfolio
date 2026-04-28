import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BrainCircuit } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-sm font-medium text-primary shadow-xl">
          <Sparkles size={16} />
          <span>AI-Native Full-Stack Engineer</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
          Architecting the <br />
          <span className="text-gradient">Future of AI.</span>
        </h1>

        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Shaik Firdos</span>. 
          Specialized in RAG Orchestration, Enterprise Security, and building 
          high-performance production systems that bridge the gap between research and product.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/25 group">
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10">
            <BrainCircuit size={20} />
            ML Expertise
          </button>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 md:left-40 w-12 h-12 glass flex items-center justify-center rounded-xl border-white/10 rotate-12"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-40 w-16 h-16 glass flex items-center justify-center rounded-2xl border-white/10 -rotate-12"
      >
        <div className="w-4 h-4 rounded bg-secondary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
