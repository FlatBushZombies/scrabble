"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function TrendingToolsSection() {
  const [period, setPeriod] = useState("weekly")
  const [chartType, setChartType] = useState("line")

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Tabs defaultValue="weekly" onValueChange={setPeriod}>
                <TabsList>
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex border rounded-md overflow-hidden">
                <Button
                  variant={chartType === "line" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setChartType("line")}
                  className="rounded-none"
                >
                  Line
                </Button>
                <Button
                  variant={chartType === "bar" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setChartType("bar")}
                  className="rounded-none"
                >
                  Bar
                </Button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">Showing engagement trends for top 5 tools</div>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "line" ? (
                <LineChart data={getChartData(period)} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="figma" stroke="#7c3aed" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="vscode" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="notion" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="slack" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="github" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              ) : (
                <BarChart data={getChartData(period)} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="figma" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="vscode" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="notion" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="slack" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="github" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topTools.map((tool) => (
          <Card key={tool.name} className="overflow-hidden">
            <div className="flex items-center p-4">
              <div className="h-10 w-10 relative rounded-md overflow-hidden bg-muted flex items-center justify-center mr-3">
                <Image
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{tool.name}</h3>
                <div className="text-sm text-muted-foreground">{tool.metric}</div>
              </div>
              <div
                className={`ml-auto text-sm font-medium ${tool.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
              >
                {tool.change}
              </div>
            </div>
            <div className="h-1 w-full bg-muted">
              <div className="h-full bg-primary" style={{ width: `${tool.percentage}%` }}></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Import for Image component
import Image from "next/image"

// Sample data
const topTools = [
  {
    name: "Figma",
    metric: "32.5k users",
    change: "+12%",
    percentage: 95,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "VS Code",
    metric: "28.7k users",
    change: "+8%",
    percentage: 85,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Notion",
    metric: "24.3k users",
    change: "+15%",
    percentage: 75,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Slack",
    metric: "22.1k users",
    change: "+5%",
    percentage: 65,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "GitHub",
    metric: "19.8k users",
    change: "+10%",
    percentage: 60,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Zoom",
    metric: "18.2k users",
    change: "-2%",
    percentage: 55,
    image: "/placeholder.svg?height=40&width=40",
  },
]

function getChartData(period: string) {
  if (period === "daily") {
    return [
      { name: "Mon", figma: 1200, vscode: 1100, notion: 900, slack: 800, github: 750 },
      { name: "Tue", figma: 1300, vscode: 1000, notion: 950, slack: 820, github: 770 },
      { name: "Wed", figma: 1400, vscode: 1200, notion: 1000, slack: 850, github: 800 },
      { name: "Thu", figma: 1350, vscode: 1250, notion: 980, slack: 900, github: 820 },
      { name: "Fri", figma: 1500, vscode: 1300, notion: 1050, slack: 950, github: 850 },
      { name: "Sat", figma: 900, vscode: 800, notion: 700, slack: 600, github: 550 },
      { name: "Sun", figma: 800, vscode: 700, notion: 650, slack: 550, github: 500 },
    ]
  } else if (period === "weekly") {
    return [
      { name: "Week 1", figma: 8500, vscode: 7800, notion: 6500, slack: 5900, github: 5200 },
      { name: "Week 2", figma: 9000, vscode: 8200, notion: 7000, slack: 6200, github: 5500 },
      { name: "Week 3", figma: 9500, vscode: 8700, notion: 7500, slack: 6500, github: 5800 },
      { name: "Week 4", figma: 10000, vscode: 9200, notion: 8000, slack: 6800, github: 6100 },
    ]
  } else {
    return [
      { name: "Jan", figma: 32000, vscode: 28000, notion: 24000, slack: 22000, github: 19000 },
      { name: "Feb", figma: 34000, vscode: 30000, notion: 25000, slack: 23000, github: 20000 },
      { name: "Mar", figma: 36000, vscode: 32000, notion: 27000, slack: 24000, github: 21000 },
      { name: "Apr", figma: 38000, vscode: 34000, notion: 29000, slack: 25000, github: 22000 },
      { name: "May", figma: 40000, vscode: 36000, notion: 31000, slack: 26000, github: 23000 },
      { name: "Jun", figma: 42000, vscode: 38000, notion: 33000, slack: 27000, github: 24000 },
    ]
  }
}
