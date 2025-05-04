import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WordRotate from "@/components/ui/word-rotate"
import { Input } from "@/components/ui/input"
import DisplayCards from "@/components/display-cards"
import {
  Settings,
  CreditCard,
  BarChart2,
  Search,
  CreditCardIcon as PaymentIcon,
  Star,
  ArrowUpRight,
  Users,
  Sparkles} from "lucide-react"
import Features from "@/components/Features"
import CreatorWorkFlow from "@/components/CreatorWorkFlow"
import CategoryFilter from "@/components/CategoryFilter"
import ProductGrid from "@/components/ProductGrid"
import { Suspense } from "react"

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src='/assets/logo.png' alt="logo" width={40} height={40} className="object-cover" />
          <span className="font-bold text-xl">Scrabble</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Solutions
          </Link>
          <Link href="#" className="text-sm font-medium flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium flex items-center gap-1">
            <BarChart2 className="w-4 h-4" />
            Entreprises
          </Link>
        </nav>
        <Button asChild size="lg" className="bg-primary hover:bg-[#daf149] text-black">
          <Link href='/sign-in'>
          Sign In
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
      </header>


      <div className="max-w-2xl mx-auto mb-8 relative mt-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input placeholder="What kind of tool are you looking for?" className="pl-10 h-12 text-base" />
                    </div>
                    <Button size="lg" className="h-12">
                      Search
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-left sm:text-center">
                    Try: "Collaboration tools for remote teams" or "Design tools for beginners"
                  </p>
      </div>

      {/* Hero Section */}
      <main className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Discover,  
              <br />
              Create,
              <br />
              Collaborate
            </h1>
            <p className="text-gray-600 max-w-md">
            Make data-driven decisions to maximize productivity.
            Scrabble offers detailed, real-time insights into the performance, cost, and efficiency of every tool on the market
            </p>
            <Button className="bg-primary hover:bg-[#daf149] text-black">
              Create Account
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
            </Button>
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/assets/profiles/alicia-barker.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/assets/profiles/mark-erixon.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="font-bold">15 Million+    
                    <WordRotate
                          className='text-[14px] justify-center'
                          words={["Creators", "Researchers", "Educators", "Students", 'Leaders']}
                    />
                    </div>
                <div className="text-sm text-gray-600">Using the power of real-time analytics</div>
              </div>
            </div>
          </div>
          <div className="relative">
          <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
          </div>
        </div>
        
        <div>
        <CreatorWorkFlow />
    </div>
    

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Connect Easily</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Savannah Nguyen</div>
                    <div className="text-sm text-gray-600">Havard Philosophy Professor</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  +
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Brooklyn Simmons</div>
                    <div className="text-sm text-gray-600">Mr Beast Creative Director</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  +
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-semibold mb-2">Discover Tools!</h3>
              <div className="absolute top-4 right-4">
                <div className="bg-primary text-black text-sm px-3 py-1 rounded-full">Try now</div>
              </div>
              <p className="mt-6">Find the perfect digital tools for your business needs in seconds.</p>
            </div>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full inline-block mb-2">
                Try this now
              </div>
              <h3 className="font-semibold text-lg mb-2">Build Communitites</h3>
              <div className="text-sm text-gray-600">Trusted by 50,000+ users</div>
            </div>
            <div className="absolute -bottom-4 -right-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl"><Users /></span>
              </div>
            </div>
          </Card>
        </div>

        {/* New Platform Categories Section */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Platform Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover specialized tools and solutions designed for different aspects of your business
            </p>
            <div className="mt-6">
            <Suspense fallback={<div className="text-center py-10">Loading Tools....</div>}>
              <CategoryFilter />
            </Suspense>
            </div>
            <Suspense fallback={<div className="text-center py-10">Loading Tools....</div>}>
            <ProductGrid />
            </Suspense>
          </div>
          <Features />
        </section>
      </main>
    </div>
  )
}

// Platform Card Component
function PlatformCard({
  title,
  description,
  rating,
  reviews,
  badge,
  imageSrc,
}: {
  title: string
  description: string
  rating: number
  reviews: number
  badge?: string
  imageSrc: string
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={200}
          height={100}
          className="object-cover justify-center"
        />
        {badge && <Badge className="absolute top-4 right-4 bg-primary text-black hover:bg-[#daf149]">{badge}</Badge>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-600">({reviews.toLocaleString()} reviews)</span>
          </div>
          <Button variant="ghost" size="sm" className="hover:bg-[#e8fb5a] hover:text-black">
            Learn More
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
    
  )
}

