import React, { useState } from 'react'
import useReveal from './useReveal'

const servicos = [
  { num: '01', title: 'Análise Contratual & Pleitos para Aditivos', desc: 'Leitura crítica do contrato, projeto e planilha em paralelo. Identificamos serviços não previstos e quantitativos subestimados — estruturando pleitos técnicos defensáveis.', tags: ['Serviços omitidos', 'Quantitativos', 'Memória de cálculo'] },
  { num: '02', title: 'Reequilíbrio Econômico-Financeiro', desc: 'Análise técnica dos eventos que alteraram as condições originais do contrato. Elaboramos a fundamentação legal e técnica para revisão do equilíbrio contratual.', tags: ['SINAPI/ORSE', 'Álea extraordinária', 'Composições analíticas'] },
  { num: '03', title: 'Acompanhamento Técnico de Obras', desc: 'Presença estratégica no campo: leitura contínua do contrato, alerta de divergências, apoio em medições e suporte nas negociações com fiscalização.', tags: ['Medição', 'IMR/PLE', 'Relatórios técnicos'] },
]

export default function Servicos() {
  const head = useReveal()
  const grid = useReveal()
  return (
    <section id="servicos" style={{ padding: '6rem 6vw', background: '#eceae4' }}>
      <div ref={head.ref} style={{ ...head.style, maxWidth: 1100, margin: '0 auto 3rem' }}>
        <div style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8923a', marginBottom: '.8rem' }}>Serviços</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#1c2b1e', lineHeight: 1.2 }}>
            O que fazemos pelo<br />seu contrato
          </h2>
          <a href="#contato" style={{ fontSize: '.85rem', color: '#b8923a', textDecoration: 'none', borderBottom: '1px solid #b8923a', paddingBottom: 2 }}>Falar com especialista →</a>
        </div>
      </div>

      <div ref={grid.ref} style={{ ...grid.style, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        {servicos.map((s, i) => <SCard key={i} {...s} />)}
      </div>
    </section>
  )
}

function SCard({ num, title, desc, tags }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? '#fff' : '#f5f5f0',
      border: '1px solid rgba(28,43,30,0.1)',
      borderBottom: `3px solid ${hov ? '#b8923a' : '#1c2b1e'}`,
      padding: '2.5rem 2rem', borderRadius: 2,
      transform: hov ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all .3s', cursor: 'default',
    }}>
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'rgba(28,43,30,0.08)', fontWeight: 900, lineHeight: 1, marginBottom: '1.2rem' }}>{num}</div>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#1c2b1e', marginBottom: '.9rem' }}>{title}</h3>
      <p style={{ fontSize: '.86rem', color: '#6b7068', lineHeight: 1.75, marginBottom: '1.4rem' }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
        {tags.map(t => <span key={t} style={{ fontSize: '.68rem', letterSpacing: '.06em', background: 'rgba(184,146,58,0.12)', border: '1px solid rgba(184,146,58,0.3)', color: '#8a6820', padding: '.2rem .65rem', borderRadius: 20 }}>{t}</span>)}
      </div>
    </div>
  )
}
