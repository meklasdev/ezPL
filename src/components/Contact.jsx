import React from 'react'

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adres',
      content: 'ul. Kawiarniana 15, 00-001 Warszawa',
      color: 'text-olive'
    },
    {
      icon: 'fas fa-phone',
      title: 'Telefon',
      content: '+48 22 123 45 67',
      color: 'text-terracotta'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'kontakt@cisnieniewnormie.pl',
      color: 'text-olive'
    },
    {
      icon: 'fas fa-clock',
      title: 'Godziny otwarcia',
      content: 'Pon-Pt: 8:00-22:00, Sob-Nd: 9:00-23:00',
      color: 'text-terracotta'
    }
  ]

  const socialMedia = [
    { icon: 'fab fa-facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: 'fab fa-instagram', url: '#', color: 'hover:text-pink-600' },
    { icon: 'fab fa-twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: 'fab fa-tripadvisor', url: '#', color: 'hover:text-green-600' }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown mb-4">
            Kontakt
          </h2>
          <p className="font-dancing text-xl text-olive">
            Odwiedź nas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-playfair font-semibold text-2xl text-brown mb-6">
                Skontaktuj się z nami
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`text-2xl ${info.color} mt-1`}>
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-brown mb-1">
                        {info.title}
                      </h4>
                      <p className="font-inter text-brown/80">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-inter font-semibold text-brown mb-4">
                  Śledź nas
                </h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`text-2xl text-brown transition-colors duration-300 ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Message */}
            <div className="glass-card p-6 rounded-2xl text-center">
              <i className="fas fa-heart text-3xl text-terracotta mb-4"></i>
              <h4 className="font-playfair font-semibold text-xl text-brown mb-2">
                Do zobaczenia wkrótce!
              </h4>
              <p className="font-inter text-brown/80">
                Czekamy na Ciebie z filiżanką najlepszej kawy
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card p-4 rounded-2xl">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ2LjkiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ciśnienie w normie - Lokalizacja"
              ></iframe>
              
              {/* Map overlay with café info */}
              <div className="absolute top-4 left-4 glass-card p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-coffee text-olive"></i>
                  <span className="font-inter font-medium text-brown text-sm">
                    Ciśnienie w normie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="font-playfair font-semibold text-2xl text-brown mb-4">
              Bądź na bieżąco
            </h3>
            <p className="font-inter text-brown mb-6">
              Zapisz się do naszego newslettera i otrzymuj informacje o nowych smakach i promocjach
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Twój email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown placeholder-brown/60 focus:outline-none focus:border-olive transition-colors duration-300"
              />
              <button className="glass-button px-6 py-3 rounded-lg text-white font-inter font-medium hover:scale-105 transition-all duration-300">
                Zapisz się
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact