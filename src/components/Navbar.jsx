import React, { useState, useEffect } from 'react'
import logoDcr from '/dcr-logo-nav.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#metodo', label: 'Método' },
    { href: '#diferenciais', label: 'Por que a DCR' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1rem 6vw',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(245,245,240,0.97)' : 'rgba(245,245,240,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(28,43,30,0.1)' : '1px solid transparent',
        transition: 'all .35s ease',
      }}>
        <a href="#hero">
          <img src={logoDcr} alt="DCR Engenharia" style={{
            height: 52, filter: 'brightness(0) saturate(100%) invert(13%) sepia(20%) saturate(800%) hue-rotate(90deg) brightness(80%)'
          }} />
        </a>

        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className="nav-desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ color: '#444940', textDecoration: 'none', fontSize: '.82rem', letterSpacing: '.1em', textTransform: 'uppercase', transition: 'color .3s' }}
                onMouseEnter={e => e.target.style.color = '#1c2b1e'}
                onMouseLeave={e => e.target.style.color = '#444940'}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" style={{
              background: '#1c2b1e', color: '#f5f5f0', padding: '.45rem 1.3rem',
              borderRadius: 2, fontSize: '.82rem', letterSpacing: '.08em', textDecoration: 'none',
              transition: 'background .3s',
            }}
              onMouseEnter={e => e.target.style.background = '#2d4a30'}
              onMouseLeave={e => e.target.style.background = '#1c2b1e'}>
              Fale Conosco
            </a>
          </li>
        </ul>

        <button className="nav-mobile-btn" onClick={() => setOpen(true)}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#1c2b1e' }}>☰</button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(245,245,240,0.98)', zIndex: 99,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .4s ease',
      }}>
        <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '6vw', background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: '#1c2b1e' }}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}
            style={{ color: '#1c2b1e', textDecoration: 'none', fontSize: '1.4rem', fontFamily: 'Playfair Display, serif' }}>{l.label}</a>
        ))}
        <a href="#contato" onClick={() => setOpen(false)}
          style={{ background: '#1c2b1e', color: '#f5f5f0', padding: '.7rem 2rem', borderRadius: 2, textDecoration: 'none', fontSize: '1rem' }}>
          Fale Conosco
        </a>
      </div>

      <style>{`@media(max-width:768px){.nav-desktop{display:none!important}.nav-mobile-btn{display:block!important}}`}</style>
    </>
  )
}
