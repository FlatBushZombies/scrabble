"use client"

import { useState } from "react"
import { Compass, Heart, Home, Layers, MessageSquare, Search, Settings, Star, User, Users, Zap } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import FeaturedTools from "@/components/featured-tools"
import TrendingUsers from "@/components/trending-users"
import RecommendedTools from "@/components/recommended-tools"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar  className="border-r">
          <SidebarHeader className="flex flex-col gap-4 px-4 py-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Scrabble</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Featured</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Home">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Feature Overview">
                      <Compass className="h-4 w-4" />
                      <span>Feature Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="For You">
                      <User className="h-4 w-4" />
                      <span>For You</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Discover</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Community">
                      <Users className="h-4 w-4" />
                      <span>Community</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Recommended">
                      <Star className="h-4 w-4" />
                      <span>Recommended</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Favorites">
                      <Heart className="h-4 w-4" />
                      <span>Favorites</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Your Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="My Workflows">
                      <Layers className="h-4 w-4" />
                      <span>My Workflows</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Messages">
                      <MessageSquare className="h-4 w-4" />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tools and workflows..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              Create Workflow
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </header>
          <main className="flex flex-1">
            <div className="flex-1 p-6">
              <div className="mx-auto max-w-5xl">
                <Card className="mb-8 overflow-hidden bg-gradient-to-r from-purple-900 to-violet-700 text-white">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Discover, Create, and Share Workflows</h2>
                      <p className="text-purple-100">Find the best tools and workflows for your projects</p>
                      <Button className="mt-2 bg-white text-purple-900 hover:bg-purple-100">Explore Tools</Button>
                    </div>
                    <div className="hidden flex-1 justify-end sm:flex">
                      <div className="h-32 w-32 rounded-full bg-purple-800/50"></div>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="all" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="feature-overview">Feature Overview</TabsTrigger>
                    <TabsTrigger value="for-you">For You</TabsTrigger>
                    <TabsTrigger value="community">Community</TabsTrigger>
                    <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <h3 className="mb-4 text-xl font-bold">Featured Tools</h3>
                    <FeaturedTools />

                    <h3 className="mb-4 mt-8 text-xl font-bold">Workflow Feed</h3>
                    <ScrollArea className="h-[calc(100vh-26rem)] pr-4">
                      <div className="space-y-4">
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="feature-overview" className="mt-4">
                    <h3 className="mb-4 text-xl font-bold">Feature Overview</h3>
                    <p className="text-muted-foreground">
                      Explore the latest features and tools available on the platform.
                    </p>
                  </TabsContent>
                  <TabsContent value="for-you" className="mt-4">
                    <h3 className="mb-4 text-xl font-bold">For You</h3>
                    <p className="text-muted-foreground">
                      Personalized recommendations based on your interests and activity.
                    </p>
                  </TabsContent>
                  <TabsContent value="community" className="mt-4">
                    <h3 className="mb-4 text-xl font-bold">Community</h3>
                    <p className="text-muted-foreground">See what the community is building and sharing.</p>
                  </TabsContent>
                  <TabsContent value="recommended" className="mt-4">
                    <h3 className="mb-4 text-xl font-bold">Recommended Tools</h3>
                    <p className="mb-6 text-muted-foreground">
                      Top recommended tools and workflows curated for you based on your interests and usage patterns.
                    </p>
                    <RecommendedTools />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="hidden w-80 border-l p-6 lg:block">
              <h3 className="mb-4 text-lg font-semibold">Trending Users</h3>
              <TrendingUsers />

              <h3 className="mb-4 mt-8 text-lg font-semibold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  #Automation
                </Button>
                <Button variant="outline" size="sm">
                  #AI
                </Button>
                <Button variant="outline" size="sm">
                  #DataScience
                </Button>
                <Button variant="outline" size="sm">
                  #DevOps
                </Button>
                <Button variant="outline" size="sm">
                  #Productivity
                </Button>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
