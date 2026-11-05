import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '../data/content';
import { Txt } from './Atoms';

export default function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable; the mailto link still works */ }
  }

  return (
    <>
      <section id="contact" className="section card contact" aria-labelledby="h-contact" style={{ marginBottom: 0 }}>
        <div className="sec-idx">{t('contact.idx')}</div>
        <h2 id="h-contact" className="sec-title">{t('contact.title')}</h2>
        <p className="sec-sub">{t('contact.sub')}</p>
        <div className="email-row">
          <a className="email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <button type="button" className="btn-sm" onClick={copy} aria-live="polite">{copied ? t('contact.copied') + ' ✓' : t('contact.copy')}</button>
        </div>
        <div className="ctas">
          <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn" href={PROFILE.cv} download="Musa_Bugra_Demir_CV.pdf">CV <small>.pdf</small> ↓</a>
        </div>
      </section>
      <footer className="footer label">
        <span>© {new Date().getFullYear()} Musa Buğra Demir</span>
        <span>{t('footer.updated')} · <Txt v={PROFILE.updated} /></span>
      </footer>
    </>
  );
}
