import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <Logo size="sm" />
                <div>
                  <h3 className="text-lg font-serif font-bold">Key West Blue Crab</h3>
                  <p className="text-neutral-400 text-sm">Fresh Seafood</p>
                </div>
              </div>
                                <p className="text-neutral-300 leading-relaxed max-w-md font-sans">
                    America's only year-round blue crab food truck, bringing you the freshest 
                    seafood and authentic Key West flavors.
                  </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif font-bold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                                  <a href="#about" className="text-neutral-300 hover:text-white transition-colors text-sm font-sans">
                    About Us
                  </a>
                                  <a href="#menu" className="text-neutral-300 hover:text-white transition-colors text-sm font-sans">
                    Menu
                  </a>
                  <a href="#contact" className="text-neutral-300 hover:text-white transition-colors text-sm font-sans">
                    Contact
                  </a>
                  <a 
                    href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors text-sm font-sans"
                  >
                    Order Online
                  </a>
              </nav>
            </div>
            
            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif font-bold">Connect</h4>
                              <div className="space-y-2 text-sm font-sans">
                  <p className="text-neutral-300">3124 Overseas Highway</p>
                  <p className="text-neutral-300">Key West, FL 33040</p>
                  <a href="tel:305-849-5600" className="text-neutral-300 hover:text-white transition-colors block">
                    (305) 849-5600
                  </a>
                </div>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://www.instagram.com/keywestbluecrab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61579126874946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-400 text-sm font-sans">
              © {new Date().getFullYear()} Key West Blue Crab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}