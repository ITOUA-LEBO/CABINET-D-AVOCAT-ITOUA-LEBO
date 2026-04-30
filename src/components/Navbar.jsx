import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Équipe', href: '#collaborateurs' },
  { label: 'Services', href: '#services' },
  { label: 'Le Cabinet', href: '#cabinet' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4a843]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#accueil"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src="/logo.png" alt="Cabinet ITOUA LEBO" className="h-12 w-auto object-contain" />
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="relative text-sm tracking-widest uppercase text-[#c4b89a] hover:text-[#d4a843] transition-colors duration-200"
              onHoverStart={() => setActiveLink(l.href)}
              onHoverEnd={() => setActiveLink(null)}
            >
              {l.label}
              <AnimatePresence>
                {activeLink === l.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#d4a843]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            whileHover={{ scale: 1.04, backgroundColor: '#d4a843', color: '#0a0a0a' }}
            className="ml-4 px-5 py-2.5 border border-[#d4a843] text-[#d4a843] text-sm tracking-widest uppercase transition-colors duration-300 font-medium"
          >
            Prendre RDV
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-[#d4a843]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#0d0d0d] border-t border-[#d4a843]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.07 }}
                  className="text-sm tracking-widest uppercase text-[#c4b89a] hover:text-[#d4a843] transition-colors py-2 border-b border-white/5"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: links.length * 0.07 }}
                className="mt-2 px-5 py-3 border border-[#d4a843] text-[#d4a843] text-sm tracking-widest uppercase text-center hover:bg-[#d4a843] hover:text-[#0a0a0a] transition-all duration-300"
              >
                Prendre RDV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
