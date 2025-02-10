"use client"

import { useState } from "react"
import { Bot, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Message = {
  role: "user" | "bot"
  content: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", content: "Hello! How can I assist you today?" }])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically send the message to your AI service
      // and get a response. For now, we'll just echo the message.
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { role: "bot", content: `You said: ${input}` }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-12 h-12 bg-orange-500 hover:bg-orange-600">
          <Bot className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <Card className="w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Assistant</CardTitle>
            <Button variant="ghost" size="sm" className="px-2 py-0" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-2`}>
                  <div
                    className={`rounded-lg px-3 py-2 ${
                      msg.role === "user" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

