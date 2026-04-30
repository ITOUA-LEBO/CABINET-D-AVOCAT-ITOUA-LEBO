import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Scale } from 'lucide-react'
import { ShaderAnimation } from './ui/shader-animation'

function CharReveal({ text, delay = 0, className = '' }) {
  return (
    <span className={`inline-flex ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

function MagneticButton({ href, className, children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  return (
    <motion.a
      href={href}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        setPos({
          x: (e.clientX - r.left - r.width / 2) * 0.3,
          y: (e.clientY - r.top - r.height / 2) * 0.3,
        })
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.a>
  )
}

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      <div className="absolute inset-0 z-[1] bg-[#0a0a0a]/70" />

      {/* Pulsing gold glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a843]/5 blur-[120px] pointer-events-none z-[1]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Lines draw in from top */}
      <motion.div
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#d4a843]/20 to-transparent ml-[10%] z-[1]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
        style={{ transformOrigin: 'top center' }}
      />
      <motion.div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#d4a843]/20 to-transparent mr-[10%] z-[1]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: 'top center' }}
      />

      <div className="relative z-[2] max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.div
            className="h-px bg-[#d4a843]/60"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843] font-medium">
            Cabinet d'Avocats — Brazzaville
          </span>
          <motion.div
            className="h-px bg-[#d4a843]/60"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Title — character by character */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
          <CharReveal text="ITOUA" delay={0.3} className="text-white" />
          <br />
          <CharReveal text="LEBO" delay={0.75} className="text-[#d4a843]" />
        </h1>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px w-24 bg-[#d4a843]/40" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <Scale className="w-5 h-5 text-[#d4a843]" />
          </motion.div>
          <div className="h-px w-24 bg-[#d4a843]/40" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-lg md:text-xl text-[#a89880] font-light leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Excellence juridique au service de vos intérêts.
          <br />
          Droit civil — Conseil — Contentieux.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-sm tracking-widest text-[#6b5f4e] uppercase mb-12"
        >
          Brazzaville · République du Congo
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#d4a843] text-[#0a0a0a] text-sm tracking-widest uppercase font-semibold hover:bg-[#f0d080] transition-colors duration-300"
          >
            Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="flex items-center justify-center px-8 py-4 border border-[#d4a843]/40 text-[#c4b89a] text-sm tracking-widest uppercase hover:border-[#d4a843] hover:text-[#d4a843] transition-all duration-300"
          >
            Nos Services
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#6b5f4e]">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-10 bg-gradient-to-b from-[#d4a843]/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
