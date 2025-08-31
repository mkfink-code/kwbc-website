import Link from 'next/link'
import Image from 'next/image'

export default function FullMenu() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              Full Menu
            </h1>
            <p className="text-xl text-black font-light">
              Complete menu with prices
            </p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Menu Image */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex justify-center">
              <Image
                src="/images/menu.png"
                alt="Key West Blue Crab Full Menu"
                width={800}
                height={1200}
                className="w-full max-w-4xl h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Order Button */}
          <div className="text-center">
            <a 
              href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-alt text-brand-dark-azure px-8 py-4 rounded-md font-medium transition-colors duration-200 text-lg"
            >
              Order Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="text-black hover:text-gray-700 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
