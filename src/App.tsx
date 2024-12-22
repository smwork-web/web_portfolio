import React from 'react';
import { LoadingProvider } from './components/loading/LoadingContext';
import LoadingAnimation from './components/loading/LoadingAnimation';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <LoadingProvider>
      <div className="relative bg-black">
        <LoadingAnimation />
        <CustomCursor />
        <ThreeBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </LoadingProvider>
  );
}

export default App;