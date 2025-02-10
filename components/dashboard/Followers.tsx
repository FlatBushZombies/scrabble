"use client"

import { useState } from "react"
import { Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Tools from "./Tools"

const followers = [
  { id: 1, name: "John Doe", avatar: "/assets/profiles/alicia-barker.png" },
  { id: 2, name: "Jane Smith", avatar: "/assets/profiles/becky-snider.png" },
  { id: 3, name: "Bob Johnson", avatar: "/assets/profiles/jessica-saunders.png" },
  // Add more followers as needed
]

export default function Followers() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed right-4 top-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Users className="h-6 w-6" />
      </Button>
      <aside className={`bg-white w-64 min-h-screen p-4 border-l ${isOpen ? "block" : "hidden"} lg:block`}>
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Followers
        </h2>
        <ul>
          {followers.map((follower) => (
            <li key={follower.id} className="flex items-center mb-3">
              <img
                src={follower.avatar || "/placeholder.svg"}
                alt={follower.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <span>{follower.name}</span>
            </li>
          ))}
        </ul>
        <Button variant="ghost" className="w-full mt-4 text-orange-500 hover:text-orange-600">
          View All
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </aside>
      
    </>
  )
}

