import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Servicos from './components/Servicos'
import Metodo from './components/Metodo'
import Diferenciais from './components/Diferenciais'
import CtaStrip from './components/CtaStrip'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Servicos />
        <Metodo />
        <Diferenciais />
        <CtaStrip />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
