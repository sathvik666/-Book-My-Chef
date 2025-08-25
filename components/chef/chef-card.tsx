import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"
import type { Chef } from "@/lib/mock-data"

interface ChefCardProps {
  chef: Chef
}

export function ChefCard({ chef }: ChefCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={chef.image || "/placeholder.svg?height=300&width=300"}
          alt={chef.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {chef.isAvailable && (
          <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
            <Clock className="h-3 w-3 mr-1" />
            Available
          </Badge>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="font-serif text-lg leading-tight">{chef.name}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              {chef.location}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-sm">{chef.rating}</span>
            </div>
            <p className="text-xs text-muted-foreground">({chef.reviewCount} reviews)</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-primary mb-2">{chef.specialty}</p>
            <div className="flex flex-wrap gap-1">
              {chef.cuisines.slice(0, 3).map((cuisine) => (
                <Badge key={cuisine} variant="secondary" className="text-xs">
                  {cuisine}
                </Badge>
              ))}
              {chef.cuisines.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{chef.cuisines.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{chef.experience}+ years</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-primary">${chef.hourlyRate}</span>
              <span className="text-muted-foreground">/hour</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button asChild className="flex-1" size="sm">
              <Link href={`/chef/${chef.id}`}>View Profile</Link>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
