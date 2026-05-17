import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel, NeonHeading, CornerTicks } from './Atoms';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" style={{
      position: 'relative', padding: 'clamp(80px,12vw,160px) clamp(20px,4vw,48px)',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal">
          <SectionLabel idx="01">{t('about.label')}</SectionLabel>
        </div>

        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 32, alignItems: 'start',
        }}>
          {/* Col 1 */}
          <div>
            <div className="reveal reveal-d1" style={{ marginBottom: 32 }}>
              <NeonHeading>
                {t('about.title1')}<br />
                <span style={{ color: 'var(--cyan)' }}>{t('about.title2')}</span> {t('about.title3')}
              </NeonHeading>
            </div>
            
            <div className="reveal reveal-d2 about-quote" style={{
              position: 'relative', padding: '32px 32px 32px 40px',
              borderLeft: '2px solid var(--cyan)',
              background: 'linear-gradient(90deg, rgba(0,240,255,.05) 0%, transparent 100%)',
              marginBottom: 32,
            }}>
              <div style={{
                position: 'absolute', top: 12, left: 16,
                fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--cyan)',
                letterSpacing: '0.18em',
              }}>{t('about.quote_label')}</div>
              <p style={{
                fontFamily: 'var(--ff-display)', fontWeight: 500, fontSize: 'clamp(18px,2vw,22px)',
                lineHeight: 1.4, color: 'var(--ink)', margin: '14px 0 0 0',
              }}>
                {t('about.quote')}
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="reveal reveal-d3" style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-dim)' }}>
            <p style={{ marginBottom: 20 }}>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>

          {/* Stats / Readouts */}
          <div className="reveal reveal-d4 about-stats" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            border: '1px solid var(--line)', borderRadius: 12,
            background: 'rgba(7,11,21,.6)', backdropFilter: 'blur(6px)',
            overflow: 'hidden', position: 'relative',
            marginTop: 16,
          }}>
            <CornerTicks />
            <StatBox label={t('about.stats.y_label')} val={t('about.stats.y_val')} sub={t('about.stats.y_sub')} accent="var(--cyan)" index={0} />
            <StatBox label={t('about.stats.p_label')} val={t('about.stats.p_val')} sub={t('about.stats.p_sub')} accent="var(--magenta)" index={1} />
            <StatBox label={t('about.stats.m_label')} val={t('about.stats.m_val')} sub={t('about.stats.m_sub')} accent="var(--violet)" index={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ label, val, sub, accent, index }) {
  return (
    <div style={{
      padding: 'clamp(20px,3vw,32px)',
      borderRight: index < 2 ? '1px solid var(--line)' : 'none',
      borderBottom: 'none',
    }}>
      <div style={{
        fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.18em',
        color: 'var(--ink-dim)', marginBottom: 14,
      }}>// {label}</div>
      <div style={{
        fontFamily: 'var(--ff-display)', fontWeight: 500, fontSize: 'clamp(36px,5vw,56px)',
        color: 'var(--ink)', marginBottom: 8, lineHeight: 1,
      }}>{val}</div>
      <div style={{
        fontSize: 13, color: 'var(--ink-dim)',
      }}>{sub}</div>
    </div>
  );
}

export default About;
