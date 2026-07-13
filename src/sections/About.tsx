import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, BookOpen, Star, User, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-b border-[#27272a]/50 bg-transparent">
      
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#0a0a0a] text-[#a1a1aa] text-xs font-medium tracking-wide mb-6">
          System Architecture
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#71717a]">Blueprint.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Main Bio - spanning 2 cols, 2 rows */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between group overflow-hidden bg-transparent border border-white/20 rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <User size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">System Architect & AI Engineer</h3>
            <p className="text-[#a1a1aa] leading-relaxed font-light text-base">
              I am a Python Full-Stack Developer specializing in scalable REST APIs, microservices architectures, and advanced AI pipelines (LangChain, RAG, LLM integrations).
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6 relative z-10">
            <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-md text-xs font-medium text-white">Python</span>
            <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-md text-xs font-medium text-white">React</span>
            <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-md text-xs font-medium text-white">AWS</span>
          </div>
        </motion.div>





        {/* Education - 2 cols, 1 row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-6 md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6 group bg-transparent border border-white/20 rounded-3xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
            <GraduationCap className="text-white" size={28} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">B.Tech — CSE</h4>
            <p className="text-[#a1a1aa] text-sm mt-1 font-light">Sree Venkateswara College of Engineering (2022-2025)</p>
            <div className="inline-block mt-3 text-xs font-medium text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded-md">CGPA: 7.9/10</div>
          </div>
        </motion.div>

        {/* Intermediate Education - 2 cols, 1 row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-6 md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6 group bg-transparent border border-white/20 rounded-3xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
            <BookOpen className="text-white" size={28} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Intermediate</h4>
            <p className="text-[#a1a1aa] text-sm mt-1 font-light">Narayana Junior College (2019-2021)</p>
            <div className="inline-block mt-3 text-xs font-medium text-white bg-[#27272a] px-2 py-1 rounded-md">CGPA: 8.8/10</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
