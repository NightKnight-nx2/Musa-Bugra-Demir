import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { PROFILE, PROOF } from '../data/content';
import { Txt } from './Atoms';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero-text reveal">
          <div className="pills">
            <span className="pill ok"><span className="dot" aria-hidden="true" />{t('hero.status')}</span>
            <span className="pill">38.45°N · 27.21°E · İzmir</span>
          </div>
          <h1 id="hero-name">Musa Buğra <span>Demir</span></h1>
          <p className="hero-lead">
            <Trans i18nKey="hero.lead" components={{ hl: <span className="hl" /> }} />
          </p>
          <p className="hero-sub">{t('hero.sub')}</p>
          <div className="ctas">
            <a className="btn primary" href="#projects">{t('hero.cta.projects')} →</a>
            <a className="btn" href={PROFILE.cv} download="Musa_Bugra_Demir_CV.pdf">{t('hero.cta.cv')} <small>.pdf</small></a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <figure className="portrait reveal">
          <div className="portrait-frame">
            <img src={PROFILE.portrait} alt="Musa Buğra Demir" width="800" height="800" fetchpriority="high" />
            <span className="tick tl" aria-hidden="true" />
            <span className="tick br" aria-hidden="true" />
          </div>
          <figcaption className="label">
            <span>{t('hero.caption.left')}</span>
            <span className="accent">{t('hero.caption.right')}</span>
          </figcaption>
        </figure>
      </section>

      <section className="proof" aria-label={t('proof.label')}>
        {PROOF.map((p, i) => (
          <div key={i}>
            <div className={'v ' + p.accent}><Txt v={p.value} /></div>
            <div className="l"><Txt v={p.label} /></div>
            <div className="label"><Txt v={p.sub} /></div>
          </div>
        ))}
      </section>
    </>
  );
}
