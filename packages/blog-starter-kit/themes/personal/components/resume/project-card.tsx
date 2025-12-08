"use client"

import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { TechStack } from "./tech-stack"

interface Responsibility {
  category: string
  items: string[]
}

interface Project {
  id: string
  company: string
  companyEn: string
  productLink?: string
  thevcLink?: string
  position: string
  period: string
  responsibilities: Responsibility[]
  stack?: string[]
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="mb-8 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="mb-4">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 flex-wrap">
              {project.company}
              {project.productLink && (
                <a
                  href={project.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.thevcLink && (
                <a
                  href={project.thevcLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary/80 transition-colors text-xs"
                >
                  (TheVC)
                </a>
              )}
            </h3>
            <p className="text-muted-foreground text-sm">{project.companyEn}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{project.period}</span>
        </div>
        <p className="text-base font-medium text-foreground">
          {project.position}
        </p>
      </div>

      <div className="space-y-4">
        {project.responsibilities.map((resp, idx) => (
          <div key={idx}>
            {resp.category && <h4 className="font-medium mb-2 text-foreground">• {resp.category}</h4>}
            {resp.items.length > 0 && (
              <ul className="ml-4 space-y-1 text-sm text-muted-foreground">
                {resp.items.map((item, itemIdx) => {
                  const isIndented = item.startsWith('-');
                  const displayItem = isIndented ? item.slice(1).trim() : item;

                  return (
                    <li
                      key={itemIdx}
                      className={`leading-relaxed ${isIndented ? 'ml-4' : ''}`}
                    >
                      - {displayItem}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>

      {project.stack && <TechStack stack={project.stack} />}
    </motion.div>
  )
}
