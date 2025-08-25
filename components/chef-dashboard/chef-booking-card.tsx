import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Users, MessageCircle, Check, X, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { ChefBooking } from "@/lib/mock-chef-data"

interface ChefBookingCardProps {
  booking: ChefBooking
}

export function ChefBookingCard({ booking }: ChefBookingCardProps) {
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

  const isPending = booking.status === "pending"
  const isConfirmed = booking.status === "confirmed"

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={booking.customer.avatar || "/placeholder.svg"} alt={booking.customer.name} />
              <AvatarFallback>
                {booking.customer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="font-serif text-lg">{booking.customer.name}</CardTitle>
              <CardDescription>{booking.customer.email}</CardDescription>
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
                  Message Customer
                </DropdownMenuItem>
                {isConfirmed && <DropdownMenuItem>Mark as Completed</DropdownMenuItem>}
                {(isPending || isConfirmed) && (
                  <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
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

          <div>
            <p className="text-sm font-medium mb-1">Service: {booking.serviceType.replace("-", " ")}</p>
            {booking.specialRequests && (
              <p className="text-sm text-muted-foreground">Special requests: {booking.specialRequests}</p>
            )}
            {booking.dietaryRestrictions && (
              <p className="text-sm text-muted-foreground">Dietary restrictions: {booking.dietaryRestrictions}</p>
            )}
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <p className="font-bold text-lg">${booking.totalAmount}</p>
            </div>
            {isPending && (
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-transparent">
                  <X className="h-4 w-4 mr-1" />
                  Decline
                </Button>
                <Button size="sm">
                  <Check className="h-4 w-4 mr-1" />
                  Accept
                </Button>
              </div>
            )}
            {isConfirmed && (
              <Button size="sm" variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
