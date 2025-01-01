'use client'

import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full
        bg-gradient-to-b from-forest-accent to-forest-accent-dark
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-forest-accent focus:ring-offset-2 focus:ring-offset-forest-dark
        transition-all duration-300 ease-spring
        sm:p-4"
      style={{
        opacity: 1,
        boxShadow: theme === 'night' 
          ? '0 0 20px rgba(82, 211, 153, 0.3)' 
          : '0 0 20px rgba(34, 197, 94, 0.3)'
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'day' ? 0 : 180 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {theme === 'day' ? (
          <Moon className="w-5 h-5 text-forest-light sm:w-6 sm:h-6" />
        ) : (
          <Sun className="w-5 h-5 text-forest-light sm:w-6 sm:h-6" />
        )}
      </motion.div>
    </motion.button>
  )
}

