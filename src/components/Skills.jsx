import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel, NeonHeading, CornerTicks } from './Atoms';

const CODE_LINES = [
  { t: 'import', c: 'cyan' }, { t: ' { Vision } ', c: 'ink' }, { t: 'from ', c: 'cyan' }, { t: "'@ai/core'", c: 'green' }, { t: ';\n', c: 'ink' },
  { t: 'import', c: 'cyan' }, { t: ' { AutonomousAgent } ', c: 'ink' }, { t: 'from ', c: 'cyan' }, { t: "'ros2'", c: 'green' }, { t: ';\n', c: 'ink' },
  { t: 'import', c: 'cyan' }, { t: ' { Orbit, Satellite } ', c: 'ink' }, { t: 'from ', c: 'cyan' }, { t: "'@space/orbital'", c: 'green' }, { t: ';\n', c: 'ink' },
  { t: 'import', c: 'cyan' }, { t: ' { FireControl } ', c: 'ink' }, { t: 'from ', c: 'cyan' }, { t: "'@defense/embedded'", c: 'green' }, { t: ';\n\n', c: 'ink' },
  { t: 'type', c: 'magenta' }, { t: ' Mission = { name: ', c: 'ink' }, { t: 'string', c: 'cyan' }, { t: '; tier: ', c: 'ink' }, { t: "'critical'", c: 'green' }, { t: ' | ', c: 'ink' }, { t: "'standard'", c: 'green' }, { t: ' };\n\n', c: 'ink' },
  { t: 'async function', c: 'magenta' }, { t: ' buildFuture', c: 'cyan' }, { t: '() {\n', c: 'ink' },
  { t: '  // initialize hardware & neural nets\n', c: 'faint' },
  { t: '  const', c: 'magenta' }, { t: ' agent = ', c: 'ink' }, { t: 'new', c: 'magenta' }, { t: ' AutonomousAgent();\n', c: 'ink' },
  { t: '  await', c: 'magenta' }, { t: ' agent.train(Vision.model(', c: 'ink' }, { t: "'YOLOv11'", c: 'green' }, { t: '));\n\n', c: 'ink' },
  { t: '  // deploy across the mission stack\n', c: 'faint' },
  { t: '  const', c: 'magenta' }, { t: ' missions: Mission[] = [\n', c: 'ink' },
  { t: '    { name: ', c: 'ink' }, { t: "'CubeSat'", c: 'green' }, { t: ',   tier: ', c: 'ink' }, { t: "'critical'", c: 'green' }, { t: ' },\n', c: 'ink' },
  { t: '    { name: ', c: 'ink' }, { t: "'SteelDome'", c: 'green' }, { t: ', tier: ', c: 'ink' }, { t: "'critical'", c: 'green' }, { t: ' },\n', c: 'ink' },
  { t: '    { name: ', c: 'ink' }, { t: "'Mavi İnci'", c: 'green' }, { t: ', tier: ', c: 'ink' }, { t: "'standard'", c: 'green' }, { t: ' },\n', c: 'ink' },
  { t: '    { name: ', c: 'ink' }, { t: "'ODBARS'", c: 'green' }, { t: ',    tier: ', c: 'ink' }, { t: "'standard'", c: 'green' }, { t: ' },\n', c: 'ink' },
  { t: '  ];\n\n', c: 'ink' },
  { t: '  for', c: 'magenta' }, { t: ' (', c: 'ink' }, { t: 'const', c: 'magenta' }, { t: ' m ', c: 'ink' }, { t: 'of', c: 'magenta' }, { t: ' missions) {\n', c: 'ink' },
  { t: '    ', c: 'ink' }, { t: 'await', c: 'magenta' }, { t: ' agent.deploy(m);\n', c: 'ink' },
  { t: '  }\n\n', c: 'ink' },
  { t: '  while', c: 'magenta' }, { t: ' (', c: 'ink' }, { t: 'true', c: 'cyan' }, { t: ') {\n', c: 'ink' },
  { t: '    agent.innovate();\n', c: 'ink' },
  { t: '    agent.pushLimits();\n', c: 'ink' },
  { t: '  }\n}\n\n', c: 'ink' },
  { t: 'buildFuture', c: 'cyan' }, { t: '();', c: 'ink' },
];

function colorOf(c) {
  return c === 'cyan' ? 'var(--cyan)' :
         c === 'magenta' ? 'var(--magenta)' :
         c === 'violet' ? 'var(--violet)' :
         c === 'green' ? 'var(--green)' :
         c === 'faint' ? 'var(--ink-faint)' : 'var(--ink)';
}

function StackCard({ cat, idx }) {
  const [hover, setHover] = useState(false);
  const accent = `var(--${cat.accent})`;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      position: 'relative', padding: 24, borderRadius: 12,
      border: '1px solid var(--line)',
      background: hover
        ? `linear-gradient(135deg, ${cat.accent === 'cyan' ? 'rgba(0,240,255,.06)' : cat.accent === 'magenta' ? 'rgba(255,43,214,.06)' : 'rgba(138,92,255,.06)'}, rgba(7,11,21,.6))`
        : 'rgba(7,11,21,.5)',
      borderColor: hover ? accent : 'var(--line)',
      transition: 'all .3s',
      backdropFilter: 'blur(6px)',
    }}>
      <CornerTicks color={hover ? accent : 'var(--line-bright)'} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{
          fontFamily: 'var(--ff-mono)', fontSize: 11,
          color: 'var(--ink-faint)', letterSpacing: '0.18em',
        }}>MODULE_{String(idx + 1).padStart(2, '0')}</div>
        <span style={{
          width: 8, height: 8, borderRadius: '50%', background: accent,
          boxShadow: `0 0 10px ${accent}`,
        }} />
      </div>
      <h3 style={{
        fontFamily: 'var(--ff-display)', fontWeight: 600,
        fontSize: 'clamp(18px,2vw,22px)', marginBottom: 18,
        color: 'var(--ink)', letterSpacing: '-0.01em',
      }}>{cat.title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {cat.items.map((it) => (
          <span key={it} style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '5px 10px', borderRadius: 4,
            fontFamily: 'var(--ff-mono)', fontSize: 12,
            color: 'var(--ink)',
            background: 'rgba(255,255,255,0.025)',
            border: `1px solid var(--line)`,
            transition: 'all .2s',
          }}>{it}</span>
        ))}
      </div>
    </div>
  );
}

function GithubStatsCard({ title, subtitle, imgUrl, accent, ratio }) {
  const accentVar = `var(--${accent})`;
  return (
    <div style={{
      position: 'relative', border: '1px solid var(--line)', borderRadius: 12,
      background: 'rgba(7,11,21,.85)', overflow: 'hidden',
      boxShadow: `0 0 0 1px ${accent === 'cyan' ? 'rgba(0,240,255,.06)' : 'rgba(255,43,214,.06)'} inset, 0 20px 50px rgba(0,0,0,.45)`,
      transition: 'border-color .3s, transform .3s',
    }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentVar.replace('var(', '').replace(')', ''); }}
       onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px', borderBottom: '1px solid var(--line)',
        background: 'rgba(0,0,0,.3)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        <span style={{
          marginLeft: 4, fontFamily: 'var(--ff-mono)', fontSize: 11,
          color: 'var(--ink-dim)', letterSpacing: '0.1em',
        }}>~/{title}</span>
        <span style={{
          marginLeft: 'auto',
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--ff-mono)', fontSize: 10, color: accentVar,
          letterSpacing: '0.18em',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: accentVar,
            boxShadow: `0 0 8px ${accentVar}`, animation: 'pulse 2s ease-in-out infinite',
          }} />
          LIVE
        </span>
      </div>

      <div style={{
        padding: '10px 18px', borderBottom: '1px solid var(--line)',
        fontFamily: 'var(--ff-mono)', fontSize: 10, color: accentVar,
        letterSpacing: '0.22em', background: 'rgba(0,0,0,.2)',
      }}>{subtitle}</div>

      <div style={{
        position: 'relative', width: '100%',
        background: `radial-gradient(ellipse at center, ${accent === 'cyan' ? 'rgba(0,240,255,.04)' : 'rgba(255,43,214,.04)'}, transparent 70%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
      }}>
        <img src={imgUrl} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        <span aria-hidden="true" style={{ position: 'absolute', top: 8, left: 8, width: 12, height: 12, borderTop: `1px solid ${accentVar}`, borderLeft: `1px solid ${accentVar}`, opacity: 0.7 }} />
        <span aria-hidden="true" style={{ position: 'absolute', top: 8, right: 8, width: 12, height: 12, borderTop: `1px solid ${accentVar}`, borderRight: `1px solid ${accentVar}`, opacity: 0.7 }} />
        <span aria-hidden="true" style={{ position: 'absolute', bottom: 8, left: 8, width: 12, height: 12, borderBottom: `1px solid ${accentVar}`, borderLeft: `1px solid ${accentVar}`, opacity: 0.7 }} />
        <span aria-hidden="true" style={{ position: 'absolute', bottom: 8, right: 8, width: 12, height: 12, borderBottom: `1px solid ${accentVar}`, borderRight: `1px solid ${accentVar}`, opacity: 0.7 }} />
      </div>

      <div style={{
        padding: '8px 18px', borderTop: '1px solid var(--line)',
        background: 'rgba(0,0,0,.2)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--ink-faint)',
        letterSpacing: '0.14em',
      }}>
        <span>SRC // github.com/nightknight-nx2</span>
        <span style={{ color: 'var(--green)' }}>✓ SYNC</span>
      </div>
    </div>
  );
}

function Skills() {
  const { t } = useTranslation();

  const STACK = [
    { id: 'lang', title: t('skills.cat.lang'), accent: 'cyan', items: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'Dart', 'Solidity', 'SQL'] },
    { id: 'web', title: t('skills.cat.web'), accent: 'magenta', items: ['React', 'Vite', 'Tailwind', 'Figma', 'Canva', 'Photoshop'] },
    { id: 'ai', title: t('skills.cat.ai'), accent: 'cyan', items: ['OpenCV', 'YOLO', 'PyTorch', 'TensorRT'] },
    { id: 'rob', title: t('skills.cat.rob'), accent: 'violet', items: ['ROS 2', 'Gazebo', 'Arduino', 'STM32', 'ESP32'] },
    { id: 'game', title: t('skills.cat.game'), accent: 'magenta', items: ['Unity', 'Unreal Engine', 'Blender', 'SolidWorks'] },
    { id: 'web3', title: t('skills.cat.web3'), accent: 'violet', items: ['Smart Contracts', 'Monad', 'Sui'] },
  ];

  return (
    <section id="skills" style={{
      position: 'relative', padding: 'clamp(80px,12vw,160px) clamp(20px,4vw,48px)',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal">
          <SectionLabel idx="04">{t('skills.label')}</SectionLabel>
        </div>
        <div className="reveal reveal-d1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <NeonHeading accent="var(--magenta)">
            {t('skills.title.pt1')}<br />
            <span style={{ color: 'var(--magenta)' }}>{t('skills.title.pt2')}</span>
          </NeonHeading>
          <div style={{ maxWidth: 360, color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.6 }}>
            {t('skills.title.sub')}
          </div>
        </div>

        <div className="skills-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
          {/* Terminal */}
          <div className="reveal" style={{
            position: 'relative', border: '1px solid var(--line)', borderRadius: 12,
            background: 'rgba(7,11,21,.85)', overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(0,240,255,.06) inset, 0 30px 60px rgba(0,0,0,.5)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 16px', borderBottom: '1px solid var(--line)',
              background: 'rgba(0,0,0,.3)',
            }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.1em' }}>
                buildFuture.ts
              </span>
            </div>
            <pre style={{
              margin: 0, padding: '20px 22px', overflow: 'auto',
              fontFamily: 'var(--ff-mono)', fontSize: 12.5, lineHeight: 1.65,
              color: 'var(--ink)', whiteSpace: 'pre-wrap',
            }}>
              {CODE_LINES.map((tok, i) => (
                <span key={i} style={{ color: colorOf(tok.c) }}>{tok.t}</span>
              ))}
              <span className="caret" style={{ marginLeft: 2 }} />
            </pre>
          </div>

          {/* Category grid */}
          <div className="reveal reveal-d2 stack-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: 16,
          }}>
            {STACK.map((cat, i) => (
              <StackCard key={cat.id} cat={cat} idx={i} />
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="reveal github-stats" style={{
          marginTop: 'clamp(48px,6vw,72px)',
          display: 'grid', gridTemplateColumns: '1fr', gap: 20,
        }}>
          <GithubStatsCard
            title="github.stats"
            subtitle="// CONTRIBUTION TELEMETRY"
            imgUrl="https://github-readme-stats-xi-seven-54.vercel.app/api?username=NightKnight-nx2&show_icons=true&theme=radical&include_all_commits=true&count_private=true"
            accent="cyan"
            ratio="2 / 1"
          />
          <GithubStatsCard
            title="top.languages"
            subtitle="// CODE COMPOSITION"
            imgUrl="https://github-readme-stats-xi-seven-54.vercel.app/api/top-langs/?username=NightKnight-nx2&layout=compact&theme=radical"
            accent="magenta"
            ratio="2 / 1"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
