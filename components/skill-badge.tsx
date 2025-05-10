import type { LucideIcon } from "lucide-react"

interface SkillBadgeProps {
  name: string
  icon: LucideIcon
  color?: string
}

export function SkillBadge({ name, icon: Icon, color = "#1a1a1a" }: SkillBadgeProps) {
  return (
    <div
      className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-white transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: color }}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{name}</span>
    </div>
  )
}
