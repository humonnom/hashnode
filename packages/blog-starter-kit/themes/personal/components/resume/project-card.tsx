import { BaseCard } from "./base-card"
import { Project } from "./types"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const links = []

  if (project.productLink) {
    links.push({ href: project.productLink })
  }

  if (project.thevcLink) {
    links.push({
      href: project.thevcLink,
      label: "(TheVC)",
      className: "text-muted-foreground hover:text-primary/80 transition-colors text-xs"
    })
  }

  return (
    <BaseCard
      index={index}
      company={project.company}
      companyEn={project.companyEn}
      period={project.period}
      position={project.position}
      links={links}
      responsibilities={project.responsibilities}
      stack={project.stack}
    />
  )
}
