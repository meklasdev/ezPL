import React, { useState } from 'react'

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    table: '',
    guests: '2',
    specialRequests: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const tableOptions = [
    { value: 'window', label: 'Stół przy oknie', description: 'Widok na ulicę' },
    { value: 'corner', label: 'Stół w rogu', description: 'Przytulne miejsce' },
    { value: 'outside', label: 'Stół na zewnątrz', description: 'Taras z widokiem' }
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Reservation submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        table: '',
        guests: '2',
        specialRequests: ''
      })
    }, 3000)
  }

  return (
    <section id="reservation" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown mb-4">
            Rezerwacja
          </h2>
          <p className="font-dancing text-xl text-olive">
            Zarezerwuj swój stolik
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <i className="fas fa-check-circle text-6xl text-olive"></i>
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-brown mb-4">
                  Rezerwacja została wysłana!
                </h3>
                <p className="font-inter text-brown">
                  Dziękujemy za rezerwację. Skontaktujemy się z Tobą wkrótce, aby potwierdzić szczegóły.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Imię *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown placeholder-brown/60 focus:outline-none focus:border-olive transition-colors duration-300"
                      placeholder="Twoje imię"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Nazwisko *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown placeholder-brown/60 focus:outline-none focus:border-olive transition-colors duration-300"
                      placeholder="Twoje nazwisko"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown placeholder-brown/60 focus:outline-none focus:border-olive transition-colors duration-300"
                      placeholder="twoj@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown placeholder-brown/60 focus:outline-none focus:border-olive transition-colors duration-300"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Data *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown focus:outline-none focus:border-olive transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Godzina *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown focus:outline-none focus:border-olive transition-colors duration-300"
                    >
                      <option value="">Wybierz godzinę</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-inter font-medium text-brown mb-2">
                      Liczba gości
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown focus:outline-none focus:border-olive transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'osoba' : num < 5 ? 'osoby' : 'osób'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Table Selection */}
                <div>
                  <label className="block font-inter font-medium text-brown mb-4">
                    Wybierz stolik *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {tableOptions.map(option => (
                      <div
                        key={option.value}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          formData.table === option.value
                            ? 'border-olive bg-olive/20'
                            : 'border-white/30 bg-white/10 hover:border-olive/50'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, table: option.value }))}
                      >
                        <div className="text-center">
                          <i className="fas fa-chair text-2xl text-brown mb-2"></i>
                          <h4 className="font-inter font-semibold text-brown mb-1">
                            {option.label}
                          </h4>
                          <p className="font-inter text-sm text-brown/70">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block font-inter font-medium text-brown mb-2">
                    Dodatkowe informacje
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-brown placeholder-brown/60 focus:outline-none focus:border-olive transition-colors duration-300 resize-none"
                    placeholder="Specjalne życzenia, alergie, okazja..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="glass-button px-12 py-4 rounded-full text-white font-inter font-semibold text-lg hover:scale-105 transition-all duration-300"
                  >
                    <i className="fas fa-calendar-check mr-2"></i>
                    Potwierdź rezerwację
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation