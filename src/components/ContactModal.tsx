import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Maximize2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.get('email'),
          name: formData.get('name'),
          message: formData.get('message')
        })
      });
      
      const json = await response.json();
      
      if (response.ok && json.success) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
      
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: isMinimized ? 'calc(100% - 48px)' : 0, 
            scale: 1,
            width: isMaximized ? '100vw' : '400px',
            height: isMaximized ? '100vh' : '500px',
            right: isMaximized ? 0 : '24px',
            bottom: isMaximized ? 0 : '24px'
          }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`fixed z-[100] flex flex-col bg-[#0a0a0a] border border-[#27272a] shadow-2xl ${
            isMaximized ? 'rounded-none' : 'rounded-t-xl rounded-b-md'
          } overflow-hidden`}
          style={{
            maxWidth: isMaximized ? '100%' : 'calc(100vw - 48px)',
            maxHeight: isMaximized ? '100%' : 'calc(100vh - 48px)',
          }}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-[#27272a] cursor-pointer"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <span className="text-white text-sm font-medium tracking-wide">New Message</span>
            <div className="flex items-center gap-3 text-[#a1a1aa]">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                className="hover:text-white transition-colors"
              >
                <Minus size={16} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); setIsMinimized(false); }}
                className="hover:text-white transition-colors hidden sm:block"
              >
                <Maximize2 size={14} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Form Body */}
          <form 
            onSubmit={handleSubmit}
            className={`flex flex-col flex-1 ${isMinimized ? 'hidden' : 'flex'}`}
          >
            {/* Hidden field for Formspree/Web3Forms subject if needed */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission!" />



            <div className="flex items-center border-b border-[#27272a] px-4 py-2">
              <span className="text-[#71717a] text-sm w-12">From</span>
              <input 
                type="email" 
                name="email"
                required
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-[#3f3f46]"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex items-center border-b border-[#27272a] px-4 py-2">
              <input 
                type="text" 
                name="name"
                required
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-[#3f3f46] font-medium"
                placeholder="Your Name"
              />
            </div>

            <div className="flex-1 p-4">
              <textarea 
                name="message"
                required
                className="w-full h-full bg-transparent border-none outline-none text-white text-sm resize-none placeholder-[#3f3f46]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Footer */}
            <div className="p-4 flex items-center justify-between bg-[#18181b]/50 border-t border-[#27272a]">
              <button 
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === 'success' ? (
                  <span>Sent!</span>
                ) : (
                  <>
                    Send
                    <Send size={14} />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <span className="text-red-500 text-xs">Failed to send. Try again.</span>
              )}
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
