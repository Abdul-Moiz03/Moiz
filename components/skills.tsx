import { Server, Monitor, Cpu } from "lucide-react"

export default function Skills() {
  const expertiseAreas = [
    {
      icon: <Monitor className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      subtitle: "React, Angular, NextJS",
      description:
        "Experienced in building responsive and interactive web applications using modern JavaScript frameworks and libraries. Proficient in React, Angular, and NextJS with a strong focus on performance and user experience.",
      skills: ["JavaScript", "TypeScript", "React", "Angular", "NextJS", "HTML", "CSS", "Tailwind CSS", "Material UI"],
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      subtitle: "Java, Spring Boot, Node.js",
      description:
        "Skilled in developing robust server-side applications and RESTful APIs. Experienced in Java with Spring Boot and Node.js, with a focus on creating scalable and maintainable backend systems.",
      skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "SQL", "MongoDB", "PostgreSQL", "MSSQL", "Oracle DB"],
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Tools & Technologies",
      subtitle: "DevOps, Cloud, Version Control",
      description:
        "Proficient with various development tools and technologies that enhance the software development lifecycle. Experienced with Git, AWS, Azure, Docker, and CI/CD pipelines.",
      skills: ["Git", "AWS", "Azure", "Docker", "CI/CD", "Netlify", "GitHub", "Agile", "Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-5xl font-bold tracking-tight sm:text-4xl">My Expertise</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-md"
            >
              <div className="mb-6">{area.icon}</div>

              <h3 className="text-2xl font-bold mb-1 text-card-foreground">
                {area.title}
                <div className="h-1 w-16 bg-primary mt-2 mb-4"></div>
              </h3>
              <p className="text-muted-foreground font-medium mb-2">{area.subtitle}</p>

              <p className="text-muted-foreground mb-6">{area.description}</p>

              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold">Certifications</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-card p-6 hover:border-primary transition-colors duration-300 shadow-sm rounded-md">
              <p className="font-medium text-card-foreground">Angular 17+ Fundamentals</p>
              <p className="text-sm text-muted-foreground">Frontend Masters Course</p>
            </div>
            <div className="border border-border bg-card p-6 hover:border-primary transition-colors duration-300 shadow-sm rounded-md">
              <p className="font-medium text-card-foreground">Angular 1.x Essentials</p>
              <p className="text-sm text-muted-foreground">Frontend Masters Course</p>
            </div>
            <div className="border border-border bg-card p-6 hover:border-primary transition-colors duration-300 shadow-sm rounded-md">
              <p className="font-medium text-card-foreground">JavaScript For Beginners Complete Course</p>
              <p className="text-sm text-muted-foreground">Udemy</p>
            </div>
            <div className="border border-border bg-card p-6 hover:border-primary transition-colors duration-300 shadow-sm rounded-md">
              <p className="font-medium text-card-foreground">React - The Complete Guide</p>
              <p className="text-sm text-muted-foreground">incl Hooks, React Router, Redux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
