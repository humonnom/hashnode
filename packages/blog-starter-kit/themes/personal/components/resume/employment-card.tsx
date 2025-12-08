"use client"

import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"

interface Responsibility {
  category: string
  items: string[]
}

interface Employment {
  id: string
  company: string
  companyEn: string
  website?: string
  position: string
  type?: string
  period: string
  responsibilities: Responsibility[]
  stack?: string[]
}

export function EmploymentCard({ job, index }: { job: Employment; index: number }) {
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
              {job.company}
              {job.website && (
                <a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </h3>
            <p className="text-muted-foreground text-sm">{job.companyEn}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</span>
        </div>
        <p className="text-base font-medium text-foreground">
          {job.position}
          {job.type && <span className="text-sm text-muted-foreground ml-2">({job.type})</span>}
        </p>
      </div>

      <div className="space-y-4">
        {job.responsibilities.map((resp, idx) => (
          <div key={idx}>
            {resp.category && <h4 className="font-medium mb-2 text-foreground">• {resp.category}</h4>}
            {resp.items.length > 0 && (
              <ul className="ml-4 space-y-1 text-sm text-muted-foreground">
                {resp.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="leading-relaxed">
                    - {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {job.stack && job.stack.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {job.stack.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
