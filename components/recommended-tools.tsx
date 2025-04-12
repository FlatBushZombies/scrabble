import { Download, ExternalLink, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface RecommendedToolProps {
  id: number
  name: string
  description: string
  category: string
  rating: number
  downloads: string
  image: string
  tags: string[]
}

export default function RecommendedTools() {
  const tools: RecommendedToolProps[] = [
    {
      id: 1,
      name: "CodeAssist Pro",
      description: "AI-powered code completion and refactoring tool that integrates with all major IDEs.",
      category: "Development",
      rating: 4.8,
      downloads: "125K+",
      image: "/placeholder.svg?height=60&width=60",
      tags: ["AI", "Coding", "Productivity"],
    },
    {
      id: 2,
      name: "DataViz Studio",
      description: "Create stunning interactive data visualizations with minimal coding required.",
      category: "Data Analysis",
      rating: 4.7,
      downloads: "98K+",
      image: "/placeholder.svg?height=60&width=60",
      tags: ["Data", "Visualization", "Analytics"],
    },
    {
      id: 3,
      name: "WorkflowMaster",
      description: "Automate complex workflows across multiple platforms with this powerful integration tool.",
      category: "Automation",
      rating: 4.9,
      downloads: "210K+",
      image: "/placeholder.svg?height=60&width=60",
      tags: ["Automation", "Integration", "Productivity"],
    },
    {
      id: 4,
      name: "DesignKit AI",
      description: "Generate UI components, icons, and layouts using AI with export to major design tools.",
      category: "Design",
      rating: 4.6,
      downloads: "87K+",
      image: "/placeholder.svg?height=60&width=60",
      tags: ["Design", "AI", "UI/UX"],
    },
    {
      id: 5,
      name: "CloudOps Manager",
      description: "Monitor and manage cloud infrastructure with intelligent optimization suggestions.",
      category: "DevOps",
      rating: 4.7,
      downloads: "76K+",
      image: "/placeholder.svg?height=60&width=60",
      tags: ["Cloud", "DevOps", "Monitoring"],
    },
    {
      id: 6,
      name: "SecureShield",
      description: "Comprehensive security scanning and vulnerability management for your codebase.",
      category: "Security",
      rating: 4.8,
      downloads: "92K+",
      image: "/placeholder.svg?height=60&width=60",
      tags: ["Security", "DevSecOps", "Scanning"],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <Card key={tool.id} className="flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-md bg-secondary flex items-center justify-center">
                <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="h-8 w-8" />
              </div>
              <div>
                <CardTitle className="text-base">{tool.name}</CardTitle>
                <CardDescription className="text-xs">{tool.category}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground">{tool.description}</p>
            <div className="mt-3 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{tool.rating}</span>
              <span className="text-xs text-muted-foreground">({tool.downloads} downloads)</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 border-t pt-3">
            <Button size="sm" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Install
            </Button>
            <Button size="sm" variant="outline">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View Details</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
