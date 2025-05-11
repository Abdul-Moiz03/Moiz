import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "CMMS SAAS Implementation (FYP)",
      description:
        "Led front-end development, applying a component-oriented approach and responsive design principles. Spearheaded the optimization of performance, resulting in a notable 10% improvement. Achieved heightened user engagement through streamlined navigation and a user-friendly interface.",
      technologies: ["JavaScript", "React JS", "Material UI 5", "C#", "MySQL", "Docker"],
      github: "https://github.com/Abdul-Moiz03/Titan_FrontEnd",
      demo: "https://github.com/Abdul-Moiz03/Titan_FrontEnd",
    },
    {
      title: "StreamHive",
      description:
        "Developed a React.js app inspired by YouTube, offering an engaging interface with unique video sections, categories, and channel pages. Notably, integrated seamless video streaming directly within the app.",
      technologies: ["React JS", "Material UI 5", "RapidAPI", "Netlify", "GitHub"],
      github: "https://github.com/Abdul-Moiz03/Yotube-Clone",
      demo: "https://rococo-daffodil-e75b04.netlify.app/",
    },
    {
      title: "QuerySync",
      description:
        "Created a React QnA app allowing users to post questions and contribute multiple answers to any query.",
      technologies: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Abdul-Moiz03/Rapid-NED-Facilitator-5th",
      demo: "https://github.com/Abdul-Moiz03/Rapid-NED-Facilitator-5th",
    },
    {
      title: "Pharmacy Management System",
      description:
        "Single-handedly developed an inventory management system to track sale and purchase of pharmaceutical products.",
      technologies: ["C#", "MySQL", "Windows Forms"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex h-full flex-col overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
