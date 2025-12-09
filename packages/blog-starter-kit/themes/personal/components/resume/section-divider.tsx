"use client"

import { motion } from "motion/react"

interface SectionDividerProps {
  label?: string
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center my-8"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="flex-grow border-t"
        style={{ borderColor: 'var(--primary)', opacity: 0.3 }}
      ></div>
      {label && (
        <span
          className="mx-4 text-xs font-medium uppercase tracking-wider"
          style={{ color: 'var(--primary)' }}
        >
          {label}
        </span>
      )}
      <div
        className="flex-grow border-t"
        style={{ borderColor: 'var(--primary)', opacity: 0.3 }}
      ></div>
    </motion.div>
  )
}
