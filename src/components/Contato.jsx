import React, { useState } from 'react'
import useReveal from './useReveal'

export default function Contato() {
  const left = useReveal()
  const right = useReveal()
  const [form, setForm] = useState({ nome: '', empresa: '', tel: '', tipo: '', msg: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // WhatsApp redirect
    const numero = '5551999999999' // ← SUBSTITUIR pelo número real
    const texto = `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}.\n\nTipo de demanda: ${form.tipo}\n\n${form.msg}\n\nTelefone: ${form.tel}`
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2,
    padding: '.75rem 1rem', color: '#f8f6f1',
    fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', outline: 'none',
  }

  const labelStyle = { display: 'block', fontSize: '.75rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#8a9ab5', marginBottom: '.45rem' }

  return (
    <section id="contato" style={{ padding: '7rem 6vw', background: '#0a1628' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '5rem', alignItems: 'start' }}>

        {/* Left */}
        <div ref={left.ref} style={left.style}>
          <div style={{ fontSize: '.73rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>Contato</div>
          <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: '1.4rem' }} />
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem,3vw,2.8rem)', color: '#f8f6f1', marginBottom: '1.4rem', lineHeight: 1.15 }}>
            Vamos analisar<br />seu contrato?
          </h2>
          <p style={{ color: '#8a9ab5', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '.95rem' }}>
            Atendemos construtoras, empreiteiras e escritórios de advocacia especializados em obras públicas no Rio Grande do Sul e todo o Brasil.
          </p>
          {[
            { icon: '📍', text: 'Porto Alegre, Rio Grande do Sul' },
            { icon: '🌐', text: 'www.dcrengenharia-rs.com.br' },
            { icon: '💼', text: 'Diego Ribeiro — Engenheiro Civil' },
            { icon: '📱', text: 'WhatsApp disponível no formulário' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.1rem', fontSize: '.9rem' }}>
              <div style={{ width: 36, height: 36, background: 'rgba(201,168,76,0.1)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <span style={{ color: '#c8c3ba' }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div ref={right.ref} style={{ ...right.style, background: '#112240', border: '1px solid rgba(201,168,76,0.1)', padding: '2.5rem', borderRadius: 2 }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#f8f6f1', marginBottom: '1.8rem' }}>
            Diagnóstico Inicial Gratuito
          </h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Nome completo</label>
              <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" style={inputStyle} required
                onFocus={e => e.target.style.borderColor = '#c9a84c'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Empresa</label>
              <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da construtora ou empresa" style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#c9a84c'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>WhatsApp / Telefone</label>
              <input name="tel" value={form.tel} onChange={handleChange} placeholder="(51) 9 0000-0000" style={inputStyle} type="tel"
                onFocus={e => e.target.style.borderColor = '#c9a84c'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Tipo de demanda</label>
              <select name="tipo" value={form.tipo} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} required
                onFocus={e => e.target.style.borderColor = '#c9a84c'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                <option value="">Selecione...</option>
                <option>Análise de contrato e pleito para aditivo</option>
                <option>Reequilíbrio econômico-financeiro</option>
                <option>Acompanhamento técnico de obra</option>
                <option>Outro</option>
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Conte brevemente sobre a situação</label>
              <textarea name="msg" value={form.msg} onChange={handleChange}
                placeholder="Tipo de obra, fase atual, qual o problema ou oportunidade identificada..."
                style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                onFocus={e => e.target.style.borderColor = '#c9a84c'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <button type="submit" style={{
              width: '100%', background: sent ? '#2d6a4f' : '#c9a84c',
              color: sent ? '#fff' : '#0a1628', padding: '1rem',
              border: 'none', borderRadius: 2,
              fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem',
              fontWeight: 600, letterSpacing: '.05em', cursor: 'pointer',
              transition: 'background .3s',
            }}>
              {sent ? '✓ Redirecionando para WhatsApp...' : 'Solicitar Diagnóstico via WhatsApp →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
