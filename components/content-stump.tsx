'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ContentStumpProps {
  id: string
  title: string
  children: React.ReactNode
  hideTitle?: boolean
}

export default function ContentStump({ id, title, children, hideTitle = false }: ContentStumpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
        <h2 className="text-3xl font-bold mb-6 text-forest-light text-center">
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

