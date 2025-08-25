import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, MapPin, Clock, Users, ChefHat, Calendar, MessageCircle, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import { mockChefs } from "@/lib/mock-data"
import { ChefGallery } from "@/components/chef/chef-gallery"
import { ReviewsList } from "@/components/chef/reviews-list"

interface ChefProfilePageProps {
  params: {
    id: string
  }
}

export default function ChefProfilePage({ params }: ChefProfilePageProps) {
  const chef = mockChefs.find((c) => c.id === params.id)

  if (!chef) {
    notFound()
  }

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
                Browse Chefs
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chef Header */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={chef.image || "/placeholder.svg?height=160&width=160"}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-serif font-bold mb-2">{chef.name}</h1>
                    <p className="text-xl text-primary font-medium mb-2">{chef.specialty}</p>
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{chef.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{chef.experience}+ years experience</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{chef.rating}</span>
                        <span className="text-muted-foreground">({chef.reviewCount} reviews)</span>
                      </div>
                      {chef.isAvailable && (
                        <Badge className="bg-green-500 hover:bg-green-600">
                          <Clock className="h-3 w-3 mr-1" />
                          Available Now
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">About {chef.name.split(" ")[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{chef.bio}</p>
              </CardContent>
            </Card>

            {/* Specialties & Cuisines */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Specialties & Cuisines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chef.cuisines.map((cuisine) => (
                    <Badge key={cuisine} variant="secondary">
                      {cuisine}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Portfolio</CardTitle>
                <CardDescription>Some of {chef.name.split(" ")[0]}'s culinary creations</CardDescription>
              </CardHeader>
              <CardContent>
                <ChefGallery chefId={chef.id} />
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Reviews ({chef.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <ReviewsList chefId={chef.id} />
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Book {chef.name.split(" ")[0]}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-primary">${chef.hourlyRate}</span>
                    <span className="text-muted-foreground">/hour</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button asChild className="w-full">
                      <Link href={`/book/${chef.id}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Now
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response time:</span>
                      <span>Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum booking:</span>
                      <span>3 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cancellation:</span>
                      <span>24h notice</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium">Services Offered:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Private dining experiences</li>
                      <li>• Cooking classes</li>
                      <li>• Event catering</li>
                      <li>• Menu planning</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
