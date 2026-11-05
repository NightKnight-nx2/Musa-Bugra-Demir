import React from 'react';
import { useTranslation } from 'react-i18next';
import { useL } from '../i18n';
import { ARCHIVE, CATEGORIES, FEATURED, FLAGSHIPS, GAMES } from '../data/content';
import { Flow, Rich, SectionHead, Txt } from './Atoms';

function Flagship({ p }) {
  const { t } = useTranslation();
  const L = useL();
  const img = p.image;
  return (
    <article className={'card flagship' + (p.reverse ? ' reverse' : '')}>
      <div className="flag-text">
        <div className="kick">
          <span className={'tag' + (p.kickerAccent === 'amber' ? ' amber' : '')}><Txt v={p.kicker} /></span>
          <span className="ctx"><Txt v={p.context} /></span>
        </div>
        <h3><Txt v={p.title} /></h3>
        <p><Txt v={p.body} /></p>
        <div className="stats">
          {p.stats.map((s, i) => (
            <div key={i}><div className="v"><Txt v={s.v} /></div><div className="label"><Txt v={s.l} /></div></div>
          ))}
        </div>
        <div className="chips">{p.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div>
        {p.note && <p className="note"><Txt v={p.note} /></p>}
        <div className="links">
          <a className="go" href={`#/p/${p.slug}`}>{t('projects.case')} →</a>
          {p.code && <a href={p.code} target="_blank" rel="noreferrer">{t('projects.code')} ↗</a>}
        </div>
      </div>
      <figure className={'flag-side' + (img.light ? ' light' : '')}>
        {p.flow && <Flow rows={p.flow} label={t('projects.flow')} />}
        <img className={img.fit === 'cover' ? 'cover' : undefined} src={img.src} alt={L(img.alt)} loading="lazy" />
        <figcaption className="label">
          <Txt v={img.caption} />
        </figcaption>
      </figure>
    </article>
  );
}

function FeatureCard({ p }) {
  const { t } = useTranslation();
  const L = useL();
  const img = p.image;
  return (
    <article className="card feat">
      <div className={'feat-media' + (img?.light ? ' light' : '')}>
        {img ? <img className={img.top ? 'top' : undefined} src={img.src} alt={L(img.alt)} loading="lazy" />
          : <Flow rows={p.flow} logo={p.logo} logoAlt={L(p.title) + ' logo'} />}
      </div>
      <div className="feat-body">
        <div className="kick"><Txt v={p.kicker} /></div>
        <h3><Txt v={p.title} /></h3>
        <p><Txt v={p.body} /></p>
        <Rich className="metric" As="div" v={p.metric} />
        <div className="links">
          {p.slug && <a className="go" href={`#/p/${p.slug}`}>{t('projects.case')} →</a>}
          {p.code && <a href={p.code} target="_blank" rel="noreferrer">{t('projects.code')} ↗</a>}
          {p.live && <a href={p.live} target="_blank" rel="noreferrer">{t('projects.live')} ↗</a>}
        </div>
      </div>
    </article>
  );
}

export function Featured() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="section" aria-labelledby="h-projects">
      <SectionHead idx={t('projects.idx')} title={<span id="h-projects">{t('projects.title')}</span>} sub={t('projects.sub')} />
      {FLAGSHIPS.map((p) => <Flagship key={p.slug} p={p} />)}
      <div className="grid-feat">{FEATURED.map((p, i) => <FeatureCard key={i} p={p} />)}</div>
    </section>
  );
}

export function Games() {
  const { t } = useTranslation();
  const L = useL();
  return (
    <section id="games" className="section" aria-labelledby="h-games">
      <SectionHead idx={t('games.idx')} title={<span id="h-games">{t('games.title')}</span>} sub={t('games.sub')} small />
      <div className="grid-games">
        {GAMES.map((g, i) => (
          <article className="card game" key={i}>
            <div className={'game-cover' + (g.secret ? ' secret' : '')}>
              {g.image ? <img src={g.image} alt={L(g.title) + ' · Steam'} loading="lazy" />
                : g.secret ? <span aria-hidden="true">■■■■■ ■■■■</span>
                  : <><strong>{L(g.title).toUpperCase()}</strong><span className="label"><Txt v={g.cover} /></span></>}
            </div>
            <div className="game-body">
              <div className="game-meta label"><span className={'st-' + g.status}>● <Txt v={g.statusLabel} /></span><span><Txt v={g.meta} /></span></div>
              <h3><Txt v={g.title} /></h3>
              <p><Txt v={g.body} />{g.highlight && <> <b><Txt v={g.highlight} /></b></>}</p>
              {g.roles.length > 0 && <ul>{g.roles.map((r, j) => <li key={j}><Txt v={r} /></li>)}</ul>}
              <div className="links" style={{ marginTop: 'auto' }}>
                {g.slug && <a className="go" href={`#/p/${g.slug}`}>{t('games.case')} →</a>}
                {g.steam && <a href={g.steam} target="_blank" rel="noreferrer">{t('games.steam')} ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Archive({ cat, setCat }) {
  const { t } = useTranslation();
  const L = useL();
  const shown = cat === 'all' ? ARCHIVE : ARCHIVE.filter((p) => p.cat === cat);
  const catLabel = (id) => L(CATEGORIES.find((c) => c.id === id)?.label);
  return (
    <section id="archive" className="section" aria-labelledby="h-archive">
      <SectionHead idx={t('archive.idx')} title={<span id="h-archive">{t('archive.title')}</span>} small>
        {' '}<span className="muted">({ARCHIVE.length})</span>
      </SectionHead>
      <div className="filters" role="group" aria-label={t('archive.filter')}>
        {CATEGORIES.map((c) => {
          const n = c.id === 'all' ? ARCHIVE.length : ARCHIVE.filter((p) => p.cat === c.id).length;
          return (
            <button key={c.id} type="button" className="filter" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              {L(c.label)} · {n}
            </button>
          );
        })}
      </div>
      <div className="grid-arch" aria-live="polite">
        {shown.length === 0 && <p className="label">{t('archive.empty')}</p>}
        {shown.map((p) => {
          const external = p.href && p.href.startsWith('http');
          const Tag = p.href ? 'a' : 'div';
          return (
            <Tag key={L(p.title)} className="card arch" href={p.href || undefined} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
              <div className="top label"><span>{catLabel(p.cat)}</span><span>{p.lang}</span></div>
              <h3><Txt v={p.title} /></h3>
              <p><Txt v={p.desc} /></p>
              <div className="res"><Txt v={p.result} />{external ? ' ↗' : p.href ? ' →' : ''}</div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
