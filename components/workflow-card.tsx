import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { Heart, MessageSquare, Share2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Workflow } from "@/components/workflow-feed"

interface WorkflowCardProps {
  workflow: Workflow
}

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  const { id, title, description, steps, author, likes, comments, createdAt } = workflow

  return (
    <Card className="p-6 relative overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid-cols-3 gap-1">
          <div className="font-semibold">{author.name}</div>
          <div className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <Link href={`/workflow/${id}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-primary">{title}</h2>
        </Link>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Workflow Steps:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm pl-2">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["workflow", "productivity", "automation"].map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-6 text-muted-foreground">
          <Button variant="ghost" size="sm" className="gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

