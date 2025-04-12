import { Search } from "lucide-react"
import ToolCard from "@/components/tool-card"
import TrendingToolsSection from "@/components/trending-tools-section"
import CategorySection from "@/components/category-section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the Perfect Tool</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Discover and compare tools tailored to your specific needs and situations
          </p>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-8 relative">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="What kind of tool are you looking for?" className="pl-10 h-12 text-base" />
              </div>
              <Button size="lg" className="h-12">
                Search
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-left sm:text-center">
              Try: "Collaboration tools for remote teams" or "Design tools for beginners"
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <CategorySection />
          </div>

          {/* Right Column - Tools */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="trending" className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Explore Tools</h2>
                <TabsList>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="newest">Newest</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="trending" className="mt-0">
                <TrendingToolsSection />
              </TabsContent>

              <TabsContent value="newest" className="mt-0">
                <div className="grid grid-cols-1 gap-4">
                  {newestTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="grid grid-cols-1 gap-4">
                  {popularTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

// Sample data
const newestTools = [
  {
    id: 1,
    name: "DesignMaster Pro",
    description:
      "All-in-one design platform for creating mockups, wireframes, and prototypes with AI-powered suggestions.",
    category: "Design",
    rating: 4.8,
    reviews: 342,
    pricing: "Freemium",
    image: "/placeholder.svg?height=80&width=80",
    tags: ["UI/UX", "Prototyping", "AI-Powered"],
    dateAdded: "2 days ago",
  },
  {
    id: 2,
    name: "CodeBuddy",
    description:
      "AI-powered coding assistant that helps you write better code faster with real-time suggestions and error detection.",
    category: "Development",
    rating: 4.6,
    reviews: 512,
    pricing: "Free Trial",
    image: "/placeholder.svg?height=80&width=80",
    tags: ["AI", "Coding", "Productivity"],
    dateAdded: "5 days ago",
  },
  {
    id: 3,
    name: "DataVizPro",
    description:
      "Create beautiful data visualizations with minimal effort. Supports multiple data sources and export formats.",
    category: "Analytics",
    rating: 4.7,
    reviews: 278,
    pricing: "Paid",
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Data", "Visualization", "Reports"],
    dateAdded: "1 week ago",
  },
]

const popularTools = [
  {
    id: 4,
    name: "Figma",
    description: "Design, prototype, and collaborate all in the browser with this powerful design platform.",
    category: "Design",
    rating: 4.9,
    reviews: 3420,
    pricing: "Freemium",
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Design", "Collaboration", "Prototyping"],
    users: "2M+",
  },
  {
    id: 5,
    name: "VS Code",
    description: "Free, built on open source. Runs everywhere. Powerful developer tool with thousands of extensions.",
    category: "Development",
    rating: 4.8,
    reviews: 5120,
    pricing: "Free",
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Code Editor", "Extensions", "Debugging"],
    users: "15M+",
  },
  {
    id: 6,
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Customize it to work the way you do.",
    category: "Productivity",
    rating: 4.7,
    reviews: 2780,
    pricing: "Freemium",
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Notes", "Collaboration", "Database"],
    users: "10M+",
  },
]
