import React, { useState } from 'react'
import useReveal from './useReveal'

const servicos = [
  {
    num: '01',
    title: 'Análise Contratual & Pleitos para Aditivos',
    desc: 'Leitura crítica do contrato, projeto e planilha em paralelo. Identificamos serviços não previstos, quantitativos subestimados e incoerências entre documentos — e estruturamos pleitos técnicos defensáveis perante a fiscalização.',
    tags: ['Serviços omitidos', 'Quantitativos', 'Memória de cálculo', 'Obras públicas'],
  },
  {
    num: '02',
    title: 'Reequilíbrio Econômico-Financeiro',
    desc: 'Análise técnica dos eventos que alteraram as condições originais do contrato — variações de custo, mudanças de projeto, condições imprevistas. Elaboramos a fundamentação legal e técnica para revisão do equilíbrio contratual.',
    tags: ['SINAPI/ORSE', 'Álea extraordinária', 'Composições analíticas'],
  },
  {
    num: '03',
    title: 'Acompanhamento Técnico de Obras',
    desc: 'Presença estratégica no campo: leitura contínua do contrato durante a execução, alerta antecipado de divergências, apoio em medições e suporte nas negociações com fiscalização e gerenciadoras.',
    tags: ['Medição', 'IMR/PLE', 'Relatórios técnicos', 'Fiscalização'],
  },
]

export default function Servicos() {
  const head = useReveal()
  const grid = useReveal()

  return (
    <section id="servicos" style={{ padding: '7rem 6vw', background: '#0a1628' }}>
      <div ref={head.ref} style={head.style}>
        <div style={{ fontSize: '.73rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>Serviços</div>
        <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: '1.4rem' }} />
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem,3.5vw,3rem)', color: '#f8f6f1', marginBottom: '1.2rem', lineHeight: 1.15 }}>
          O que a DCR Engenharia<br />faz pelo seu contrato
        </h2>
        <p style={{ fontSize: '1.02rem', color: '#8a9ab5', maxWidth: 520, lineHeight: 1.8, marginBottom: '3.5rem' }}>
          Atuamos em três frentes estratégicas que transformam inconsistências técnicas em oportunidades contratuais legítimas.
        </p>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
        {servicos.map((s, i) => <ServicoCard key={i} {...s} delay={i * 120} />)}
      </div>
    </section>
  )
}

function ServicoCard({ num, title, desc, tags, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#112240',
        border: `1px solid ${hov ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.1)'}`,
        padding: '2.8rem 2.2rem',
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform .3s, border-color .3s',
        cursor: 'default',
      }}>
      {/* top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(to right, #c9a84c, #e8c97a)',
        transform: hov ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform .4s ease',
      }} />
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', color: 'rgba(201,168,76,0.1)', fontWeight: 900, lineHeight: 1, marginBottom: '1.5rem' }}>{num}</div>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.18rem', color: '#f8f6f1', marginBottom: '1rem', fontWeight: 700 }}>{title}</h3>
      <p style={{ fontSize: '.87rem', color: '#8a9ab5', lineHeight: 1.78, marginBottom: '1.5rem' }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.45rem' }}>
        {tags.map(t => (
          <span key={t} style={{ fontSize: '.68rem', letterSpacing: '.08em', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#e8c97a', padding: '.22rem .7rem', borderRadius: 20 }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
