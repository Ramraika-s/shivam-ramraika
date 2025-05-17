'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useTheme } from '../theme-provider'

export default function Experience() {
  const { theme } = useTheme();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-forest-accent/10 rounded-lg blur-xl" />
      <div className={`relative rounded-lg p-6 h-full backdrop-blur-sm ${theme === 'day' ? 'content-bg ' : 'content-bg '}`}>
        <div
          className={`flex items-center justify-center space-x-4 ${
            theme === 'day' ? 'text-black' : 'text-white'
          }`}
        >
          <Clock className="w-6 h-6 text-forest-accent animate-pulse" />
          <p className="text-lg">Coming Soon...</p>
        </div>
      </div>
    </motion.div>
  )
}
