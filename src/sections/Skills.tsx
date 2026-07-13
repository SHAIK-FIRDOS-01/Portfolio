import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, ShieldCheck, Layers, Zap, Database } from 'lucide-react';

const skills = [
  {
    category: "Languages & Frontend",
    icon: <Globe className="text-[#3b82f6]" size={20} />,
    items: ["Python (Proficient)", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS v4"]
  },
  {
    category: "Backend & Microservices",
    icon: <Layers className="text-[#ffffff]" size={20} />,
    items: ["Django", "DRF", "FastAPI", "Flask", "REST API Design", "Microservices"]
  },
  {
    category: "AI & Machine Learning",
    icon: <Cpu className="text-[#3b82f6]" size={20} />,
    items: ["LangChain", "LangGraph", "CrewAI", "RAG", "AI Agents", "Prompt Engineering", "HuggingFace", "Groq", "OpenAI"]
  },
  {
    category: "Databases & Vector Stores",
    icon: <Database className="text-[#ffffff]" size={20} />,
    items: ["PostgreSQL", "MySQL", "ChromaDB", "Pinecone", "FAISS"]
  },
  {
    category: "DevOps & Infrastructure",
    icon: <Zap className="text-[#3b82f6]" size={20} />,
    items: ["Git", "GitHub Actions (CI/CD)", "Linux", "Docker", "AWS", "pytest"]
  },
  {
    category: "Security & Auth",
    icon: <ShieldCheck className="text-[#ffffff]" size={20} />,
    items: ["JWT Auth", "Token Blacklisting", "CORS"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-b border-[#27272a]/50 bg-transparent">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#0a0a0a] text-[#a1a1aa] text-xs font-medium tracking-wide mb-6">
          Core Competencies
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#71717a]">Arsenal</span>
        </h2>
        <p className="text-[#a1a1aa] text-sm md:text-base font-light max-w-xl mx-auto">
          Specialized in building high-performance, secure, and intelligent production systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="p-8 h-full bg-transparent border border-white/20 shadow-2xl rounded-2xl flex flex-col transition-all duration-300 hover:bg-white/5 hover:border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-[#0a0a0a] border border-[#27272a] text-xs font-medium text-[#a1a1aa] rounded-md group-hover:border-[#3f3f46] group-hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
