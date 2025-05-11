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
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 z-0"></div>

            <div className="relative z-10">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Contact Information
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Feel free to reach out anytime for projects, collaborations, or just to say hello!
                    </CardDescription>
                  </div>
                  <div className="hidden md:block">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-slow">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 pt-6">
                <p className="text-muted-foreground border-l-4 border-primary/30 pl-4 py-2 bg-primary/5 rounded-r-md">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Whether you need a web application, have a question, or just want to connect - feel free to
                  contact me through any of these channels.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="group bg-card hover:bg-primary/5 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <Link
                          href="mailto:moizrauf03@gmail.com"
                          className="text-muted-foreground hover:text-primary hover:underline text-sm"
                        >
                          moizrauf03@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-card hover:bg-primary/5 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <Link
                          href="https://linkedin.com/in/abdulmoiz22"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary hover:underline text-sm"
                        >
                          linkedin.com/in/abdulmoiz22
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-card hover:bg-primary/5 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                        <Github className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <Link
                          href="https://github.com/Abdul-Moiz03"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary hover:underline text-sm"
                        >
                          github.com/Abdul-Moiz03
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 text-center">
                    <p className="font-medium">Available for freelance projects and full-time opportunities</p>
                    <p className="text-sm text-muted-foreground mt-1">Let's create something amazing together!</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
