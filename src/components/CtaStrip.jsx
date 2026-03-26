import React from 'react'
import useReveal from './useReveal'

export default function CtaStrip() {
  const r = useReveal()
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1d3461 0%, #112240 100%)',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      padding: '5rem 6vw', textAlign: 'center',
    }}>
      <div ref={r.ref} style={r.style}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: '#f8f6f1', marginBottom: '1rem', lineHeight: 1.2 }}>
          Seu contrato tem mais valor<br /><span style={{ color: '#c9a84c' }}>do que aparenta.</span>
        </h2>
        <p style={{ color: '#8a9ab5', maxWidth: 480, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.75 }}>
          Um diagnóstico técnico pode revelar oportunidades que você ainda não mapeou. Vamos conversar.
        </p>
        <a href="#contato" style={{
          background: '#c9a84c', color: '#0a1628', padding: '.9rem 2.4rem',
          borderRadius: 2, fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem',
          fontWeight: 600, letterSpacing: '.05em', textDecoration: 'none',
          display: 'inline-block', transition: 'background .3s, transform .2s',
        }}
          onMouseEnter={e => { e.target.style.background = '#e8c97a'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background = '#c9a84c'; e.target.style.transform = 'translateY(0)' }}>
          Solicitar Diagnóstico Gratuito
        </a>
      </div>
    </section>
  )
}
