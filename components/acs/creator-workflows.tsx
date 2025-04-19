"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, TrendingUp, Award } from "lucide-react"

type Creator = {
  id: string
  name: string
  handle: string
  avatar: string
  verified: boolean
}

type Workflow = {
  id: string
  title: string
  description: string
  image: string
  creator: Creator
  category: string
  likes: number
  comments: number
  shares: number
  saved: boolean
  liked: boolean
  featured: boolean
  trending: boolean
}

export default function CreatorWorkflows() {
  const [workflows, setWorkflows] = useState<Workflow[]>([
    {
      id: "1",
      title: "Content Creation Pipeline for Maximum Engagement",
      description: "My team's exact workflow for creating viral videos from ideation to publishing",
      image: "/placeholder.svg?height=400&width=600",
      creator: {
        id: "1",
        name: "MrBeast",
        handle: "mrbeast",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      category: "Content Creation",
      likes: 24500,
      comments: 1243,
      shares: 5621,
      saved: false,
      liked: false,
      featured: true,
      trending: true,
    },
    {
      id: "2",
      title: "Podcast Production Workflow",
      description: "How we produce a weekly podcast with minimal effort and maximum quality",
      image: "/placeholder.svg?height=400&width=600",
      creator: {
        id: "2",
        name: "Alex Cooper",
        handle: "alexcooper",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      category: "Audio Production",
      likes: 12300,
      comments: 845,
      shares: 2134,
      saved: false,
      liked: false,
      featured: false,
      trending: true,
    },
    {
      id: "3",
      title: "Startup Growth Hacking Framework",
      description: "The exact process we used to grow from 0 to 1M users in 6 months",
      image: "/placeholder.svg?height=400&width=600",
      creator: {
        id: "3",
        name: "Sam Altman",
        handle: "sama",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      category: "Growth",
      likes: 18700,
      comments: 932,
      shares: 4521,
      saved: false,
      liked: false,
      featured: true,
      trending: false,
    },
    {
      id: "4",
      title: "Social Media Content Calendar",
      description: "My team's process for planning and scheduling content across platforms",
      image: "/placeholder.svg?height=400&width=600",
      creator: {
        id: "4",
        name: "Emma Chamberlain",
        handle: "emmachamberlain",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      category: "Social Media",
      likes: 9800,
      comments: 723,
      shares: 1845,
      saved: false,
      liked: false,
      featured: false,
      trending: false,
    },
  ])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  const toggleLike = (id: string) => {
    setWorkflows((prev) =>
      prev.map((workflow) => {
        if (workflow.id === id) {
          return {
            ...workflow,
            liked: !workflow.liked,
            likes: workflow.liked ? workflow.likes - 1 : workflow.likes + 1,
          }
        }
        return workflow
      }),
    )
  }

  const toggleSave = (id: string) => {
    setWorkflows((prev) =>
      prev.map((workflow) => {
        if (workflow.id === id) {
          return {
            ...workflow,
            saved: !workflow.saved,
          }
        }
        return workflow
      }),
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Popular Creator Workflows</h2>
        <Button variant="outline" className="gap-1">
          <TrendingUp className="h-4 w-4" />
          View All
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workflows.map((workflow) => (
          <Card
            key={workflow.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/10"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={workflow.image || "/placeholder.svg"}
                  alt={workflow.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                      {workflow.category}
                    </Badge>
                    {workflow.trending && (
                      <Badge className="bg-purple-600 hover:bg-purple-700">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Trending
                      </Badge>
                    )}
                    {workflow.featured && (
                      <Badge className="bg-amber-500 hover:bg-amber-600">
                        <Award className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={workflow.creator.avatar || "/placeholder.svg"} alt={workflow.creator.name} />
                  <AvatarFallback>{workflow.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{workflow.creator.name}</span>
                  {workflow.creator.verified && (
                    <svg
                      className="ml-1 h-4 w-4 text-blue-500 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="font-bold leading-tight mb-1">{workflow.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{workflow.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="flex items-center gap-3">
                <button
                  className={`flex items-center gap-1 text-sm ${workflow.liked ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}
                  onClick={() => toggleLike(workflow.id)}
                >
                  <Heart className="h-4 w-4" fill={workflow.liked ? "currentColor" : "none"} />
                  <span>{formatNumber(workflow.likes)}</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <MessageCircle className="h-4 w-4" />
                  <span>{formatNumber(workflow.comments)}</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Share2 className="h-4 w-4" />
                  <span>{formatNumber(workflow.shares)}</span>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className={`${workflow.saved ? "text-purple-600" : "text-gray-500 dark:text-gray-400"}`}
                  onClick={() => toggleSave(workflow.id)}
                >
                  <Bookmark className="h-5 w-5" fill={workflow.saved ? "currentColor" : "none"} />
                </button>
                <button className="ml-2 text-gray-500 dark:text-gray-400">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
