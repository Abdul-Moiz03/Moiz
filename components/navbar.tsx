"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    // { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20 py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-center transition-all duration-500">
        <Link href="#hero" className={`font-bold transition-all duration-500 ${isScrolled ? "text-2xl" : "text-3xl"}`}>
          Abdul{" "}
          <span className={`text-primary transition-all duration-500 ${isScrolled ? "" : "opacity-80"}`}>Moiz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 hover:text-primary ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant={isScrolled ? "ghost" : "outline"}
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className={`transition-all duration-500 ${isScrolled ? "" : "bg-background/20 hover:bg-background/40"}`}
          >
            {mounted && (
              <>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            )}
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden ml-auto">
          <Button
            variant={isScrolled ? "ghost" : "outline"}
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`mr-2 transition-all duration-500 ${isScrolled ? "" : "bg-background/20 hover:bg-background/40"}`}
            aria-label="Toggle theme"
          >
            {mounted && (
              <>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            )}
          </Button>
          <Button
            variant={isScrolled ? "ghost" : "outline"}
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`transition-all duration-500 ${isScrolled ? "" : "bg-background/20 hover:bg-background/40"}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute w-full bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20 md:hidden">
          <nav className="container flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 px-4 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
