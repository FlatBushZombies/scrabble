"use client"

import { Bell, Home, LineChart, FileText, Users, PenToolIcon as Tool, Settings, HelpCircle, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart as Chart } from "@/components/line-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-violet-600 p-4">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow-lg">
        <div className="grid grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="text-black">Scrabble</span>
              <span className="text-violet-600"></span>
            </div>

            <nav className="space-y-1">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2 bg-violet-100 font-medium text-violet-600"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LineChart className="h-4 w-4" />
                Statistics
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Reports
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Referral
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Tool className="h-4 w-4" />
                Tools
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <HelpCircle className="h-4 w-4" />
                Support
              </Button>
            </nav>

            <div className="rounded-lg bg-violet-50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-violet-100 p-2">
                  <img
                    alt="Starter level icon"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739300164230.jpg-apYX6wn6ZRZdA4soIbTqzhn3XWnViA.jpeg"
                    className="h-8 w-8"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Starter Level</div>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-6">
            {/* Header */}
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="rounded-full border pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739300164230.jpg-apYX6wn6ZRZdA4soIbTqzhn3XWnViA.jpeg" />
                    <AvatarFallback>RD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Ruh Design</div>
                    <div className="text-sm text-gray-500">UI Designer</div>
                  </div>
                </div>
              </div>
            </header>

            {/* Time Period Tabs */}
            <Tabs defaultValue="today">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="week">This week</TabsTrigger>
                <TabsTrigger value="month">This month</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Metric Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-violet-400 to-violet-600">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-white">Upvotes </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1540</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-400 to-emerald-600">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-white">Trending Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$2.46</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-400 to-orange-600">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-white">Discovery Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$2.03</div>
                </CardContent>
              </Card>
            </div>

            {/* Chart */}
            <Card>
              <CardContent className="pt-6">
                <Chart />
              </CardContent>
            </Card>

            {/* Table */}
            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Earnings</TableHead>
                      <TableHead>CPM</TableHead>
                      <TableHead>Referral Earnings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2025-02-01</TableCell>
                      <TableCell>45</TableCell>
                      <TableCell>$0.3</TableCell>
                      <TableCell>$8.34</TableCell>
                      <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-02-02</TableCell>
                      <TableCell>32</TableCell>
                      <TableCell>$0.1</TableCell>
                      <TableCell>$7.56</TableCell>
                      <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-02-03</TableCell>
                      <TableCell>29</TableCell>
                      <TableCell>$0.15</TableCell>
                      <TableCell>$7.89</TableCell>
                      <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-02-04</TableCell>
                      <TableCell>40</TableCell>
                      <TableCell>$0.14</TableCell>
                      <TableCell>$8.15</TableCell>
                      <TableCell>0</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}

