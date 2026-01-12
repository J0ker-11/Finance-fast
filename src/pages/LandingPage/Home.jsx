import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import CrossBorder from './CrossBorder'
import ExchangeRate from './ExchangeRate'
import SeamlessSection from './SeamlessSection'
import Testimonials from './Testimonials'
import Faqs from './Faqs'
import Payments from './Payments'

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
    <SeamlessSection />
    <Payments />
    <Testimonials />
    <Faqs />
    
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default LandingPage