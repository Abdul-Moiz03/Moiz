"use client"

import { useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  // Animation on scroll functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight - 100) {
          element.classList.add("visible")
        }
      })
    }

    // Run once on initial load
    animateOnScroll()

    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll)

    // Clean up
    return () => window.removeEventListener("scroll", animateOnScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <div className="container flex justify-center py-8">
          <Link
            href="#hero"
            className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll to top</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
