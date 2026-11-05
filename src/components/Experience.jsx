import React from 'react';
import { useTranslation } from 'react-i18next';
import { useL } from '../i18n';
import { IEEE_TERMS, TEAMS, TEAM_GALLERY } from '../data/content';
import { SectionHead, Txt } from './Atoms';

export default function Experience() {
  const { t } = useTranslation();
  const L = useL();
  return (
    <section id="experience" className="section" aria-labelledby="h-exp">
      <SectionHead idx={t('exp.idx')} title={<span id="h-exp">{t('exp.title')}</span>} />

      <div className="grid-teams">
        {TEAM_GALLERY.map((g) => (
          <figure className="card team" key={g.name}>
            <div className={'team-img' + (g.light ? ' light' : '')}>
              <img src={g.img} alt={L(g.alt)} loading="lazy" style={{ objectFit: g.fit }} />
            </div>
            <figcaption>
              <div className="label"><Txt v={g.sub} /> · TEKNOFEST</div>
              <div className="name">{g.name}</div>
              <div className="role"><Txt v={g.role} /></div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="exp-row">
        <div className="card ieee">
          <div className="label">{t('exp.ieee')}</div>
          {IEEE_TERMS.map((term) => (
            <div className="term" key={term.period}>
              <div className={'p' + (term.current ? ' now' : '')}>{term.period}</div>
              <div>
                <h3><Txt v={term.title} /></h3>
                <p><Txt v={term.body} /></p>
                {term.stats && (
                  <div className="stats" style={{ marginTop: 16 }}>
                    {term.stats.map((s, j) => <div key={j}><div className="v">{s.v}</div><div className="label"><Txt v={s.l} /></div></div>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="card teams">
          <div className="label">{t('exp.teams')}</div>
          <div className="table-scroll">
            <table>
              <thead><tr><th>{t('exp.col.team')}</th><th>{t('exp.col.role')}</th><th>{t('exp.col.period')}</th></tr></thead>
              <tbody>
                {TEAMS.map((r, i) => (
                  <tr key={i}>
                    <td><div className="n"><Txt v={r.name} /></div><div className="s"><Txt v={r.sub} /></div></td>
                    <td className="role"><Txt v={r.role} />{r.prev && <div className="s"><Txt v={r.prev} /></div>}</td>
                    <td className={'per' + (r.active ? ' now' : '')}><Txt v={r.period} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
