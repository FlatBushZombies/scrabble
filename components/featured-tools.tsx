import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedTools() {
  const tools = [
    {
      id: 1,
      name: "AI Assistant",
      icon: "🤖",
      color: "bg-purple-100 dark:bg-purple-900",
    },
    {
      id: 2,
      name: "Data Analyzer",
      icon: "📊",
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      id: 3,
      name: "Code Generator",
      icon: "💻",
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      id: 4,
      name: "Design Tools",
      icon: "🎨",
      color: "bg-orange-100 dark:bg-orange-900",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {tools.map((tool) => (
        <Card key={tool.id} className="overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${tool.color}`}>
              <span className="text-2xl">{tool.icon}</span>
            </div>
            <h4 className="text-center font-medium">{tool.name}</h4>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
