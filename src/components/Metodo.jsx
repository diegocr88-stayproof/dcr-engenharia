import React from 'react'
import useReveal from './useReveal'

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Análise do contrato, projeto e planilha. Mapeamento de inconsistências e potencial de aditivo.' },
  { num: '02', title: 'Estruturação Técnica', desc: 'Memória de cálculo, composições analíticas e fundamentação em SINAPI e normas.' },
  { num: '03', title: 'Instrução do Pleito', desc: 'Dossiê técnico completo com relatórios, laudos e documentação de suporte.' },
  { num: '04', title: 'Apoio à Negociação', desc: 'Suporte durante análise pelo órgão, respostas a questionamentos até aprovação.' },
]

export default function Metodo() {
  const head = useReveal()
  const grid = useReveal()
  return (
    <section id="metodo" style={{ padding: '6rem 6vw', background: '#1c2b1e' }}>
      <div ref={head.ref} style={{ ...head.style, textAlign: 'center', maxWidth: 560, margin: '0 auto 3.5rem' }}>
        <div style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8923a', marginBottom: '.8rem' }}>Método</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: '#f5f5f0', lineHeight: 1.2 }}>
          Do diagnóstico ao resultado
        </h2>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1px', maxWidth: 1100, margin: '0 auto', background: 'rgba(245,245,240,0.06)' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ padding: '2.5rem 2rem', background: '#1c2b1e', textAlign: 'center', position: 'relative' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'rgba(184,146,58,0.15)', fontWeight: 900, lineHeight: 1, marginBottom: '1rem' }}>{s.num}</div>
            <div style={{ width: 32, height: 2, background: '#b8923a', margin: '0 auto 1.2rem' }} />
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '.95rem', color: '#f5f5f0', marginBottom: '.7rem' }}>{s.title}</h3>
            <p style={{ fontSize: '.82rem', color: 'rgba(245,245,240,0.5)', lineHeight: 1.65 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
