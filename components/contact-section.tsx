import { Button } from "@/components/ui/button"
import { Instagram, Mail, MessageCircle, Zap } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFC107] mb-6 uppercase tracking-wide">
          CONTATO
        </h2>

        <p className="text-xl md:text-2xl text-white mb-8 md:mb-12 font-semibold px-4">
          Precisa de um eletricista? Vamos deixar sua casa mais segura hoje mesmo.
        </p>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5585994406728"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] border-2 border-[#2A2A2A] hover-glow p-6 rounded-lg transition-all duration-300 group"
          >
            <MessageCircle className="w-12 h-12 text-[#FFC107] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-[#BDBDBD] font-[family-name:var(--font-inter)]">(85) 99440-6728</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/enersafebr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] border-2 border-[#2A2A2A] hover-glow p-6 rounded-lg transition-all duration-300 group"
          >
            <Instagram className="w-12 h-12 text-[#FFC107] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">Instagram</h3>
            <p className="text-[#BDBDBD] font-[family-name:var(--font-inter)]">@enersafebr</p>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@enersafe.com"
            className="bg-[#1A1A1A] border-2 border-[#2A2A2A] hover-glow p-6 rounded-lg transition-all duration-300 group"
          >
            <Mail className="w-12 h-12 text-[#FFC107] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">Email</h3>
            <p className="text-[#BDBDBD] font-[family-name:var(--font-inter)]">contato@enersafe.com</p>
          </a>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0F0F0F] font-bold text-lg md:text-xl px-8 md:px-10 py-6 md:py-7 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
        >
          <a href="https://wa.me/5585994406728" target="_blank" rel="noopener noreferrer">
            <Zap className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            Fale conosco no WhatsApp
          </a>
        </Button>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#2A2A2A]">
          <p className="text-[#BDBDBD] font-[family-name:var(--font-inter)]">
            © 2025 Enersafe — Energia com Segurança e Confiança.
          </p>
        </div>
      </div>
    </section>
  )
}
