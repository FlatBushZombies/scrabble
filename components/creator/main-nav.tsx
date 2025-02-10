import Link from "next/link"
import { Bell, Globe, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-semibold">
          ProductivityPro
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

