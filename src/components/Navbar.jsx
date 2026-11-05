import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '../data/content';

const SECTIONS = ['projects', 'games', 'experience', 'achievements', 'about', 'contact'];

export default function Navbar({ onHome }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!onHome) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const lang = i18n.language === 'en' ? 'en' : 'tr';
  const href = (id) => (onHome ? `#${id}` : `#/#${id}`);

  return (
    <header className="nav">
      <a className="skip" href="#main">{t('skip')}</a>
      <nav className="wrap nav-inner" aria-label="Ana menü">
        <a className="logo" href="#/" aria-label="Musa Buğra Demir · ana sayfa">MBD<span>.</span></a>
        <div className="nav-links">
          {SECTIONS.map((id) => (
            <a key={id} href={href(id)} className={active === id ? 'active' : undefined} aria-current={active === id ? 'true' : undefined}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <button type="button" className="btn-sm lang" onClick={() => i18n.changeLanguage(lang === 'tr' ? 'en' : 'tr')} aria-label={t('nav.lang')}>
            {lang === 'tr' ? <><b>TR</b> / EN</> : <>TR / <b>EN</b></>}
          </button>
          <a className="btn-sm solid" href={PROFILE.cv} download="Musa_Bugra_Demir_CV.pdf">CV ↓</a>
          <button type="button" className="btn-sm menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={t('nav.menu')}>
            <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden="true">
              <path d={open ? 'M2 2 L14 12 M14 2 L2 12' : 'M0 2 H16 M0 7 H16 M0 12 H16'} stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="mobile-menu">
          {SECTIONS.map((id, i) => (
            <a key={id} href={href(id)} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>{t(`nav.${id}`)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
