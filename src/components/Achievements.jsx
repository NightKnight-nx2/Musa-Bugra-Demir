import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel, NeonHeading, CornerTicks, Chip } from './Atoms';

function RankBig({ num, label, accent }) {
  return (
    <div style={{
      padding: 18, borderRadius: 10,
      border: '1px solid var(--line)',
      background: 'rgba(0,0,0,.25)',
    }}>
      <div style={{
        fontFamily: 'var(--ff-display)', fontWeight: 600,
        fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.9,
        color: accent, letterSpacing: '-0.04em',
        textShadow: accent !== 'var(--ink)' ? `0 0 24px ${accent}` : 'none',
      }}>
        #{num}
      </div>
      <div style={{
        fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.2em',
        color: 'var(--ink-dim)', marginTop: 10,
      }}>{label}</div>
    </div>
  );
}

function Achievements() {
  const { t } = useTranslation();

  return (
    <section id="achievements" style={{
      position: 'relative', padding: 'clamp(80px,12vw,160px) clamp(20px,4vw,48px)',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal">
          <SectionLabel idx="03">{t('achievements.label')}</SectionLabel>
        </div>
        
        <div className="reveal reveal-d1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <NeonHeading>
            {t('ach.title.main').split('&')[0]}<br />
            <span style={{ color: 'var(--cyan)' }}>&</span> {t('ach.title.main').split('&')[1]}
          </NeonHeading>
          <div style={{ maxWidth: 360, color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.6 }}>
            {t('ach.title.sub')}
          </div>
        </div>

        <div className="ach-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 24,
        }}>
          {/* HACKATHON — featured */}
          <div className="reveal ach-feature" style={{
            position: 'relative', overflow: 'hidden',
            border: '1px solid rgba(255,43,214,.4)', borderRadius: 14,
            padding: 'clamp(28px,4vw,48px)',
            background: 'linear-gradient(135deg, rgba(255,43,214,.10), rgba(138,92,255,.06) 60%, rgba(0,0,0,0))',
            boxShadow: 'var(--shadow-magenta)',
          }}>
            <CornerTicks color="var(--magenta)" />
            {/* decorative rings */}
            <div aria-hidden="true" style={{
              position: 'absolute', right: -120, top: -120, width: 320, height: 320,
              borderRadius: '50%', border: '1px solid rgba(255,43,214,.25)',
              pointerEvents: 'none',
            }} />
            <div aria-hidden="true" style={{
              position: 'absolute', right: -60, top: -60, width: 200, height: 200,
              borderRadius: '50%', border: '1px dashed rgba(255,43,214,.18)',
              animation: 'spin 40s linear infinite',
              pointerEvents: 'none',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 10px', borderRadius: 4,
                background: 'rgba(255,43,214,.15)', border: '1px solid rgba(255,43,214,.5)',
                fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.18em',
                color: 'var(--magenta)',
              }}>★ WINNER</span>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.15em' }}>
                MONAD BLITZ HACKATHON
              </span>
            </div>
            <h3 style={{
              fontFamily: 'var(--ff-display)', fontWeight: 600,
              fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', maxWidth: 720, marginBottom: 18,
            }}>
              {t('ach.monad.title').split('&')[0]}<br />
              <span style={{
                background: 'linear-gradient(90deg, var(--magenta), var(--violet))',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}>&amp; {t('ach.monad.title').split('&')[1]}</span>
            </h3>
            <p style={{ color: 'var(--ink-dim)', maxWidth: 600, fontSize: 15, lineHeight: 1.6, marginBottom: 22 }}>
              {t('ach.monad.desc')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Smart Contracts', 'Web3', 'Monad', 'Flutter', 'Solidity'].map((txt) => <Chip key={txt} accent="var(--magenta)">{txt}</Chip>)}
            </div>
          </div>

          {/* IEEEXtreme + STEM in 2 cols */}
          <div className="ach-row" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
            {/* IEEEXtreme */}
            <div className="reveal" style={{
              position: 'relative', overflow: 'hidden',
              border: '1px solid rgba(0,240,255,.3)', borderRadius: 14,
              padding: 'clamp(24px,3.5vw,40px)',
              background: 'linear-gradient(135deg, rgba(0,240,255,.08), rgba(0,0,0,0) 70%)',
            }}>
              <CornerTicks color="var(--cyan)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{
                  padding: '4px 10px', borderRadius: 4,
                  background: 'rgba(0,240,255,.12)', border: '1px solid rgba(0,240,255,.45)',
                  fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.18em',
                  color: 'var(--cyan)',
                }}>RANKED</span>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.15em' }}>
                  IEEEXTREME · 24H GLOBAL
                </span>
              </div>

              <div className="ach-rank-grid" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 24,
              }}>
                <RankBig num="33" label={t('ach.ieee.tr')} accent="var(--cyan)" />
                <RankBig num="1071" label={t('ach.ieee.world')} accent="var(--ink)" />
              </div>

              <p style={{ color: 'var(--ink-dim)', maxWidth: 520, fontSize: 14, lineHeight: 1.6, marginTop: 24 }}>
                {t('ach.ieee.desc')}
              </p>
            </div>

            {/* STEM */}
            <div className="reveal reveal-d2" style={{
              position: 'relative', overflow: 'hidden',
              border: '1px solid rgba(138,92,255,.32)', borderRadius: 14,
              padding: 'clamp(24px,3.5vw,40px)',
              background: 'linear-gradient(135deg, rgba(138,92,255,.10), rgba(0,0,0,0) 70%)',
              boxShadow: '0 0 0 1px rgba(138,92,255,.06), 0 0 30px rgba(138,92,255,.10)',
            }}>
              <CornerTicks color="var(--violet)" />
              <div aria-hidden="true" style={{
                position: 'absolute', right: -100, bottom: -100, width: 260, height: 260,
                borderRadius: '50%', border: '1px dashed rgba(138,92,255,.18)',
                animation: 'spin 60s linear infinite',
                pointerEvents: 'none',
              }} />
              <div aria-hidden="true" style={{
                position: 'absolute', right: -50, bottom: -50, width: 160, height: 160,
                borderRadius: '50%', border: '1px solid rgba(138,92,255,.22)',
                pointerEvents: 'none',
              }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{
                  padding: '4px 10px', borderRadius: 4,
                  background: 'rgba(138,92,255,.15)', border: '1px solid rgba(138,92,255,.5)',
                  fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.18em',
                  color: 'var(--violet)',
                }}>★ VOLUNTEER</span>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.15em' }}>
                  STEM PROJECTS
                </span>
              </div>
              
              <h3 style={{
                fontFamily: 'var(--ff-display)', fontWeight: 600,
                fontSize: 'clamp(22px,2.8vw,32px)', lineHeight: 1.15,
                letterSpacing: '-0.01em', marginBottom: 8, position: 'relative',
              }}>
                {t('ach.stem.title.pt1')}<br />
                <span style={{
                  background: 'linear-gradient(90deg, var(--violet), var(--magenta))',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}>{t('ach.stem.title.pt2')}</span>
              </h3>
              
              <p style={{ color: 'var(--ink-dim)', maxWidth: 520, fontSize: 14, lineHeight: 1.6, marginTop: 18, marginBottom: 22, position: 'relative' }}>
                {t('ach.stem.desc')}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, position: 'relative' }}>
                {[
                  'STAR Project',
                  'Teach and Make',
                  'Children in Power',
                  'Hour of Code',
                  'Akademiden Liseye: Kadın Mühendisler',
                ].map((txt) => <Chip key={txt} accent="var(--violet)">{txt}</Chip>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
