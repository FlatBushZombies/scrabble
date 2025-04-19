"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  TrendingUp,
  Clock,
  Star,
  Filter,
  Zap,
  ArrowUpRight,
  Plus,
  UserPlus,
  Mail,
  MessageSquare,
  FileText,
} from "lucide-react"

type WorkflowPost = {
  id: string
  title: string
  author: {
    name: string
    avatar: string
    verified: boolean
  }
  category: string
  tags: string[]
  likes: number
  saves: number
  timeAgo: string
  preview: {
    nodes: {
      id: string
      title: string
      icon: string
      position: number
    }[]
  }
}

export default function WorkflowFeed() {
  const [activeTab, setActiveTab] = useState("trending")
  const [searchQuery, setSearchQuery] = useState("")

  const [posts, setPosts] = useState<WorkflowPost[]>([
    {
      id: "1",
      title: "Customer Onboarding Automation",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      category: "Sales",
      tags: ["automation", "onboarding", "crm"],
      likes: 1243,
      saves: 342,
      timeAgo: "2h",
      preview: {
        nodes: [
          { id: "1", title: "New Customer", icon: "user-plus", position: 1 },
          { id: "2", title: "Welcome Email", icon: "mail", position: 2 },
          { id: "3", title: "Schedule Call", icon: "message-square", position: 3 },
          { id: "4", title: "Send Resources", icon: "file-text", position: 4 },
        ],
      },
    },
    {
      id: "2",
      title: "Content Marketing Pipeline",
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      category: "Marketing",
      tags: ["content", "social media", "scheduling"],
      likes: 876,
      saves: 231,
      timeAgo: "5h",
      preview: {
        nodes: [
          { id: "1", title: "Topic Research", icon: "search", position: 1 },
          { id: "2", title: "Content Creation", icon: "file-text", position: 2 },
          { id: "3", title: "Review Process", icon: "check-circle", position: 3 },
          { id: "4", title: "Schedule Posts", icon: "calendar", position: 4 },
        ],
      },
    },
    {
      id: "3",
      title: "Bug Tracking Workflow",
      author: {
        name: "Michael Torres",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      category: "Development",
      tags: ["bugs", "development", "tracking"],
      likes: 543,
      saves: 187,
      timeAgo: "1d",
      preview: {
        nodes: [
          { id: "1", title: "Bug Report", icon: "alert-circle", position: 1 },
          { id: "2", title: "Triage", icon: "filter", position: 2 },
          { id: "3", title: "Assign Developer", icon: "user", position: 3 },
          { id: "4", title: "Fix & Test", icon: "check", position: 4 },
        ],
      },
    },
  ])

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "user-plus":
        return <UserPlus className="h-4 w-4" />
      case "mail":
        return <Mail className="h-4 w-4" />
      case "message-square":
        return <MessageSquare className="h-4 w-4" />
      case "file-text":
        return <FileText className="h-4 w-4" />
      case "search":
        return <Search className="h-4 w-4" />
      case "check-circle":
        return <Star className="h-4 w-4" />
      case "calendar":
        return <Clock className="h-4 w-4" />
      case "alert-circle":
        return <Zap className="h-4 w-4" />
      case "filter":
        return <Filter className="h-4 w-4" />
      case "user":
        return <UserPlus className="h-4 w-4" />
      case "check":
        return <Star className="h-4 w-4" />
      default:
        return <Plus className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Discover Workflows</h2>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search workflows..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="trending" className="w-full max-w-md" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trending" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              Popular
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{post.author.name}</span>
                    {post.author.verified && (
                      <svg className="h-4 w-4 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>{post.timeAgo}</span>
                    <span>•</span>
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <h3 className="mt-3 text-lg font-bold">{post.title}</h3>

            <div className="mt-4 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Workflow Preview</div>
                <Button variant="ghost" size="sm" className="h-6 gap-1 text-xs">
                  <Zap className="h-3 w-3" />
                  Try it
                </Button>
              </div>
              <div className="mt-2 flex items-center">
                {post.preview.nodes.map((node, index) => (
                  <div key={node.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-800">
                        {getIconComponent(node.icon)}
                      </div>
                      <div className="mt-1 text-xs">{node.title}</div>
                    </div>
                    {index < post.preview.nodes.length - 1 && (
                      <div className="mx-2 h-0.5 w-8 bg-gray-200 dark:bg-gray-700"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bookmark className="h-4 w-4" />
                  <span>{post.saves}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="gap-1">
          Load more workflows
        </Button>
      </div>
    </div>
  )
}

function Bookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}
