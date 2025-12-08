"use client"

import type React from "react"

import { motion } from "motion/react"

export function SectionTitle({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.h2
      className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="w-1 h-8 bg-primary rounded-full" />
      {children}
    </motion.h2>
  )
}
