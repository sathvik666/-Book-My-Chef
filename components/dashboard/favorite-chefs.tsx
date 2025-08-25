import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { mockChefs } from "@/lib/mock-data"

export function FavoriteChefs() {
  // Mock favorite chefs - in a real app, this would come from user's favorites
  const favoriteChefs = mockChefs.slice(0, 3)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-bold">Favorite Chefs</h2>
          <p className="text-muted-foreground">Your saved chefs for easy booking</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/browse">Discover More</Link>
        </Button>
      </div>

      {favoriteChefs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteChefs.map((chef) => (
            <Card key={chef.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={chef.image || "/placeholder.svg"} alt={chef.name} />
                    <AvatarFallback>
                      {chef.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-lg">{chef.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {chef.location}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                    <Heart className="h-4 w-4 fill-current" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-primary">{chef.specialty}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{chef.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({chef.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {chef.cuisines.slice(0, 2).map((cuisine) => (
                      <Badge key={cuisine} variant="secondary" className="text-xs">
                        {cuisine}
                      </Badge>
                    ))}
                    {chef.cuisines.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{chef.cuisines.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-primary">${chef.hourlyRate}/hour</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/book/${chef.id}`}>Book</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No favorite chefs yet</h3>
            <p className="text-muted-foreground mb-4">Browse chefs and save your favorites for easy booking later.</p>
            <Button asChild>
              <Link href="/browse">Browse Chefs</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
