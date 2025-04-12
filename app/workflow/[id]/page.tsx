"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Heart, MessageSquare, Share2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { Workflow } from "@/components/workflow-feed"

export default function WorkflowDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [workflow, setWorkflow] = useState<Workflow | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWorkflow() {
      try {
        const response = await fetch(`/api/workflows/${params.id}`)
        if (!response.ok) {
          throw new Error("Workflow not found")
        }
        const data = await response.json()
        setWorkflow(data)
      } catch (error) {
        console.error("Error fetching workflow:", error)
        router.push("/")
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflow()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="container max-w-3xl py-6 space-y-6">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="grid gap-1">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </CardHeader>
          <CardContent className="pb-3 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!workflow) {
    return (
      <div className="container max-w-3xl py-6">
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Feed
        </Button>
        <Card>
          <CardContent className="py-10 text-center">
            <h2 className="text-xl font-bold">Workflow not found</h2>
            <p className="text-muted-foreground mt-2">
              The workflow you're looking for doesn't exist or has been removed.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-3xl py-6">
      <Button variant="ghost" onClick={() => router.push("/")} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Feed
      </Button>

      <Card>
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <Avatar>
            <AvatarImage src={workflow.author.avatar} alt={workflow.author.name} />
            <AvatarFallback>{workflow.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-semibold">{workflow.author.name}</div>
            <div className="text-xs text-muted-foreground">{new Date(workflow.createdAt).toLocaleDateString()}</div>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <h1 className="text-2xl font-bold mb-4">{workflow.title}</h1>
          <p className="text-muted-foreground mb-6">{workflow.description}</p>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Workflow Steps:</h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              {workflow.steps.map((step, index) => (
                <li key={index} className="text-base">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {["workflow", "productivity", "automation"].map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <div className="flex items-center gap-6 text-muted-foreground">
            <Button variant="ghost" size="sm" className="gap-1">
              <Heart className="h-4 w-4" />
              <span>{workflow.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{workflow.comments}</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
      
    </div>
  )
}

