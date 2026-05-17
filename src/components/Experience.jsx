import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel, NeonHeading, CornerTicks, Chip } from './Atoms';

function ProjectIcon({ kind, size = 88, color }) {
  const c = color || 'currentColor';
  const common = { fill: 'none', stroke: c, strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const dim = { ...common, opacity: 0.4 };
  const filterId = `glow-${kind}`;
  const filter = `url(#${filterId})`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter={filter}>
        {kind === 'ieee' && (
          <>
            <circle cx="50" cy="50" r="34" {...common} />
            <circle cx="50" cy="50" r="22" {...dim} />
            <path d="M50 16 v8 M50 76 v8 M16 50 h8 M76 50 h8" {...common} />
            <circle cx="50" cy="50" r="3" fill={c} />
            <path d="M38 44 v12 M62 44 v12 M44 38 h12 M44 62 h12" {...dim} />
          </>
        )}
        {kind === 'satellite' && (
          <>
            <rect x="42" y="42" width="16" height="16" {...common} />
            <rect x="46" y="46" width="8" height="8" {...common} />
            <rect x="14" y="44" width="24" height="12" {...common} />
            <rect x="62" y="44" width="24" height="12" {...common} />
            <path d="M20 44 v12 M26 44 v12 M32 44 v12 M68 44 v12 M74 44 v12 M80 44 v12" {...dim} />
            <path d="M50 42 v-12 M44 30 h12" {...common} />
            <path d="M50 22 c4 -4 8 -4 12 0 M50 22 c-4 -4 -8 -4 -12 0" {...dim} />
            <ellipse cx="50" cy="68" rx="36" ry="6" {...dim} />
          </>
        )}
        {kind === 'dome' && (
          <>
            <path d="M16 70 a34 34 0 0 1 68 0" {...common} />
            <path d="M22 70 a28 28 0 0 1 56 0" {...dim} />
            <path d="M28 70 a22 22 0 0 1 44 0" {...dim} />
            <path d="M12 72 h76" {...common} />
            <path d="M18 76 h64 M22 80 h56" {...dim} />
            <path d="M50 40 v-18" {...common} />
            <circle cx="50" cy="20" r="3" fill={c} />
            <path d="M50 20 l24 -10 M50 20 l-24 -10" {...dim} />
            <circle cx="50" cy="20" r="8" {...dim} />
          </>
        )}
        {kind === 'usv' && (
          <>
            <path d="M14 60 L86 60 L78 76 L22 76 Z" {...common} />
            <path d="M30 60 v-12 h40 v12" {...common} />
            <path d="M44 48 v-10 h12 v10" {...common} />
            <path d="M50 38 v-10" {...common} />
            <circle cx="50" cy="26" r="2" fill={c} />
            <path d="M8 84 c6 -4 10 4 16 0 c6 -4 10 4 16 0 c6 -4 10 4 16 0 c6 -4 10 4 16 0 c6 -4 10 4 16 0" {...dim} />
            <path d="M8 90 c6 -4 10 4 16 0 c6 -4 10 4 16 0 c6 -4 10 4 16 0 c6 -4 10 4 16 0 c6 -4 10 4 16 0" {...dim} />
          </>
        )}
        {kind === 'ugv' && (
          <>
            <rect x="18" y="40" width="64" height="22" rx="2" {...common} />
            <rect x="26" y="32" width="48" height="10" {...common} />
            <circle cx="28" cy="68" r="8" {...common} />
            <circle cx="50" cy="68" r="8" {...common} />
            <circle cx="72" cy="68" r="8" {...common} />
            <circle cx="28" cy="68" r="3" fill={c} />
            <circle cx="50" cy="68" r="3" fill={c} />
            <circle cx="72" cy="68" r="3" fill={c} />
            <path d="M40 32 v-12" {...common} />
            <circle cx="40" cy="18" r="2" fill={c} />
            <path d="M44 14 q6 4 0 8 M48 10 q12 8 0 16" {...dim} />
          </>
        )}
        {kind === 'gamepad' && (
          <>
            <path d="M22 38 q-10 0 -12 14 q-2 16 4 22 q4 4 10 -2 l4 -8 h44 l4 8 q6 6 10 2 q6 -6 4 -22 q-2 -14 -12 -14 Z" {...common} />
            <path d="M22 56 h12 M28 50 v12" {...common} />
            <circle cx="70" cy="50" r="3" {...common} />
            <circle cx="78" cy="56" r="3" fill={c} />
            <circle cx="62" cy="56" r="3" {...common} />
            <circle cx="70" cy="62" r="3" {...common} />
          </>
        )}
      </g>
    </svg>
  );
}

function ExperienceCard({ item, idx }) {
  const accentVar = `var(--${item.color})`;
  return (
    <div className="reveal" style={{
      position: 'relative', padding: 24, overflow: 'hidden',
      border: '1px solid var(--line)', borderRadius: 12,
      background: 'rgba(7,11,21,.65)', backdropFilter: 'blur(8px)',
      transition: 'border-color .3s, transform .3s',
    }} onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = accentVar.replace('var(', '').replace(')', '');
    }} onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--line)';
    }}>
      <CornerTicks color={accentVar} />
      {/* Decorative project icon */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 12, right: 12, opacity: 0.7,
        color: accentVar, pointerEvents: 'none',
      }}>
        <ProjectIcon kind={item.icon} size={76} color={accentVar} />
      </div>
      {/* subtle grid bg only behind icon */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -20, right: -20, width: 180, height: 180,
        background: `radial-gradient(closest-side, ${item.color === 'cyan' ? 'rgba(0,240,255,.10)' : item.color === 'magenta' ? 'rgba(255,43,214,.10)' : 'rgba(138,92,255,.10)'}, transparent 70%)`,
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      {/* header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14, gap: 12, flexWrap: 'wrap', position: 'relative',
        paddingRight: 80,
      }}>
        <div style={{
          fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
          letterSpacing: '0.18em', display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: accentVar,
            boxShadow: `0 0 8px ${accentVar}`,
          }} />
          LOG_{String(idx + 1).padStart(2, '0')} · {item.period}
        </div>
      </div>

      <h3 style={{
        fontFamily: 'var(--ff-display)', fontSize: 'clamp(20px,2.2vw,26px)',
        fontWeight: 600, lineHeight: 1.15, marginBottom: 6,
        color: 'var(--ink)', letterSpacing: '-0.01em', position: 'relative',
        paddingRight: 80,
      }}>{item.org}</h3>
      <div style={{
        fontFamily: 'var(--ff-mono)', fontSize: 12, color: accentVar,
        letterSpacing: '0.06em', marginBottom: 14, textTransform: 'uppercase',
        position: 'relative',
      }}>{item.role}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-dim)', marginBottom: 14, fontStyle: 'italic', position: 'relative' }}>{item.sub}</div>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-dim)', marginBottom: 18, position: 'relative' }}>
        {item.body}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, position: 'relative' }}>
        {item.tags.map((t) => <Chip key={t} mono={false}>{t}</Chip>)}
      </div>
    </div>
  );
}

function Experience() {
  const { t } = useTranslation();

  const EXPERIENCE = [
    {
      org: 'IEEE Ege',
      period: '2025 – 2026',
      role: t('exp.ieee.role'),
      sub: 'Member responsible for CS, ComSoc, WIE & TT Chapters',
      body: t('exp.ieee.desc'),
      tags: t('exp.ieee.tag').split(', '),
      color: 'cyan',
      icon: 'ieee',
    },
    {
      org: t('exp.cubesat.title'),
      period: '2025 – ongoing',
      role: 'Software Team Leader & Project Manager',
      sub: 'Cube Satellite Project',
      body: t('exp.cubesat.desc'),
      tags: t('exp.cubesat.tag').split(', '),
      color: 'magenta',
      icon: 'satellite',
    },
    {
      org: t('exp.celikgoz.title'),
      period: '2025',
      role: 'Software Team Leader',
      sub: 'Air Defence Systems',
      body: t('exp.celikgoz.desc'),
      tags: t('exp.celikgoz.tag').split(', '),
      color: 'violet',
      icon: 'dome',
    },
    {
      org: t('exp.usv.title'),
      period: '2024 – 2025',
      role: 'Image Processing & Simulation Engineer',
      sub: 'Unmanned Surface Vehicle',
      body: t('exp.usv.desc'),
      tags: t('exp.usv.tag').split(', '),
      color: 'cyan',
      icon: 'usv',
    },
    {
      org: t('exp.ugv.title'),
      period: '2024',
      role: 'Communication Systems Lead',
      sub: 'Unmanned Ground Vehicle',
      body: t('exp.ugv.desc'),
      tags: t('exp.ugv.tag').split(', '),
      color: 'magenta',
      icon: 'ugv',
    },
    {
      org: 'Aegean Crafters',
      period: '2024',
      role: t('exp.crafters.role'),
      sub: 'C# & Unity Level Design',
      body: 'Designed and built playable levels, gameplay scripts and game-feel polish for indie titles produced by the Aegean Crafters collective.',
      tags: ['Unity', 'C#', 'LEVEL DESIGN'],
      color: 'violet',
      icon: 'gamepad',
    },
  ];

  return (
    <section id="experience" style={{
      position: 'relative', padding: 'clamp(80px,12vw,160px) clamp(20px,4vw,48px)',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal">
          <SectionLabel idx="02">{t('experience.title')}</SectionLabel>
        </div>
        <div className="reveal reveal-d1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <NeonHeading accent="var(--magenta)">
            {t('experience.main_title') ? t('experience.main_title').split(' ')[0] : 'Mission'}<br />
            {t('experience.main_title') ? t('experience.main_title').split(' ')[1] : 'Trajectories.'}
          </NeonHeading>
          <div style={{ maxWidth: 360, color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.6 }}>
            {t('experience.sub_title') || "A chronological log of orbital deployments — every program I've helped pilot, build or lead."}
          </div>
        </div>

        {/* Timeline */}
        <div className="exp-timeline" style={{
          position: 'relative', display: 'grid', gap: 40,
        }}>
          {/* central spine */}
          <div className="exp-spine" style={{
            position: 'absolute', left: 16, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, transparent, var(--line-bright) 10%, var(--line-bright) 90%, transparent)',
          }} />
          {EXPERIENCE.map((it, i) => (
            <div key={it.org} className="exp-row" style={{
              position: 'relative', paddingLeft: 48,
            }}>
              {/* node */}
              <div style={{
                position: 'absolute', left: 8, top: 28, width: 18, height: 18,
                borderRadius: '50%', border: `1px solid var(--${it.color})`,
                background: 'var(--bg)',
                boxShadow: `0 0 16px var(--${it.color}), inset 0 0 8px rgba(0,0,0,.6)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', background: `var(--${it.color})`,
                  animation: 'pulse 2.4s ease-in-out infinite',
                }} />
              </div>
              <ExperienceCard item={it} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
