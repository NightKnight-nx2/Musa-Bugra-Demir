import React from 'react';
import { useTranslation } from 'react-i18next';
import { ARCHIVE, SKILLS } from '../data/content';
import { Txt } from './Atoms';

export default function About({ onPickCategory }) {
  const { t } = useTranslation();
  return (
    <section id="about" className="section about" aria-labelledby="h-about">
      <div>
        <div className="sec-idx">{t('about.idx')}</div>
        <h2 id="h-about" className="sec-title sm">{t('about.title')}</h2>
        <p>{t('about.p1')}</p>
        <blockquote>{t('about.quote')}</blockquote>
      </div>
      <div>
        <div className="label" style={{ marginTop: 6 }}>{t('about.skills')}</div>
        <div className="skills">
          {SKILLS.map((s, i) => {
            const n = s.cat ? ARCHIVE.filter((p) => p.cat === s.cat).length : 0;
            return (
              <div className="skill" key={i}>
                <div className="k"><Txt v={s.title} /></div>
                <div className="i"><Txt v={s.items} /></div>
                {s.cat && (
                  <button type="button" onClick={() => onPickCategory(s.cat)}>
                    {t('about.projectsN', { count: n })} →
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
