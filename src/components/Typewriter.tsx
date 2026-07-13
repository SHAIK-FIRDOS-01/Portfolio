import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBeforeDelete = 2000,
  className = ""
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof window.setTimeout>;

    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse border-r-[0.1em] border-white ml-1 inline-block" style={{ height: '0.8em', verticalAlign: 'baseline', marginBottom: '-0.1em' }}></span>
    </span>
  );
};

export default Typewriter;
