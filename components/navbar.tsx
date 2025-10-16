"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 group">
            <Lightbulb className="w-8 h-8 text-[#FFC107] group-hover:scale-110 transition-transform" />
            <span className="text-xl font-extrabold text-[#FFC107] uppercase tracking-wide">Enersafe</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#FFC107] transition-colors font-semibold"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-[#FFC107] transition-colors font-semibold"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#FFC107] transition-colors font-semibold"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0F0F0F] font-bold"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#FFC107]">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2A2A2A]">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-[#FFC107] transition-colors font-semibold text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-white hover:text-[#FFC107] transition-colors font-semibold text-left"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-[#FFC107] transition-colors font-semibold text-left"
              >
                Sobre
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0F0F0F] font-bold w-full"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
