import { Star, ExternalLink, BookmarkPlus } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Tool {
  id: number
  name: string
  description: string
  category: string
  rating: number
  reviews: number
  pricing: string
  image: string
  tags: string[]
  dateAdded?: string
  users?: string
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:p-6 flex-grow">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0">
              <Image
                src={tool.image || "/placeholder.svg"}
                alt={tool.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <div className="flex-grow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{tool.name}</h3>
                  <div className="flex items-center gap-1 mt-1 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tool.category}
                    </Badge>
                    {tool.dateAdded && <span className="text-xs text-muted-foreground">Added {tool.dateAdded}</span>}
                    {tool.users && <span className="text-xs text-muted-foreground">{tool.users} users</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground">{tool.description}</p>

              <div className="mt-4 flex flex-wrap gap-1">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-4 md:p-6 md:w-48 flex flex-row md:flex-col justify-between items-center md:items-stretch border-t md:border-t-0 md:border-l">
          <div className="flex items-center md:mb-4">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{tool.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">({tool.reviews})</span>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="text-sm font-medium text-center md:text-left mb-2">{tool.pricing}</div>
            <Button className="w-full" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Tool
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
