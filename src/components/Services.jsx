import { motion, useInView } from 'framer-motion'
import { FileText, Users, Home, Heart, Briefcase, Scale } from 'lucide-react'
import { useRef } from 'react'
import { TiltCard } from './ui/tilt-card'
import { liquidGlassStyle } from './ui/liquid-glass'

const services = [
  { icon: FileText, title: 'Contrats & Obligations', desc: 'Rédaction, négociation et analyse de contrats civils. Protection de vos droits contractuels en cas de litige.' },
  { icon: Users, title: 'Droit de la Famille', desc: 'Divorce, séparation, garde des enfants, successions et partages. Un accompagnement humain et rigoureux.' },
  { icon: Home, title: 'Droit Immobilier', desc: 'Vente, acquisition, baux, copropriété. Sécurisation de vos transactions immobilières.' },
  { icon: Heart, title: 'Responsabilité Civile', desc: 'Défense de vos droits en cas de préjudice. Indemnisation, assurance et contentieux.' },
  { icon: Briefcase, title: 'Successions & Patrimoine', desc: 'Planification successorale, testaments, donations. Transmission optimisée de votre patrimoine.' },
  { icon: Scale, title: 'Contentieux Civil', desc: 'Représentation devant les tribunaux civils. Stratégie de défense adaptée à chaque situation.' },
]

function ServiceCard({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard
        tiltLimit={10}
        scale={1.03}
        effect="gravitate"
        spotlight={true}
        className="group relative p-8 border border-[#d4a843]/20 hover:border-[#d4a843]/50 transition-colors duration-500 h-full"
        style={liquidGlassStyle}
      >
        {/* Corner accents animate in */}
        <motion.div
          className="absolute top-0 left-0 h-px bg-[#d4a843]/60"
          initial={{ width: 0 }}
          animate={inView ? { width: 24 } : {}}
          transition={{ duration: 0.4, delay: i * 0.1 + 0.35 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-px bg-[#d4a843]/60"
          initial={{ height: 0 }}
          animate={inView ? { height: 24 } : {}}
          transition={{ duration: 0.4, delay: i * 0.1 + 0.35 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-px bg-[#d4a843]/60"
          initial={{ width: 0 }}
          animate={inView ? { width: 24 } : {}}
          transition={{ duration: 0.4, delay: i * 0.1 + 0.45 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-px bg-[#d4a843]/60"
          initial={{ height: 0 }}
          animate={inView ? { height: 24 } : {}}
          transition={{ duration: 0.4, delay: i * 0.1 + 0.45 }}
        />

        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="w-fit mb-5"
        >
          <s.icon className="w-7 h-7 text-[#d4a843]" />
        </motion.div>

        <h3 className="font-serif text-lg text-white mb-3 font-medium">{s.title}</h3>
        <p className="text-[#7a6f60] text-sm leading-relaxed">{s.desc}</p>

        {/* Hover gold line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#d4a843] to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: 'left' }}
        />
      </TiltCard>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0b08] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="h-px bg-[#d4a843]/60"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Expertise</span>
            <motion.div
              className="h-px bg-[#d4a843]/60"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">
            Domaines d'Intervention
          </h2>
          <p className="text-[#a89880] max-w-xl mx-auto text-base leading-relaxed">
            Une expertise approfondie en droit civil au service de particuliers et de professionnels.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
