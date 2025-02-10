"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { submitEmail } from "./actions/submitEmail"
import { Message } from "@/components/Message"

export default function Home() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await submitEmail(email)
    setMessage({
      type: result.success ? "success" : "error",
      text: result.message,
    })
    if (result.success) {
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-[#ff7400]">
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-white rounded" />
            <span className="text-xl font-semibold text-white">Scrabble</span>
          </div>
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
              <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/95 border-white placeholder:text-gray-500 text-black"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button className="bg-black hover:bg-black/90 text-white border-2 border-transparent hover:border-white transition-colors" type="submit">
                  Join Waitlist
                </Button>
              </form>
              {message && <Message type={message.type}>{message.text}</Message>}
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

