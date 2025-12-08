"use client"

import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { TechStack } from "./tech-stack"
import { ReactNode } from "react"

interface Responsibility {
  category: string
  items: string[]
}

interface Link {
  href: string
  label?: string
  className?: string
}

interface BaseCardProps {
  index: number
  company: string
  companyEn: string
  period: string
  position: string | ReactNode
  links?: Link[]
  responsibilities: Responsibility[]
  stack?: string[]
}

export function BaseCard({
  index,
  company,
  companyEn,
  period,
  position,
  links = [],
  responsibilities,
  stack,
}: BaseCardProps) {
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
              {company}
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.className ||
                    "text-primary hover:text-primary/80 transition-colors"
                  }
                >
                  {link.label || <ExternalLink className="w-4 h-4" />}
                </a>
              ))}
            </h3>
            <p className="text-muted-foreground text-sm">{companyEn}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
        </div>
        <div className="text-base font-medium text-foreground">
          {position}
        </div>
      </div>

      <div className="space-y-4">
        {responsibilities.map((resp, idx) => (
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

      {stack && <TechStack stack={stack} />}
    </motion.div>
  )
}