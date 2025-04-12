import {
    Code,
    PenTool,
    BarChart3,
    Briefcase,
    Zap,
    Users,
    Globe,
    Shield,
    Headphones,
    FileText,
    Database,
    Cloud,
  } from "lucide-react"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { ScrollArea } from "@/components/ui/scroll-area"
  
  export default function CategorySection() {
    return (
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-300px)] px-4 pb-4">
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-left transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium">{category.name}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{category.count}</div>
                </button>
              ))}
            </div>
  
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-3 px-3">Popular Collections</h3>
              <div className="space-y-1">
                {collections.map((collection) => (
                  <button
                    key={collection.name}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent text-left transition-colors"
                  >
                    <div className="font-medium">{collection.name}</div>
                    <div className="text-sm text-muted-foreground ml-auto">{collection.count} tools</div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    )
  }
  
  // Sample data
  const categories = [
    { name: "Design", icon: PenTool, count: 124 },
    { name: "Development", icon: Code, count: 186 },
    { name: "Analytics", icon: BarChart3, count: 78 },
    { name: "Productivity", icon: Zap, count: 143 },
    { name: "Business", icon: Briefcase, count: 92 },
    { name: "Collaboration", icon: Users, count: 67 },
    { name: "Marketing", icon: Globe, count: 104 },
    { name: "Security", icon: Shield, count: 53 },
    { name: "Audio & Video", icon: Headphones, count: 45 },
    { name: "Content", icon: FileText, count: 72 },
    { name: "Database", icon: Database, count: 38 },
    { name: "Cloud", icon: Cloud, count: 61 },
  ]
  
  const collections = [
    { name: "Remote Work Essentials", count: 12 },
    { name: "Startup Toolkit", count: 18 },
    { name: "AI-Powered Tools", count: 24 },
    { name: "Free Developer Tools", count: 15 },
    { name: "Content Creator Suite", count: 9 },
  ]
  