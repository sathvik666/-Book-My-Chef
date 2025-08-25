"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, ChefHat } from "lucide-react"
import Link from "next/link"
import { ChefCard } from "@/components/chef/chef-card"
import { mockChefs } from "@/lib/mock-data"

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [priceRange, setPriceRange] = useState([50, 150])
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const cuisines = ["Italian", "French", "Asian Fusion", "Mexican", "Indian", "Mediterranean", "American", "Japanese"]
  const locations = ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Austin", "Seattle", "Boston"]

  const filteredChefs = mockChefs.filter((chef) => {
    const matchesSearch =
      chef.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chef.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCuisine = selectedCuisine === "all" || chef.specialty.includes(selectedCuisine)
    const matchesLocation = selectedLocation === "all" || chef.location === selectedLocation
    const matchesPrice = chef.hourlyRate >= priceRange[0] && chef.hourlyRate <= priceRange[1]

    return matchesSearch && matchesCuisine && matchesLocation && matchesPrice
  })

  const sortedChefs = [...filteredChefs].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.hourlyRate - b.hourlyRate
      case "price-high":
        return b.hourlyRate - a.hourlyRate
      case "reviews":
        return b.reviewCount - a.reviewCount
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-serif font-black text-primary">Book My Chef</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/login" className="text-foreground hover:text-primary transition-colors">
                Sign In
              </Link>
              <Button asChild size="sm">
                <Link href="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold">Filters</h2>
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide" : "Show"}
                </Button>
              </div>

              <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                {/* Search */}
                <div className="space-y-2">
                  <Label>Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Chef name or cuisine..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Cuisine */}
                <div className="space-y-2">
                  <Label>Cuisine Type</Label>
                  <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cuisines</SelectItem>
                      {cuisines.map((cuisine) => (
                        <SelectItem key={cuisine} value={cuisine}>
                          {cuisine}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <Label>Price Range (per hour)</Label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={200}
                      min={25}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCuisine("all")
                    setSelectedLocation("all")
                    setPriceRange([50, 150])
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-serif font-bold mb-2">Find Your Perfect Chef</h1>
                <p className="text-muted-foreground">
                  {sortedChefs.length} chef{sortedChefs.length !== 1 ? "s" : ""} available
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm">
                  Sort by:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Chef Grid */}
            {sortedChefs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedChefs.map((chef) => (
                  <ChefCard key={chef.id} chef={chef} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">No chefs found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms to find more chefs.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCuisine("all")
                    setSelectedLocation("all")
                    setPriceRange([50, 150])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
