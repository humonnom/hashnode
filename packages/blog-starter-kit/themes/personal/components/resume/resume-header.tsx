"use client"

import { motion } from "motion/react"
import { Mail, Phone, Github, BookOpen, Linkedin } from "lucide-react"

interface PersonalInfo {
  name: string
  nameKo: string
  title: string
  email: string
  phone: string
  intro: string
  description: string
}

interface Links {
  github: string
  blog: string
  linkedin: string
}

export function ResumeHeader({ personal, links }: { personal: PersonalInfo; links: Links }) {
  return (
    <motion.header
      className="mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {personal.name} <span className="text-muted-foreground">| {personal.nameKo}</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {personal.title}
        </motion.p>
      </div>

      <motion.div
        className="flex flex-wrap gap-4 mb-6 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          {personal.email}
        </a>
        <span className="flex items-center gap-2 text-muted-foreground">
          <Phone className="w-4 h-4" />
          {personal.phone}
        </span>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
        >
          <Github className="w-4 h-4" />
          Github
        </a>
        <a
          href={links.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
        >
          <BookOpen className="w-4 h-4" />
          Blog
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p className="text-lg font-medium text-primary">{personal.intro}</p>
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-pretty">{personal.description}</p>
      </motion.div>
    </motion.header>
  )
}
