import Navbar from './components/Navbar';

import DataStream from './components/DataStream';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';

function App() {
  return (
    <main className="relative bg-deep-dark selection:bg-primary/30 selection:text-primary">
      <DataStream />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

export default App;
