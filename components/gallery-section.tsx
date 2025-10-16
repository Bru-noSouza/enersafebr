"use client"

import { useState } from "react"

const projects = [
  {
    image: "/electrical-panel-installation-professional.jpg",
    caption: "Panel installation — Fortaleza, 2025",
  },
  {
    image: "/residential-electrical-wiring-modern-home.jpg",
    caption: "Residential wiring — Fortaleza, 2025",
  },
  {
    image: "/circuit-breaker-installation-professional.jpg",
    caption: "Circuit breaker setup — Fortaleza, 2025",
  },
  {
    image: "/commercial-electrical-installation-office.jpg",
    caption: "Commercial installation — Fortaleza, 2025",
  },
  {
    image: "/lighting-installation-modern-interior.jpg",
    caption: "Lighting installation — Fortaleza, 2025",
  },
  {
    image: "/air-conditioner-electrical-setup-professional.jpg",
    caption: "AC electrical setup — Fortaleza, 2025",
  },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#FFC107] mb-4 uppercase tracking-wide">
            PROJECT GALLERY
          </h2>
          <p className="text-xl text-[#BDBDBD] font-[family-name:var(--font-inter)]">
            See some of our recent electrical installations.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border-2 border-[#2A2A2A] group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.caption}
                className={`w-full h-64 object-cover transition-all duration-300 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white font-semibold text-lg border-l-4 border-[#FFC107] pl-3">{project.caption}</p>
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 border-2 border-[#FFC107] pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
