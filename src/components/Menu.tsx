import Image from 'next/image'

export default function Menu() {
  const menuItems = [
    {
      category: "Blue Crab Favorites",
      items: [
        {
          name: "Steamed Blue Crabs",
          description: "Jumbo, #1 or #2 blue crabs steamed Maryland style with seasoning of your choice",
          image: "/images/seasoned-crabs.png",
          featured: true
        },
        {
          name: "Crab Cake Sandwich",
          description: "Fried 5 oz crab cake made with our fresh, jumbo lump crab meat and served on a toasted brioche bun. Includes choice of one side",
          image: "/images/crab-cake-order.png"
        },
        {
          name: "Blue Crab Poke Bowl",
          description: "Jumbo lump blue crab, avocado, sesame seeds, cucumber, and eel sauce served over a bed of rice",
          image: "/images/poke-bowl.png"
        }
      ]
    },

  ]

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Clean Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              Our Menu
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-black max-w-3xl mx-auto mb-12 font-sans font-light leading-relaxed">
              Fresh blue crabs and authentic Key West seafood, prepared with care and served with pride.
            </p>
            
            {/* Clean Order CTA */}
            <a 
              href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Order Online
            </a>
          </div>
          
          {/* Menu Categories */}
          <div className="space-y-12">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">
                    {category.category}
                  </h3>
                  <div className="w-12 h-0.5 bg-neutral-200"></div>
                </div>
                
                {/* Menu Items Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      {/* Image */}
                      <div className="aspect-square mb-6 rounded-xl overflow-hidden bg-neutral-100 relative">
                        {item.image.includes('placeholder') ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">🍽️</span>
                              </div>
                              <p className="text-black font-sans text-sm">Coming Soon</p>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        {item.featured && (
                          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                            Signature
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <h4 className="text-xl font-serif font-bold text-black">
                          {item.name}
                        </h4>
                        <p className="text-black font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Full Menu Button */}
          <div className="text-center mt-12">
            <a 
              href="/full-menu"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-md font-medium transition-colors duration-200"
            >
              See Our Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12 bg-neutral-50 rounded-2xl p-12">
            <h3 className="text-2xl font-serif font-bold text-black mb-4">
              Ready to Order?
            </h3>
            <p className="text-black mb-8 font-sans font-light">
              Fresh seafood prepared to order and ready for pickup
            </p>
            <a 
              href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Order Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}