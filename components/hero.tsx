import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TypingEffect from "@/components/typing-effect"

export default function Hero() {
  const typingTexts = ["Abdul Moiz"]

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center">
      <div className="container px-4 py-16 flex flex-col items-center justify-center text-center max-w-3xl">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl animate-pulse-slow"></div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 relative">
            Hi, I'm{" "}
            <span className="text-primary">
              <TypingEffect texts={typingTexts} typingSpeed={150} delayBetweenTexts={3000} />
            </span>
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">Software Engineer</h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
          Versatile and motivated Software Engineer with expertise in software and web development. Passionate about
          creating efficient, user-centric solutions with clean, maintainable code.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button asChild size="lg" className="group text-base">
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>

        <div className="flex space-x-6">
          <Link
            href="https://linkedin.com/in/abdulmoiz22"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/Abdul-Moiz03"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:moizrauf03@gmail.com"
            className="rounded-full p-3 bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </Link>
      </div>
    </section>
  )
}
