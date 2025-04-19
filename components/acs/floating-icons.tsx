"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Activity, Box, Cloud, Cog, Database, FileText, GitBranch, Globe, Server, Settings } from "lucide-react"

type FloatingIcon = {
  id: number
  icon: React.ReactNode
  x: number
  y: number
  size: number
  speed: number
  direction: { x: number; y: number }
  rotation: number
  rotationSpeed: number
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovering, setIsHovering] = useState<number | null>(null)

  // Generate initial icons
  useEffect(() => {
    if (typeof window === "undefined") return

    const width = window.innerWidth
    const height = window.innerHeight
    setDimensions({ width, height })

    const iconComponents = [
      <Database key="database" size={24} />,
      <Cloud key="cloud" size={24} />,
      <GitBranch key="gitbranch" size={24} />,
      <Globe key="globe" size={24} />,
      <Server key="server" size={24} />,
      <Settings key="settings" size={24} />,
      <Activity key="activity" size={24} />,
      <Box key="box" size={24} />,
      <FileText key="filetext" size={24} />,
      <Cog key="cog" size={24} />,
    ]

    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 20 + 30
      newIcons.push({
        id: i,
        icon: iconComponents[i],
        x: Math.random() * (width - size),
        y: Math.random() * (height - size),
        size,
        speed: Math.random() * 0.5 + 0.2,
        direction: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      })
    }

    setIcons(newIcons)

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Animate icons
  useEffect(() => {
    if (icons.length === 0) return

    const animationFrame = requestAnimationFrame(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          if (isHovering === icon.id) {
            return icon // Don't move if being hovered
          }

          let newX = icon.x + icon.direction.x * icon.speed
          let newY = icon.y + icon.direction.y * icon.speed
          let newDirectionX = icon.direction.x
          let newDirectionY = icon.direction.y

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width - icon.size) {
            newDirectionX = -newDirectionX
          }

          if (newY <= 0 || newY >= dimensions.height - icon.size) {
            newDirectionY = -newDirectionY
          }

          // Keep within bounds
          newX = Math.max(0, Math.min(dimensions.width - icon.size, newX))
          newY = Math.max(0, Math.min(dimensions.height - icon.size, newY))

          return {
            ...icon,
            x: newX,
            y: newY,
            rotation: (icon.rotation + icon.rotationSpeed) % 360,
            direction: {
              x: newDirectionX,
              y: newDirectionY,
            },
          }
        }),
      )
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [icons, dimensions, isHovering])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute transition-transform duration-300 pointer-events-auto"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            transform: `rotate(${icon.rotation}deg) scale(${isHovering === icon.id ? 1.5 : 1})`,
            zIndex: isHovering === icon.id ? 2 : 1,
          }}
          onMouseEnter={() => setIsHovering(icon.id)}
          onMouseLeave={() => setIsHovering(null)}
        >
          <div
            className={`flex items-center justify-center w-full h-full rounded-lg bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 text-purple-600 transition-all duration-300 ${
              isHovering === icon.id ? "bg-purple-50 text-purple-700 border-purple-200" : ""
            } dark:bg-gray-800/80 dark:border-gray-700 dark:text-purple-400`}
          >
            {icon.icon}
          </div>
        </div>
      ))}
    </div>
  )
}
