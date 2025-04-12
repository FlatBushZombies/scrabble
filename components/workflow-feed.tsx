"use client"

import { useEffect, useState } from "react"
import WorkflowCard from "@/components/workflow-card"
import { Skeleton } from "@/components/ui/skeleton"

export type Workflow = {
  id: string
  title: string
  description: string
  steps: string[]
  author: {
    name: string
    avatar: string
  }
  likes: number
  comments: number
  createdAt: string
}

export default function WorkflowFeed() {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWorkflows() {
      try {
        const response = await fetch("/api/workflows")
        const data = await response.json()
        setWorkflows(data)
      } catch (error) {
        console.error("Error fetching workflows:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflows()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4 space-x-2">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  )
}

