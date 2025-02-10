"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="trending" className="w-full">
      <TabsList>
        <TabsTrigger value="trending">Trending</TabsTrigger>
        <TabsTrigger value="suggested">Suggested for You</TabsTrigger>
        <TabsTrigger value="adblocks">Ad Blocks</TabsTrigger>
      </TabsList>
      <TabsContent value="trending">
        <Card>
          <CardHeader>
            <CardTitle>Trending Content</CardTitle>
            <CardDescription>What's popular right now</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here you can display trending content, popular posts, or current hot topics.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="suggested">
        <Card>
          <CardHeader>
            <CardTitle>Suggested for You</CardTitle>
            <CardDescription>Content tailored to your interests</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This section can show personalized content recommendations based on user preferences or behavior.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="adblocks">
        <Card>
          <CardHeader>
            <CardTitle>Ad Blocks</CardTitle>
            <CardDescription>Sponsored content and advertisements</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here you can display various ad blocks, sponsored content, or promotional materials.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

