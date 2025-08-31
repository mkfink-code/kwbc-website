import Image from 'next/image'
import ScrollFadeIn from './ScrollFadeIn'

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Clean Section Header */}
          <ScrollFadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-black mb-6">
                Fresh From The Keys
              </h2>
              <div className="w-16 h-0.5 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-xl text-black max-w-3xl mx-auto font-sans font-light leading-relaxed">
                Experience authentic Key West seafood from our mobile kitchen, featuring the freshest blue crabs and recipes that you will love.
              </p>
            </div>
          </ScrollFadeIn>
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left - Content */}
            <ScrollFadeIn delay={200}>
              <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-medium text-black">Our Story</h3>
                <p className="text-lg text-black leading-relaxed font-sans font-light">
                  Born from Maryland's rich blue crab heritage, we've brought the time-honored techniques and flavors of the Chesapeake Bay to the pristine waters of the Florida Keys, creating a unique fusion of East Coast tradition and southern paradise.
                </p>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-medium text-black">What Sets Us Apart</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent-coral rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-serif font-medium text-black mb-2">Fresh, Local Blue Crabs</h4>
                      <p className="text-black leading-relaxed font-sans">
                        Sourced daily from Key West waters for peak freshness and flavor
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent-coral rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-serif font-medium text-black mb-2">Chesapeake Bay Techniques</h4>
                      <p className="text-black leading-relaxed font-sans">
                        Time-honored Maryland blue crab preparation methods perfected over generations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent-coral rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-serif font-medium text-black mb-2">Year-Round Availability</h4>
                      <p className="text-black leading-relaxed font-sans">
                        The only food truck in America serving blue crabs all year long
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Clean CTA */}
              <div className="pt-8">
                <a 
                  href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary-dark hover:bg-neutral-800 text-white px-8 py-4 rounded-md font-medium transition-colors duration-200"
                >
                  Try Our Crabs
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </div>
            </ScrollFadeIn>
            
            {/* Right - Image */}
            <ScrollFadeIn delay={400}>
              <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/crabs-2.png"
                  alt="Fresh Key West Blue Crabs"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              </div>
            </ScrollFadeIn>
            
          </div>
        </div>
      </div>
    </section>
  )
}