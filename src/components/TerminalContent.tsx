import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface HistoryItem {
  command: string;
  response: React.ReactNode;
}

const TerminalContent: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial boot sequence
    const bootSequence = [
      "FirdosOS v1.0.0 starting...",
      "Initializing AI Agent...",
      "Loading skills and experience...",
      "Type 'help' to see available commands."
    ];
    
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setHistory(prev => [...prev, { command: '', response: <span className="text-[#a1a1aa]">{bootSequence[currentLine]}</span> }]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="text-[#a1a1aa] ml-2">
            <div>Available commands:</div>
            <div className="text-[#61afef] mt-1">whoami<span className="text-[#a1a1aa]"> - display identity</span></div>
            <div className="text-[#61afef]">skills<span className="text-[#a1a1aa]"> - list core competencies</span></div>
            <div className="text-[#61afef]">projects<span className="text-[#a1a1aa]"> - show recent work</span></div>
            <div className="text-[#61afef]">clear<span className="text-[#a1a1aa]"> - clear terminal</span></div>
            <div className="text-[#eab308]">sudo hire firdos<span className="text-[#a1a1aa]"> - hire me!</span></div>
          </div>
        );
        break;
      case 'whoami':
        response = <div className="text-[#98c379]">Shaik Firdos - System Architect & Full-Stack Developer. Specialized in scalable systems and AI integrations.</div>;
        break;
      case 'skills':
        response = <div className="text-[#c678dd]">TypeScript, React, Node.js, Python, AWS, Docker, Kubernetes, LLMs, GraphQL</div>;
        break;
      case 'projects':
        response = <div className="text-[#61afef]">Accessing project database... Please scroll down to view visual representations.</div>;
        break;
      case 'sudo hire firdos':
        response = <div className="text-[#22c55e] font-bold">Offer accepted! Opening contact form...</div>;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
        });
        window.dispatchEvent(new Event('openContact'));
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = <div className="text-[#ef4444]">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }

    setHistory(prev => [...prev, { command: input, response }]);
    setInput('');
  };

  return (
    <div 
      className="w-[calc(100vw-3rem)] sm:w-[500px] h-[340px] bg-black/40 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Top Bar */}
      <div className="h-10 bg-white/5 border-b border-white/20 flex items-center px-4 gap-2 shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
        <div className="w-3 h-3 rounded-full bg-[#eab308]" />
        <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
        <span className="ml-4 text-xs font-mono text-[#a1a1aa] tracking-wide">guest@firdos-portfolio:~</span>
      </div>
      
      {/* Terminal Content Area */}
      <div 
        ref={containerRef}
        className="p-4 font-mono text-sm leading-relaxed text-[#a1a1aa] overflow-y-auto flex-1 custom-scrollbar"
      >
        {history.map((item, i) => (
          <div key={i} className="mb-2">
            {item.command && (
              <div className="flex gap-2 text-white">
                <span className="text-[#22c55e]">➜</span>
                <span className="text-[#61afef]">~</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="mt-1">{item.response}</div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2 text-white mt-2">
          <span className="text-[#22c55e]">➜</span>
          <span className="text-[#61afef]">~</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-white caret-[#61afef]"
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalContent;
