import { motion } from 'framer-motion'
import { ArrowRight, Scale } from 'lucide-react'
import { ShaderAnimation } from './ui/shader-animation'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shader background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>

      {/* Dark overlay to keep text readable and maintain luxury feel */}
      <div className="absolute inset-0 z-[1] bg-[#0a0a0a]/70" />

      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a843]/5 blur-[120px] pointer-events-none z-[1]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#d4a843]/20 to-transparent ml-[10%] z-[1]" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#d4a843]/20 to-transparent mr-[10%] z-[1]" />

      <div className="relative z-[2] max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-[#d4a843]/60" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843] font-medium">Cabinet d'Avocats — Brazzaville</span>
          <div className="h-px w-12 bg-[#d4a843]/60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] mb-6"
        >
          ITOUA
          <span className="block text-[#d4a843]">LEBO</span>
        </motion.h1>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px w-24 bg-[#d4a843]/40" />
          <Scale className="w-5 h-5 text-[#d4a843]" />
          <div className="h-px w-24 bg-[#d4a843]/40" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#a89880] font-light leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Excellence juridique au service de vos intérêts.
          <br />
          Droit civil — Conseil — Contentieux.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm tracking-widest text-[#6b5f4e] uppercase mb-12"
        >
          Brazzaville · République du Congo
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#d4a843] text-[#0a0a0a] text-sm tracking-widest uppercase font-semibold hover:bg-[#f0d080] transition-all duration-300"
          >
            Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center px-8 py-4 border border-[#d4a843]/40 text-[#c4b89a] text-sm tracking-widest uppercase hover:border-[#d4a843] hover:text-[#d4a843] transition-all duration-300"
          >
            Nos Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
