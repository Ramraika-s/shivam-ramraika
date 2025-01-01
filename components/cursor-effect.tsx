'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return

      // Update main cursor
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`

      // Update trails with delay
      trailsRef.current.forEach((trail, index) => {
        setTimeout(() => {
          if (trail) {
            trail.style.left = `${e.clientX}px`
            trail.style.top = `${e.clientY}px`
          }
        }, index * 50)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-screen"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-forest-accent rounded-full blur-md" />
      </motion.div>

      {/* Trailing elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          ref={(el) => el && (trailsRef.current[i] = el)}
          className="fixed w-3 h-3 pointer-events-none z-50 mix-blend-screen"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <div className="absolute inset-0 bg-forest-light rounded-full blur-sm" />
        </motion.div>
      ))}
    </>
  )
}

