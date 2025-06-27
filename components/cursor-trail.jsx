"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const mouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add new trail point
      setTrails((prev) => [
        ...prev.slice(-20), // Keep only last 20 points
        { ...newPosition, id: Date.now() },
      ])
    }

    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Smokey trail */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute rounded-full bg-gradient-to-r from-green-500/30 to-cyan-500/30 mix-blend-screen"
          style={{
            left: trail.x,
            top: trail.y,
            width: Math.max(2, 20 - index),
            height: Math.max(2, 20 - index),
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 2,
            filter: `blur(${index * 0.5}px)`,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}
