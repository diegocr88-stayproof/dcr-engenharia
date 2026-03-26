import React from 'react'
import useReveal from './useReveal'

const items = [
  { icon: '🏗️', title: 'Experiência real de obra', desc: 'Análise de quem gerenciou obras complexas em habitação social, infraestrutura e ambientes críticos — não consultores de escritório.' },
  { icon: '📐', title: 'Domínio técnico completo', desc: 'SINAPI, ORSE e composições analíticas próprias. Cada pleito com memória de cálculo auditável.' },
  { icon: '🎯', title: 'Foco no resultado financeiro', desc: 'Identificamos o que vale defender e como fazer com menor risco de glosa — orientados ao impacto direto no contrato.' },
  { icon: '📄', title: 'Documentação blindada', desc: 'Relatórios e laudos estruturados para resistir a qualquer questionamento — fiscalização, gerenciadora ou auditoria.' },
]

export default function Diferenciais() {
  const head = useReveal()
  const grid = useReveal()
  return (
    <section id="diferenciais" style={{ padding: '6rem 6vw', background: '#f5f5f0' }}>
      <div ref={head.ref} style={{ ...head.style, textAlign: 'center', maxWidth: 560, margin: '0 auto 3.5rem' }}>
        <div style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8923a', marginBottom: '.8rem' }}>Por que a DCR</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#1c2b1e', lineHeight: 1.2 }}>
          Técnica que se converte em resultado
        </h2>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        {items.map((item, i) => <DCard key={i} {...item} />)}
      </div>
    </section>
  )
}

function DCard({ icon, title, desc }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? '#1c2b1e' : '#fff',
      border: '1px solid rgba(28,43,30,0.1)',
      padding: '2rem', borderRadius: 2,
      transition: 'all .3s', cursor: 'default',
    }}>
      <div style={{ width: 44, height: 44, background: hov ? 'rgba(184,146,58,0.2)' : 'rgba(28,43,30,0.06)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: '1.2rem', transition: 'background .3s' }}>{icon}</div>
      <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: hov ? '#f5f5f0' : '#1c2b1e', marginBottom: '.5rem', transition: 'color .3s' }}>{title}</h4>
      <p style={{ fontSize: '.84rem', color: hov ? 'rgba(245,245,240,0.6)' : '#6b7068', lineHeight: 1.7, transition: 'color .3s' }}>{desc}</p>
    </div>
  )
}
