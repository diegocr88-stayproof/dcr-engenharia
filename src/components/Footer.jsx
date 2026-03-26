import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: '#1a2e1c', padding: '2.5rem 6vw',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1.5rem',
      borderTop: '1px solid rgba(184,146,58,0.2)',
    }}>
      {/* Logo completo no footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <svg width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="10" fill="#2d4a30"/>
          <rect x="12" y="12" width="76" height="76" rx="5" fill="none" stroke="#4a9e3f" stroke-width="2.5"/>
          <rect x="22" y="68" width="15" height="12" rx="2" fill="#4a9e3f"/>
          <rect x="42" y="54" width="15" height="26" rx="2" fill="#4a9e3f"/>
          <rect x="62" y="36" width="15" height="44" rx="2" fill="#b8923a"/>
          <polygon points="69.5,26 61,38 78,38" fill="#b8923a"/>
        </svg>
        <div>
          <div style={{ fontFamily: "'Arial Black', Impact, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#f5f5f0', letterSpacing: '-0.5px', lineHeight: 1.1 }}>DCR</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', fontWeight: 700, color: '#b8923a', letterSpacing: '3px', textTransform: 'uppercase' }}>Engenharia</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', color: 'rgba(245,245,240,0.35)', letterSpacing: '1px', marginTop: '2px' }}>Consultoria · Aditivos · Resultados</div>
        </div>
      </div>

      <span style={{ fontSize: '.78rem', color: 'rgba(245,245,240,0.35)' }}>
        © {new Date().getFullYear()} DCR Engenharia
      </span>

      <span style={{ fontSize: '.78rem', color: 'rgba(245,245,240,0.35)' }}>
        Porto Alegre, RS
      </span>
    </footer>
  )
}
