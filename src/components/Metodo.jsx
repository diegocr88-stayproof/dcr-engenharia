import React from 'react'
import useReveal from './useReveal'

const steps = [
  { num: '01', title: 'Diagnóstico Contratual', desc: 'Análise do contrato, projeto, planilha e histórico da obra. Mapeamento de inconsistências e potencial de aditivo.' },
  { num: '02', title: 'Estruturação Técnica', desc: 'Elaboração da memória de cálculo, composições analíticas e fundamentação em normas técnicas e SINAPI.' },
  { num: '03', title: 'Instrução do Pleito', desc: 'Montagem do dossiê técnico completo: relatórios, laudos, fotografias e documentos de suporte.' },
  { num: '04', title: 'Apoio à Negociação', desc: 'Suporte técnico durante a análise pelo órgão, respostas a questionamentos e ajustes até aprovação.' },
]

export default function Metodo() {
  const head = useReveal()
  const grid = useReveal()

  return (
    <section id="metodo" style={{ padding: '7rem 6vw', background: '#112240' }}>
      <div ref={head.ref} style={head.style}>
        <div style={{ fontSize: '.73rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>Método</div>
        <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: '1.4rem' }} />
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem,3.5vw,3rem)', color: '#f8f6f1', marginBottom: '1.2rem', lineHeight: 1.15 }}>
          Como trabalhamos
        </h2>
        <p style={{ fontSize: '1.02rem', color: '#8a9ab5', maxWidth: 500, lineHeight: 1.8, marginBottom: '4rem' }}>
          Um processo estruturado, da análise ao resultado — com rastreabilidade técnica em cada etapa.
        </p>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '2rem', position: 'relative' }}>
        {/* connecting line desktop */}
        <div style={{ position: 'absolute', top: '1.1rem', left: '12%', right: '12%', height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.3), transparent)', pointerEvents: 'none' }} className="metodo-line" />

        {steps.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '0 1rem' }}>
            <div style={{ width: 18, height: 18, background: '#112240', border: '2px solid #c9a84c', borderRadius: '50%', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }} />
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '.75rem', color: '#c9a84c', letterSpacing: '.12em', marginBottom: '.8rem', display: 'block' }}>Etapa {s.num}</span>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#f8f6f1', marginBottom: '.8rem' }}>{s.title}</h3>
            <p style={{ fontSize: '.83rem', color: '#8a9ab5', lineHeight: 1.65 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <style>{`@media(max-width:768px){.metodo-line{display:none}}`}</style>
    </section>
  )
}
