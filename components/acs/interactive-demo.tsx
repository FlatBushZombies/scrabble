"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  UserPlus,
  Play,
  Pause,
  BarChart3,
  Activity,
} from "lucide-react"

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

type DataPoint = {
  timestamp: number
  value: number
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("workflow")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const demoRef = useRef<HTMLDivElement>(null)

  // Workflow data
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: "1", title: "New Lead", icon: <UserPlus className="h-4 w-4" />, status: "completed", x: 50, y: 100 },
    { id: "2", title: "Send Email", icon: <Mail className="h-4 w-4" />, status: "pending", x: 200, y: 100 },
    { id: "3", title: "Follow Up", icon: <MessageSquare className="h-4 w-4" />, status: "pending", x: 350, y: 100 },
    { id: "4", title: "Create Proposal", icon: <FileText className="h-4 w-4" />, status: "pending", x: 500, y: 100 },
    { id: "5", title: "Schedule Meeting", icon: <Clock className="h-4 w-4" />, status: "pending", x: 650, y: 100 },
  ])

  const [connections, setConnections] = useState<WorkflowConnection[]>([
    { from: "1", to: "2", active: false },
    { from: "2", to: "3", active: false },
    { from: "3", to: "4", active: false },
    { from: "4", to: "5", active: false },
  ])

  // Metrics data
  const [metrics, setMetrics] = useState({
    conversionRate: 24.8,
    avgTimeToClose: 14.2,
    activeLeads: 127,
    completedWorkflows: 42,
  })

  const [realtimeData, setRealtimeData] = useState<DataPoint[]>([])

  // Initialize realtime data
  useEffect(() => {
    const initialData: DataPoint[] = []
    const now = Date.now()

    for (let i = 0; i < 20; i++) {
      initialData.push({
        timestamp: now - (20 - i) * 1000,
        value: 50 + Math.random() * 30,
      })
    }

    setRealtimeData(initialData)
  }, [])

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!demoRef.current) return

      const rect = demoRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const demoElement = demoRef.current
    if (demoElement) {
      demoElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (demoElement) {
        demoElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // Auto-advance workflow when playing
  useEffect(() => {
    if (!isPlaying || isAnimating || currentStep >= 4) return

    const timer = setTimeout(() => {
      advanceWorkflow()
    }, 2000)

    return () => clearTimeout(timer)
  }, [isPlaying, isAnimating, currentStep])

  // Update realtime data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeData((prev) => {
        const newData = [...prev]
        const lastValue = newData[newData.length - 1].value

        // Add new data point
        newData.push({
          timestamp: Date.now(),
          value: Math.max(30, Math.min(100, lastValue + (Math.random() - 0.5) * 10)),
        })

        // Remove oldest data point
        if (newData.length > 20) {
          newData.shift()
        }

        return newData
      })

      // Update metrics
      setMetrics((prev) => ({
        conversionRate: Math.max(15, Math.min(35, prev.conversionRate + (Math.random() - 0.5) * 0.5)).toFixed(
          1,
        ) as unknown as number,
        avgTimeToClose: Math.max(10, Math.min(20, prev.avgTimeToClose + (Math.random() - 0.5) * 0.3)).toFixed(
          1,
        ) as unknown as number,
        activeLeads: Math.max(100, Math.min(150, Math.floor(prev.activeLeads + (Math.random() - 0.3) * 2))),
        completedWorkflows: isPlaying
          ? prev.completedWorkflows + (Math.random() > 0.7 ? 1 : 0)
          : prev.completedWorkflows,
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying])

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

  const resetWorkflow = () => {
    setCurrentStep(0)
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === "1") {
          return { ...node, status: "completed" }
        } else {
          return { ...node, status: "pending" }
        }
      }),
    )
    setConnections((prev) => prev.map((conn) => ({ ...conn, active: false })))
  }

  const togglePlayPause = () => {
    if (currentStep >= 4) {
      resetWorkflow()
    }
    setIsPlaying(!isPlaying)
  }

  // Calculate interactive effects based on mouse position
  const getNodeStyle = (node: WorkflowNode) => {
    const dx = mousePosition.x - node.x
    const dy = mousePosition.y - node.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 150

    let scale = 1
    let shadowIntensity = 0

    if (distance < maxDistance) {
      scale = 1 + (1 - distance / maxDistance) * 0.2
      shadowIntensity = (1 - distance / maxDistance) * 20
    }

    return {
      transform: `scale(${scale})`,
      boxShadow: `0 ${shadowIntensity}px ${shadowIntensity * 2}px -${shadowIntensity / 2}px rgba(147, 51, 234, ${shadowIntensity / 100})`,
    }
  }

  return (
    <div
      ref={demoRef}
      className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border-8 border-white bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 flex items-center px-4 dark:bg-gray-800">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-sm font-medium text-gray-500 dark:text-gray-400">FlowStack Platform</div>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger
                value="workflow"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-900 dark:data-[state=active]:text-purple-100"
              >
                Workflow
              </TabsTrigger>
              <TabsTrigger
                value="metrics"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-900 dark:data-[state=active]:text-purple-100"
              >
                Metrics
              </TabsTrigger>
            </TabsList>

            <Button
              variant="outline"
              size="sm"
              className="ml-auto flex items-center gap-1 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
          </div>

          <TabsContent value="workflow" className="mt-0">
            <div className="relative h-[500px] w-full overflow-hidden bg-white p-4 dark:bg-gray-950">
              <div className="absolute inset-0">
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
                        className="transition-all duration-500"
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
                      transform: `translate(-50%, -50%)`,
                      width: "120px",
                      ...getNodeStyle(node),
                    }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-950">
                      {node.status === "completed" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : node.icon}
                    </div>
                    <span className="text-xs font-medium">{node.title}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <Button
                  onClick={advanceWorkflow}
                  disabled={currentStep >= 4 || isAnimating || isPlaying}
                  className="bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200 dark:shadow-purple-900/20"
                  size="lg"
                >
                  Advance Workflow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="absolute top-4 left-0 right-0 text-center">
                <div className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                  {currentStep === 0
                    ? "New lead captured"
                    : currentStep === 1
                      ? "Sending automated email"
                      : currentStep === 2
                        ? "Following up with lead"
                        : currentStep === 3
                          ? "Creating proposal document"
                          : "Scheduling client meeting"}
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-gray-100 dark:bg-gray-800/80 dark:border-gray-700">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Progress</div>
                <div className="mt-1 h-1.5 w-32 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-purple-600 transition-all duration-500"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="mt-0">
            <div className="h-[500px] w-full overflow-auto bg-white p-4 dark:bg-gray-950">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Conversion Rate</h3>
                    <BarChart3 className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {metrics.conversionRate}%
                  </div>
                  <div className="flex items-center text-xs text-green-500 mt-1">
                    <ArrowRight className="mr-1 h-3 w-3" />
                    <span>2.5% from last month</span>
                  </div>
                  <div className="mt-auto">
                    <div className="h-24 w-full flex items-end space-x-1">
                      {[65, 78, 62, 83, 90, 72, 88].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-purple-100 dark:bg-purple-900/50 rounded-t transition-all duration-500"
                          style={{
                            height: `${height}%`,
                            transform: `scaleY(${isPlaying ? 1 + Math.sin(Date.now() / 1000 + i) * 0.05 : 1})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Active Leads</h3>
                    <Activity className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {metrics.activeLeads}
                  </div>
                  <div className="flex items-center text-xs text-green-500 mt-1">
                    <ArrowRight className="mr-1 h-3 w-3" />
                    <span>12 from last week</span>
                  </div>
                  <div className="mt-auto">
                    <div className="relative h-24 w-full">
                      <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.5)" />
                            <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                          </linearGradient>
                        </defs>

                        {/* Area chart */}
                        <path
                          d={`M0,${100 - realtimeData[0]?.value || 50} ${realtimeData.map((point, i) => `L${(i / (realtimeData.length - 1)) * 300},${100 - point.value}`).join(" ")} L300,100 L0,100 Z`}
                          fill="url(#gradient)"
                        />

                        {/* Line chart */}
                        <path
                          d={`M0,${100 - realtimeData[0]?.value || 50} ${realtimeData.map((point, i) => `L${(i / (realtimeData.length - 1)) * 300},${100 - point.value}`).join(" ")}`}
                          fill="none"
                          stroke="#9333ea"
                          strokeWidth="2"
                        />

                        {/* Latest data point */}
                        <circle
                          cx="300"
                          cy={100 - (realtimeData[realtimeData.length - 1]?.value || 50)}
                          r="4"
                          fill="#9333ea"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Workflow Performance</h3>
                    <BarChart3 className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="space-y-3 mt-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Lead Qualification</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-purple-500 transition-all duration-1000"
                          style={{ width: isPlaying ? `${92 + Math.sin(Date.now() / 1000) * 3}%` : "92%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Sales Outreach</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-purple-500 transition-all duration-1000"
                          style={{ width: isPlaying ? `${78 + Math.sin(Date.now() / 1000 + 1) * 4}%` : "78%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Proposal Creation</span>
                        <span>65%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-purple-500 transition-all duration-1000"
                          style={{ width: isPlaying ? `${65 + Math.sin(Date.now() / 1000 + 2) * 5}%` : "65%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Completed Workflows</h3>
                    <BarChart3 className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {metrics.completedWorkflows}
                  </div>
                  <div className="flex items-center text-xs text-green-500 mt-1">
                    <ArrowRight className="mr-1 h-3 w-3" />
                    <span>8 from yesterday</span>
                  </div>
                  <div className="mt-auto">
                    <div className="relative h-24 w-full flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f3e8ff" strokeWidth="10" />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="10"
                            strokeDasharray="251.2"
                            strokeDashoffset={251.2 - (251.2 * metrics.completedWorkflows) / 100}
                            transform="rotate(-90 50 50)"
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                          {Math.round((metrics.completedWorkflows / 100) * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
