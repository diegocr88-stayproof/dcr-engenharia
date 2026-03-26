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
    const numero = '5551992406000'
    const texto = `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}.\n\nTipo de demanda: ${form.tipo}\n\n${form.msg}\n\nTelefone: ${form.tel}`
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inp = { width: '100%', background: '#f5f5f0', border: '1px solid rgba(28,43,30,0.15)', borderRadius: 2, padding: '.75rem 1rem', color: '#1a1a18', fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', outline: 'none', transition: 'border-color .3s' }
  const lbl = { display: 'block', fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6b7068', marginBottom: '.4rem' }

  return (
    <section id="contato" style={{ padding: '6rem 6vw', background: '#eceae4' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '5rem', alignItems: 'start', maxWidth: 1100, margin: '0 auto' }}>

        <div ref={left.ref} style={left.style}>
          <div style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8923a', marginBottom: '.8rem' }}>Contato</div>
          <div style={{ width: 40, height: 2, background: '#b8923a', marginBottom: '1.2rem' }} />
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: '#1c2b1e', marginBottom: '1.2rem', lineHeight: 1.2 }}>
            Vamos analisar<br />seu contrato?
          </h2>
          <p style={{ color: '#6b7068', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '.93rem' }}>
            Atendemos construtoras, empreiteiras e escritórios de advocacia em obras públicas no RS e todo o Brasil.
          </p>
          {[
            { icon: '👤', text: 'Eng. Diego Luiz Cardoso Ribeiro' },
            { icon: '📍', text: 'Porto Alegre, Rio Grande do Sul' },
            { icon: '📱', text: '(51) 99240-6000' },
            { icon: '✉️', text: 'atendimento@dcrengenharia-rs.com.br' },
            { icon: '🌐', text: 'www.dcrengenharia-rs.com.br' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', fontSize: '.9rem' }}>
              <div style={{ width: 36, height: 36, background: 'rgba(28,43,30,0.08)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
              <span style={{ color: '#444940' }}>{item.text}</span>
            </div>
          ))}
        </div>

        <div ref={right.ref} style={{ ...right.style, background: '#fff', border: '1px solid rgba(28,43,30,0.1)', padding: '2.5rem', borderRadius: 2 }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#1c2b1e', marginBottom: '1.8rem' }}>Diagnóstico Inicial Gratuito</h3>
          <form onSubmit={handleSubmit}>
            {[
              { name: 'nome', label: 'Nome completo', placeholder: 'Seu nome', type: 'text', required: true },
              { name: 'empresa', label: 'Empresa', placeholder: 'Nome da construtora', type: 'text' },
              { name: 'tel', label: 'WhatsApp / Telefone', placeholder: '(51) 9 0000-0000', type: 'tel' },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: '1.1rem' }}>
                <label style={lbl}>{f.label}</label>
                <input name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} type={f.type} required={f.required} style={inp}
                  onFocus={e => e.target.style.borderColor = '#b8923a'}
                  onBlur={e => e.target.style.borderColor = 'rgba(28,43,30,0.15)'} />
              </div>
            ))}
            <div style={{ marginBottom: '1.1rem' }}>
              <label style={lbl}>Tipo de demanda</label>
              <select name="tipo" value={form.tipo} onChange={handleChange} required style={{ ...inp, cursor: 'pointer' }}
                onFocus={e => e.target.style.borderColor = '#b8923a'}
                onBlur={e => e.target.style.borderColor = 'rgba(28,43,30,0.15)'}>
                <option value="">Selecione...</option>
                <option>Análise de contrato e pleito para aditivo</option>
                <option>Reequilíbrio econômico-financeiro</option>
                <option>Acompanhamento técnico de obra</option>
                <option>Outro</option>
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={lbl}>Descreva brevemente a situação</label>
              <textarea name="msg" value={form.msg} onChange={handleChange} placeholder="Tipo de obra, fase atual, problema identificado..."
                style={{ ...inp, resize: 'vertical', minHeight: 100 }}
                onFocus={e => e.target.style.borderColor = '#b8923a'}
                onBlur={e => e.target.style.borderColor = 'rgba(28,43,30,0.15)'} />
            </div>
            <button type="submit" style={{ width: '100%', background: sent ? '#2d4a30' : '#1c2b1e', color: '#f5f5f0', padding: '1rem', border: 'none', borderRadius: 2, fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', fontWeight: 600, letterSpacing: '.04em', cursor: 'pointer', transition: 'background .3s' }}>
              {sent ? '✓ Abrindo WhatsApp...' : 'Solicitar Diagnóstico via WhatsApp →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
