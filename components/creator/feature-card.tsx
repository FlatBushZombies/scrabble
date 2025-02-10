import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  imageUrl: string
}

export function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-4">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} width={100} height={100} className="rounded-lg" />
          <CardDescription className="pt-1">{description}</CardDescription>
        </div>
        <Button className="mt-4 w-full">Get Started</Button>
      </CardContent>
    </Card>
  )
}

