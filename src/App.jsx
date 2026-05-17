import React, { useEffect } from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Starfield from './components/Starfield';
import { SectionDivider } from './components/Atoms';

function App() {
  useEffect(() => {
    // Setup reveal intersection observer
    const setupReveals = () => {
      const els = document.querySelectorAll('.reveal');
      if (!els.length) return;
      if (!('IntersectionObserver' in window)) return;
      
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.removeAttribute('data-pending');
            io.unobserve(e.target);
          }
        }
      }, { threshold: 0.05, rootMargin: '0px 0px -2% 0px' });
      
      els.forEach((el) => {
        if (el.dataset.revealInit) return;
        const r = el.getBoundingClientRect();
        const onScreen = r.top < window.innerHeight * 0.98 && r.bottom > 0;
        if (!onScreen) {
          el.setAttribute('data-pending', '');
          io.observe(el);
        }
        el.dataset.revealInit = '1';
      });
    };

    // Run immediately and after a short delay to catch components rendering
    setupReveals();
    setTimeout(setupReveals, 50);
    setTimeout(setupReveals, 250);
    setTimeout(setupReveals, 800);
  }, []);

  return (
    <>
      <Starfield />
      <div id="signalBar" className="signal-bar" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <SectionDivider variant="orbit" accent="var(--cyan)" />
        <About />
        <SectionDivider variant="wave" accent="var(--magenta)" />
        <Experience />
        <SectionDivider variant="constellation" accent="var(--violet)" />
        <Achievements />
        <SectionDivider variant="spectrum" accent="var(--magenta)" />
        <Skills />
        <SectionDivider variant="comet" accent="var(--cyan)" />
        <Contact />
      </main>
    </>
  );
}

export default App;
