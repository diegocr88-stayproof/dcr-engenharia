import React, { useState, useEffect } from 'react'
import logoDcr from '/logo-dcr.png'

const s = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '1.2rem 6vw',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'background .4s, backdrop-filter .4s, box-shadow .4s',
    background: scrolled ? 'rgba(10,22,40,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 0 rgba(201,168,76,0.1)' : 'none',
  }),
  logo: {
    height: 38, width: 'auto',
    filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(1.1)',
  },
  links: {
    display: 'flex', gap: '2.5rem', listStyle: 'none',
    '@media(max-width:768px)': { display: 'none' },
  },
  link: { color: '#8a9ab5', textDecoration: 'none', fontSize: '.82rem',
    letterSpacing: '.1em', textTransform: 'uppercase', transition: 'color .3s',
  },
  cta: {
    background: 'transparent', border: '1px solid #c9a84c',
    color: '#c9a84c', padding: '.45rem 1.3rem', borderRadius: 2,
    fontFamily: 'DM Sans, sans-serif', fontSize: '.82rem', letterSpacing: '.08em',
    cursor: 'pointer', textDecoration: 'none', transition: 'background .3s, color .3s',
  },
  mobileBtn: {
    display: 'none', background: 'none', border: 'none',
    color: '#f8f6f1', fontSize: '1.5rem', cursor: 'pointer',
  },
  mobileMenu: (open) => ({
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(10,22,40,0.98)', zIndex: 99,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: '2rem', transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform .4s ease',
  }),
  mobileLink: {
    color: '#f8f6f1', textDecoration: 'none', fontSize: '1.4rem',
    fontFamily: 'Playfair Display, serif', letterSpacing: '.05em',
  },
}

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
      <nav style={s.nav(scrolled)}>
        <a href="#hero"><img src={logoDcr} alt="DCR Engenharia" style={s.logo} /></a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}
          className="nav-desktop-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={s.link}
                onMouseEnter={e => e.target.style.color = '#c9a84c'}
                onMouseLeave={e => e.target.style.color = '#8a9ab5'}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" style={s.cta}
              onMouseEnter={e => { e.target.style.background = '#c9a84c'; e.target.style.color = '#0a1628' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#c9a84c' }}>
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button style={{ background: 'none', border: 'none', color: '#f8f6f1', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}
          className="nav-mobile-btn"
          onClick={() => setOpen(true)}>☰</button>
      </nav>

      {/* Mobile menu */}
      <div style={s.mobileMenu(open)}>
        <button onClick={() => setOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', right: '6vw', background: 'none', border: 'none', color: '#f8f6f1', fontSize: '1.8rem', cursor: 'pointer' }}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} style={s.mobileLink} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contato" style={{ ...s.cta, fontSize: '1rem', padding: '.7rem 2rem' }} onClick={() => setOpen(false)}>Fale Conosco</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
