"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ThumbsUp } from "lucide-react"

interface Product {
  id: number
  name: string
  tagline: string
  thumbnail: string
  engagements: number
  categories: {
    id: number
    name: string
  }[]
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get("category")

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/products${categoryFilter ? `?category=${categoryFilter}` : ""}`)
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`)
        }
        const data = await response.json()
        // Ensure data is an array before setting state
        setProducts(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Failed to fetch products:", error)
        setError("Failed to load products. Please try again later.")
        setProducts([]) // Set to empty array on error
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [categoryFilter])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-0 h-48 relative">
              <Skeleton className="h-full w-full" />
            </CardHeader>
            <CardContent className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-16" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="text-center py-10">No tools found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          href={`https://www.producthunt.com/posts/${product.id}`}
          target="_blank"
          key={product.id}
          className="block"
        >
          <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <CardHeader className="p-0 h-48 relative">
              <Image
                src={product.thumbnail || "/placeholder.svg?height=200&width=400"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <CardDescription>{product.tagline}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-3">
                {Array.isArray(product.categories) &&
                  product.categories.map((category) => (
                    <Badge key={category.id} variant="secondary">
                      {category.name}
                    </Badge>
                  ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end p-4 pt-0">
              <div className="flex items-center gap-1 text-sm">
                <ThumbsUp className="h-4 w-4" />
                <span>{product.engagements} engagements</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
