"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, BarChart2, Users, Settings, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: Home, name: "Overview", href: "/" },
  { icon: BarChart2, name: "Trends", href: "/trends" },
  { icon: Users, name: "Discover", href: "/discover" },
  { icon: Settings, name: "For You", href: "/recommended" },
  { icon: Settings, name: "Community", href: "/comunity" },
  { icon: Settings, name: "Creator (Pro)", href: "/creator" },
  { icon: Settings, name: "Insights", href: "/insights" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed left-4 top-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <aside className={`bg-orange-500 text-white w-64 min-h-screen p-4 ${isOpen ? "block" : "hidden"} lg:block`}>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link href={item.href} className="flex items-center p-2 rounded hover:bg-orange-600">
                  <item.icon className="h-6 w-6 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

