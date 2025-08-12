import React, { useState } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')

  const menuData = {
    coffee: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Klasyczne espresso z najlepszych ziaren arabica',
        price: '8 zł',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Espresso z mlekiem i delikatną pianką',
        price: '12 zł',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Delikatne espresso z kremowym mlekiem',
        price: '14 zł',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 4,
        name: 'Americano',
        description: 'Espresso z gorącą wodą',
        price: '10 zł',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 5,
        name: 'Mocha',
        description: 'Espresso z gorącym mlekiem i czekoladą',
        price: '16 zł',
        image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 6,
        name: 'Flat White',
        description: 'Espresso z kremowym mlekiem bez pianki',
        price: '13 zł',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    food: [
      {
        id: 7,
        name: 'Croissant',
        description: 'Świeży francuski croissant z masłem',
        price: '8 zł',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 8,
        name: 'Ciasto czekoladowe',
        description: 'Domowe ciasto z gorzką czekoladą',
        price: '12 zł',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 9,
        name: 'Tost z awokado',
        description: 'Chrupiący tost z awokado i jajkiem',
        price: '18 zł',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 10,
        name: 'Koktajl owocowy',
        description: 'Świeży koktajl z sezonowych owoców',
        price: '15 zł',
        image: 'https://images.unsplash.com/photo-1505252585461-04a1ebebf25b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  }

  const categories = [
    { id: 'coffee', label: 'Kawa', icon: 'fas fa-coffee' },
    { id: 'food', label: 'Jedzenie', icon: 'fas fa-utensils' }
  ]

  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown mb-4">
            Nasze Menu
          </h2>
          <p className="font-dancing text-xl text-olive">
            Smaki, które pokochasz
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-olive text-white'
                    : 'text-brown hover:text-olive'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory].map((item) => (
            <div key={item.id} className="menu-card glass-card rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full">
                  <span className="font-inter font-bold text-olive">{item.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair font-semibold text-xl text-brown mb-2">
                  {item.name}
                </h3>
                <p className="font-inter text-brown/80 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-inter font-bold text-lg text-olive">
                    {item.price}
                  </span>
                  <button className="glass-button px-4 py-2 rounded-full text-white text-sm font-inter font-medium">
                    <i className="fas fa-plus mr-1"></i>
                    Dodaj
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special offer */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-playfair font-semibold text-2xl text-brown mb-4">
              Specjalna oferta
            </h3>
            <p className="font-inter text-brown mb-6">
              Zamów kawę i ciasto w zestawie - otrzymasz 15% zniżki!
            </p>
            <button className="glass-button px-6 py-3 rounded-full text-white font-inter font-medium">
              <i className="fas fa-gift mr-2"></i>
              Sprawdź ofertę
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu