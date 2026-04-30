import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { liquidGlassStyle } from './ui/liquid-glass'

const infos = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Av. Amilcar Cabral, Brazzaville, Congo-Brazzaville',
    href: 'https://www.google.com/maps/place/Tours+Jumelles+Villarecci/@-4.2758147,15.2809448,17z/data=!3m1!4b1!4m6!3m5!1s0x1a6a33428487d401:0xdcc3498ad8c933cc!8m2!3d-4.2758147!4d15.2835197!16s%2Fg%2F11sbwt08q9?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D',
  },
  { icon: Phone, label: 'Téléphone', value: '+242 069 215 817  ·  +242 055 215 817', href: 'tel:+242069215817' },
  { icon: Mail, label: 'Email', value: 'contact@itoua-lebo-avocat.cg', href: 'mailto:contact@itoua-lebo-avocat.cg' },
  { icon: Clock, label: 'Horaires', value: 'Lun–Ven : 9h–18h', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080807] to-[#0a0a0a]" />
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#d4a843]/4 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

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
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Contact</span>
            <motion.div
              className="h-px bg-[#d4a843]/60"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
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
            className="space-y-4"
          >
            {infos.map((info, i) => {
              const Tag = info.href ? motion.a : motion.div
              const extra = info.href
                ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <Tag
                  key={info.label}
                  {...extra}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className={`flex items-start gap-5 p-5 border border-[#d4a843]/20 rounded-xl transition-colors duration-300 hover:border-[#d4a843]/40 ${info.href ? 'cursor-pointer group' : 'cursor-default'}`}
                  style={liquidGlassStyle}
                >
                  <motion.div
                    className="w-10 h-10 border border-[#d4a843]/30 flex items-center justify-center flex-shrink-0"
                    whileHover={{ borderColor: 'rgba(212,168,67,0.7)', scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <info.icon className="w-4 h-4 text-[#d4a843]" />
                  </motion.div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#6b5f4e] mb-1">{info.label}</p>
                    <p className="text-[#c4b89a] text-sm group-hover:text-[#d4a843] transition-colors duration-200">{info.value}</p>
                  </div>
                </Tag>
              )
            })}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="p-6 border border-[#d4a843]/20 rounded-xl mt-2"
              style={liquidGlassStyle}
            >
              <p className="text-xs tracking-widest uppercase text-[#6b5f4e] mb-4">Barreau de Brazzaville</p>
              <p className="text-[#7a6f60] text-sm leading-relaxed">
                Maître ITOUA LEBO est membre du Barreau de Brazzaville, Ordre des Avocats de la République du Congo. Assermenté et soumis aux règles déontologiques de la profession.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 border border-[#d4a843]/20 rounded-xl"
                  style={liquidGlassStyle}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                    className="w-16 h-16 border border-[#d4a843] flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-7 h-7 text-[#d4a843]" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif text-xl text-white mb-2"
                  >
                    Message envoyé
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-[#7a6f60] text-sm"
                  >
                    Nous vous répondrons dans les 48 heures.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 p-8 border border-[#d4a843]/20 rounded-xl"
                  style={liquidGlassStyle}
                >
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { id: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.fr' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">{label}</label>
                        <motion.input
                          required
                          type={type}
                          value={form[id]}
                          onChange={e => setForm({ ...form, [id]: e.target.value })}
                          onFocus={() => setFocused(id)}
                          onBlur={() => setFocused(null)}
                          animate={{ borderColor: focused === id ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.2)' }}
                          className="w-full bg-transparent border px-4 py-3 text-[#c4b89a] text-sm focus:outline-none placeholder:text-[#4a4035] transition-colors"
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">Objet</label>
                    <motion.input
                      value={form.sujet}
                      onChange={e => setForm({ ...form, sujet: e.target.value })}
                      onFocus={() => setFocused('sujet')}
                      onBlur={() => setFocused(null)}
                      animate={{ borderColor: focused === 'sujet' ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.2)' }}
                      className="w-full bg-transparent border px-4 py-3 text-[#c4b89a] text-sm focus:outline-none placeholder:text-[#4a4035] transition-colors"
                      placeholder="Objet de votre demande"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6b5f4e] mb-2">Message</label>
                    <motion.textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      animate={{ borderColor: focused === 'message' ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.2)' }}
                      className="w-full bg-transparent border px-4 py-3 text-[#c4b89a] text-sm focus:outline-none placeholder:text-[#4a4035] transition-colors resize-none"
                      placeholder="Décrivez brièvement votre situation..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#d4a843] text-[#0a0a0a] text-sm tracking-widest uppercase font-semibold"
                    whileHover={{ scale: 1.02, backgroundColor: '#f0d080' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Envoyer ma demande
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.span>
                  </motion.button>

                  <p className="text-xs text-[#4a4035] text-center">
                    Vos données sont confidentielles et protégées par le secret professionnel.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
