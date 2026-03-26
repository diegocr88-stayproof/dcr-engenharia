import React from 'react'
import useReveal from './useReveal'

const problems = [
  { icon: '📋', title: 'Projetos com falhas e omissões', desc: 'Memoriais incompletos, especificações contraditórias e quantitativos subestimados que impactam diretamente o custo.' },
  { icon: '📊', title: 'Planilhas orçamentárias defasadas', desc: 'Composições desatualizadas e itens fora do SINAPI que comprometem o equilíbrio econômico-financeiro.' },
  { icon: '⚖️', title: 'Pleitos mal instruídos', desc: 'Falta de argumentação técnica sólida resulta em negativas e glosa, mesmo quando o direito ao aditivo existe.' },
  { icon: '🔍', title: 'Sem resposta à fiscalização', desc: 'Questionamentos exigem respostas rápidas, fundamentadas em normas técnicas e metodologia SINAPI.' },
]

export default function Problema() {
  const head = useReveal()
  const grid = useReveal()
  return (
    <section style={{ padding: '6rem 6vw', background: '#f5f5f0' }}>
      <div ref={head.ref} style={{ ...head.style, textAlign: 'center', maxWidth: 620, margin: '0 auto 3.5rem' }}>
        <div style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8923a', marginBottom: '.8rem' }}>O Problema</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#1c2b1e', lineHeight: 1.2, marginBottom: '1rem' }}>
          Quanto da sua margem está sendo deixada no contrato?
        </h2>
        <p style={{ fontSize: '.97rem', color: '#6b7068', lineHeight: 1.8 }}>
          A maioria das obras públicas tem inconsistências que geram direito a aditivo. O problema é não saber identificar — ou não saber defender.
        </p>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        {problems.map((p, i) => <PCard key={i} {...p} />)}
      </div>
    </section>
  )
}

function PCard({ icon, title, desc }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? '#fff' : '#eceae4',
      border: `1px solid ${hov ? 'rgba(184,146,58,0.4)' : 'transparent'}`,
      borderTop: `3px solid ${hov ? '#b8923a' : '#1c2b1e'}`,
      padding: '2rem', borderRadius: 2,
      transition: 'all .3s', cursor: 'default',
    }}>
      <span style={{ fontSize: '1.6rem', marginBottom: '1rem', display: 'block' }}>{icon}</span>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#1c2b1e', marginBottom: '.6rem' }}>{title}</h3>
      <p style={{ fontSize: '.85rem', color: '#6b7068', lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}
