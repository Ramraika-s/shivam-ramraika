'use client'

import { motion } from 'framer-motion'
import { Calculator, ImageIcon, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "Calculator",
    description: "A simple web-based calculator using HTML, CSS, and JavaScript.",
    icon: Calculator,
    link: "https://github.com/Ramraika-s/codealpha_tasks/tree/main/Calculator",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Image Gallery",
    description: "A basic image gallery project that allows users to view and filter images.",
    icon: ImageIcon,
    link: "https://github.com/Ramraika-s/codealpha_tasks/tree/main/Image-Gallery",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => {
        const Icon = project.icon
        return (
          <motion.div
            key={project.title}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute inset-0 bg-forest-accent/20 rounded-lg blur-xl" />
            <div className="relative bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm border border-forest-accent/20">
              <div className="mb-4">
                <Icon className="w-12 h-12 text-forest-accent" />
              </div>
              <h3 className="text-xl font-bold text-forest-light mb-2">{project.title}</h3>
              <p className="text-forest-light mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm rounded-full bg-forest-accent/20 text-forest-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-forest-accent hover:text-forest-light transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Link>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

