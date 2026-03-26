import React from 'react'
import logoDcr from '/logo-dcr.png'

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(0,0,0,0.35)', padding: '2rem 6vw',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontSize: '.78rem', color: '#8a9ab5',
    }}>
      <img src={logoDcr} alt="DCR Engenharia" style={{ height: 28, filter: 'invert(1) sepia(1) saturate(1.5) hue-rotate(5deg) brightness(.9)' }} />
      <span>© {new Date().getFullYear()} DCR Engenharia — Consultoria Técnica Estratégica</span>
      <span>Porto Alegre, RS</span>
    </footer>
  )
}
