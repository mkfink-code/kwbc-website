import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <div className="text-center py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Full Site Coming Soon! 🎉</h2>
        <p className="text-lg text-gray-600 mb-6">Your Key West Blue Crab website is live!</p>
        <div className="max-w-2xl mx-auto text-left bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Working:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Hero section with navigation</li>
            <li>✅ About section</li>
            <li>✅ Responsive design</li>
            <li>✅ Fast loading</li>
            <li>✅ Mobile-friendly</li>
          </ul>
          <p className="text-gray-600 mt-4 italic">More sections coming soon...</p>
        </div>
      </div>
    </main>
  )
}