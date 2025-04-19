import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloatingIcons from "@/components/acs/floating-icons"
import AnimatedBackground from "@/components/acs/animated-background"
import InteractiveDemo from "@/components/acs/interactive-demo"
import CreatorWorkflows from "@/components/acs/creator-workflows"
import WorkflowFeed from "@/components/acs/workflow-feed"
import { Github, Users, Sparkles, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-gray-950 dark:to-gray-900">
      <AnimatedBackground />

      {/* Announcement banner */}
      <div className="relative z-10 bg-black text-white py-2 px-4 text-center text-sm">
        FlowStack raises Series A funding -{" "}
        <Link href="#" className="text-purple-300 hover:text-purple-200 underline underline-offset-2">
          Check out the news!
        </Link>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-100 dark:border-gray-800 bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-purple-600"
            >
              <path d="M15 3v18m-6-9H3m6-9v18" />
            </svg>
            <span className="text-xl font-bold">FlowStack</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-md border border-gray-100 bg-white p-2 shadow-lg group-hover:block dark:border-gray-800 dark:bg-gray-950">
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  Workflow Builder
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  Analytics Platform
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  Integration Hub
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-md border border-gray-100 bg-white p-2 shadow-lg group-hover:block dark:border-gray-800 dark:bg-gray-950">
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  For Enterprise
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  For Startups
                </Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  For Teams
                </Link>
              </div>
            </div>
            <Link href="#" className="text-sm font-medium">
              Explore
            </Link>
            <Link href="#" className="text-sm font-medium">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#" className="hidden text-sm font-medium md:block">
              Cloud Login
            </Link>
            <Link href="#" className="hidden text-sm font-medium md:block">
              Support
            </Link>
            <div className="flex items-center gap-1">
              <Github className="h-5 w-5" />
              <span className="text-xs font-medium">10.2k</span>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
              >
                Pricing
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Start Free</Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Floating icons */}
      <FloatingIcons />

      {/* Hero section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Introducing FlowStack
            <span className="block text-purple-600 dark:text-purple-400">Social Workflow Platform</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Create, share, and discover workflow templates from top creators and industry experts
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white">Create Workflow</Button>
            <Button
              variant="outline"
              className="h-12 px-8 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
            >
              Explore Templates
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm">Join 50k+ creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm">100k+ shared workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-purple-600" />
              <span className="text-sm">Boost productivity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive demo section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <InteractiveDemo />
        </div>
      </section>

      {/* Creator workflows section */}
      <section className="relative z-10 py-16 md:py-24 bg-white/50 backdrop-blur-sm dark:bg-gray-950/50">
        <div className="container mx-auto px-4 md:px-6">
          <CreatorWorkflows />
        </div>
      </section>

      {/* Workflow feed section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <WorkflowFeed />
        </div>
      </section>

      {/* Logos section */}
      <section className="relative z-10 py-16 md:py-24 border-t border-gray-100 dark:border-gray-800 bg-white/50 backdrop-blur-sm dark:bg-gray-950/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Powering real-time workflows at
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity"
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
