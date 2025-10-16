import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1">
            <div className="relative rounded-lg overflow-hidden border-4 border-[#FFC107] shadow-[0_0_30px_rgba(255,193,7,0.3)]">
              <img
                src="/professional-electrician-with-tools-safety-equipme.jpg"
                alt="René - Eletricista Profissional"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFC107] mb-6 uppercase tracking-wide">
              SOBRE NÓS
            </h2>

            <div className="space-y-6 text-[#BDBDBD] font-[family-name:var(--font-inter)] text-base md:text-lg leading-relaxed">
              <p>
                Olá! Meu nome é <span className="text-[#FFC107] font-semibold">René</span> e sou o fundador da{" "}
                <span className="text-[#FFC107] font-semibold">Enersafe</span>.
              </p>
              <p>
                Trabalho como eletricista há mais de <span className="text-white font-semibold">10 anos</span>, trazendo
                segurança, eficiência e precisão para cada projeto que realizo.
              </p>
              <p>
                Minha missão é entregar soluções elétricas que tornem sua vida mais fácil e segura, sempre seguindo as
                normas técnicas e com o mais alto padrão de qualidade.
              </p>
              <p>
                Na Enersafe, cada instalação é feita com dedicação e compromisso, porque sua segurança é nossa
                prioridade.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 bg-[#0F0F0F] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle2 className="w-6 h-6 text-[#FFC107] flex-shrink-0 mt-1" />
                <span className="text-white font-semibold text-base md:text-lg">Profissional Certificado</span>
              </div>
              <div className="flex items-start gap-3 bg-[#0F0F0F] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle2 className="w-6 h-6 text-[#FFC107] flex-shrink-0 mt-1" />
                <span className="text-white font-semibold text-base md:text-lg">Atendimento Rápido e Confiável</span>
              </div>
              <div className="flex items-start gap-3 bg-[#0F0F0F] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle2 className="w-6 h-6 text-[#FFC107] flex-shrink-0 mt-1" />
                <span className="text-white font-semibold text-base md:text-lg">Sempre conforme normas NBR 5410</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
