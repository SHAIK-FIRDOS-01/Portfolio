import React from 'react';
import GlassCard from '../components/GlassCard';
import { Cpu, Globe, ShieldCheck, Layers, Zap } from 'lucide-react';


const skills = [
  {
    category: "Languages",
    icon: <Globe className="text-primary" />,
    items: ["Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks",
    icon: <Layers className="text-secondary" />,
    items: ["Django", "React", "Vite", "Tailwind CSS v4"]
  },
  {
    category: "AI & ML",
    icon: <Cpu className="text-accent" />,
    items: ["RAG Orchestration", "Hugging Face", "NLTK"]
  },
  {
    category: "Security & DB",
    icon: <ShieldCheck className="text-primary" />,
    items: ["JWT Auth", "Token Blacklisting", "MySQL"]
  },
  {
    category: "Tools",
    icon: <Zap className="text-secondary" />,
    items: ["Git", "GitHub Actions", "Docker"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-text-muted">Specialized in building high-performance, secure, and intelligent systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <GlassCard key={index} delay={index * 0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-xl">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
