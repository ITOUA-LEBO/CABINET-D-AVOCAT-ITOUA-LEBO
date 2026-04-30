import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Award, Clock, Users, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Award, value: 15, suffix: '+', label: 'Années d\'expérience' },
  { icon: Users, value: 500, suffix: '+', label: 'Clients accompagnés' },
  { icon: CheckCircle, value: 98, suffix: '%', label: 'Taux de satisfaction' },
  { icon: Clock, value: 48, suffix: 'h', label: 'Délai de réponse max' },
]

function CountUp({ target, suffix, inView }) {
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })
  const ref = useRef(null)

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, target, motionVal])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

function StatCard({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative p-8 border border-[#d4a843]/10 bg-[#0d0c08] text-center group hover:border-[#d4a843]/30 transition-all duration-500 cursor-default"
    >
      <motion.div
        className="absolute top-0 left-0 h-px bg-[#d4a843]/50"
        initial={{ width: 0 }}
        animate={inView ? { width: 16 } : {}}
        transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-px bg-[#d4a843]/50"
        initial={{ height: 0 }}
        animate={inView ? { height: 16 } : {}}
        transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
      />

      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="w-fit mx-auto mb-4"
      >
        <s.icon className="w-6 h-6 text-[#d4a843]" />
      </motion.div>

      <p className="font-serif text-3xl font-semibold text-white mb-1">
        <CountUp target={s.value} suffix={s.suffix} inView={inView} />
      </p>
      <p className="text-xs text-[#7a6f60] tracking-wide">{s.label}</p>

      {/* Bottom shimmer on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a843]/60 to-transparent w-full"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="cabinet" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080807]" />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#d4a843]/3 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="h-px bg-[#d4a843]/60"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Le Cabinet</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-6 leading-tight">
              Un droit exigeant,<br />
              <motion.span
                className="text-[#d4a843] inline-block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                à votre service.
              </motion.span>
            </h2>

            <div className="space-y-5 text-[#a89880] text-base leading-relaxed">
              {[
                'Fondé sur les valeurs d\'excellence, de rigueur et de confidentialité, le Cabinet ITOUA LEBO vous accompagne dans toutes vos problématiques juridiques en droit civil au Congo-Brazzaville.',
                'Maître ITOUA LEBO est inscrit au Barreau de Brazzaville depuis plus de quinze ans. Son approche combine une maîtrise approfondie du droit congolais avec un suivi personnalisé, garantissant une défense adaptée aux enjeux spécifiques de chaque client.',
                'Que vous soyez un particulier face à un litige ou une entreprise en quête de conseil juridique, le cabinet met son expertise à votre service pour trouver les solutions les plus efficaces dans le respect du droit congolais.',
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 pt-10 border-t border-[#d4a843]/10"
            >
              <p className="font-serif text-lg text-[#d4a843] italic mb-1">"La justice est l'art du bien et de l'équité."</p>
              <p className="text-xs tracking-widest text-[#6b5f4e] uppercase">— Ulpien</p>
            </motion.div>
          </motion.div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <StatCard key={s.label} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
