import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import About from '@/components/About'
import SocialSection from '@/components/SocialSection'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Wholesale from '@/components/Wholesale'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <SocialSection />
      <Testimonials />
      <Contact />
      <Wholesale />
      <Footer />
    </main>
  )
}