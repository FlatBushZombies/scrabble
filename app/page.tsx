import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ff7400]">
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-white rounded" />
            <span className="text-xl font-semibold text-white">Scrabble</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-white hover:text-white/70" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-white hover:text-white/70" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-white hover:text-white/70" href="#">
              Use cases
            </Link>
            <Link className="text-sm font-medium text-white hover:text-white/70" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-white hover:text-white/70" href="#">
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            className="bg-white hover:bg-white/90 text-[#ff7400] border-white hover:text-[#ff7400]/90"
          >
            Login
          </Button>
        </nav>

        {/* Hero Section */}
        <div className="px-6 py-12 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Tool discovery
                <br />
                is the new
                <br />
                superpower.
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
                Find the perfect software tools for your workflow. Join our waitlist to discover and optimize your
                productivity stack.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/95 border-white placeholder:text-gray-500 text-black"
                  required
                />
                <Button className="bg-black hover:bg-black/90 text-white border-2 border-transparent hover:border-white transition-colors">
                  Join Waitlist
                </Button>
              </form>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm" />
              <Image
                src="/mysk.jpg"
                alt="Productivity Illustration"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

