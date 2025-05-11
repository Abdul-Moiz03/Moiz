"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Let’s Connect</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">
Have something in mind? Let’s make it happen.

          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Ways to Reach Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Whether you need a web application, have a question, or just want to connect - feel free to contact me
                through any of these channels.
              </p>

              <div className="grid gap-6 md:grid-cols-3">

              <Link href="mailto:moizrauf03@gmail.com" className="block">
    <div className="contact-method bg-card hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="rounded-full bg-primary/10 p-4 contact-icon">
          <Mail className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="font-medium">Email</p>
          <span className="text-muted-foreground hover:text-primary hover:underline text-sm">
            moizrauf03@gmail.com
          </span>
        </div>
      </div>
    </div>
  </Link>

  <Link
    href="https://linkedin.com/in/abdulmoiz22/"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="contact-method bg-card hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="rounded-full bg-primary/10 p-4 contact-icon">
          <Linkedin className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="font-medium">LinkedIn</p>
          <span className="text-muted-foreground hover:text-primary hover:underline text-sm">
            linkedin.com/in/abdulmoiz22
          </span>
        </div>
      </div>
    </div>
  </Link>

  <Link
    href="https://github.com/Abdul-Moiz03"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="contact-method bg-card hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="rounded-full bg-primary/10 p-4 contact-icon">
          <Github className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="font-medium">GitHub</p>
          <span className="text-muted-foreground hover:text-primary hover:underline text-sm">
            github.com/Abdul-Moiz03
          </span>
        </div>
      </div>
    </div>
  </Link>
</div>

              <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="contact-availability bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 text-center">
<p className="font-medium">Available for <span className="font-bold">Freelance</span>, <span className="font-bold">Part-Time</span>, and <span className="font-bold">Full-Time</span> Opportunities.</p>
                      <p className="text-sm text-muted-foreground mt-1">Let's create something amazing together!</p>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
