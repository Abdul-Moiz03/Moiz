import Image from "next/image"

interface TechBadgeProps {
  name: string
  logo: string
}

export function TechBadge({ name, logo }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full bg-[#1a1a1a] px-3 py-1 text-sm text-white transition-transform duration-200 hover:-translate-y-1">
      {logo && (
        <Image
          src={logo || "/placeholder.svg"}
          alt={`${name} logo`}
          width={20}
          height={20}
          className="mr-2 h-5 w-5 object-contain"
        />
      )}
      <span>{name}</span>
    </div>
  )
}
