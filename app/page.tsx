"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react'
import TechStackSection from "@/components/tech-stack-section"

export default function LiquidGlassPortfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Hero section parallax and morphing effects
      if (heroRef.current) {
        const heroProgress = Math.min(scrollY / windowHeight, 1)
        const liquidShape = heroRef.current.querySelector(".liquid-shape") as HTMLElement
        const heroText = heroRef.current.querySelector(".hero-text") as HTMLElement

        if (liquidShape) {
          liquidShape.style.transform = `scale(${1 + heroProgress * 0.5}) rotate(${heroProgress * 45}deg)`
          liquidShape.style.opacity = `${1 - heroProgress * 0.3}`
        }

        if (heroText) {
          heroText.style.transform = `translateY(${heroProgress * -50}px)`
          heroText.style.opacity = `${1 - heroProgress * 0.5}`
        }
      }

      // About section slide-in animation
      if (aboutRef.current) {
        const aboutTop = aboutRef.current.offsetTop
        const aboutProgress = Math.max(0, Math.min((scrollY - aboutTop + windowHeight) / windowHeight, 1))
        const aboutContent = aboutRef.current.querySelector(".about-content") as HTMLElement

        if (aboutContent && aboutProgress > 0) {
          aboutContent.style.transform = `translateX(${(1 - aboutProgress) * 100}px)`
          aboutContent.style.opacity = `${aboutProgress}`
        }
      }

      // Portfolio grid stagger animation
      if (portfolioRef.current) {
        const portfolioTop = portfolioRef.current.offsetTop
        const portfolioProgress = Math.max(0, Math.min((scrollY - portfolioTop + windowHeight) / windowHeight, 1))
        const portfolioItems = portfolioRef.current.querySelectorAll(".portfolio-item")

        portfolioItems.forEach((item, index) => {
          const element = item as HTMLElement
          const delay = index * 0.1
          const itemProgress = Math.max(0, Math.min(portfolioProgress - delay, 1))

          if (itemProgress > 0) {
            element.style.transform = `translateY(${(1 - itemProgress) * 50}px) scale(${0.8 + itemProgress * 0.2})`
            element.style.opacity = `${itemProgress}`
          }
        })
      }

      // Contact section liquid morph
      if (contactRef.current) {
        const contactTop = contactRef.current.offsetTop
        const contactProgress = Math.max(0, Math.min((scrollY - contactTop + windowHeight) / windowHeight, 1))
        const contactLiquid = contactRef.current.querySelector(".contact-liquid") as HTMLElement

        if (contactLiquid && contactProgress > 0) {
          contactLiquid.style.transform = `scale(${contactProgress}) rotate(${contactProgress * 180}deg)`
          contactLiquid.style.opacity = `${contactProgress * 0.8}`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Jakub Růžička</div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="hover:text-gray-600 transition-colors">
              Projekty
            </a>
            <a href="#about" className="hover:text-gray-600 transition-colors">
              O mně
            </a>
            <a href="#tech-stack" className="hover:text-gray-600 transition-colors">
              Technologie
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">
              Kontakt
            </a>
          </div>
          <Button className="hidden md:block bg-black text-white hover:bg-gray-800 rounded-full px-6">Blog</Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 text-2xl font-bold mt-16">
            <a href="#portfolio" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Projekty
            </a>
            <a href="#about" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              O mně
            </a>
            <a href="#tech-stack" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Technologie
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Kontakt
            </a>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg mt-8">
              Blog
            </Button>
          </nav>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="liquid-shape absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute w-80 h-80 bg-gradient-to-tr from-black via-gray-800 to-gray-600 rounded-full blur-2xl opacity-30 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute w-64 h-64 bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-400 rounded-full blur-xl opacity-40"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              animation: "morph 6s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="hero-text relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Jakub Růžička
            <br />
            <span className="text-gray-600">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vývojář a IT profesionál z Česka specializující se na webový vývoj a systémovou administraci
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg">
            Prozkoumat práci <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="about-content"> {/* Removed initial opacity/transform classes */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Programování &
                  <br />
                  Technologie
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Specializuji se na webový vývoj, databáze a systémovou administraci. Mám zkušenosti s moderními
                  technologiemi a rád řeším komplexní IT výzvy.
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Hlavní dovednosti:</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Programování", "Webový vývoj", "Databáze", "Systémová administrace"].map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Technologie:</h3>
                  <div className="flex flex-wrap gap-3">
                    {["PHP", "JavaScript", "Python", "SQL", "Linux"].map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} id="portfolio" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Projekty & Práce</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Webové aplikace",
                category: "PHP & JavaScript",
                color: "from-gray-900 to-gray-700",
                tech: "PHP",
              },
              {
                title: "Databázové systémy",
                category: "SQL & Optimalizace",
                color: "from-gray-800 to-gray-600",
                tech: "SQL",
              },
              {
                title: "Python nástroje",
                category: "Automatizace & Skripty",
                color: "from-gray-700 to-gray-500",
                tech: "Python",
              },
              {
                title: "Linux administrace",
                category: "Servery & Systémy",
                color: "from-gray-600 to-gray-400",
                tech: "Linux",
              },
              {
                title: "JavaScript projekty",
                category: "Frontend & Backend",
                color: "from-gray-500 to-gray-300",
                tech: "JS",
              },
              {
                title: "Vlastní nástroje",
                category: "Vývoj aplikací",
                color: "from-gray-400 to-gray-200",
                tech: "Mix",
              },
            ].map((project, index) => (
              <div key={index} className="portfolio-item"> {/* Removed initial opacity/transform classes */}
                <div className="group cursor-pointer">
                  <div
                    className={`h-80 bg-gradient-to-br ${project.color} rounded-2xl mb-4 overflow-hidden relative transition-transform duration-500 group-hover:scale-105`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-6 left-6 text-white">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{project.tech}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-white/80">{project.category}</p>
                    </div>
                    <div className="absolute top-6 right-6 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section (now an accordion) */}
      <TechStackSection />

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="relative py-32 px-6 bg-black text-white overflow-hidden">
        <div className="contact-liquid absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl opacity-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Pojďme
            <br />
            Spolupracovat
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Máte zajímavý projekt nebo potřebujete pomoc s vývojem? Rád si s vámi popovídám o možnostech spolupráce.
          </p>

          <div className="flex justify-center mb-16">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-lg">
              <Mail className="mr-2 w-5 h-5" />
              jakub@ruzickajakub.cz
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/ruzickajakub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ruzickajakub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/ruzickajakub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 Jakub Růžička. Všechna práva vyhrazena.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Blog
            </a>
            <a href="mailto:jakub@ruzickajakub.cz" className="text-gray-600 hover:text-black transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
