import React from 'react'
import logoDcr from '/logo-dcr.png'

export default function Footer() {
  return (
    <footer style={{ background: '#1c2b1e', padding: '2rem 6vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '.78rem', color: 'rgba(245,245,240,0.4)' }}>
      <img src={logoDcr} alt="DCR Engenharia" style={{ height: 26, filter: 'brightness(0) invert(1) opacity(0.7)' }} />
      <span>© {new Date().getFullYear()} DCR Engenharia — Consultoria Técnica Estratégica</span>
      <span>Porto Alegre, RS</span>
    </footer>
  )
}
