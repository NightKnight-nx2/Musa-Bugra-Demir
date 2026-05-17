import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel, NeonHeading, CornerTicks } from './Atoms';

function Field({ label, value, error, onChange, placeholder, type = 'text', textarea }) {
  const [focus, setFocus] = useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.18em',
        color: focus ? 'var(--cyan)' : 'var(--ink-dim)', marginBottom: 8,
        transition: 'color .2s',
      }}>
        <span>// {label}</span>
        {error && <span style={{ color: 'var(--magenta)', textTransform: 'lowercase' }}>! {error}</span>}
      </label>
      <div style={{
        display: 'flex', alignItems: textarea ? 'flex-start' : 'center', gap: 8,
        padding: textarea ? '12px 14px' : '0 14px',
        height: textarea ? 'auto' : 46,
        borderRadius: 8,
        border: `1px solid ${focus ? 'var(--cyan)' : error ? 'rgba(255,43,214,.5)' : 'var(--line-bright)'}`,
        background: 'rgba(0,0,0,.25)',
        transition: 'all .2s',
        boxShadow: focus ? '0 0 0 1px rgba(0,240,255,.25), 0 0 24px rgba(0,240,255,.12)' : 'none',
      }}>
        <span style={{ color: focus ? 'var(--cyan)' : 'var(--ink-faint)', fontFamily: 'var(--ff-mono)', fontSize: 13 }}>›</span>
        <Tag
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          rows={textarea ? 4 : undefined}
          style={{
            flex: 1, background: 'transparent', border: 0, outline: 'none',
            color: 'var(--ink)', fontFamily: 'var(--ff-body)', fontSize: 14,
            resize: textarea ? 'vertical' : 'none',
            padding: textarea ? '2px 0' : 0,
          }}
        />
      </div>
    </div>
  );
}

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = 'callsign required';
    if (!form.email.trim()) err.email = 'channel address required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = 'invalid frequency';
    if (!form.message.trim()) err.message = 'payload required';
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      window.location.href = `mailto:musabugrademir@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AReply to: ${form.email}`;
      setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 4000);
    }
  }

  return (
    <section id="contact" style={{
      position: 'relative', padding: 'clamp(80px,12vw,160px) clamp(20px,4vw,48px) 100px',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal">
          <SectionLabel idx="05">{t('contact.label')}</SectionLabel>
        </div>
        <div className="reveal reveal-d1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <NeonHeading>
            {t('contact.title.main').split(' ')[0]}<br />
            {t('contact.title.main').split(' ').slice(1).join(' ')}
          </NeonHeading>
          <div style={{ maxWidth: 360, color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.6 }}>
            {t('contact.title.sub')}
          </div>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {/* Terminal form */}
          <div className="reveal" style={{
            position: 'relative', border: '1px solid var(--line)', borderRadius: 12,
            background: 'rgba(7,11,21,.85)', overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,.5)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 16px', borderBottom: '1px solid var(--line)',
              background: 'rgba(0,0,0,.3)',
              fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
              letterSpacing: '0.12em',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: 'var(--green)',
                boxShadow: '0 0 8px var(--green)', animation: 'pulse 2s ease-in-out infinite',
              }} />
              CHANNEL OPEN · /dev/comms
            </div>
            <form onSubmit={onSubmit} style={{ padding: 'clamp(20px,3vw,32px)' }}>
              <Field label={t('contact.form.callsign')} value={form.name} error={errors.name} onChange={(v) => setForm({ ...form, name: v })} placeholder={t('contact.form.callsign_ph')} />
              <Field label={t('contact.form.freq')} value={form.email} error={errors.email} onChange={(v) => setForm({ ...form, email: v })} placeholder={t('contact.form.freq_ph')} type="email" />
              <Field label={t('contact.form.payload')} value={form.message} error={errors.message} onChange={(v) => setForm({ ...form, message: v })} placeholder={t('contact.form.payload_ph')} textarea />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginTop: 20 }}>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-faint)',
                  letterSpacing: '0.1em',
                }}>
                  {t('contact.form.enc')}<span style={{ color: 'var(--green)' }}>{t('contact.form.enc_val')}</span>
                </div>
                <button type="submit" className="btn-primary" disabled={sent} style={sent ? { background: 'var(--green)', color: '#000' } : null}>
                  {sent ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                      <span>{t('contact.form.sent')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.form.transmit')}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 7l12-5-5 12-2-5-5-2z" fill="currentColor" /></svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Comms panel */}
          <div className="reveal reveal-d2" style={{
            position: 'relative', borderRadius: 12, padding: 'clamp(24px,3.5vw,40px)',
            border: '1px solid var(--line)', background: 'rgba(7,11,21,.6)',
            overflow: 'hidden',
          }}>
            <CornerTicks />
            <div style={{
              fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
              letterSpacing: '0.18em', marginBottom: 22,
            }}>// DIRECT_LINKS.cfg</div>

            <div style={{ display: 'grid', gap: 8, marginBottom: 28 }}>
              {[
                { label: 'github', value: '@nightknight-nx2', url: 'https://github.com/nightknight-nx2', color: 'cyan' },
                { label: 'linkedin', value: 'musa-bugra-demir', url: 'https://www.linkedin.com/in/musabugrademir/', color: 'magenta' },
                { label: 'linktree', value: '@musabugrademir', url: 'https://linktr.ee/musabugrademir', color: 'violet' },
                { label: 'email', value: 'musabugrademir@gmail.com', url: 'mailto:musabugrademir@gmail.com', color: 'green' },
              ].map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="contact-link" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 16px', borderRadius: 8,
                  border: '1px solid var(--line)', background: 'rgba(0,0,0,.2)',
                  transition: 'all .25s',
                }}>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-dim)',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                  }}>{l.label}</span>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: 13,
                    color: l.color === 'ink' ? 'var(--ink)' : `var(--${l.color})`,
                  }}>{l.value} →</span>
                </a>
              ))}
            </div>

            {/* orbital comm visual */}
            <div style={{ position: 'relative', height: 180, margin: '0 -16px', overflow: 'hidden' }}>
              <svg viewBox="0 0 400 180" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <defs>
                  <radialGradient id="cg" cx="50%" cy="100%" r="80%">
                    <stop offset="0%" stopColor="rgba(0,240,255,0.18)" />
                    <stop offset="100%" stopColor="rgba(0,240,255,0)" />
                  </radialGradient>
                </defs>
                {[60, 100, 140].map((r, i) => (
                  <ellipse key={r} cx="200" cy="200" rx={r * 1.4} ry={r * 0.6} fill="none" stroke="rgba(0,240,255,.2)" strokeDasharray={i === 0 ? '4 4' : 'none'} />
                ))}
                <circle cx="200" cy="200" r="6" fill="var(--cyan)" />
                <circle cx="200" cy="200" r="14" fill="none" stroke="var(--cyan)" opacity="0.4">
                  <animate attributeName="r" from="14" to="80" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="60" r="3" fill="var(--magenta)" />
                <circle cx="320" cy="40" r="2" fill="var(--violet)" />
                <circle cx="60" cy="100" r="2" fill="var(--cyan)" opacity="0.7" />
                <circle cx="340" cy="110" r="2" fill="var(--ink)" opacity="0.5" />
                <rect x="0" y="0" width="400" height="180" fill="url(#cg)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal reveal-d3" style={{
          marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
          fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--ink-faint)',
          letterSpacing: '0.15em',
        }}>
          <div>© {new Date().getFullYear()} · MUSA BUĞRA DEMİR · ALL TRANSMISSIONS LOGGED</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: 'var(--green)',
              boxShadow: '0 0 8px var(--green)',
            }} />
            END OF SIGNAL
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
