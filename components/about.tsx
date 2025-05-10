import { Code2, Database, Globe, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
      I'm a dedicated and adaptable Software Engineer passionate about building scalable, user-centric software and web solutions. I bring strong expertise in object-oriented programming, relational databases, and data structures.
    </p>
    <p className="text-lg leading-relaxed text-muted-foreground">
      My technical toolkit includes JavaScript, Java, Angular, ReactJS, and Spring Boot. I am a proactive team player with strong communication skills and a knack for solving complex problems through clean, efficient code.
    </p>
    <p className="text-lg leading-relaxed text-muted-foreground">
      I am driven by curiosity and growth, always eager to explore new technologies and refine my skillset to stay ahead in an ever-evolving tech landscape.
    </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <Code2 className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Software and Web Development</CardTitle>
                <CardDescription>Building modern, responsive applications</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Database className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Database Design</CardTitle>
                <CardDescription>Creating efficient database structures</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">API Integration</CardTitle>
                <CardDescription>Connecting systems through RESTful APIs</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Team Collaboration</CardTitle>
                <CardDescription>Working effectively in cross-functional teams</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
