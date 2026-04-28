import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollShowcase from './components/ScrollShowcase'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { GlassFilter } from './components/ui/liquid-glass'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <GlassFilter />
      <Navbar />
      <Hero />
      <ScrollShowcase />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
