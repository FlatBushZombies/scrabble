import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function TrendingUsers() {
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "sarah_dev",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "12.5K",
    },
    {
      id: 2,
      name: "Alex Chen",
      username: "tech_wizard",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "8.3K",
    },
    {
      id: 3,
      name: "Maya Patel",
      username: "code_ninja",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "6.7K",
    },
    {
      id: 4,
      name: "James Wilson",
      username: "design_pro",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "5.2K",
    },
  ]

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-xs text-muted-foreground">@{user.username}</div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </div>
      ))}
    </div>
  )
}
