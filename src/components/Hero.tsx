'use client'
import Image from 'next/image'
import Logo from './Logo'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 100) {
        // Always show nav at the top
        setIsNavVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide nav
        setIsNavVisible(false)
      } else {
        // Scrolling up - show nav
        setIsNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-brand-yellow font-semibold text-lg tracking-wide transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-white hover:text-brand-yellow font-semibold text-lg tracking-wide transition-colors duration-200">
                Our Story
              </a>
            </div>
            
            {/* Centered Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <Logo size="nav" />
            </div>
            
            {/* Right Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-white hover:text-brand-yellow font-semibold text-lg tracking-wide transition-colors duration-200">
                Menu
              </a>
              <a 
                href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-yellow to-brand-yellow-alt hover:from-brand-yellow-alt hover:to-brand-yellow text-brand-dark-azure px-5 py-2 rounded-full font-bold text-base tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Order Now
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <a 
                href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-coral hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm"
              >
                Order
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/crab-tray.png"
            alt="Fresh Key West Blue Crabs"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Powerful USP Message */}
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight tracking-wide mb-6">
                  The Best Blue Crabs<br />
                  in The Keys
                </p>
                <p className="text-lg md:text-xl lg:text-2xl font-serif font-medium text-white/90 leading-relaxed">
                  Caught fresh daily, our food truck is<br />
                  your go-to spot for blue crabs
                </p>
              </div>
              
              {/* Clean CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a 
                  href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-yellow hover:bg-brand-yellow-alt text-brand-dark-azure px-6 py-3 rounded-md font-semibold transition-colors duration-200 text-center text-base"
                >
                  Order Now
                </a>
                <a 
                  href="#menu"
                  className="border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark-azure px-6 py-3 rounded-md font-semibold transition-colors duration-200 text-center text-base"
                >
                  See Our Menu
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-center justify-center gap-3 text-white/90 pt-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">3124 Overseas Highway, Key West, FL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}