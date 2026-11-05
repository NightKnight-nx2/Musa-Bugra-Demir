import React, { useCallback, useEffect, useState } from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Archive, Featured, Games } from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import About from './components/About';
import Contact from './components/Contact';
import CaseStudy from './components/CaseStudy';

// Hash routes: "#/p/<slug>" = case study; "#/#<section>" = home scrolled to a section; anything else = home.
function parseHash() {
  const h = window.location.hash;
  const m = h.match(/^#\/p\/([\w-]+)/);
  if (m) return { page: 'case', slug: m[1] };
  const s = h.match(/^#\/#([\w-]+)/);
  return { page: 'home', section: s ? s[1] : null };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);
  const [cat, setCat] = useState('all');

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (route.page === 'home' && route.section) {
      requestAnimationFrame(() => document.getElementById(route.section)?.scrollIntoView());
    }
  }, [route]);

  const pickCategory = useCallback((id) => {
    setCat(id);
    document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (route.page === 'case') {
    return (
      <>
        <Navbar onHome={false} />
        <CaseStudy slug={route.slug} />
      </>
    );
  }

  return (
    <>
      <Navbar onHome />
      <main id="main" className="wrap">
        <Hero />
        <Featured />
        <Games />
        <Archive cat={cat} setCat={setCat} />
        <Experience />
        <Achievements />
        <About onPickCategory={pickCategory} />
        <Contact />
      </main>
    </>
  );
}
