import { Code2, FileJson, LayoutGrid, Globe, Server, Database, GitBranch, Box } from "lucide-react"

export default function TechStack() {
  const technologies = [
    { name: "HTML", icon: Code2, color: "#E34F26" },
    { name: "CSS", icon: LayoutGrid, color: "#1572B6" },
    { name: "JavaScript", icon: FileJson, color: "#F7DF1E" },
    { name: "TypeScript", icon: FileJson, color: "#3178C6" },
    { name: "React", icon: Globe, color: "#61DAFB" },
    { name: "Angular", icon: Globe, color: "#DD0031" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "Docker", icon: Box, color: "#2496ED" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3 py-8">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-white transition-transform duration-300 hover:-translate-y-1"
          style={{ backgroundColor: tech.color }}
        >
          <tech.icon className="h-5 w-5" />
          <span className="font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
