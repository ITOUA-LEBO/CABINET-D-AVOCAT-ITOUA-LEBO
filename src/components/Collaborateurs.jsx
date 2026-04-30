import { useRef, useState, useCallback } from 'react'
import { motion, useInView, useAnimation, useMotionValue, animate } from 'framer-motion'

const collaborateurs = [
  { nom: 'Me. ITOUA LEBO', fonction: 'Avocat associé — Fondateur', specialite: 'Droit civil & Contentieux', image: null, initiales: 'IL' },
  { nom: 'Me. Sophie MBEMBA', fonction: 'Avocate associée', specialite: 'Droit de la famille', image: null, initiales: 'SM' },
  { nom: 'Me. Patrick ONDONGO', fonction: 'Avocat collaborateur', specialite: 'Droit immobilier', image: null, initiales: 'PO' },
  { nom: 'Me. Aurélie NGOMA', fonction: 'Avocate collaboratrice', specialite: 'Successions & Patrimoine', image: null, initiales: 'AN' },
  { nom: 'Me. Christophe BAZINGA', fonction: 'Avocat collaborateur', specialite: 'Responsabilité civile', image: null, initiales: 'CB' },
  { nom: 'Me. Laure MOUKASSA', fonction: 'Juriste conseil', specialite: 'Contrats & Obligations', image: null, initiales: 'LM' },
]

const CARD_W = 272 // 256px + 2*8px margin
const SCROLL_SPEED = 0.25 // px per ms equivalent — lower = slower

function CollabCard({ c }) {
  return (
    <div className="flex-shrink-0 w-64 mx-4 group cursor-grab active:cursor-grabbing select-none">
      <div className="relative border border-[#d4a843]/20 group-hover:border-[#d4a843]/50 bg-[#0d0c08] transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 left-0 w-5 h-px bg-[#d4a843]/50 transition-all duration-300 group-hover:w-8" />
        <div className="absolute top-0 left-0 h-5 w-px bg-[#d4a843]/50 transition-all duration-300 group-hover:h-8" />
        <div className="absolute bottom-0 right-0 w-5 h-px bg-[#d4a843]/50 transition-all duration-300 group-hover:w-8" />
        <div className="absolute bottom-0 right-0 h-5 w-px bg-[#d4a843]/50 transition-all duration-300 group-hover:h-8" />

        <div className="relative h-52 bg-gradient-to-b from-[#12110d] to-[#0a0907] flex items-center justify-center overflow-hidden">
          {c.image ? (
            <img src={c.image} alt={c.nom} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-24 h-24 rounded-full border border-[#d4a843]/30 flex items-center justify-center bg-[#0f0e09]">
              <span className="font-serif text-2xl text-[#d4a843] font-semibold tracking-wider">{c.initiales}</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d0c08] to-transparent" />
        </div>

        <div className="p-5 pt-4">
          <p className="font-serif text-white text-base font-medium leading-tight mb-1 group-hover:text-[#f0d080] transition-colors duration-300">{c.nom}</p>
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

// Duplicate track for seamless loop
const track = [...collaborateurs, ...collaborateurs, ...collaborateurs]
const TOTAL_W = collaborateurs.length * CARD_W // width of one full set

export default function Collaborateurs() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  const x = useMotionValue(0)
  const controls = useAnimation()
  const isPaused = useRef(false)
  const dragStartX = useRef(0)
  const dragStartVal = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  // Wrap x so it stays in the middle copy range
  const wrapX = useCallback((val) => {
    // keep within -TOTAL_W*2 .. 0
    let v = val % (-TOTAL_W)
    if (v > 0) v -= TOTAL_W
    return v
  }, [])

  const startAutoScroll = useCallback((fromX) => {
    isPaused.current = false
    const current = fromX ?? x.get()
    // distance to complete one full set from current position
    const target = current - TOTAL_W
    const duration = TOTAL_W / (CARD_W * SCROLL_SPEED)
    controls.start({
      x: [current, target],
      transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
    })
  }, [controls, x])

  const stopAutoScroll = useCallback(() => {
    isPaused.current = true
    controls.stop()
  }, [controls])

  // Start auto-scroll on mount via ref trick
  const trackRef = useCallback((node) => {
    if (node) {
      // small delay so layout is settled
      setTimeout(() => startAutoScroll(0), 100)
    }
  }, [startAutoScroll])

  // Drag handling
  const onPointerDown = useCallback((e) => {
    stopAutoScroll()
    setIsDragging(true)
    dragStartX.current = e.clientX
    dragStartVal.current = x.get()
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [stopAutoScroll, x])

  const onPointerMove = useCallback((e) => {
    if (!isDragging) return
    const delta = e.clientX - dragStartX.current
    x.set(dragStartVal.current + delta)
  }, [isDragging, x])

  const onPointerUp = useCallback((e) => {
    if (!isDragging) return
    setIsDragging(false)

    // Momentum: velocity from last pointer move
    const velocity = x.getVelocity()
    const current = x.get()
    const momentum = current + velocity * 0.15

    // Snap-like settle then resume auto
    animate(x, momentum, {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      onComplete: () => {
        startAutoScroll(x.get())
      },
    })
  }, [isDragging, x, startAutoScroll])

  // Touch scroll
  const onTouchStart = useCallback((e) => {
    stopAutoScroll()
    dragStartX.current = e.touches[0].clientX
    dragStartVal.current = x.get()
  }, [stopAutoScroll, x])

  const onTouchMove = useCallback((e) => {
    const delta = e.touches[0].clientX - dragStartX.current
    x.set(dragStartVal.current + delta)
  }, [x])

  const onTouchEnd = useCallback(() => {
    const velocity = x.getVelocity()
    const momentum = x.get() + velocity * 0.15
    animate(x, momentum, {
      type: 'spring', stiffness: 80, damping: 20,
      onComplete: () => startAutoScroll(x.get()),
    })
  }, [x, startAutoScroll])

  return (
    <section id="collaborateurs" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0b08] to-[#0a0a0a]" />

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
              <motion.div className="h-px bg-[#d4a843]/60" initial={{ width: 0 }} animate={headInView ? { width: 48 } : {}} transition={{ duration: 0.6, delay: 0.2 }} />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">L'Équipe</span>
              <motion.div className="h-px bg-[#d4a843]/60" initial={{ width: 0 }} animate={headInView ? { width: 48 } : {}} transition={{ duration: 0.6, delay: 0.2 }} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">Nos Collaborateurs</h2>
            <p className="text-[#a89880] max-w-xl mx-auto text-base leading-relaxed">
              Une équipe d'avocats engagés, réunis autour d'une même exigence d'excellence et de rigueur.
            </p>
            <p className="text-[11px] text-[#4a4035] tracking-widest uppercase mt-4">
              ← Glissez pour explorer →
            </p>
          </motion.div>
        </div>

        {/* Track */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={trackRef}
            className="flex py-4"
            style={{ x }}
            animate={controls}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
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
