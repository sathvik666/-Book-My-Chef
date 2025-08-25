"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ChefHat,
  Calendar,
  DollarSign,
  Star,
  MessageCircle,
  Settings,
  TrendingUp,
  Clock,
  Eye,
  Edit,
} from "lucide-react"
import Link from "next/link"
import { mockChefData, mockChefBookings } from "@/lib/mock-chef-data"
import { ChefBookingCard } from "@/components/chef-dashboard/chef-booking-card"
import { ChefProfileEditor } from "@/components/chef-dashboard/chef-profile-editor"
import { AvailabilityCalendar } from "@/components/chef-dashboard/availability-calendar"
import { EarningsOverview } from "@/components/chef-dashboard/earnings-overview"

export default function ChefDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const pendingBookings = mockChefBookings.filter((booking) => booking.status === "pending")
  const confirmedBookings = mockChefBookings.filter((booking) => booking.status === "confirmed")
  const completedBookings = mockChefBookings.filter((booking) => booking.status === "completed")

  const thisMonthEarnings = completedBookings.reduce((sum, booking) => sum + booking.totalAmount, 0)
  const averageRating = 4.8 // Mock average rating

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-serif font-black text-primary">Book My Chef</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/browse" className="text-foreground hover:text-primary transition-colors">
                Browse Platform
              </Link>
              <Link href="/chef-dashboard" className="text-primary font-medium">
                Chef Dashboard
              </Link>
              <Button variant="outline" size="sm">
                <Avatar className="w-6 h-6 mr-2">
                  <AvatarImage src={mockChefData.image || "/placeholder.svg"} alt={mockChefData.name} />
                  <AvatarFallback className="text-xs">
                    {mockChefData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {mockChefData.name}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={mockChefData.image || "/placeholder.svg"} alt={mockChefData.name} />
                <AvatarFallback className="text-xl">
                  {mockChefData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-serif font-bold">Welcome back, {mockChefData.name.split(" ")[0]}!</h1>
                <p className="text-muted-foreground">
                  {mockChefData.specialty} • {mockChefData.location}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{averageRating}</span>
                    <span className="text-muted-foreground">({mockChefData.reviewCount} reviews)</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    {mockChefData.isAvailable ? "Available" : "Unavailable"}
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/chef/${mockChefData.id}`}>
                    <Eye className="h-4 w-4 mr-2" />
                    View Public Profile
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">${thisMonthEarnings}</p>
                      <p className="text-sm text-muted-foreground">This Month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{confirmedBookings.length}</p>
                      <p className="text-sm text-muted-foreground">Upcoming</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{pendingBookings.length}</p>
                      <p className="text-sm text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{averageRating}</p>
                      <p className="text-sm text-muted-foreground">Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Bookings
              </TabsTrigger>
              <TabsTrigger value="availability" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Availability
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Messages
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <EarningsOverview />
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Recent Activity</CardTitle>
                    <CardDescription>Your latest bookings and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockChefBookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={booking.customer.avatar || "/placeholder.svg"}
                              alt={booking.customer.name}
                            />
                            <AvatarFallback className="text-sm">
                              {booking.customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">{booking.customer.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.serviceType.replace("-", " ")} • {booking.date}
                            </p>
                          </div>
                          <Badge
                            className={
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold">Manage Bookings</h2>
                  <div className="flex gap-2">
                    <Button variant="outline">Export</Button>
                    <Button>View Calendar</Button>
                  </div>
                </div>

                {/* Pending Requests */}
                {pendingBookings.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      Pending Requests ({pendingBookings.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pendingBookings.map((booking) => (
                        <ChefBookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Confirmed Bookings */}
                {confirmedBookings.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      Confirmed Bookings ({confirmedBookings.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {confirmedBookings.map((booking) => (
                        <ChefBookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Completed Bookings */}
                {completedBookings.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-blue-600" />
                      Recent Completed ({completedBookings.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {completedBookings.slice(0, 4).map((booking) => (
                        <ChefBookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Availability Tab */}
            <TabsContent value="availability">
              <AvailabilityCalendar />
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <ChefProfileEditor chef={mockChefData} />
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Messages</CardTitle>
                  <CardDescription>Communicate with your customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
                    <p className="text-muted-foreground">Customer messages and booking inquiries will appear here.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Business Settings</CardTitle>
                    <CardDescription>Manage your chef business preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Instant Booking</p>
                        <p className="text-sm text-muted-foreground">Allow customers to book without approval</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Pricing & Services</p>
                        <p className="text-sm text-muted-foreground">Update your rates and service offerings</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notification Preferences</p>
                        <p className="text-sm text-muted-foreground">Control how you receive booking notifications</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Payment Settings</p>
                        <p className="text-sm text-muted-foreground">Manage payout methods and tax information</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
