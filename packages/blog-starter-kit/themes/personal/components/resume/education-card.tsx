"use client"

import { motion } from "motion/react"
import { GraduationCap } from "lucide-react"

interface Education {
  school: string
  schoolKo: string
  degree: string
  major?: string
  period: string
}

export function EducationCard({ edu, index }: { edu: Education; index: number }) {
  return (
    <motion.div
      className="mb-6 p-5 rounded-lg bg-card border border-border"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold">{edu.school}</h3>
              <p className="text-sm text-muted-foreground">{edu.schoolKo}</p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
          </div>
          <p className="text-sm font-medium text-foreground mb-1">{edu.degree}</p>
          {edu.major && <p className="text-sm text-muted-foreground leading-relaxed">{edu.major}</p>}
        </div>
      </div>
    </motion.div>
  )
}
