import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const infos = [
  { icon: MapPin, label: 'Adresse', value: 'Avenue de l\'Indépendance, Brazzaville, Congo' },
  { icon: Phone, label: 'Téléphone', value: '+242 06 000 00 00' },
  { icon: Mail, label: 'Email', value: 'contact@itoua-lebo-avocat.cg' },
  { icon: Clock, label: 'Horaires', value: 'Lun–Ven : 9h–18h' },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080807] to-[#0a0a0a]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#d4a843]/4 blur-[100px] pointer-events-none" />

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
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Contact</span>
            <div className="h-px w-12 bg-[#d4a843]/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">Prendre Rendez-vous</h2>
          <p className="text-[#a89880] max-w-xl mx-auto">
            Consultez-nous pour une première analyse de votre situation. Réponse garantie sous 48h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {infos.map((info) => (
              <div key={info.label} className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#d4a843]/30 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-4 h-4 text-[#d4a843]" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#6b5f4e] mb-1">{info.label}</p>
                  <p className="text-[#c4b89a] text-sm">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-[#d4a843]/10">
              <p className="text-xs tracking-widest uppercase text-[#6b5f4e] mb-4">Barreau de Brazzaville</p>
              <p className="text-[#7a6f60] text-sm leading-relaxed">
                Maître ITOUA LEBO est membre du Barreau de Brazzaville, Ordre des Avocats de la République du Congo. Assermenté et soumis aux règles déontologiques de la profession.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-[#d4a843]/20">
                <div className="w-12 h-12 border border-[#d4a843] flex items-center justify-center mb-6">
                  <Send className="w-5 h-5 text-[#d4a843]" />
                </div>
                <p className="font-serif text-xl text-white mb-2">Message envoyé</p>
                <p className="text-[#7a6f60] text-sm">Nous vous répondrons dans les 48 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">Nom</label>
                    <input
                      required
                      value={form.nom}
                      onChange={e => setForm({ ...form, nom: e.target.value })}
                      className="w-full bg-transparent border border-[#d4a843]/20 px-4 py-3 text-[#c4b89a] text-sm focus:outline-none focus:border-[#d4a843]/60 placeholder:text-[#4a4035] transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border border-[#d4a843]/20 px-4 py-3 text-[#c4b89a] text-sm focus:outline-none focus:border-[#d4a843]/60 placeholder:text-[#4a4035] transition-colors"
                      placeholder="votre@email.fr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">Objet</label>
                  <input
                    value={form.sujet}
                    onChange={e => setForm({ ...form, sujet: e.target.value })}
                    className="w-full bg-transparent border border-[#d4a843]/20 px-4 py-3 text-[#c4b89a] text-sm focus:outline-none focus:border-[#d4a843]/60 placeholder:text-[#4a4035] transition-colors"
                    placeholder="Objet de votre demande"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-[#d4a843]/20 px-4 py-3 text-[#c4b89a] text-sm focus:outline-none focus:border-[#d4a843]/60 placeholder:text-[#4a4035] transition-colors resize-none"
                    placeholder="Décrivez brièvement votre situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#d4a843] text-[#0a0a0a] text-sm tracking-widest uppercase font-semibold hover:bg-[#f0d080] transition-all duration-300 group"
                >
                  Envoyer ma demande
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-[#4a4035] text-center">
                  Vos données sont confidentielles et protégées par le secret professionnel.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
