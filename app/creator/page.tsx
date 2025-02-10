"use client"

import { BarChart3, Calendar, Home, Settings, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/creator/feature-card"
import { MainNav } from "@/components/creator/main-nav"
import { StatsPanel } from "@/components/creator/stats-panel"

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-16 border-r bg-background">
        <div className="flex h-full flex-col items-center gap-4 py-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/calendar">
              <Calendar className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/analytics">
              <BarChart3 className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/team">
              <Users className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="mt-auto">
            <Link href="/settings">
              <Settings className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <MainNav />

        <div className="grid grid-cols-4 gap-6 p-6">
          {/* Main Content Area */}
          <div className="col-span-3 space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h1 className="text-2xl font-semibold">Welcome to ProductivityPro</h1>
              <p className="mt-2 text-muted-foreground">
                Get started by exploring our key features below to boost your productivity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FeatureCard
                title="Team Collaboration"
                description="Invite your team members and start collaborating on projects together."
                imageUrl="/assets/illustrations/user.png"
              />
              <FeatureCard
                title="Task Management"
                description="Create, assign, and track tasks with our intuitive interface."
                imageUrl="/assets/illustrations/fintech.png"
              />
              <FeatureCard
                title="Time Tracking"
                description="Monitor productivity and track time spent on different projects."
                imageUrl="/assets/illustrations/user.png"
              />
              <FeatureCard
                title="Analytics"
                description="Get insights into your team's performance and project progress."
                imageUrl="/assets/illustrations/fintech.png"
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-1">
            <StatsPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

