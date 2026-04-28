import React from 'react';
import GlassCard from '../components/GlassCard';
import { Terminal, Cpu } from 'lucide-react';



const projects = [
  {
    title: "Bus Matrix",
    tagline: "Scalable Transit Intelligence Engine",
    description: "Architected a 'Grand Corridor' model to solve O(N²) scaling bottlenecks in route management, reducing database redundancy by 40%.",
    features: ["OSRM Integration", "JWT Security", "Relational Indexing"],
    metrics: ["35% Faster Queries", "100% Billing Accuracy"],
    icon: <Terminal className="text-primary" />,
    color: "from-primary/20",
    github: "https://github.com/SHAIK-FIRDOS-01/Bus-Matrix-Scalable-Transit-Intelligence-Engine",
    link: "https://github.com/SHAIK-FIRDOS-01/Bus-Matrix-Scalable-Transit-Intelligence-Engine"
  },
  {
    title: "SignalReport",
    tagline: "Enterprise AI News Analyst",
    description: "Architected an autonomous RAG pipeline using Llama 3.3 to transform high-volume news into structured semantic intelligence.",
    features: ["Autonomous RAG", "Sentiment Analysis", "JSON-Schema Enforcement"],
    metrics: ["99.9% Uptime", "30% Noise Reduction"],
    icon: <Cpu className="text-secondary" />,
    color: "from-secondary/20",
    github: "https://github.com/SHAIK-FIRDOS-01/SignalReport-Enterprise-AI-News-Analyst",
    link: "https://github.com/SHAIK-FIRDOS-01/SignalReport-Enterprise-AI-News-Analyst"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Featured <span className="text-gradient">Innovations</span></h2>
          <p className="text-text-muted text-lg">Scalable systems designed for performance and production-ready resilience.</p>
        </div>
        <button 
          onClick={() => window.open('https://github.com/SHAIK-FIRDOS-01', '_blank')}
          className="px-6 py-3 glass rounded-xl text-sm font-bold border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
        >
          View All on GitHub <i className="fa-brands fa-github text-lg"></i>
        </button>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <GlassCard key={index} delay={index * 0.2} className="flex flex-col h-full">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} to-transparent blur-3xl -z-10 opacity-50`} />
            
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl border-white/20">
                {project.icon}
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg border-white/10 hover:text-primary transition-colors">
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg border-white/10 hover:text-primary transition-colors">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-3xl font-black mb-2">{project.title}</h3>
              <p className="text-primary font-semibold mb-4 text-sm tracking-widest uppercase">{project.tagline}</p>
              <p className="text-text-muted mb-8 leading-relaxed">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3 glass rounded-xl border-white/5 bg-white/5">
                    <p className="text-white font-bold text-lg">{metric.split(' ')[0]}</p>
                    <p className="text-text-muted text-xs uppercase tracking-tighter">{metric.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
              {project.features.map((feature, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 glass border-white/10 text-white/60">
                  {feature}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
