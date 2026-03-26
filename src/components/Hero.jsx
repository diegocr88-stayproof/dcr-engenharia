import React, { useEffect, useRef } from 'react'
import logoDcr from '/logo-dcr.png'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'; el.style.transform = 'translateY(28px)'
    setTimeout(() => { el.style.transition = 'opacity .9s ease, transform .9s ease'; el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, 80)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '9rem 6vw 5rem', background: '#1c2b1e', position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(184,146,58,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(184,146,58,0.07) 1px,transparent 1px)',
        backgroundSize: '72px 72px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
      }} />
      {/* glow */}
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(184,146,58,0.1) 0%,transparent 70%)', right: -50, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: 760, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: 'rgba(184,146,58,0.15)', border: '1px solid rgba(184,146,58,0.35)', color: '#d4aa56', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', padding: '.4rem 1rem', borderRadius: 2, marginBottom: '2rem' }}>
          <span style={{ width: 6, height: 6, background: '#b8923a', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          Consultoria Técnica Estratégica · Porto Alegre, RS
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.6rem,5vw,4.8rem)', fontWeight: 900, color: '#f5f5f0', lineHeight: 1.06, letterSpacing: '-.02em', marginBottom: '1.6rem' }}>
          Contratos que<br />
          <span style={{ color: '#b8923a' }}>geram resultado.</span><br />
          Não apenas obras.
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'rgba(245,245,240,0.65)', maxWidth: 520, marginBottom: '2.8rem', lineHeight: 1.85 }}>
          Identificamos inconsistências, estruturamos aditivos defensáveis e protegemos a margem do seu negócio em obras públicas.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contato" style={{ background: '#b8923a', color: '#1c2b1e', padding: '.85rem 2rem', borderRadius: 2, fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', fontWeight: 700, letterSpacing: '.04em', textDecoration: 'none', transition: 'background .3s' }}
            onMouseEnter={e => e.target.style.background = '#d4aa56'}
            onMouseLeave={e => e.target.style.background = '#b8923a'}>
            Solicitar Diagnóstico Gratuito
          </a>
          <a href="#servicos" style={{ background: 'transparent', color: '#f5f5f0', padding: '.85rem 2rem', borderRadius: 2, border: '1px solid rgba(245,245,240,0.25)', fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', textDecoration: 'none', transition: 'border-color .3s' }}
            onMouseEnter={e => e.target.style.borderColor = 'rgba(245,245,240,0.6)'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(245,245,240,0.25)'}>
            Conheça os Serviços
          </a>
        </div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(245,245,240,0.1)' }}>
          {[
            { val: '15+', label: 'Anos em obras complexas' },
            { val: 'SINAPI', label: 'ORSE · Composições analíticas' },
            { val: 'MBA', label: 'Fundações & Obras Públicas' },
          ].map((s, i) => (
            <div key={i}>
              <strong style={{ display: 'block', fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#b8923a', lineHeight: 1, marginBottom: '.3rem' }}>{s.val}</strong>
              <span style={{ fontSize: '.76rem', color: 'rgba(245,245,240,0.5)', letterSpacing: '.04em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </section>
  )
}
