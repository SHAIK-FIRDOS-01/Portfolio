import React from 'react';
import { motion } from 'framer-motion';

const VinylRecord = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="relative w-24 h-24 rounded-full bg-[#111] border-2 border-[#222] shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden shrink-0"
    >
      {/* Grooves */}
      <div className="absolute inset-2 rounded-full border border-[#2a2a2a]/50" />
      <div className="absolute inset-4 rounded-full border border-[#2a2a2a]/50" />
      <div className="absolute inset-6 rounded-full border border-[#2a2a2a]/50" />
      <div className="absolute inset-8 rounded-full border border-[#2a2a2a]/50" />
      
      {/* Center Label */}
      <div className="relative w-10 h-10 rounded-full bg-[#e5e7eb] flex items-center justify-center z-10 overflow-visible">
        {/* Hole */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#111] absolute z-20" />
        
        {/* Circular text */}
        <svg viewBox="0 0 100 100" className="absolute inset-[-12px] w-[100px] h-[100px] z-10 text-black origin-center scale-[0.6]">
          <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
          <text fontSize="11" fill="#000" fontWeight="bold" letterSpacing="1.5">
            <textPath href="#circlePath" startOffset="0%">
              LANA DEL REY • SALVATORE •
            </textPath>
          </text>
        </svg>

        {/* Small center image placeholder */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 absolute z-0 flex items-center justify-center border border-gray-400">
            <span className="text-[6px] text-white font-serif italic">LDR</span>
        </div>
      </div>
      
      {/* Light Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-full z-20 pointer-events-none" />
    </motion.div>
  );
};

const AvatarPlayer: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center mt-10 md:mt-0">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Avatar Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-72 h-[420px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-[#27272a]"
      >
        <img 
          src="/avatar.png" 
          alt="AI Avatar listening to music" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating Vinyl Player Component */}
      <motion.div
        initial={{ opacity: 0, x: -20, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0, y: [0, 8, 0] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 },
          rotate: { duration: 0.8, delay: 0.4 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
        className="absolute -bottom-6 -right-6 md:right-0 z-20"
      >
        <div className="flex items-center bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#27272a] p-3 pr-8 rounded-full shadow-2xl">
          <VinylRecord />
          <div className="ml-5 flex flex-col justify-center">
            <span className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest mb-1">Now Playing</span>
            <span className="text-white font-bold text-lg leading-none mb-1">Salvatore</span>
            <span className="text-[#a1a1aa] text-sm italic font-serif">Lana Del Rey</span>
            
            {/* Audio wave animation */}
            <div className="flex items-end gap-1 mt-3 h-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ height: ['20%', '100%', '20%'] }}
                  transition={{ duration: 0.8 + (i * 0.1), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                  className="w-1 bg-[#3b82f6] rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AvatarPlayer;
