"use client"

import { useState, useEffect } from "react"
import { ArrowUp, BarChart3 } from "lucide-react"

export default function MetricsDisplay() {
  const [activeMetrics, setActiveMetrics] = useState({
    conversionRate: 24.8,
    avgTimeToClose: 14.2,
    activeLeads: 127,
    completedWorkflows: 42,
  })

  // Simulate metrics changing when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetrics((prev) => ({
        conversionRate: Math.max(15, Math.min(35, prev.conversionRate + (Math.random() - 0.5) * 2)).toFixed(
          1,
        ) as unknown as number,
        avgTimeToClose: Math.max(10, Math.min(20, prev.avgTimeToClose + (Math.random() - 0.5) * 1)).toFixed(
          1,
        ) as unknown as number,
        activeLeads: Math.max(100, Math.min(150, Math.floor(prev.activeLeads + (Math.random() - 0.3) * 5))),
        completedWorkflows: prev.completedWorkflows + (Math.random() > 0.7 ? 1 : 0),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border-8 border-white bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center px-2 dark:bg-gray-800">
        <div className="flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-500 dark:text-gray-400">FlowStack Analytics</div>
      </div>

      <div className="pt-6 pb-4 px-4 h-[400px]">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Conversion Rate</h3>
              <BarChart3 className="h-4 w-4 text-purple-500" />
            </div>
            <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
              {activeMetrics.conversionRate}%
            </div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>2.5% from last month</span>
            </div>
            <div className="mt-auto">
              <div className="h-24 w-full flex items-end space-x-1">
                {[65, 78, 62, 83, 90, 72, 88].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-purple-100 dark:bg-purple-900/50 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Active Leads</h3>
              <BarChart3 className="h-4 w-4 text-purple-500" />
            </div>
            <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
              {activeMetrics.activeLeads}
            </div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>12 from last week</span>
            </div>
            <div className="mt-auto">
              <div className="relative h-24 w-full">
                <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                  <path
                    d="M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,10"
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth="2"
                    className="drop-shadow"
                  />
                  <path
                    d="M0,10 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    className="drop-shadow"
                  />
                  <circle cx="100" cy="10" r="2" fill="#a855f7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800">
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
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: "92%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Sales Outreach</span>
                  <span>78%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: "78%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Proposal Creation</span>
                  <span>65%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: "65%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Completed Workflows</h3>
              <BarChart3 className="h-4 w-4 text-purple-500" />
            </div>
            <div className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
              {activeMetrics.completedWorkflows}
            </div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUp className="mr-1 h-3 w-3" />
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
                      strokeDashoffset="100"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">42%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
