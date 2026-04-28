import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Briefcase, GraduationCap, MapPin, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8">Bridging <span className="text-gradient">Logic & Creativity.</span></h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-bold">Machine Learning Engineer</span> with a deep passion for building AI-native infrastructure. 
              My work focuses on RAG (Retrieval-Augmented Generation) orchestration, where I build the pipes that connect LLMs to real-world data securely.
            </p>
            <p>
              I believe in "Rapid Product Shipping" without compromising on system resilience. 
              Whether it's optimizing $O(N^2)$ scaling bottlenecks or hardening JWT authentication systems, 
              I own the entire lifecycle from research to production-ready code.
            </p>
            <div className="flex items-center gap-4 text-white font-medium py-4">
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                <MapPin size={16} className="text-primary" />
                India
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                <Briefcase size={16} className="text-secondary" />
                Available for Hire
              </div>
            </div>
            <a 
              href="/Resume.pdf" 
              download="Shaik_Firdos_Resume.pdf"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              Download Full Resume <Download size={20} />
            </a>
          </div>
        </motion.div>

        <div className="space-y-6">
          <GlassCard className="!bg-primary/5 border-primary/20">
            <div className="flex gap-4">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-xl shrink-0">
                <Briefcase className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold">AI-Native Full-Stack Engineer</h4>
                <p className="text-text-muted">RAG & Scalable Systems</p>
                <p className="text-primary text-sm font-semibold mt-2">Present</p>
              </div>
            </div>
          </GlassCard>


          <GlassCard>
            <div className="flex gap-4">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-xl shrink-0">
                <GraduationCap className="text-secondary" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Bachelor of Technology</h4>
                <p className="text-text-muted">Computer Science Engineering</p>
                <p className="text-secondary text-sm font-semibold mt-2">Specialized in AI & ML</p>
              </div>
            </div>
          </GlassCard>

          <div className="p-8 glass rounded-2xl border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
             <h4 className="text-3xl font-black mb-2 text-gradient">25%</h4>
             <p className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Security Improvement</p>
             <p className="text-text-muted text-sm">Reduction in unauthorized API attempts through advanced JWT blacklisting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
