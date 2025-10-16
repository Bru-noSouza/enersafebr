"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F0F] pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFC107] opacity-5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2196F3] opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Logo icon with reduced glow */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative">
            <Lightbulb className="w-16 h-16 md:w-20 md:h-20 text-[#FFC107]" strokeWidth={2} />
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#FFC107] absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wider mb-4 md:mb-6 text-[#FFC107] uppercase glow-text-subtle">
          ENERSAFE
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-4 font-semibold flex items-center justify-center gap-2 flex-wrap">
          Energia com segurança e confiança <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#FFC107]" />
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#BDBDBD] mb-8 md:mb-12 max-w-2xl mx-auto font-[family-name:var(--font-inter)] px-4">
          Projetos e instalações elétricas feitos com qualidade e precisão.
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToServices}
          size="lg"
          className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0F0F0F] font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
        >
          <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Conheça nossos serviços
        </Button>

        {/* Decorative line */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-[#FFC107] to-transparent" />
        </div>
      </div>
    </section>
  )
}
