"use client"

import { Card } from "@/components/ui/card"
import { Home, Zap, Plug, Wind, Wrench, Ruler } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Home,
    title: "Instalações Elétricas Residenciais",
    description: "Soluções elétricas completas para sua casa",
  },
  {
    icon: Zap,
    title: "Quadros de Distribuição e Disjuntores",
    description: "Sistemas de distribuição de energia seguros e eficientes",
  },
  {
    icon: Plug,
    title: "Instalação de Tomadas, Interruptores e Iluminação",
    description: "Instalação profissional de todos os pontos elétricos",
  },
  {
    icon: Wind,
    title: "Instalação de Ar Condicionado",
    description: "Instalação especializada de ar condicionado e parte elétrica",
  },
  {
    icon: Wrench,
    title: "Manutenção e Reparos",
    description: "Serviços rápidos e confiáveis de reparo elétrico",
  },
  {
    icon: Ruler,
    title: "Projetos Elétricos (NBR 5410)",
    description: "Projetos elétricos conformes e documentação completa",
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 px-4 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFC107] mb-4 uppercase tracking-wide">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-lg md:text-xl text-[#BDBDBD] font-[family-name:var(--font-inter)]">
            Soluções elétricas confiáveis e seguras para todos os ambientes.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`bg-[#1A1A1A] border-2 border-[#2A2A2A] hover-glow p-6 transition-all duration-300 ${
                  visibleCards.includes(index) ? "fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-[#FFC107]/10 rounded-full">
                    <Icon className="w-10 h-10 text-[#FFC107]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#BDBDBD] font-[family-name:var(--font-inter)]">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
