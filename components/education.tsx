import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">My academic background and qualifications</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Bachelor's in Software Engineering</CardTitle>
                <CardDescription>NED University of Engineering and Technology</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-col justify-between sm:flex-row">
                <p className="font-medium">Karachi, Pakistan</p>
                <p className="text-muted-foreground">Oct 2019 - Oct 2023</p>
              </div>
              <h4 className="mb-2 font-semibold">Key Coursework:</h4>
              <ul className="ml-6 list-disc grid gap-1 text-muted-foreground sm:grid-cols-2">
                <li>Data Structures and Algorithms</li>
                <li>Operating Systems</li>
                <li>Network and Information Security</li>
                <li>Web Engineering</li>
                <li>Software Design and Architecture</li>
                <li>Design Patterns</li>
                <li>Object-oriented programming</li>
                <li>SOLID Principles</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
