import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F0F0F]">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
