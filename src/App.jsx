import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Floating coffee beans background */}
      <div className="floating-coffee-beans">
        <div className="coffee-bean"></div>
        <div className="coffee-bean"></div>
        <div className="coffee-bean"></div>
        <div className="coffee-bean"></div>
        <div className="coffee-bean"></div>
      </div>

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Menu />
        <Reservation />
        <Contact />
      </main>
    </div>
  )
}

export default App