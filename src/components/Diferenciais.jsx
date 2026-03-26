import React from 'react'
import useReveal from './useReveal'

const items = [
  { icon: '🏗️', title: 'Experiência real de obra', desc: 'Não somos consultores de escritório. Nossa análise parte de quem já gerenciou obras complexas em habitação social, infraestrutura e ambientes críticos.' },
  { icon: '📐', title: 'Domínio de SINAPI, ORSE e composições próprias', desc: 'Cada pleito é fundamentado na metodologia correta, com memória de cálculo auditável e argumentação que resiste a questionamentos.' },
  { icon: '🎯', title: 'Foco no resultado financeiro', desc: 'Identificamos o que vale a pena defender e como fazer isso com menor risco de glosa — orientados ao impacto direto no contrato.' },
  { icon: '📄', title: 'Documentação que protege', desc: 'Relatórios técnicos e laudos estruturados para blindar o pleito em qualquer instância — fiscalização, gerenciadora ou auditoria.' },
]

export default function Diferenciais() {
  const left = useReveal()
  const right = useReveal()

  return (
    <section id="diferenciais" style={{ padding: '7rem 6vw', background: '#0a1628' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '5rem', alignItems: 'center' }}>

        {/* Left: stacked cards */}
        <div ref={left.ref} style={{ ...left.style, position: 'relative', height: 360, minWidth: 280 }} className="dif-stack">
          {[
            { label: 'Análise concluída', val: 'R$ 2.4M', sub: 'em inconsistências identificadas' },
            { label: 'Pleito estruturado', val: '87%', sub: 'de aprovação em 1ª instância' },
            { label: 'Resultado protegido', val: 'Margem', sub: 'preservada e contrato reequilibrado' },
          ].map((c, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: i * 60, left: i * 40,
              width: 260, padding: '1.8rem',
              background: i === 2 ? 'linear-gradient(135deg, #112240, rgba(201,168,76,0.08))' : '#112240',
              border: `1px solid ${i === 2 ? '#c9a84c' : i === 1 ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.12)'}`,
              borderRadius: 4,
              transform: `rotate(${[-3, 1, 0][i]}deg)`,
              zIndex: i + 1,
              transition: 'transform .3s',
            }}>
              <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.6rem' }}>{c.label}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.9rem', color: '#f8f6f1', fontWeight: 700 }}>{c.val}</div>
              <div style={{ fontSize: '.78rem', color: '#8a9ab5', marginTop: '.3rem' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Right: list */}
        <div ref={right.ref} style={right.style}>
          <div style={{ fontSize: '.73rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>Por que a DCR</div>
          <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: '1.4rem' }} />
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem,3vw,2.8rem)', color: '#f8f6f1', marginBottom: '2.5rem', lineHeight: 1.15 }}>
            Técnica que se<br />converte em resultado
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', paddingBottom: '1.5rem', borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '.93rem', fontWeight: 600, color: '#f8f6f1', marginBottom: '.3rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '.84rem', color: '#8a9ab5', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`@media(max-width:768px){.dif-stack{display:none}}`}</style>
    </section>
  )
}
