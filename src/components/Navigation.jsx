import React, { useState, useEffect } from 'react'

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Strona główna' },
    { id: 'about', label: 'O nas' },
    { id: 'menu', label: 'Menu' },
    { id: 'reservation', label: 'Rezerwacja' },
    { id: 'contact', label: 'Kontakt' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <i className="fas fa-coffee text-2xl text-brown animate-float"></i>
              <div className="coffee-steam"></div>
              <div className="coffee-steam"></div>
              <div className="coffee-steam"></div>
            </div>
            <span className="font-playfair font-bold text-xl text-brown">
              Ciśnienie w normie
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-inter font-medium transition-all duration-300 hover:text-olive ${
                  activeSection === item.id 
                    ? 'text-olive border-b-2 border-olive' 
                    : 'text-brown'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brown hover:text-olive transition-colors duration-300">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation