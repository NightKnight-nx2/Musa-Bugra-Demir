import React from 'react';
import { useL } from '../i18n';

// Renders a content value; TODO(...) values show as a visible placeholder.
export function Txt({ v }) {
  const L = useL();
  if (v && typeof v === 'object' && v.todo) return <span className="todo">{L(v)}</span>;
  return <>{L(v)}</>;
}

// Content strings may contain <b>…</b> for emphasis (trusted, authored in src/data).
export function Rich({ v, As = 'span', className }) {
  const Tag = As;
  const L = useL();
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: L(v) }} />;
}

export function SectionHead({ idx, title, sub, small, children }) {
  return (
    <div className="sec-head">
      <div>
        <div className="sec-idx">{idx}</div>
        <h2 className={small ? 'sec-title sm' : 'sec-title'}>{title}{children}</h2>
      </div>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  );
}

// Data-flow diagram. Each row is a list of nodes: '*name' = highlighted, '!name' = safety/alt, 'tr|en' = bilingual label.
export function Flow({ rows, label, logo, logoAlt = '' }) {
  const L = useL();
  const lang = L({ tr: 'tr', en: 'en' });
  const parse = (raw) => {
    let kind = '';
    let s = raw;
    if (s[0] === '*') { kind = 'hot'; s = s.slice(1); }
    else if (s[0] === '!') { kind = 'alt'; s = s.slice(1); }
    const [tr, en] = s.split('|');
    return { kind, text: lang === 'en' && en ? en : tr };
  };
  return (
    <div className="flow" role="img" aria-label={label || rows.flat().map((r) => parse(r).text).join(' → ')}>
      {logo && <img src={logo} alt={logoAlt} />}
      {label && <div className="label" aria-hidden="true">{label}</div>}
      {rows.map((row, i) => (
        <div className="flow-row" key={i} aria-hidden="true">
          {row.map((raw, j) => {
            const n = parse(raw);
            return (
              <React.Fragment key={j}>
                {j > 0 && <span className="arrow">→</span>}
                <span className={'node ' + n.kind}>{n.text}</span>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
}
