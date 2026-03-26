import React from 'react'
import useReveal from './useReveal'

const problems = [
  { icon: '📋', title: 'Projetos com falhas e omissões',
    desc: 'Memoriais descritivos incompletos, especificações contraditórias e quantitativos subestimados que impactam diretamente o custo de execução.' },
  { icon: '📊', title: 'Planilhas orçamentárias defasadas',
    desc: 'Composições desatualizadas, itens fora do SINAPI e erros de apropriação que comprometem o equilíbrio econômico-financeiro do contrato.' },
  { icon: '⚖️', title: 'Pleitos mal instruídos',
    desc: 'Mesmo quando o direito ao aditivo existe, a falta de argumentação técnica sólida resulta em negativas e glosa.' },
  { icon: '🔍', title: 'Fiscalização sem resposta técnica',
    desc: 'Questionamentos exigem respostas rápidas, fundamentadas e alinhadas com normas técnicas e metodologia SINAPI.' },
]

export default function Problema() {
  const head = useReveal()
  const grid = useReveal()

  return (
    <section id="problema" style={{ padding: '7rem 6vw', background: '#112240', position: 'relative' }}>
      <div ref={head.ref} style={head.style}>
        <div style={{ fontSize: '.73rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>O Problema</div>
        <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: '1.4rem' }} />
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem,3.5vw,3rem)', color: '#f8f6f1', marginBottom: '1.2rem', lineHeight: 1.15 }}>
          Quanto da sua margem está<br />sendo deixada no contrato?
        </h2>
        <p style={{ fontSize: '1.02rem', color: '#8a9ab5', maxWidth: 540, lineHeight: 1.8, marginBottom: '3.5rem' }}>
          A maioria das obras públicas tem inconsistências que geram direito a aditivo. O problema é não saber identificar — ou não saber defender.
        </p>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
        {problems.map((p, i) => (
          <ProblemCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProblemCard({ icon, title, desc }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'rgba(255,255,255,0.02)',
        padding: '2.5rem',
        borderLeft: `3px solid ${hov ? '#c9a84c' : 'transparent'}`,
        background: hov ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
        transition: 'border-color .3s, background .3s',
      }}>
      <span style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'block' }}>{icon}</span>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.08rem', color: '#f8f6f1', marginBottom: '.7rem' }}>{title}</h3>
      <p style={{ fontSize: '.88rem', color: '#8a9ab5', lineHeight: 1.72 }}>{desc}</p>
    </div>
  )
}
