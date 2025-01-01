'use client'

import { motion } from 'framer-motion'
import { Calendar, Monitor } from 'lucide-react'

export default function Events() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-forest-accent/10 rounded-lg blur-xl" />
      <div className="relative bg-forest-dark/30 rounded-lg p-8 backdrop-blur-sm border border-forest-accent/20">
        <div className="flex items-start space-x-4">
          <Monitor className="w-6 h-6 text-forest-accent mt-1" />
          <div>
            <h3 className="text-xl font-bold text-forest-light mb-2">Microsoft Ignite 2024</h3>
            <p className="text-forest-light leading-relaxed">
              Gained exposure to the latest advancements in AI, cloud computing, and technology trends during this year's Microsoft Ignite event.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

