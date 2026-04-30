import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

const links = ['Accueil', 'Services', 'Le Cabinet', 'Contact']
const hrefs = ['#accueil', '#services', '#cabinet', '#contact']

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border-t border-[#d4a843]/10 py-12 bg-[#080807]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#accueil"
            className="flex flex-col items-center md:items-start"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
              >
                <Scale className="w-4 h-4 text-[#d4a843]" />
              </motion.div>
              <span className="font-serif text-base font-semibold text-[#d4a843]">ITOUA LEBO</span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-[#6b5f4e] uppercase">Cabinet d'Avocats — Brazzaville</span>
          </motion.a>

          <div className="flex gap-8 text-xs tracking-widest uppercase text-[#6b5f4e]">
            {links.map((label, i) => (
              <motion.a
                key={label}
                href={hrefs[i]}
                className="relative hover:text-[#d4a843] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {label}
              </motion.a>
            ))}
          </div>

          <p className="text-xs text-[#4a4035]">
            © {new Date().getFullYear()} Cabinet ITOUA LEBO. Tous droits réservés.
          </p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-[#d4a843]/5 text-center"
          style={{ transformOrigin: 'left' }}
        >
          <p className="text-xs text-[#3a3028]">
            Membre du Barreau de Brazzaville · République du Congo · N° d'inscription 000000
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
