'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'
import '../components/forest-background.css'

export default function ForestBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (typeof window !== 'undefined') {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Firefly {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      brightness: number
      color: string

      constructor(private index: number) {
        // Use stable values for initial positions to prevent hydration mismatch
        const stableRandom = (seed: number) => {
          const x = Math.sin(seed) * 10000
          return x - Math.floor(x)
        }
        
        const seed = this.index
        this.x = stableRandom(seed) * (canvas?.width || 0)
        this.y = stableRandom(seed + 1) * (canvas?.height || 0)
        this.size = stableRandom(seed + 2) * 2 + 1
        this.speedX = stableRandom(seed + 3) * 2 - 1
        this.speedY = stableRandom(seed + 4) * 2 - 1
        this.brightness = stableRandom(seed + 5)
        this.color = theme === 'night' ? '#52d3ff' : '#34d399'
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        // Use animation frame count instead of Date.now() for consistent timing
        this.brightness = Math.sin(animationFrameCount / 60) * 0.5 + 0.5

        if (canvas) {
          if (this.x < 0) this.x = canvas.width
          if (this.x > canvas.width) this.x = 0
          if (this.y < 0) this.y = canvas.height
          if (this.y > canvas.height) this.y = 0
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        const alpha = this.brightness * 0.5
        gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${this.color}00`)
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let fireflyIndex = 0
    const fireflies: Firefly[] = Array.from({ length: 50 }, () => {
      const firefly = new Firefly(fireflyIndex)
      fireflyIndex++
      return firefly
    })
    let animationId: number
    let animationFrameCount = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      fireflies.forEach(firefly => {
        firefly.update()
        firefly.draw(ctx)
      })
      animationFrameCount++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (canvas && typeof window !== 'undefined') {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return (
    <div className={`fixed inset-0 transition-colors duration-1000 ${theme === 'night' ? 'bg-night' : 'bg-day'}`}>
      <motion.div
        className="absolute inset-0 bg-[url('/trees.svg')] bg-repeat-x bg-bottom opacity-70"
        animate={{
          backgroundPositionX: ["0%", "-100%"]
        }}
        transition={{
          duration: 120,
          ease: "linear",
          repeat: Infinity
        }}
        style={{
          filter: theme === 'night' ? 'brightness(0.5) saturate(0.5)' : 'none'
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 mix-blend-screen"
      />
    </div>
  )
}
