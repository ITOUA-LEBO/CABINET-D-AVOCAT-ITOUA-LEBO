import { motion } from 'framer-motion'
import { Award, Clock, Users, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Années d\'expérience' },
  { icon: Users, value: '500+', label: 'Clients accompagnés' },
  { icon: CheckCircle, value: '98%', label: 'Taux de satisfaction' },
  { icon: Clock, value: '48h', label: 'Délai de réponse max' },
]

export default function About() {
  return (
    <section id="cabinet" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080807]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#d4a843]/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#d4a843]/60" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Le Cabinet</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-6 leading-tight">
              Un droit exigeant,<br />
              <span className="text-[#d4a843]">à votre service.</span>
            </h2>

            <div className="space-y-5 text-[#a89880] text-base leading-relaxed">
              <p>
                Fondé sur les valeurs d'excellence, de rigueur et de confidentialité, le Cabinet ITOUA LEBO vous accompagne dans toutes vos problématiques juridiques en droit civil au Congo-Brazzaville.
              </p>
              <p>
                Maître ITOUA LEBO est inscrit au Barreau de Brazzaville depuis plus de quinze ans. Son approche combine une maîtrise approfondie du droit congolais avec un suivi personnalisé, garantissant une défense adaptée aux enjeux spécifiques de chaque client.
              </p>
              <p>
                Que vous soyez un particulier face à un litige ou une entreprise en quête de conseil juridique, le cabinet met son expertise à votre service pour trouver les solutions les plus efficaces dans le respect du droit congolais.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-[#d4a843]/10">
              <p className="font-serif text-lg text-[#d4a843] italic mb-1">"La justice est l'art du bien et de l'équité."</p>
              <p className="text-xs tracking-widest text-[#6b5f4e] uppercase">— Ulpien</p>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 border border-[#d4a843]/10 bg-[#0d0c08] text-center group hover:border-[#d4a843]/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-4 h-px bg-[#d4a843]/50" />
                <div className="absolute top-0 left-0 h-4 w-px bg-[#d4a843]/50" />
                <s.icon className="w-6 h-6 text-[#d4a843] mx-auto mb-4" />
                <p className="font-serif text-3xl font-semibold text-white mb-1">{s.value}</p>
                <p className="text-xs text-[#7a6f60] tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
