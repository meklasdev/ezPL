import React from 'react'

const Hero = ({ scrollToSection }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(246, 241, 235, 0.8), rgba(217, 197, 178, 0.8)), 
                    url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated coffee steam particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-8 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-steam"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-slide-up">
          {/* Logo with animated steam */}
          <div className="relative inline-block mb-8">
            <div className="relative">
              <i className="fas fa-coffee text-8xl text-brown animate-float"></i>
              <div className="coffee-steam"></div>
              <div className="coffee-steam"></div>
              <div className="coffee-steam"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-playfair font-bold text-5xl md:text-7xl text-brown mb-6 text-shadow">
            Ciśnienie w normie
          </h1>

          {/* Subtitle */}
          <p className="font-dancing text-2xl md:text-3xl text-brown mb-8 text-shadow">
            Gdzie każda filiżanka to chwila relaksu
          </p>

          {/* Description */}
          <p className="font-inter text-lg md:text-xl text-brown mb-12 max-w-2xl mx-auto text-shadow">
            Odkryj wyjątkowy smak kawy w przytulnej atmosferze. 
            Nasze ziarna są starannie wyselekcjonowane i palone z pasją.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('reservation')}
            className="glass-button px-8 py-4 rounded-full text-white font-inter font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Zarezerwuj stolik
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-brown hover:text-olive transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  )
}

export default Hero