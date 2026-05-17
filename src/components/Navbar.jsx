import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  function toggleLang() {
    const next = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(next);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['hero', 'about', 'experience', 'achievements', 'skills', 'contact'];
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) setActive(e.target.id);
      }
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const links = [
    ['about', t('nav.about')],
    ['experience', t('nav.experience')],
    ['achievements', t('nav.achievements')],
    ['skills', t('nav.skills')],
    ['contact', t('nav.contact')],
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        backdropFilter: scrolled ? 'blur(14px)' : 'blur(6px)',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'blur(6px)',
        background: scrolled ? 'rgba(3,5,11,.62)' : 'rgba(3,5,11,.25)',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all .3s ease',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto', padding: '14px clamp(20px,4vw,48px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#hero" style={{
            display: 'inline-flex', alignItems: 'baseline', gap: 4,
            fontFamily: 'var(--ff-mono)', fontWeight: 700, fontSize: 15,
            letterSpacing: '0.08em',
          }}>
            <span>MBD</span>
            <span style={{ color: 'var(--magenta)', textShadow: '0 0 8px var(--magenta)' }}>.</span>
          </a>

          <div style={{ display: 'none', alignItems: 'center', gap: 4 }} className="nav-links">
            {links.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className={active === id ? 'nav-link active' : 'nav-link'} style={{
                padding: '8px 14px', fontSize: 13, fontFamily: 'var(--ff-mono)',
                letterSpacing: '0.06em', color: active === id ? 'var(--ink)' : 'var(--ink-dim)',
                position: 'relative', transition: 'color .2s',
              }}>
                <span style={{ color: 'var(--ink-faint)', marginRight: 6 }}>0{i + 1}</span>
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              display: 'none', alignItems: 'center', gap: 8,
              fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
              letterSpacing: '0.1em',
            }} className="nav-status">
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: 'var(--green)',
                boxShadow: '0 0 8px var(--green)', animation: 'pulse 2s ease-in-out infinite',
              }} />
              ONLINE
            </span>

            {/* Language toggle */}
            <button onClick={toggleLang} className="lang-toggle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 10px 6px 10px', height: 30,
              borderRadius: 6, border: '1px solid var(--line-bright)',
              background: 'rgba(0,240,255,.04)',
              fontFamily: 'var(--ff-mono)', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.14em', color: 'var(--ink)',
              transition: 'all .2s',
              position: 'relative',
            }} aria-label="Toggle language">
              <svg width="11" height="11" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" fill="none" opacity=".7" />
                <path d="M1 6h10M6 1c2 1.5 2 8.5 0 10M6 1c-2 1.5-2 8.5 0 10" stroke="currentColor" strokeWidth=".8" fill="none" opacity=".55" />
              </svg>
              <span style={{
                display: 'inline-block', minWidth: 16,
                color: i18n.language === 'tr' ? 'var(--magenta)' : 'var(--cyan)',
                textShadow: i18n.language === 'tr' ? '0 0 8px var(--magenta)' : '0 0 8px var(--cyan)',
                transition: 'color .2s, text-shadow .2s',
              }}>{i18n.language.toUpperCase()}</span>
            </button>

            <button onClick={() => setOpen(!open)} className="nav-toggle" style={{
              width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--line-bright)', borderRadius: 8,
            }} aria-label="Menu">
              <svg width="16" height="14" viewBox="0 0 16 14">
                <path d={open ? 'M2 2 L14 12 M14 2 L2 12' : 'M0 2 H16 M0 7 H16 M0 12 H16'} stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 39,
          background: 'rgba(3,5,11,0.92)', backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 clamp(20px,6vw,48px)',
        }}>
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--ff-display)', fontSize: 'clamp(28px,7vw,56px)',
              fontWeight: 500, padding: '10px 0', display: 'flex', alignItems: 'baseline', gap: 18,
              borderBottom: '1px solid var(--line)',
            }}>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 13, color: 'var(--cyan)' }}>0{i + 1}</span>
              <span>{label}</span>
            </a>
          ))}
          <div style={{ marginTop: 32, fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.15em' }}>
            TRANSMISSION CHANNEL · ONLINE
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
