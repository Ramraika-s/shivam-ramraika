'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function Experience() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-forest-accent/10 rounded-lg blur-xl" />
      <div className="relative bg-forest-dark/30 rounded-lg p-8 backdrop-blur-sm border border-forest-accent/20">
      <div className="flex items-center justify-center space-x-4 text-black dark:text-forest-light">
        <Clock className="w-6 h-6 text-forest-accent animate-pulse" />
        <p className="text-lg">Coming Soon...</p>
      </div>
      </div>
    </motion.div>
  )
}

