import { motion } from 'framer-motion'
import { FileText, Users, Home, Heart, Briefcase, Scale } from 'lucide-react'
import { TiltCard } from './ui/tilt-card'

const services = [
  {
    icon: FileText,
    title: 'Contrats & Obligations',
    desc: 'Rédaction, négociation et analyse de contrats civils. Protection de vos droits contractuels en cas de litige.',
  },
  {
    icon: Users,
    title: 'Droit de la Famille',
    desc: 'Divorce, séparation, garde des enfants, successions et partages. Un accompagnement humain et rigoureux.',
  },
  {
    icon: Home,
    title: 'Droit Immobilier',
    desc: 'Vente, acquisition, baux, copropriété. Sécurisation de vos transactions immobilières.',
  },
  {
    icon: Heart,
    title: 'Responsabilité Civile',
    desc: 'Défense de vos droits en cas de préjudice. Indemnisation, assurance et contentieux.',
  },
  {
    icon: Briefcase,
    title: 'Successions & Patrimoine',
    desc: 'Planification successorale, testaments, donations. Transmission optimisée de votre patrimoine.',
  },
  {
    icon: Scale,
    title: 'Contentieux Civil',
    desc: 'Représentation devant les tribunaux civils. Stratégie de défense adaptée à chaque situation.',
  },
]

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
            <div className="h-px w-12 bg-[#d4a843]/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Expertise</span>
            <div className="h-px w-12 bg-[#d4a843]/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">Domaines d'Intervention</h2>
          <p className="text-[#a89880] max-w-xl mx-auto text-base leading-relaxed">
            Une expertise approfondie en droit civil au service de particuliers et de professionnels.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard
                tiltLimit={10}
                scale={1.03}
                effect="gravitate"
                spotlight={true}
                className="group relative p-8 border border-[#d4a843]/10 hover:border-[#d4a843]/40 bg-[#0d0c08]/80 backdrop-blur-sm transition-colors duration-500 hover:bg-[#0f0e0a] h-full"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-px bg-[#d4a843]/60" />
                <div className="absolute top-0 left-0 h-6 w-px bg-[#d4a843]/60" />
                <div className="absolute bottom-0 right-0 w-6 h-px bg-[#d4a843]/60" />
                <div className="absolute bottom-0 right-0 h-6 w-px bg-[#d4a843]/60" />

                <s.icon className="w-7 h-7 text-[#d4a843] mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-lg text-white mb-3 font-medium">{s.title}</h3>
                <p className="text-[#7a6f60] text-sm leading-relaxed">{s.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
