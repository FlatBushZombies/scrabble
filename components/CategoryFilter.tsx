"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface Category {
  id: number
  name: string
}

export default function CategoryFilter() {
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category")

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories")
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`)
        }
        const data = await response.json()
        // Ensure data is an array before setting state
        setCategories(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Failed to fetch categories:", error)
        setCategories([]) // Set to empty array on error
      }
    }

    fetchCategories()
  }, [])

  function handleSelect(categoryId: string) {
    const params = new URLSearchParams(searchParams)

    if (categoryId === "all") {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }

    router.push(`?${params.toString()}`)
    setOpen(false)
  }

  const selectedCategory = currentCategory
    ? categories.find((c) => c.id.toString() === currentCategory)?.name
    : "All Categories"

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full md:w-[200px] justify-between">
          {selectedCategory}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              <CommandItem onSelect={() => handleSelect("all")} className="cursor-pointer">
                <Check className={cn("mr-2 h-4 w-4", !currentCategory ? "opacity-100" : "opacity-0")} />
                All Categories
              </CommandItem>
              {Array.isArray(categories) &&
                categories.map((category) => (
                  <CommandItem
                    key={category.id}
                    onSelect={() => handleSelect(category.id.toString())}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        currentCategory === category.id.toString() ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {category.name}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
