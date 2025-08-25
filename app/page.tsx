import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, Search, ChefHat, Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-serif font-black text-primary">Book My Chef</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/browse" className="text-foreground hover:text-primary transition-colors">
                Browse Chefs
              </Link>
              <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/login" className="text-foreground hover:text-primary transition-colors">
                Sign In
              </Link>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-serif font-black text-foreground mb-6">
            Connect with Professional Chefs for
            <span className="text-accent"> Exceptional</span> Culinary Experiences
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover talented chefs in your area, browse their specialties, and book personalized dining experiences for
            any occasion. From intimate dinners to cooking classes, find the perfect culinary professional.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Search by cuisine, location, or chef name..." className="pl-10 h-12 text-base" />
            </div>
            <Button size="lg" className="h-12 px-8">
              Find Chefs
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            <Badge variant="secondary">Italian</Badge>
            <Badge variant="secondary">French</Badge>
            <Badge variant="secondary">Asian Fusion</Badge>
            <Badge variant="secondary">BBQ</Badge>
            <Badge variant="secondary">Vegan</Badge>
          </div>
        </div>
      </section>

      {/* Featured Chefs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Featured Chefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Maria Rodriguez",
                specialty: "Modern Italian",
                rating: 4.9,
                reviews: 127,
                image: "/professional-female-chef-cooking-italian-food.png",
                price: "$85/hour",
              },
              {
                name: "Chef David Kim",
                specialty: "Korean Fusion",
                rating: 4.8,
                reviews: 89,
                image: "/professional-male-chef-preparing-korean-fusion-dis.png",
                price: "$75/hour",
              },
              {
                name: "Chef Sarah Johnson",
                specialty: "Farm-to-Table",
                rating: 5.0,
                reviews: 156,
                image: "/professional-female-chef-with-fresh-vegetables-far.png",
                price: "$95/hour",
              },
            ].map((chef, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={chef.image || "/placeholder.svg"} alt={chef.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-serif">{chef.name}</CardTitle>
                      <CardDescription>{chef.specialty}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{chef.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">({chef.reviews} reviews)</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{chef.price}</span>
                    <Button size="sm">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Browse & Search",
                description:
                  "Explore our curated selection of professional chefs. Filter by cuisine, location, price, and availability.",
              },
              {
                icon: Calendar,
                title: "Book Your Experience",
                description:
                  "Select your preferred chef and book your culinary experience. Choose from private dining, cooking classes, or events.",
              },
              {
                icon: MessageCircle,
                title: "Connect & Enjoy",
                description:
                  "Communicate directly with your chef to customize your experience. Sit back and enjoy exceptional culinary artistry.",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-serif">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Ready to Book Your Chef?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have discovered exceptional culinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse Chefs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Become a Chef
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
                <span className="text-lg font-serif font-bold">Book My Chef</span>
              </div>
              <p className="text-muted-foreground">
                Connecting food lovers with professional chefs for unforgettable culinary experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/browse" className="hover:text-foreground transition-colors">
                    Browse Chefs
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Chefs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/chef-signup" className="hover:text-foreground transition-colors">
                    Become a Chef
                  </Link>
                </li>
                <li>
                  <Link href="/chef-resources" className="hover:text-foreground transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/chef-support" className="hover:text-foreground transition-colors">
                    Chef Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Book My Chef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
