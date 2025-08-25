import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Users, MessageCircle, Star, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { UserBooking } from "@/lib/mock-user-data"

interface BookingCardProps {
  booking: UserBooking
}

export function BookingCard({ booking }: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "completed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const canCancel = booking.status === "confirmed" || booking.status === "pending"
  const canReview = booking.status === "completed" && !booking.hasReviewed

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={booking.chef.image || "/placeholder.svg"} alt={booking.chef.name} />
              <AvatarFallback>
                {booking.chef.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="font-serif text-lg">{booking.chef.name}</CardTitle>
              <CardDescription>{booking.chef.specialty}</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Chef
                </DropdownMenuItem>
                {canCancel && <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>}
                {canReview && <DropdownMenuItem>Leave Review</DropdownMenuItem>}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                {booking.time} ({booking.duration}h)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{booking.guests} guests</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{booking.location}</span>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Service</p>
              <p className="font-medium capitalize">{booking.serviceType.replace("-", " ")}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="font-bold text-lg">${booking.totalAmount}</p>
            </div>
          </div>

          {booking.status === "completed" && !booking.hasReviewed && (
            <div className="pt-2">
              <Button size="sm" className="w-full">
                <Star className="h-4 w-4 mr-2" />
                Leave Review
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
