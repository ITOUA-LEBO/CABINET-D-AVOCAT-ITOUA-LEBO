import { Scale } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#d4a843]/10 py-12 bg-[#080807]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-1">
              <Scale className="w-4 h-4 text-[#d4a843]" />
              <span className="font-serif text-base font-semibold text-[#d4a843]">ITOUA LEBO</span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-[#6b5f4e] uppercase">Cabinet d'Avocats — Brazzaville</span>
          </div>

          <div className="flex gap-8 text-xs tracking-widest uppercase text-[#6b5f4e]">
            <a href="#accueil" className="hover:text-[#d4a843] transition-colors">Accueil</a>
            <a href="#services" className="hover:text-[#d4a843] transition-colors">Services</a>
            <a href="#cabinet" className="hover:text-[#d4a843] transition-colors">Le Cabinet</a>
            <a href="#contact" className="hover:text-[#d4a843] transition-colors">Contact</a>
          </div>

          <p className="text-xs text-[#4a4035]">
            © {new Date().getFullYear()} Cabinet ITOUA LEBO. Tous droits réservés.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d4a843]/5 text-center">
          <p className="text-xs text-[#3a3028]">
            Membre du Barreau de Brazzaville · République du Congo · N° d'inscription 000000
          </p>
        </div>
      </div>
    </footer>
  )
}
