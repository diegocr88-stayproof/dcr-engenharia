import React, { useState, useEffect } from 'react'

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
        padding: '0.9rem 6vw',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(245,245,240,0.97)' : 'rgba(245,245,240,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(28,43,30,0.1)' : '1px solid transparent',
        transition: 'all .35s ease',
      }}>

        {/* Logo: ícone SVG inline + DCR texto */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
          {/* Ícone inline — gráfico de barras na moldura */}
          <svg width="42" height="42" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="10" fill="#1a2e1c"/>
            <rect x="12" y="12" width="76" height="76" rx="5" fill="none" stroke="#4a9e3f" stroke-width="2.5"/>
            <rect x="22" y="68" width="15" height="12" rx="2" fill="#4a9e3f"/>
            <rect x="42" y="54" width="15" height="26" rx="2" fill="#4a9e3f"/>
            <rect x="62" y="36" width="15" height="44" rx="2" fill="#b8923a"/>
            <polygon points="69.5,26 61,38 78,38" fill="#b8923a"/>
          </svg>

          {/* Texto DCR + Engenharia */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{
              fontFamily: "'Arial Black', 'Franklin Gothic Heavy', Impact, sans-serif",
              fontSize: '1.3rem', fontWeight: 900, color: '#1a2e1c',
              letterSpacing: '-0.5px',
            }}>DCR</span>
            <span style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.55rem', fontWeight: 700, color: '#b8923a',
              letterSpacing: '3px', textTransform: 'uppercase',
            }}>Engenharia</span>
          </div>
        </a>

        {/* Links desktop */}
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

        {/* Mobile hambúrguer */}
        <button className="nav-mobile-btn" onClick={() => setOpen(true)}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#1c2b1e' }}>☰</button>
      </nav>

      {/* Menu mobile */}
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
