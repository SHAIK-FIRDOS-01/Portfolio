import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Cpu, Database, Code2, Network, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "SyncForm AI",
    tagline: "AI-Powered Chat-to-Form Agent",
    description: "An intelligent, agentic module that lets users populate complex forms entirely through natural language. Powered by a LangGraph AI agent, it extracts entities like names, sentiment, and documents shared, featuring multi-turn editing and real-time Redux state sync.",
    features: ["React 19", "FastAPI", "LangGraph", "Groq LLaMA", "TailwindCSS", "SQLAlchemy"],
    metrics: [
      { value: "100%", label: "Agentic Flow" },
      { value: "5", label: "LangGraph Tools" },
      { value: "<1s", label: "Real-Time Sync" }
    ],
    icon: <Network className="text-blue-500" size={28} />,
    color: "text-blue-500"
  },
  {
    title: "Agent Console",
    tagline: "WebSocket State Machine",
    description: "A full-stack AI platform featuring a custom SequenceBuffer for strict sequence ordering and deduplication. Isolates WebSocket protocol concerns from a global Zustand store, enabling surgical partial state updates with zero reflows.",
    features: ["Next.js", "React", "Zustand", "Playwright", "Docker"],
    metrics: [
      { value: "30+", label: "Events / Sec" },
      { value: "Zero", label: "UI Reflows" },
      { value: "100%", label: "Traceability" }
    ],
    icon: <Code2 className="text-emerald-500" size={28} />,
    color: "text-emerald-500"
  },
  {
    title: "ScreenForge",
    tagline: "Role-Based AI Screening",
    description: "An AI-powered technical screening platform that dynamically generates custom interview questions based on candidate resumes and authoritative textbook RAG. Evaluates candidates in real-time with custom FAISS fallback searching.",
    features: ["FastAPI", "Groq", "FAISS", "React", "SQLite", "SentenceTransformers"],
    metrics: [
      { value: "Local", label: "Hybrid RAG" },
      { value: "Adaptive", label: "State Tracking" },
      { value: "Real-Time", label: "Grading" }
    ],
    icon: <Database className="text-purple-500" size={28} />,
    color: "text-purple-500"
  },
  {
    title: "Bus Matrix",
    tagline: "Scalable Transit Engine",
    description: "Architected a scalable route-mapping model for TGSRTC networks. Containerized the application using Docker and deployed the microservices architecture to AWS (EC2), establishing an efficient deployment workflow.",
    features: ["Django", "React", "MySQL", "Docker", "AWS (EC2)", "OSRM"],
    metrics: [
      { value: "40%", label: "Less Redundancy" },
      { value: "35%", label: "Faster Queries" },
      { value: "<200ms", label: "Latency" }
    ],
    icon: <Terminal className="text-amber-500" size={28} />,
    color: "text-amber-500"
  },
  {
    title: "SignalReport",
    tagline: "Enterprise News Analyst",
    description: "Built an autonomous AI agent pipeline leveraging Llama 3.3 and Groq with a full RAG stack for semantic memory. Designed a robust microservices architecture for LLM tool execution backed by JSON-schema guardrails.",
    features: ["Django", "FastAPI", "LangChain", "ChromaDB", "Llama 3.3", "PostgreSQL"],
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "100%", label: "Data Consistency" },
      { value: "High", label: "Concurrency" }
    ],
    icon: <Cpu className="text-rose-500" size={28} />,
    color: "text-rose-500"
  }
];

const ProjectDetail = ({ project, index, setActiveIndex }: { project: any, index: number, setActiveIndex: (idx: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // This hook checks if this specific project detail is vertically centered in the viewport
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div 
      ref={ref} 
      className="min-h-screen flex flex-col justify-center py-24 relative"
      id={`project-${index}`}
    >
      {/* Mobile Title (Only visible on small screens) */}
      <h2 className="text-5xl font-bold text-white mb-8 md:hidden tracking-tighter">
        {project.title}
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-8 md:p-12 bg-transparent border border-white/20 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="w-14 h-14 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center shadow-inner">
            {project.icon}
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold tracking-tight">{project.tagline}</h3>
            <span className={`${project.color} text-xs font-mono tracking-widest uppercase`}>System Architecture</span>
          </div>
        </div>

        <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed font-light mb-12 max-w-2xl">
          {project.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
          {project.metrics.map((metric: any, i: number) => (
            <div key={i} className="flex flex-col border-l border-[#27272a] pl-4">
              <span className="text-white font-bold text-3xl md:text-4xl tracking-tighter leading-none mb-2">{metric.value}</span>
              <span className="text-[#71717a] text-[10px] md:text-xs font-mono uppercase tracking-widest">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
           {project.features.map((feature: string, i: number) => (
             <span key={i} className="text-xs font-mono px-3 py-1.5 bg-transparent border border-[#27272a] text-[#a1a1aa] rounded-md uppercase tracking-wider hover:border-white transition-colors">
               {feature}
             </span>
           ))}
        </div>
        
        <a 
          href="https://github.com/SHAIK-FIRDOS-01" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative z-10 inline-flex items-center gap-2 text-white font-medium hover:text-[#3b82f6] transition-colors border-b border-white/20 hover:border-[#3b82f6] pb-1 w-max"
        >
          View on GitHub <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="relative w-full bg-transparent text-white">
      
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row relative">
        
        {/* LEFT SIDE: Sticky Sidebar (Desktop only) */}
        <div className="hidden md:flex w-1/3 flex-col justify-center h-screen sticky top-0 py-24 pl-4 lg:pl-0 z-10">
           <div className="mb-16">
             <span className="text-[#71717a] font-mono text-xs tracking-widest uppercase">Select Work</span>
             <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white mt-2">
               Case Studies
             </h2>
           </div>

           <div className="flex flex-col gap-6 relative">
             {/* Animated active indicator line */}
             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10">
                <motion.div 
                  className="w-full bg-white absolute shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                  initial={false}
                  animate={{ 
                    top: `${activeIndex * (100 / (projects.length - 1))}%`,
                    height: '24px',
                    translateY: '-50%'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
             </div>

             {projects.map((project, index) => (
               <button 
                 key={index}
                 onClick={() => {
                   document.getElementById(`project-${index}`)?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className={`text-left pl-6 text-2xl lg:text-4xl font-bold tracking-tight transition-all duration-300 ${
                   activeIndex === index 
                     ? 'text-white translate-x-2' 
                     : 'text-[#3f3f46] hover:text-[#71717a]'
                 }`}
               >
                 {project.title}
               </button>
             ))}
           </div>
        </div>

        {/* RIGHT SIDE: Scrolling Details */}
        <div className="w-full md:w-2/3 md:pl-16 lg:pl-24">
          {projects.map((project, index) => (
            <ProjectDetail 
              key={index} 
              project={project} 
              index={index} 
              setActiveIndex={setActiveIndex} 
            />
          ))}
          
          {/* Spacer to allow scrolling past the last project cleanly */}
          <div className="h-[10vh] w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
