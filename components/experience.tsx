import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "TECHLOGIX",
      period: "Oct 2023 – Present",
      location: "Karachi, PK",
      description: [
        "Working as a Software Engineer for Alfardan Exchange, in cross-functional teams, leveraging a tech stack with JavaScript, Angular, Spring Boot, and Java 8.",
        "Optimized the integration platform to seamlessly integrate a multitude of correspondent APIs, resulting in a 50% reduction in both development cost and time associated with integrating new banks into the system.",
        "Streamlined front-end, back-end, and integration platforms by eliminating 7% of redundancies and dependencies.",
        "Led successful integration of 5+ banks into Qatar's premier exchange system, overseeing client communication.",
        "Reduced querying time of the production application from 15s to 90ms through query optimization and indexing.",
      ],
      skills: ["JavaScript", "Angular", "Spring Boot", "Java 8", "API Integration", "Performance Optimization"],
    },
    {
      title: "Front-End Software Engineer (ReactJS)",
      company: "CHAYNZTECH",
      period: "Oct 2022 - Feb 2023",
      location: "Karachi, PK",
      description: [
        "Developed modern single-page web applications utilizing vanilla JavaScript, React.js, Formik, Yup, and REST APIs.",
        "Ensured testable and efficient code according to business requirements following Agile methodologies.",
      ],
      skills: ["JavaScript", "React.js", "Formik", "Yup", "REST APIs", "Agile"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">My professional journey and accomplishments</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
