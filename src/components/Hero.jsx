import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      setTimeout(() => {
        el.style.transition = 'opacity .9s ease, transform .9s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100)
    }
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '10rem 6vw 6rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, black 30%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, black 30%, transparent 100%)',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        right: -100, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none',
      }} />

      <div ref={contentRef} style={{ maxWidth: 780, position: 'relative', zIndex: 2 }}>
        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.6rem',
          background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
          color: '#e8c97a', fontSize: '.73rem', letterSpacing: '.15em',
          textTransform: 'uppercase', padding: '.4rem 1rem',
          borderRadius: 2, marginBottom: '2rem',
        }}>
          <span style={{ width: 7, height: 7, background: '#c9a84c', borderRadius: '50%',
            animation: 'pulse 2s infinite' }} />
          Consultoria Técnica Estratégica · Porto Alegre, RS
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.8rem, 5vw, 5rem)',
          fontWeight: 900, lineHeight: 1.06,
          color: '#f8f6f1', letterSpacing: '-.02em',
          marginBottom: '1.8rem',
        }}>
          Contratos que<br />
          <span style={{ color: '#c9a84c' }}>geram resultado.</span><br />
          Não apenas obras.
        </h1>

        <p style={{
          fontSize: '1.1rem', color: '#8a9ab5', maxWidth: 560,
          marginBottom: '3rem', lineHeight: 1.85,
        }}>
          A DCR Engenharia atua na interface entre técnica e contrato — identificando inconsistências, estruturando aditivos defensáveis e protegendo a margem do seu negócio.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contato" style={{
            background: '#c9a84c', color: '#0a1628', padding: '.9rem 2.2rem',
            borderRadius: 2, fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem',
            fontWeight: 600, letterSpacing: '.05em', textDecoration: 'none',
            transition: 'background .3s, transform .2s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.background = '#e8c97a'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = '#c9a84c'; e.target.style.transform = 'translateY(0)' }}>
            Solicitar Diagnóstico
          </a>
          <a href="#servicos" style={{
            background: 'transparent', color: '#f8f6f1', padding: '.9rem 2.2rem',
            borderRadius: 2, border: '1px solid rgba(255,255,255,0.18)',
            fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', textDecoration: 'none',
            transition: 'border-color .3s, color .3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.color = '#c9a84c' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.color = '#f8f6f1' }}>
            Conheça os Serviços
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '3rem', flexWrap: 'wrap',
          marginTop: '4rem', paddingTop: '3rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {[
            { val: '15+', label: 'Anos de experiência em obras complexas' },
            { val: 'SINAPI', label: 'ORSE · Composições analíticas próprias' },
            { val: 'MBA', label: 'Especialização em fundações profundas' },
          ].map((s, i) => (
            <div key={i}>
              <strong style={{ display: 'block', fontFamily: 'Playfair Display, serif',
                fontSize: '2.2rem', color: '#c9a84c', lineHeight: 1, marginBottom: '.3rem' }}>
                {s.val}
              </strong>
              <span style={{ fontSize: '.78rem', color: '#8a9ab5', letterSpacing: '.04em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }`}</style>
    </section>
  )
}
