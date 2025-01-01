'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'
import '../components/forest-background.css'

export default function ForestBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Firefly {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      brightness: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.brightness = Math.random()
        this.color = theme === 'night' ? '#52d3ff' : '#34d399'
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.brightness = Math.sin(Date.now() / 1000) * 0.5 + 0.5

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
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

    const fireflies: Firefly[] = Array.from({ length: 50 }, () => new Firefly())
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      fireflies.forEach(firefly => {
        firefly.update()
        firefly.draw(ctx)
      })
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
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

