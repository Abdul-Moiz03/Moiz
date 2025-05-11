"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out anytime for projects, collaborations, or just to say hello!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Whether you need a web application, have a question, or just want to connect - feel free to contact me
                through any of these channels.
              </p>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <Link
                    href="mailto:moizrauf03@gmail.com"
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    moizrauf03@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <Link
                    href="https://linkedin.com/in/abdulmoiz22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    linkedin.com/in/abdulmoiz22
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <Link
                    href="https://github.com/Abdul-Moiz03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    github.com/Abdul-Moiz03
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="font-medium text-center">Available for freelance projects and full-time opportunities</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
