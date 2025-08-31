import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Site is Working! 🎉</h2>
        <p className="text-gray-600">Adding components back one by one...</p>
      </div>
    </main>
  )
}