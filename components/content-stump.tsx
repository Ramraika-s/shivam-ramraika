'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from './theme-provider' // Assuming you have this hook

interface ContentStumpProps {
  id: string
  title: string
  children: React.ReactNode
  hideTitle?: boolean
}

export default function ContentStump({ id, title, children, hideTitle = false }: ContentStumpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { theme } = useTheme(); // Use the theme state

  return (
    <motion.section
      id={id}
      ref={ref}
      className="relative my-24 first:mt-12 px-4 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {!hideTitle && (
        <h2 className={`text-3xl font-bold mb-6 ${theme === 'day' ? 'text-black' : 'text-white'} text-center`}>
          {title}
        </h2>
      )}
      
      <div className="content-section">
        <div className="section-content">
          {children}
        </div>
      </div>
    </motion.section>
  )
}
