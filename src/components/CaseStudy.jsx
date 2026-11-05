import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useL } from '../i18n';
import { CASE_ORDER, CASE_STUDIES } from '../data/caseStudies';
import { Flow, Txt } from './Atoms';

function Sec({ idx, title, children }) {
  return (
    <section className="case-sec">
      <div className="sec-idx">{idx}</div>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default function CaseStudy({ slug }) {
  const { t } = useTranslation();
  const L = useL();
  const c = CASE_STUDIES[slug];

  const title = c ? L(c.title) : '';
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  useEffect(() => {
    if (title) document.title = `${title} · Musa Buğra Demir`;
    return () => { document.title = 'Musa Buğra Demir · Portfolyo'; };
  }, [title]);

  if (!c) {
    return (
      <main id="main" className="case">
        <a className="back" href="#/#projects">← {t('case.back')}</a>
        <p>{t('case.notFound')}</p>
      </main>
    );
  }

  const i = CASE_ORDER.indexOf(slug);
  const prev = CASE_ORDER[(i - 1 + CASE_ORDER.length) % CASE_ORDER.length];
  const next = CASE_ORDER[(i + 1) % CASE_ORDER.length];
  let n = 0;
  const idx = (k) => `${String(++n).padStart(2, '0')} · ${t(k)}`;

  return (
    <main id="main" className="case">
      <a className="back" href="#/#projects">← {t('case.back')}</a>
      <div className="sec-idx"><Txt v={c.kicker} /></div>
      <h1><Txt v={c.title} /><span className="muted"><Txt v={c.subtitle} /></span></h1>
      <p className="summary"><Txt v={c.summary} /></p>

      <dl className="meta">
        {c.meta.map((m, j) => (
          <div key={j}><dt className="label"><Txt v={m.k} /></dt><dd><Txt v={m.v} /></dd></div>
        ))}
        {c.links.length > 0 && (
          <div><dt className="label">LINK</dt><dd className="links">{c.links.map((l) => <a key={l.href} className="go" href={l.href} target="_blank" rel="noreferrer"><Txt v={l.label} /></a>)}</dd></div>
        )}
      </dl>

      <figure className="case-hero">
        <div className={'frame' + (c.hero.light ? ' light' : '')}>
          <img className={c.hero.fit === 'cover' ? 'cover' : undefined} src={c.hero.src} alt={L(c.hero.alt)} />
        </div>
        {c.hero.caption && <figcaption><Txt v={c.hero.caption} /></figcaption>}
      </figure>

      {c.stats && (
        <div className="case-stats">
          {c.stats.map((s, j) => <div key={j}><div className="v">{s.v}</div><div className="l"><Txt v={s.l} /></div></div>)}
        </div>
      )}

      {c.roles && (
        <Sec idx={idx('case.role')} title={L(c.roles.title)}>
          <div className="chips">{c.roles.items.map((r, j) => <span className="chip" key={j}><Txt v={r} /></span>)}</div>
        </Sec>
      )}

      {c.flow && (
        <Sec idx={idx('case.arch')} title={L(c.flowTitle)}>
          <Flow rows={c.flow} />
          {c.flowNote && <p><Txt v={c.flowNote} /></p>}
        </Sec>
      )}

      {c.decisions && (
        <Sec idx={idx('case.decisions')} title={t('case.decisionsTitle')}>
          <div className="grid-dec">
            {c.decisions.map((d, j) => (
              <div className="card dec" key={j}><h3><Txt v={d.title} /></h3><p><Txt v={d.body} /></p></div>
            ))}
          </div>
        </Sec>
      )}

      {c.packages && (
        <Sec idx={idx('case.packages')} title={t('case.packagesTitle')}>
          <div className="box table-scroll">
            <table className="pkg-table">
              <tbody>
                {c.packages.map(([name, desc]) => (
                  <tr key={name}>
                    <td><a href={`https://github.com/NightKnight-nx2/${name}`} target="_blank" rel="noreferrer">{name}</a></td>
                    <td><Txt v={desc} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Sec>
      )}

      {c.resultsTable && (
        <Sec idx={idx('case.results')} title={L(c.resultsTable.title)}>
          <div className="box table-scroll">
            <table className={c.resultsTable.head.length > 2 ? 'res-table' : undefined}>
              <thead><tr>{c.resultsTable.head.map((h, j) => <th key={j}><Txt v={h} /></th>)}</tr></thead>
              <tbody>
                {c.resultsTable.rows.map((r, j) => {
                  const status = r.length === 3 && (r[2] === 'ok' || r[2] === 'warn') ? r[2] : null;
                  const cells = status ? r.slice(0, 2) : r;
                  return (
                    <tr key={j}>
                      {cells.map((cell, k) => (
                        <td key={k} className={status && k === 1 ? 'status-' + status : undefined}><Txt v={cell} /></td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {c.resultsTable.note && <p><Txt v={c.resultsTable.note} /></p>}
        </Sec>
      )}

      {c.results && (
        <Sec idx={idx('case.results')} title={L(c.results.title)}>
          <p><Txt v={c.results.todo} /></p>
        </Sec>
      )}

      {c.limits && (
        <Sec idx={idx(c.limitsTitle ? 'case.lessons' : 'case.limits')} title={c.limitsTitle ? L(c.limitsTitle) : t('case.limitsTitle')}>
          <ul className="limits">{c.limits.map((l, j) => <li key={j}><Txt v={l} /></li>)}</ul>
        </Sec>
      )}

      <nav className="case-nav" aria-label="Proje gezintisi">
        <a href={`#/p/${prev}`}>← {t('case.prev')}: <Txt v={CASE_STUDIES[prev].title} /></a>
        <a href={`#/p/${next}`}>{t('case.next')}: <Txt v={CASE_STUDIES[next].title} /> →</a>
      </nav>
    </main>
  );
}
