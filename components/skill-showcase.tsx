import { Code2, FileJson, LayoutGrid, Globe } from "lucide-react"
import { SkillBadge } from "@/components/skill-badge"

export default function SkillShowcase() {
  const frontendSkills = [
    { name: "HTML", icon: Code2, color: "#E34F26" },
    { name: "CSS", icon: LayoutGrid, color: "#1572B6" },
    { name: "JavaScript", icon: FileJson, color: "#F7DF1E" },
    { name: "React", icon: Globe, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: LayoutGrid, color: "#06B6D4" },
  ]

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
      {frontendSkills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
      ))}
    </div>
  )
}
