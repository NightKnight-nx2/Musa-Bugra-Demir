import React from 'react';

export function SectionLabel({ idx, children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: 'var(--ff-mono)', fontSize: 12, letterSpacing: '0.18em',
      color: 'var(--cyan)', textTransform: 'uppercase',
      padding: '6px 12px',
      border: '1px solid rgba(0,240,255,.25)',
      background: 'rgba(0,240,255,.04)',
      borderRadius: 999,
      marginBottom: 28,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)',
      }} />
      <span>// {idx} — {children}</span>
    </div>
  );
}

export function NeonHeading({ children, accent = 'var(--cyan)', size = 64 }) {
  return (
    <h2 style={{
      fontFamily: 'var(--ff-display)', fontWeight: 600,
      fontSize: `clamp(36px, 6vw, ${size}px)`,
      lineHeight: 1.05, letterSpacing: '-0.02em',
      color: 'var(--ink)',
      textShadow: `0 0 24px ${accent === 'var(--cyan)' ? 'rgba(0,240,255,.18)' : 'rgba(255,43,214,.18)'}`,
    }}>{children}</h2>
  );
}

export function Crosshair({ size = 16, color = 'var(--cyan)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={style}>
      <path d="M8 0v5M8 11v5M0 8h5M11 8h5" stroke={color} strokeWidth="1" fill="none" opacity="0.8" />
      <circle cx="8" cy="8" r="1.2" fill={color} />
    </svg>
  );
}

export function CornerTicks({ color = 'var(--line-bright)' }) {
  const c = { position: 'absolute', width: 14, height: 14, borderColor: color };
  return (
    <>
      <span style={{ ...c, top: -1, left: -1, borderTop: '1px solid', borderLeft: '1px solid', borderColor: color }} />
      <span style={{ ...c, top: -1, right: -1, borderTop: '1px solid', borderRight: '1px solid', borderColor: color }} />
      <span style={{ ...c, bottom: -1, left: -1, borderBottom: '1px solid', borderLeft: '1px solid', borderColor: color }} />
      <span style={{ ...c, bottom: -1, right: -1, borderBottom: '1px solid', borderRight: '1px solid', borderColor: color }} />
    </>
  );
}

export function Chip({ children, accent, mono = true }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 11px', borderRadius: 6,
      fontFamily: mono ? 'var(--ff-mono)' : 'var(--ff-body)',
      fontSize: 12, letterSpacing: '0.04em',
      color: accent || 'var(--ink-dim)',
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid var(--line)',
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

export function SectionDivider({ variant = 'orbit', accent = 'var(--cyan)' }) {
  return (
    <div className="reveal section-divider" aria-hidden="true" style={{
      position: 'relative', height: 56,
      margin: 'clamp(-60px,-7vw,-90px) auto clamp(-60px,-7vw,-90px)',
      maxWidth: 1100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      pointerEvents: 'none',
      paddingLeft: 'clamp(20px,4vw,48px)', paddingRight: 'clamp(20px,4vw,48px)',
    }}>
      {variant === 'orbit' && <DividerOrbit accent={accent} />}
      {variant === 'wave' && <DividerWave accent={accent} />}
      {variant === 'constellation' && <DividerConstellation accent={accent} />}
      {variant === 'spectrum' && <DividerSpectrum accent={accent} />}
      {variant === 'comet' && <DividerComet accent={accent} />}
    </div>
  );
}

function DividerOrbit({ accent }) {
  return (
    <svg width="100%" height="64" viewBox="0 0 800 64" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="orb-fade" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(138,150,180,0)" />
          <stop offset="0.5" stopColor="rgba(138,150,180,0.35)" />
          <stop offset="1" stopColor="rgba(138,150,180,0)" />
        </linearGradient>
      </defs>
      <line x1="0" y1="32" x2="800" y2="32" stroke="url(#orb-fade)" />
      <ellipse cx="400" cy="32" rx="180" ry="20" fill="none" stroke={accent} strokeOpacity="0.5" />
      <ellipse cx="400" cy="32" rx="120" ry="13" fill="none" stroke={accent} strokeOpacity="0.25" strokeDasharray="3 4" />
      <circle cx="580" cy="32" r="2.5" fill={accent}>
        <animateTransform attributeName="transform" type="rotate" from="0 400 32" to="360 400 32" dur="14s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="32" r="3.5" fill={accent} />
      <circle cx="400" cy="32" r="9" fill="none" stroke={accent} strokeOpacity="0.35" />
      <path d={`M380 25 v-6 M380 39 v6 M420 25 v-6 M420 39 v6`} stroke={accent} strokeOpacity="0.45" />
    </svg>
  );
}

function DividerWave({ accent }) {
  return (
    <svg width="100%" height="64" viewBox="0 0 800 64" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="wave-fade" x1="0" x2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0" />
          <stop offset="0.5" stopColor={accent} stopOpacity="0.5" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 32 Q100 8 200 32 T400 32 T600 32 T800 32" fill="none" stroke="url(#wave-fade)" />
      <path d="M0 32 Q100 56 200 32 T400 32 T600 32 T800 32" fill="none" stroke="url(#wave-fade)" strokeOpacity="0.55" />
      <path d="M0 32 Q50 20 100 32 T200 32 T300 32 T400 32 T500 32 T600 32 T700 32 T800 32" fill="none" stroke="url(#wave-fade)" strokeOpacity="0.3" />
      <text x="400" y="58" textAnchor="middle" fill="rgba(138,150,180,.5)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.3em">~ TRANSMISSION ~</text>
    </svg>
  );
}

function DividerConstellation({ accent }) {
  return (
    <svg width="100%" height="64" viewBox="0 0 800 64" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="con-fade" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(138,150,180,0)" />
          <stop offset="0.2" stopColor="rgba(138,150,180,0.4)" />
          <stop offset="0.8" stopColor="rgba(138,150,180,0.4)" />
          <stop offset="1" stopColor="rgba(138,150,180,0)" />
        </linearGradient>
      </defs>
      <line x1="0" y1="32" x2="800" y2="32" stroke="url(#con-fade)" strokeDasharray="1 4" strokeWidth="2" strokeLinecap="round" />
      <path d="M300 32 L340 12 L380 48 L420 16 L460 44 L500 32" fill="none" stroke={accent} strokeOpacity="0.35" />
      {[ [300,32], [340,12], [380,48], [420,16], [460,44], [500,32] ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 || i === 4 ? 3 : 1.5} fill={accent} />
      ))}
      <circle cx="380" cy="48" r="6" fill="none" stroke={accent} strokeOpacity="0.5" />
      <circle cx="460" cy="44" r="6" fill="none" stroke={accent} strokeOpacity="0.5" />
    </svg>
  );
}

function DividerSpectrum({ accent }) {
  return (
    <svg width="100%" height="64" viewBox="0 0 800 64" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="spec-fade" x1="0" x2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0" />
          <stop offset="0.5" stopColor={accent} stopOpacity="0.6" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 32 h800" stroke="url(#spec-fade)" strokeWidth="1" />
      <path d="M150 28 v8 M200 24 v16 M250 16 v32 M300 24 v16 M350 12 v40 M400 8 v48 M450 12 v40 M500 24 v16 M550 16 v32 M600 24 v16 M650 28 v8" stroke={accent} strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
      <rect x="390" y="28" width="20" height="8" fill="var(--bg)" />
      <circle cx="400" cy="32" r="3" fill={accent} />
    </svg>
  );
}

function DividerComet({ accent }) {
  return (
    <svg width="100%" height="64" viewBox="0 0 800 64" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="comet-tail" x1="1" x2="0">
          <stop offset="0" stopColor={accent} stopOpacity="0" />
          <stop offset="1" stopColor={accent} stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <line x1="0" y1="32" x2="800" y2="32" stroke="rgba(138,150,180,0.15)" strokeDasharray="4 4" />
      <path d="M200 32 h180" stroke="url(#comet-tail)" strokeWidth="2" />
      <circle cx="380" cy="32" r="2.5" fill={accent} />
      <circle cx="380" cy="32" r="8" fill="none" stroke={accent} strokeOpacity="0.4" />
      <path d="M386 32 l14 0 M380 26 v-6 M380 38 v6 M374 26 l-4 -4 M374 38 l-4 4 M386 26 l4 -4 M386 38 l4 4" stroke={accent} strokeOpacity="0.4" />
      <text x="420" y="35" fill="rgba(138,150,180,0.5)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.2em">VECTOR_09</text>
    </svg>
  );
}
