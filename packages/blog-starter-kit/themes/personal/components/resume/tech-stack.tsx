interface TechStackProps {
  stack: string[]
}

export function TechStack({ stack }: TechStackProps) {
  if (!stack || stack.length === 0) return null

  return (
    <div className="mt-4 pt-4 border-t border-border">
      <p className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 rounded-md text-primary text-xs font-medium"
            style={{ backgroundColor: 'color-mix(in oklab, var(--primary) 10%, transparent)' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
