import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'

const LandingPage = () => {
  return (
    <>
    <header>
    <Navbar />
    </header>
    <main>
    <Hero />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default LandingPage