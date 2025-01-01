'use client'

import { motion } from 'framer-motion'
import { Code2, Database, GitBranch as Git, Brain, Laptop } from 'lucide-react'

const skills = [
  {
    category: "Development Tools",
    items: ["VSCode", "Android Studio"],
    icon: Code2
  },
  {
    category: "Version Control",
    items: ["Git & GitHub", "GitKraken & GitLens"],
    icon: Git
  },
  {
    category: "Cloud Services",
    items: ["Firebase", "Hugging Face"],
    icon: Database
  }
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skills.map((skill, index) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.category}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-forest-accent/10 rounded-lg blur-xl" />
            <div className="relative bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm border border-forest-accent/20 h-full">
              <Icon className="w-8 h-8 text-forest-accent mb-4" />
              <h3 className="text-lg font-bold text-forest-light mb-3">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-forest-light flex items-center">
                    <span className="w-2 h-2 bg-forest-accent rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

