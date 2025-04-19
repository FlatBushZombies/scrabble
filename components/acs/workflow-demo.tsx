"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Clock, FileText, Mail, MessageSquare, UserPlus } from "lucide-react"

type WorkflowNode = {
  id: string
  title: string
  icon: React.ReactNode
  status: "pending" | "active" | "completed"
  x: number
  y: number
}

type WorkflowConnection = {
  from: string
  to: string
  active: boolean
}

export default function WorkflowDemo() {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: "1", title: "New Lead", icon: <UserPlus className="h-4 w-4" />, status: "completed", x: 50, y: 100 },
    { id: "2", title: "Send Email", icon: <Mail className="h-4 w-4" />, status: "completed", x: 200, y: 100 },
    { id: "3", title: "Follow Up", icon: <MessageSquare className="h-4 w-4" />, status: "active", x: 350, y: 100 },
    { id: "4", title: "Create Proposal", icon: <FileText className="h-4 w-4" />, status: "pending", x: 500, y: 100 },
    { id: "5", title: "Schedule Meeting", icon: <Clock className="h-4 w-4" />, status: "pending", x: 650, y: 100 },
  ])

  const [connections, setConnections] = useState<WorkflowConnection[]>([
    { from: "1", to: "2", active: true },
    { from: "2", to: "3", active: true },
    { from: "3", to: "4", active: false },
    { from: "4", to: "5", active: false },
  ])

  const [currentStep, setCurrentStep] = useState(2)
  const [isAnimating, setIsAnimating] = useState(false)

  const advanceWorkflow = () => {
    if (currentStep >= 4 || isAnimating) return

    setIsAnimating(true)

    // Update the next node to active
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === String(currentStep + 2)) {
          return { ...node, status: "active" }
        } else if (node.id === String(currentStep + 1)) {
          return { ...node, status: "completed" }
        }
        return node
      }),
    )

    // Update the next connection to active
    setTimeout(() => {
      setConnections((prev) =>
        prev.map((conn) => {
          if (conn.from === String(currentStep + 1) && conn.to === String(currentStep + 2)) {
            return { ...conn, active: true }
          }
          return conn
        }),
      )

      setCurrentStep((prev) => prev + 1)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="relative overflow-hidden rounded-xl border-8 border-white bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center px-2 dark:bg-gray-800">
        <div className="flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-500 dark:text-gray-400">FlowStack Workflow</div>
      </div>

      <div className="pt-6 pb-4 px-4 h-[400px]">
        <div className="relative h-full w-full">
          <svg width="100%" height="100%" className="absolute inset-0">
            {connections.map((conn, i) => {
              const fromNode = nodes.find((n) => n.id === conn.from)
              const toNode = nodes.find((n) => n.id === conn.to)

              if (!fromNode || !toNode) return null

              return (
                <line
                  key={`${conn.from}-${conn.to}`}
                  x1={fromNode.x + 20}
                  y1={fromNode.y + 20}
                  x2={toNode.x + 20}
                  y2={toNode.y + 20}
                  stroke={conn.active ? "#9333ea" : "#e5e7eb"}
                  strokeWidth="3"
                  strokeDasharray={conn.active ? "none" : "5,5"}
                  className={conn.active ? "transition-all duration-500" : ""}
                />
              )
            })}
          </svg>

          {nodes.map((node) => (
            <div
              key={node.id}
              className={`absolute flex items-center gap-2 rounded-lg border-2 p-3 transition-all duration-300 ${
                node.status === "active"
                  ? "border-purple-500 bg-purple-50 text-purple-700 shadow-lg shadow-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:shadow-purple-900/20"
                  : node.status === "completed"
                    ? "border-green-500 bg-green-50 text-green-700 shadow-md dark:bg-green-950 dark:text-green-300"
                    : "border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
              }`}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                transform: "translate(-50%, -50%)",
                width: "120px",
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-950">
                {node.status === "completed" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : node.icon}
              </div>
              <span className="text-xs font-medium">{node.title}</span>
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Button
              onClick={advanceWorkflow}
              disabled={currentStep >= 4 || isAnimating}
              className="bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200 dark:shadow-purple-900/20"
              size="lg"
            >
              Advance Workflow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="absolute top-4 left-0 right-0 text-center">
            <div className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
              {currentStep === 2
                ? "Following up with lead via email"
                : currentStep === 3
                  ? "Creating proposal document"
                  : currentStep === 4
                    ? "Scheduling client meeting"
                    : "Workflow complete"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
