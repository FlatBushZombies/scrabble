import { NextResponse } from "next/server"

// In-memory database for demo purposes
// In a real app, you would use a database like MongoDB, PostgreSQL, etc.
let workflows = [
  {
    id: "1",
    title: "Morning Productivity Routine",
    description: "My step-by-step process to start the day with maximum productivity",
    steps: [
      "Wake up at 5:30 AM",
      "Drink a glass of water",
      "10 minutes of meditation",
      "30 minutes of exercise",
      "Shower and get ready",
      "Plan the day's tasks",
    ],
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 24,
    comments: 5,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
  },
  {
    id: "2",
    title: "Content Creation Pipeline",
    description: "How I create and schedule content across multiple platforms efficiently",
    steps: [
      "Research trending topics",
      "Outline 3-5 content pieces",
      "Record video content",
      "Edit and optimize for each platform",
      "Schedule posts using Buffer",
      "Engage with comments for 30 minutes after posting",
    ],
    author: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 42,
    comments: 8,
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  },
  {
    id: "3",
    title: "Weekly Review Process",
    description: "My end-of-week review to stay on track with goals and improve productivity",
    steps: [
      "Review completed tasks and achievements",
      "Identify incomplete tasks and blockers",
      "Update project timelines",
      "Plan next week's priorities",
      "Journal lessons learned",
      "Clear inbox to zero",
    ],
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 18,
    comments: 3,
    createdAt: new Date().toISOString(), // Today
  },
]

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(workflows)
}

export async function POST(request: Request) {
  const data = await request.json()

  // Validate required fields
  if (!data.title || !data.description || !data.steps || data.steps.length === 0) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Create new workflow
  const newWorkflow = {
    id: Date.now().toString(),
    title: data.title,
    description: data.description,
    steps: data.steps,
    author: {
      name: "Current User", // In a real app, this would come from the authenticated user
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 0,
    comments: 0,
    createdAt: new Date().toISOString(),
  }

  // Add to our "database"
  workflows = [newWorkflow, ...workflows]

  return NextResponse.json(newWorkflow, { status: 201 })
}

