import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const collaborateurs = [
  {
    nom: 'Me. ITOUA LEBO',
    fonction: 'Avocat associé — Fondateur',
    specialite: 'Droit civil & Contentieux',
    image: null,
    initiales: 'IL',
  },
  {
    nom: 'Me. Sophie MBEMBA',
    fonction: 'Avocate associée',
    specialite: 'Droit de la famille',
    image: null,
    initiales: 'SM',
  },
  {
    nom: 'Me. Patrick ONDONGO',
    fonction: 'Avocat collaborateur',
    specialite: 'Droit immobilier',
    image: null,
    initiales: 'PO',
  },
  {
    nom: 'Me. Aurélie NGOMA',
    fonction: 'Avocate collaboratrice',
    specialite: 'Successions & Patrimoine',
    image: null,
    initiales: 'AN',
  },
  {
    nom: 'Me. Christophe BAZINGA',
    fonction: 'Avocat collaborateur',
    specialite: 'Responsabilité civile',
    image: null,
    initiales: 'CB',
  },
  {
    nom: 'Me. Laure MOUKASSA',
    fonction: 'Juriste conseil',
    specialite: 'Contrats & Obligations',
    image: null,
    initiales: 'LM',
  },
]

// Duplicate for seamless infinite loop
const track = [...collaborateurs, ...collaborateurs]

function CollabCard({ c }) {
  return (
    <div className="flex-shrink-0 w-64 mx-4 group">
      <div className="relative border border-[#d4a843]/20 group-hover:border-[#d4a843]/50 bg-[#0d0c08] transition-all duration-500 overflow-hidden">
        {/* Top corner */}
        <div className="absolute top-0 left-0 w-5 h-px bg-[#d4a843]/50 transition-all duration-300 group-hover:w-8" />
        <div className="absolute top-0 left-0 h-5 w-px bg-[#d4a843]/50 transition-all duration-300 group-hover:h-8" />
        <div className="absolute bottom-0 right-0 w-5 h-px bg-[#d4a843]/50 transition-all duration-300 group-hover:w-8" />
        <div className="absolute bottom-0 right-0 h-5 w-px bg-[#d4a843]/50 transition-all duration-300 group-hover:h-8" />

        {/* Avatar */}
        <div className="relative h-52 bg-gradient-to-b from-[#12110d] to-[#0a0907] flex items-center justify-center overflow-hidden">
          {c.image ? (
            <img src={c.image} alt={c.nom} className="w-full h-full object-cover object-top" />
          ) : (
            <>
              {/* Placeholder avatar */}
              <div className="w-24 h-24 rounded-full border border-[#d4a843]/30 flex items-center justify-center bg-[#0f0e09]">
                <span className="font-serif text-2xl text-[#d4a843] font-semibold tracking-wider">
                  {c.initiales}
                </span>
              </div>
              {/* Subtle radial glow */}
              <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
            </>
          )}
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d0c08] to-transparent" />
        </div>

        {/* Info */}
        <div className="p-5 pt-4">
          <p className="font-serif text-white text-base font-medium leading-tight mb-1 group-hover:text-[#f0d080] transition-colors duration-300">
            {c.nom}
          </p>
          <p className="text-xs text-[#d4a843] tracking-wide mb-2">{c.fonction}</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-[#d4a843]/40" />
            <p className="text-[11px] text-[#6b5f4e] tracking-wide">{c.specialite}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Collaborateurs() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="collaborateurs" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0b08] to-[#0a0a0a]" />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#d4a843]/3 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                className="h-px bg-[#d4a843]/60"
                initial={{ width: 0 }}
                animate={headInView ? { width: 48 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">L'Équipe</span>
              <motion.div
                className="h-px bg-[#d4a843]/60"
                initial={{ width: 0 }}
                animate={headInView ? { width: 48 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">
              Nos Collaborateurs
            </h2>
            <p className="text-[#a89880] max-w-xl mx-auto text-base leading-relaxed">
              Une équipe d'avocats engagés, réunis autour d'une même exigence d'excellence et de rigueur.
            </p>
          </motion.div>
        </div>

        {/* Infinite scroll track */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {track.map((c, i) => (
              <CollabCard key={i} c={c} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
