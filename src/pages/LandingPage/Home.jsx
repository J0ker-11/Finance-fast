import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import CrossBorder from './CrossBorder'
import ExchangeRate from './ExchangeRate'

const LandingPage = () => {
  return (
    <>
    <header>
    <Navbar />
    </header>
    <main>
    <Hero />
    <CrossBorder />
    <ExchangeRate />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default LandingPage