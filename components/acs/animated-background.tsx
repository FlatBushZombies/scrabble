"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid points
    const gridSpacing = 40
    const points: { x: number; y: number; originalX: number; originalY: number }[] = []

    for (let x = 0; x < canvas.width + gridSpacing; x += gridSpacing) {
      for (let y = 0; y < canvas.height + gridSpacing; y += gridSpacing) {
        points.push({ x, y, originalX: x, originalY: y })
      }
    }

    // Create curved shapes
    const curves: { x: number; y: number; radius: number; color: string; speed: number }[] = []
    const colors = ["rgba(147, 51, 234, 0.1)", "rgba(168, 85, 247, 0.08)", "rgba(192, 132, 252, 0.06)"]

    for (let i = 0; i < 3; i++) {
      curves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        color: colors[i],
        speed: (Math.random() - 0.5) * 0.5,
      })
    }

    // Animation variables
    let mouseX = 0
    let mouseY = 0
    let time = 0

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Update and draw curved shapes
      curves.forEach((curve) => {
        curve.x += curve.speed
        curve.y += curve.speed * 0.8

        if (curve.x < -curve.radius) curve.x = canvas.width + curve.radius
        if (curve.x > canvas.width + curve.radius) curve.x = -curve.radius
        if (curve.y < -curve.radius) curve.y = canvas.height + curve.radius
        if (curve.y > canvas.height + curve.radius) curve.y = -curve.radius

        ctx.beginPath()
        ctx.fillStyle = curve.color
        ctx.arc(curve.x, curve.y, curve.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw grid
      ctx.strokeStyle = "rgba(229, 231, 235, 0.3)"
      ctx.lineWidth = 0.5

      // Update grid points based on mouse position
      points.forEach((point) => {
        const dx = mouseX - point.originalX
        const dy = mouseY - point.originalY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 20
          point.x = point.originalX - (dx / distance) * force
          point.y = point.originalY - (dy / distance) * force
        } else {
          point.x = point.originalX
          point.y = point.originalY
        }
      })

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        const rowPoints = points.filter((p) => Math.round(p.originalY / gridSpacing) * gridSpacing === y)
        if (rowPoints.length > 1) {
          ctx.beginPath()
          ctx.moveTo(rowPoints[0].x, rowPoints[0].y)

          for (let i = 1; i < rowPoints.length; i++) {
            ctx.lineTo(rowPoints[i].x, rowPoints[i].y)
          }

          ctx.stroke()
        }
      }

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        const colPoints = points.filter((p) => Math.round(p.originalX / gridSpacing) * gridSpacing === x)
        if (colPoints.length > 1) {
          ctx.beginPath()
          ctx.moveTo(colPoints[0].x, colPoints[0].y)

          for (let i = 1; i < colPoints.length; i++) {
            ctx.lineTo(colPoints[i].x, colPoints[i].y)
          }

          ctx.stroke()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
