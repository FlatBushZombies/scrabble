import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatsPanel() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Activity Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Active tasks</span>
            <span className="font-medium">12</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-muted">
            <div className="h-full w-3/4 rounded-full bg-primary" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Team members online</span>
            <span className="font-medium">8</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-muted">
            <div className="h-full w-1/2 rounded-full bg-primary" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Projects completed</span>
            <span className="font-medium">45</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-muted">
            <div className="h-full w-4/5 rounded-full bg-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

