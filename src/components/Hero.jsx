import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Crosshair, Chip } from './Atoms';

function HeroPortrait() {
  return (
    <div className="reveal reveal-d3 hero-portrait" style={{
      position: 'relative', justifySelf: 'center',
      width: 'clamp(220px, 28vw, 360px)',
      aspectRatio: '1 / 1',
    }}>
      {/* outer rotating ring */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: -16, borderRadius: '50%',
        border: '1px dashed rgba(0,240,255,.22)',
        animation: 'spin 40s linear infinite',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: -32, borderRadius: '50%',
        border: '1px solid rgba(138,92,255,.12)',
        pointerEvents: 'none',
      }} />
      {/* orbiting dots */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: -16, borderRadius: '50%',
        animation: 'spin 18s linear infinite',
        pointerEvents: 'none',
      }}>
        <span style={{
          position: 'absolute', top: -3, left: '50%', width: 6, height: 6,
          borderRadius: '50%', background: 'var(--cyan)',
          boxShadow: '0 0 12px var(--cyan)', transform: 'translateX(-50%)',
        }} />
      </div>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: -32, borderRadius: '50%',
        animation: 'spin 30s linear infinite reverse',
        pointerEvents: 'none',
      }}>
        <span style={{
          position: 'absolute', bottom: -2, left: '40%', width: 4, height: 4,
          borderRadius: '50%', background: 'var(--magenta)',
          boxShadow: '0 0 10px var(--magenta)',
        }} />
      </div>

      {/* glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-20%', borderRadius: '50%',
        background: 'radial-gradient(closest-side, rgba(0,240,255,.20), rgba(138,92,255,.10) 50%, transparent 75%)',
        filter: 'blur(8px)', pointerEvents: 'none',
      }} />

      {/* hexagonal slot */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
        background: 'linear-gradient(135deg, rgba(0,240,255,.6), rgba(138,92,255,.6) 50%, rgba(255,43,214,.6))',
        padding: 2,
      }}>
        <div style={{
          width: '100%', height: '100%',
          clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
          background: 'var(--bg)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img 
            src="./assets/pp.webp" 
            alt="Portrait" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
          />
          {/* scan line overlay */}
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(to bottom, rgba(0,240,255,.06) 0 1px, transparent 1px 4px)',
            mixBlendMode: 'overlay', pointerEvents: 'none',
          }} />
          {/* corner readouts */}
          <div style={{
            position: 'absolute', top: 8, left: 12,
            fontFamily: 'var(--ff-mono)', fontSize: 9, color: 'var(--cyan)',
            letterSpacing: '0.16em', textShadow: '0 0 6px var(--cyan)',
            pointerEvents: 'none',
          }}>SUBJECT_01</div>
          <div style={{
            position: 'absolute', bottom: 8, right: 12,
            fontFamily: 'var(--ff-mono)', fontSize: 9, color: 'var(--magenta)',
            letterSpacing: '0.16em', textShadow: '0 0 6px var(--magenta)',
            pointerEvents: 'none',
          }}>● REC</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  const NAME_FULL = t('hero.title');
  const TERMINAL_PHRASE = 'System.out.println("Hello, World");';
  const [terminal, setTerminal] = useState('');
  const [typedName, setTypedName] = useState('');
  const [phase, setPhase] = useState('terminal'); // terminal → name → done
  const [clock, setClock] = useState('');

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './assets/cvmusabugrademir.pdf';
    link.download = 'Musa_Bugra_Demir_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTerminal(TERMINAL_PHRASE.slice(0, i));
      if (i >= TERMINAL_PHRASE.length) {
        clearInterval(id);
        setTimeout(() => setPhase('name'), 280);
      }
    }, 32);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (phase !== 'name') return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedName(NAME_FULL.slice(0, i));
      if (i >= NAME_FULL.length) {
        clearInterval(id);
        setPhase('done');
      }
    }, 90);
    return () => clearInterval(id);
  }, [phase, NAME_FULL]);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const timeStr = d.toLocaleTimeString('en-GB', { timeZone: 'Europe/Istanbul', hour12: false });
      setClock(`T+ ${timeStr} TRT`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const splitAt = 'MUSA BUĞRA '.length;
  const part1 = typedName.slice(0, splitAt);
  const part2 = typedName.slice(splitAt);

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100svh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(160px,22vh,240px) clamp(20px,4vw,48px) 100px',
    }}>
      <div className="hero-readout" style={{
        position: 'absolute', top: 'clamp(90px,12vh,130px)', left: 'clamp(20px,4vw,48px)',
        fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
        letterSpacing: '0.15em', display: 'flex', flexDirection: 'column', gap: 4,
        zIndex: 3, pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Crosshair size={12} />
          <span>38.4546°N · 27.2079°E</span>
        </div>
        <div>IZMIR · EGE UNIVERSITY</div>
        <div style={{ color: 'var(--cyan)' }}>{clock}</div>
      </div>

      <div className="hero-readout" style={{
        position: 'absolute', top: 'clamp(90px,12vh,130px)', right: 'clamp(20px,4vw,48px)',
        fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
        letterSpacing: '0.15em', textAlign: 'right',
        display: 'flex', flexDirection: 'column', gap: 4,
        zIndex: 3, pointerEvents: 'none',
      }}>
        <div>SECTOR // PORTFOLIO_V1</div>
        <div>BUILD · 2026.05.17</div>
        <div style={{ color: 'var(--magenta)' }}>SIGNAL STRONG</div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%', position: 'relative' }}>
        <div className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(32px,4vw,56px)',
          alignItems: 'center',
        }}>
          <div className="hero-text" style={{ minWidth: 0 }}>
            <div className="reveal" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--ff-mono)', fontSize: 'clamp(11px,1.3vw,13px)',
              padding: '8px 14px', borderRadius: 999,
              border: '1px solid rgba(92,255,179,.25)',
              background: 'rgba(92,255,179,.05)',
              marginBottom: 32, letterSpacing: '0.04em',
              maxWidth: '100%', overflow: 'hidden',
            }}>
              <span style={{ color: 'var(--green)' }}>›_</span>
              <span style={{ color: 'var(--ink)', whiteSpace: 'nowrap' }}>{terminal}</span>
              {phase === 'terminal' && <span className="caret" style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />}
            </div>

            <div className="reveal reveal-d1" style={{
              fontFamily: 'var(--ff-mono)', fontSize: 13, color: 'var(--cyan)',
              letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14,
            }}>// {t('hero.hi')}</div>

            <h1 className="reveal reveal-d2 hero-name" style={{
              fontFamily: 'var(--ff-display)', fontWeight: 600,
              fontSize: 'clamp(44px, 9vw, 132px)',
              lineHeight: 0.98, letterSpacing: '-0.035em',
              margin: '0 0 24px',
              minHeight: 'clamp(88px,18vw,264px)',
            }}>
              <span style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>{part1}</span>
              <span style={{
                display: 'inline-block', whiteSpace: 'pre-wrap',
                background: 'linear-gradient(90deg, var(--cyan) 0%, var(--violet) 60%, var(--magenta) 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                filter: 'drop-shadow(0 0 32px rgba(138,92,255,.28))',
              }}>{part2}</span>
              {phase !== 'done' && (
                <span style={{
                  display: 'inline-block', verticalAlign: 'baseline',
                  width: 'clamp(8px,1.2vw,16px)', height: '0.85em',
                  marginLeft: 6, marginBottom: '-0.1em',
                  background: 'var(--magenta)',
                  boxShadow: '0 0 22px var(--magenta)',
                  animation: 'blink 1s steps(1) infinite',
                }} />
              )}
            </h1>

            <div className="reveal reveal-d3" style={{
              maxWidth: 640, fontSize: 'clamp(15px,1.6vw,18px)',
              color: 'var(--ink-dim)', lineHeight: 1.5, marginBottom: 28,
            }}>
              {t('hero.subtitle')}
            </div>

            <div className="reveal reveal-d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
              {['AI & ROBOTICS', 'GAME DEV', 'WEB3', 'COMPUTER VISION', 'EMBEDDED'].map((txt, i) => (
                <Chip key={txt} accent={i === 0 ? 'var(--cyan)' : i === 2 ? 'var(--magenta)' : i === 4 ? 'var(--violet)' : undefined}>{txt}</Chip>
              ))}
            </div>

            <div className="reveal reveal-d5" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a href="#experience" className="btn-primary">
                <span>{t('hero.btn.projects')}</span>
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
              </a>
              <a href="#contact" className="btn-ghost">
                <span>{t('hero.btn.contact')}</span>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
              </a>
              <a href="#" onClick={handleDownloadCV} className="btn-cv">
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1v9M3 6l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{t('hero.btn.cv')}</span>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.14em',
                  padding: '2px 6px', borderRadius: 3,
                  background: 'rgba(255,43,214,.12)', color: 'var(--magenta)',
                  border: '1px solid rgba(255,43,214,.35)',
                }}>.PDF</span>
              </a>
            </div>
          </div>

          <HeroPortrait />
        </div>

        <div className="reveal reveal-d5" style={{
          position: 'absolute', bottom: -48, left: 0,
          display: 'flex', alignItems: 'center', gap: 12,
          fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-faint)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>
          <span style={{
            display: 'inline-block', width: 32, height: 1, background: 'var(--ink-faint)',
            animation: 'sweep 2.4s ease-in-out infinite',
          }} />
          {t('hero.scroll_hint')}
        </div>
      </div>
    </section>
  );
}

export default Hero;
