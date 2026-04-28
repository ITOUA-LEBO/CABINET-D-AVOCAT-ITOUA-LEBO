import { ContainerScroll } from "./ui/container-scroll-animation"
import { Scale, Shield, Award } from "lucide-react"

const values = [
  { icon: Shield, title: "Confidentialité", desc: "Secret professionnel absolu. Vos affaires restent strictement privées." },
  { icon: Scale, title: "Rigueur juridique", desc: "Analyse précise de chaque dossier, fondée sur une veille juridique constante." },
  { icon: Award, title: "Excellence", desc: "15 ans d'expérience au service d'une défense de qualité supérieure." },
]

export default function ScrollShowcase() {
  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#d4a843]/60" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#d4a843]">Notre Engagement</span>
              <div className="h-px w-12 bg-[#d4a843]/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-tight">
              Un cabinet fondé sur<br />
              <span className="text-[#d4a843]">la confiance.</span>
            </h2>
            <p className="text-[#a89880] mt-4 text-base max-w-xl mx-auto">
              Chaque dossier est traité avec la même exigence et le même engagement envers vos intérêts.
            </p>
          </div>
        }
      >
        {/* Content inside the 3D card */}
        <div className="h-full w-full flex flex-col md:flex-row items-stretch">
          {/* Left — decorative */}
          <div className="hidden md:flex flex-col justify-center items-center w-1/3 border-r border-[#d4a843]/10 p-8 bg-gradient-to-b from-[#0d0c08] to-[#0a0907]">
            <div className="w-20 h-20 border border-[#d4a843]/30 flex items-center justify-center mb-6">
              <Scale className="w-10 h-10 text-[#d4a843]" />
            </div>
            <p className="font-serif text-2xl text-[#d4a843] text-center italic leading-snug">
              "Dura lex,<br />sed lex."
            </p>
            <p className="text-xs text-[#4a4035] mt-3 tracking-widest uppercase">Droit romain</p>
            <div className="mt-8 space-y-3 w-full">
              {["Barreau de Brazzaville", "Droit civil", "15+ ans"].map(tag => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#d4a843]" />
                  <span className="text-xs text-[#6b5f4e] tracking-wide">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — values */}
          <div className="flex-1 flex flex-col justify-center gap-0 divide-y divide-[#d4a843]/10">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-5 p-6 md:p-8 group hover:bg-[#0f0e0a] transition-colors duration-300">
                <div className="w-10 h-10 border border-[#d4a843]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#d4a843]/50 transition-colors">
                  <v.icon className="w-4 h-4 text-[#d4a843]" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-white font-medium mb-1">{v.title}</h3>
                  <p className="text-sm text-[#6b5f4e] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  )
}
