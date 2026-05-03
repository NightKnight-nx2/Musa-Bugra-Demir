import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'achievements', 'skills', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      if (current) {
        if (window.location.hash !== `#${current}`) {
          window.history.replaceState(null, null, `#${current}`);
          setActiveHash(`#${current}`);
        }
      } else if (window.scrollY < 100) {
        if (window.location.hash !== '') {
          window.history.replaceState(null, null, ' ');
          setActiveHash('');
        }
      }
    };

    setActiveHash(window.location.hash);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter" onClick={() => { window.history.replaceState(null, null, ' '); setActiveHash(''); }}>
          <span className="text-white">MBD</span>
          <span className="text-[var(--color-neon-purple)]">.</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" onClick={() => setActiveHash('#about')} className={`text-sm font-medium transition-colors ${activeHash === '#about' ? 'text-[var(--color-neon-blue)]' : 'hover:text-[var(--color-neon-blue)] text-gray-300'}`}>{t('nav.about')}</a>
          <a href="#experience" onClick={() => setActiveHash('#experience')} className={`text-sm font-medium transition-colors ${activeHash === '#experience' ? 'text-[var(--color-neon-purple)]' : 'hover:text-[var(--color-neon-purple)] text-gray-300'}`}>{t('nav.experience')}</a>
          <a href="#achievements" onClick={() => setActiveHash('#achievements')} className={`text-sm font-medium transition-colors ${activeHash === '#achievements' ? 'text-[var(--color-neon-green)]' : 'hover:text-[var(--color-neon-green)] text-gray-300'}`}>{t('nav.achievements')}</a>
          <a href="#skills" onClick={() => setActiveHash('#skills')} className={`text-sm font-medium transition-colors ${activeHash === '#skills' ? 'text-[var(--color-neon-blue)]' : 'hover:text-[var(--color-neon-blue)] text-gray-300'}`}>{t('nav.skills')}</a>
          <a href="#contact" onClick={() => setActiveHash('#contact')} className={`text-sm font-medium transition-colors ${activeHash === '#contact' ? 'text-[var(--color-neon-purple)]' : 'hover:text-[var(--color-neon-purple)] text-gray-300'}`}>{t('nav.contact')}</a>

          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded-full border border-white/20 hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)] transition-all text-xs font-bold tracking-wider"
          >
            {i18n.language === 'tr' ? 'TR' : 'EN'}
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold tracking-wider"
          >
            {i18n.language === 'tr' ? 'TR' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
