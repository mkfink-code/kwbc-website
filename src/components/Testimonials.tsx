export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Wendy",
      rating: 5,
      review: "Another Baltimore Girl here. Do we know our crabs or what! So many times I have gotten crabs and crab cakes that were simply not up to \"par\"! It is hard to get the exemplary crab but YOU DID! Pure Maryland deliciousness and such a wonderful treat! Stacy and David... excellent job! You are the best! I got my \"crab fix\"!"
    },
    {
      id: 2,
      name: "Hope",
      rating: 5,
      review: "Baltimore MD girl review... My kids had their first crab from your Food Truck yesterday!!! They were heavy, full meat, coated in old Bay and steamed to perfection! I'm going to turn my Key West conch kids into Maryland crabs lovers! I highly recommend and will be returning to try out the rest of your menu!"
    },
    {
      id: 3,
      name: "Cody",
      rating: 5,
      review: "My wife and I stopped by for the first time tonight. I got the Crabcake Sandwich and it was amazing. You can see the jumbo lump of meat throughout and it's even better when you bite into it. Being from Maryland it is amazing to have an authentic jumbo lump blue crab cake again! The staff there is just as great and super friendly. 10/10. Come check em out!"
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              What People Are Saying
            </h2>
            <div className="w-16 h-0.5 bg-accent-coral mx-auto mb-8"></div>
            <p className="text-xl text-black max-w-2xl mx-auto font-sans font-light">
              Don&apos;t just take our word for it - hear from our happy customers!
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                {/* Customer Info */}
                <div className="mb-6">
                  <h4 className="font-serif font-bold text-black text-lg">{testimonial.name}</h4>
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Review Text */}
                <blockquote className="text-black font-sans leading-relaxed italic">
                  &ldquo;{testimonial.review}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-black font-sans mb-6">
              Join our satisfied customers and experience the best blue crabs in Key West!
            </p>
            <a 
              href="https://key-west-blue-crab.square.site/#JW4YIN3E3FUICAD7XXVCTXUC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-alt text-brand-dark-azure px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
