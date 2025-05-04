// components/AuthButton.tsx
'use client'

import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthButton() {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <Button size="lg" className="bg-primary hover:bg-[#daf149] text-black" disabled>
        Loading...
      </Button>
    )
  }

  return (
    <Button
      asChild
      size="lg"
      className="bg-primary hover:bg-[#daf149] text-black"
    >
      <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
        {isSignedIn ? "Dashboard" : "Sign In"}
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
      </Link>
    </Button>
  )
}