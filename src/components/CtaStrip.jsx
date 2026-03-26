import React from 'react'
import useReveal from './useReveal'

export default function CtaStrip() {
  const r = useReveal()
  return (
    <section style={{ background: '#2d4a30', padding: '5rem 6vw', textAlign: 'center' }}>
      <div ref={r.ref} style={r.style}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#f5f5f0', marginBottom: '1rem', lineHeight: 1.2 }}>
          Seu contrato tem mais valor<br /><span style={{ color: '#d4aa56' }}>do que aparenta.</span>
        </h2>
        <p style={{ color: 'rgba(245,245,240,0.6)', maxWidth: 440, margin: '0 auto 2.5rem', fontSize: '.97rem', lineHeight: 1.75 }}>
          Um diagnóstico técnico pode revelar oportunidades que você ainda não mapeou.
        </p>
        <a href="#contato" style={{ background: '#b8923a', color: '#1c2b1e', padding: '.9rem 2.4rem', borderRadius: 2, fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', fontWeight: 700, letterSpacing: '.04em', textDecoration: 'none', display: 'inline-block', transition: 'background .3s' }}
          onMouseEnter={e => e.target.style.background = '#d4aa56'}
          onMouseLeave={e => e.target.style.background = '#b8923a'}>
          Solicitar Diagnóstico Gratuito
        </a>
      </div>
    </section>
  )
}
