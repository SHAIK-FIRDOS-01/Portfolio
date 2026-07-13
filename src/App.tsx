import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import DataStream from './components/DataStream';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';
import Experience from './sections/Experience';
import WebGLBackground from './components/WebGLBackground';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <main className="relative bg-[#030303] selection:bg-primary/30 selection:text-primary min-h-screen text-white">
      <WebGLBackground />
      
      <div className="relative z-10">
        <DataStream />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

export default App;
