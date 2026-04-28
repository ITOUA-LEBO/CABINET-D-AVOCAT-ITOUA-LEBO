import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Le Cabinet', href: '#cabinet' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4a843]/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col">
          <span className="font-serif text-lg font-semibold text-[#d4a843] tracking-wide leading-tight">ITOUA LEBO</span>
          <span className="text-[10px] tracking-[0.3em] text-[#9a7209] uppercase">Cabinet d'Avocats</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm tracking-widest uppercase text-[#c4b89a] hover:text-[#d4a843] transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2.5 border border-[#d4a843] text-[#d4a843] text-sm tracking-widest uppercase hover:bg-[#d4a843] hover:text-[#0a0a0a] transition-all duration-300 font-medium">
            Prendre RDV
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#d4a843]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d0d] border-t border-[#d4a843]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-[#c4b89a] hover:text-[#d4a843] transition-colors py-2 border-b border-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 border border-[#d4a843] text-[#d4a843] text-sm tracking-widest uppercase text-center hover:bg-[#d4a843] hover:text-[#0a0a0a] transition-all duration-300">
                Prendre RDV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
