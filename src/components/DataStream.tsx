import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const DataStream: React.FC = () => {
  const streams = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
      width: 1 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            left: stream.left,
            width: `${stream.width}px`,
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, #0ea5e9, transparent)',
            boxShadow: '0 0 15px #0ea5e9',
            willChange: 'transform',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />
    </div>
  );
};

export default DataStream;
