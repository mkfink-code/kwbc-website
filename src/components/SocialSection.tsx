import Image from 'next/image'

export default function SocialSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Clean Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              Share Your Experience
            </h2>
            <div className="w-16 h-0.5 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-black max-w-2xl mx-auto font-sans font-light">
              Visit our truck, sign your name, and share your Key West Blue Crab experience with the world.
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/sign.png"
                  alt="Customers signing the Key West Blue Crab food truck"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-black mb-4">
                  Sign Our Truck
                </h3>
                <p className="text-lg text-black leading-relaxed mb-6 font-sans">
                  When you visit us, don&apos;t forget to sign our truck and take a photo! 
                  Share it on social media and tag us to spread the Key West love.
                </p>
                
                {/* Social Handle */}
                <div className="flex items-center gap-3 text-lg">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-sans font-bold text-black text-xl">@keywestbluecrab</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-black">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/keywestbluecrab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-sans font-bold">Instagram</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579126874946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-sans font-bold">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Customer Photos Scrolling Gallery */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-black mb-8 text-center">
              Customer Photos
            </h3>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/customers.png"
                    alt="Happy customers enjoying Key West Blue Crab"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/md-rep.png"
                    alt="Maryland representation at Key West Blue Crab"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Placeholder for future images */}
                <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg bg-neutral-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📸</span>
                    </div>
                    <p className="text-black font-sans text-sm">More photos coming soon!</p>
                  </div>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 font-sans">
                  ← Scroll to see more customer photos →
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}