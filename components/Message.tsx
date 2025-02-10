import { CheckCircle, XCircle } from "lucide-react"
import type React from "react" // Added import for React

interface MessageProps {
  type: "success" | "error"
  children: React.ReactNode
}

export function Message({ type, children }: MessageProps) {
  const isSuccess = type === "success"
  const Icon = isSuccess ? CheckCircle : XCircle
  const bgColor = isSuccess ? "bg-green-50" : "bg-red-50"
  const borderColor = isSuccess ? "border-green-400" : "border-red-400"
  const textColor = isSuccess ? "text-green-800" : "text-red-800"
  const iconColor = isSuccess ? "text-green-400" : "text-red-400"

  return (
    <div className={`rounded-md ${bgColor} p-4 mt-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${textColor}`}>{children}</p>
        </div>
      </div>
    </div>
  )
}

