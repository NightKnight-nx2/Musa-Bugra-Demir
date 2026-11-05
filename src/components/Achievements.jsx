import React from 'react';
import { useTranslation } from 'react-i18next';
import { ACHIEVEMENTS } from '../data/content';
import { SectionHead, Txt } from './Atoms';

export default function Achievements() {
  const { t } = useTranslation();
  return (
    <section id="achievements" className="section" aria-labelledby="h-ach">
      <SectionHead idx={t('ach.idx')} title={<span id="h-ach">{t('ach.title')}</span>} />
      <div className="grid-ach">
        {ACHIEVEMENTS.map((a, i) => (
          <article className={'card ach' + (a.featured ? ' featured' : '')} key={i}>
            <div className={'label ' + a.accent}><Txt v={a.tag} /></div>
            <h3><Txt v={a.title} /></h3>
            <p><Txt v={a.body} /></p>
          </article>
        ))}
      </div>
    </section>
  );
}
