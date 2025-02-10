"use client"

import { useState } from "react"
import { Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tools = [
  { id: 1, name: "AirBnB", avatar: "/assets/tools/airbnb.svg" },
  { id: 2, name: "Adobe", avatar: "/assets/tools/adobe.svg" },
  { id: 3, name: "Android", avatar: "/assets/tools/android.svg" },
  // Add more followers as needed
]

export default function Tools() {
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
          Trending Tools
        </h2>
        <ul>
          {tools.map((tool) => (
            <li key={tool.id} className="flex items-center mb-3">
              <img
                src={tool.avatar || "/placeholder.svg"}
                alt={tool.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <span>{tool.name}</span>
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

