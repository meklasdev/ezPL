import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown mb-4">
            O nas
          </h2>
          <p className="font-dancing text-xl text-olive">
            Nasza historia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="font-playfair font-semibold text-2xl text-brown mb-6">
              Pasja do kawy od 2018 roku
            </h3>
            
            <div className="space-y-4 text-brown">
              <p className="font-inter leading-relaxed">
                Kawiarnia "Ciśnienie w normie" to miejsce, gdzie tradycja spotyka się z nowoczesnością. 
                Od ponad 5 lat serwujemy najlepsze kawy z całego świata, dbając o każdy szczegół - 
                od wyboru ziaren po sposób parzenia.
              </p>
              
              <p className="font-inter leading-relaxed">
                Nasze wnętrze zaprojektowane zostało z myślą o komforcie i relaksie. 
                Przytulne fotele, ciepłe światło i aromat świeżo mielonej kawy tworzą 
                idealną atmosferę do pracy, spotkań z przyjaciółmi lub chwili wytchnienia.
              </p>
              
              <p className="font-inter leading-relaxed">
                Wierzymy, że każda filiżanka kawy to nie tylko napój, ale doświadczenie, 
                które powinno być wyjątkowe i zapamiętane na długo.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-white/20">
                <i className="fas fa-coffee text-2xl text-olive mb-2"></i>
                <p className="font-inter font-medium text-brown">Świeże ziarna</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/20">
                <i className="fas fa-heart text-2xl text-terracotta mb-2"></i>
                <p className="font-inter font-medium text-brown">Z pasją</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/20">
                <i className="fas fa-users text-2xl text-olive mb-2"></i>
                <p className="font-inter font-medium text-brown">Przyjazna atmosfera</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/20">
                <i className="fas fa-star text-2xl text-terracotta mb-2"></i>
                <p className="font-inter font-medium text-brown">Najwyższa jakość</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="glass-card p-4 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Wnętrze kawiarni Ciśnienie w normie"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass-card p-3 rounded-full">
              <i className="fas fa-coffee text-xl text-brown"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-full">
              <i className="fas fa-heart text-xl text-terracotta"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About