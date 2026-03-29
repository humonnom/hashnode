"use client"

import { motion } from "motion/react"
import { Skills } from "./types"

export function SkillsSection({
  skills,
  primaryLabel = "Primary Skills",
  additionalLabel = "Additional Skills",
}: {
  skills: Skills
  primaryLabel?: string
  additionalLabel?: string
}) {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">{primaryLabel}</p>
        <div className="flex flex-wrap gap-3">
          {skills.primary.map((skill, idx) => (
            <motion.span
              key={idx}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">{additionalLabel}</p>
        <div className="flex flex-wrap gap-2">
          {skills.additional.map((skill, idx) => (
            <motion.span
              key={idx}
              className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
