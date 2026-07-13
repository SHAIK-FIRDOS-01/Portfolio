import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Brainovision Solutions Pvt. Ltd.',
    role: 'Backend Developer Intern',
    period: '12/2024 - 04/2025',
    bullets: [
      'Engineered a RESTful Python/Flask API to serve a real-time machine learning model, configuring Flask-CORS to guarantee seamless and secure cross-origin JSON data transmission with the React frontend.',
      'Integrated a scikit-learn Random Forest Classifier into the backend architecture, utilizing Pandas for real-time data processing and one-hot encoding to accurately categorize incoming network traffic parameters as Normal, DoS, or SQL Injection attacks.'
    ],
    skills: ['Python', 'Flask', 'Machine Learning', 'scikit-learn', 'Pandas', 'RESTful APIs'],
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-b border-[#27272a]/50 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6 mb-16 pb-6 border-b border-[#27272a]">
          <div className="w-12 h-12 bg-[#18181b] border border-[#27272a] rounded-xl flex items-center justify-center shrink-0">
            <Briefcase size={24} className="text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#0a0a0a] text-[#a1a1aa] text-xs font-medium tracking-wide mb-2">
              Career Timeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="spatial-card p-8 bg-transparent border border-white/20 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6 pb-6 border-b border-white/20">
                  <div className="w-14 h-14 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                    <Building className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold tracking-tight text-white">{exp.role}</h3>
                      <span className="inline-block px-3 py-1 bg-[#18181b] text-[#a1a1aa] font-medium text-xs rounded-md border border-[#27272a]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#3b82f6] font-medium text-sm mt-1">{exp.company}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm leading-relaxed text-[#a1a1aa] font-light">
                      <ChevronRight className="text-[#3b82f6] shrink-0 mt-1" size={16} />
                      <span className="max-w-2xl">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-white/5 border border-white/20 text-xs font-medium text-white rounded-md backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
