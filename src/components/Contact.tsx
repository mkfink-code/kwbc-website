export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Clean Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              Visit Us
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-black max-w-2xl mx-auto font-sans font-light">
              Located in the heart of Key West, ready to serve you the freshest seafood experience.
            </p>
          </div>
          
          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-2">Location</h3>
                  <p className="text-black font-sans">
                    3124 Overseas Highway<br />
                    Key West, FL 33040
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-2">Phone</h3>
                  <a href="tel:305-849-5600" className="text-black hover:text-gray-700 transition-colors font-sans">
                    (305) 849-5600
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-2">Email</h3>
                  <a href="mailto:keywestbluecrab@gmail.com" className="text-black hover:text-gray-700 transition-colors font-sans">
                    keywestbluecrab@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-2">Hours</h3>
                  <div className="text-black space-y-1 text-sm font-sans">
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Sunday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Monday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Tuesday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Wednesday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Thursday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Friday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <span>Saturday:</span>
                      <span>11 AM–7 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Section */}
            <div className="bg-neutral-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-black mb-4">Ready to Order?</h3>
                <p className="text-black mb-6 font-sans">
                  Skip the wait and order online! Your fresh seafood will be ready for pickup.
                </p>
              </div>
              
              {/* Order Button */}
              <div className="text-center mb-8">
                <a 
                  href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Order Online Now
                </a>
              </div>
              
              {/* Additional Info */}
              <div className="space-y-3 text-center text-sm text-black font-sans">
                <p>🦀 Fresh blue crabs sourced locally</p>
                <p>📱 Easy online ordering for quick pickup</p>
                <p>🌴 Authentic Key West flavors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}