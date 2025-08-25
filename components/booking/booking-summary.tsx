import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin } from "lucide-react"
import type { Chef } from "@/lib/mock-data"

interface BookingData {
  serviceType: string
  date: Date | null
  time: string
  duration: number
  guests: number
  location: string
  specialRequests: string
  dietaryRestrictions: string
  contactName: string
  contactEmail: string
  contactPhone: string
}

interface BookingSummaryProps {
  chef: Chef
  bookingData: BookingData
}

export function BookingSummary({ chef, bookingData }: BookingSummaryProps) {
  const calculateSubtotal = () => {
    let rate = chef.hourlyRate
    if (bookingData.serviceType === "cooking-class") {
      rate += 10
    }
    return rate * bookingData.duration
  }

  const calculateServiceFee = () => {
    return Math.round(calculateSubtotal() * 0.1) // 10% service fee
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateServiceFee()
  }

  const getServiceTypeLabel = (type: string) => {
    switch (type) {
      case "private-dining":
        return "Private Dining Experience"
      case "cooking-class":
        return "Cooking Class"
      case "event-catering":
        return "Event Catering"
      default:
        return "Service"
    }
  }

  return (
    <div className="sticky top-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Booking Summary</CardTitle>
          <CardDescription>Review your booking details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chef Info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={chef.image || "/placeholder.svg"} alt={chef.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">{chef.name}</p>
              <p className="text-sm text-muted-foreground">{chef.specialty}</p>
            </div>
          </div>

          <Separator />

          {/* Service Details */}
          <div className="space-y-3">
            {bookingData.serviceType && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{getServiceTypeLabel(bookingData.serviceType)}</Badge>
              </div>
            )}

            {bookingData.date && bookingData.time && (
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>
                  {bookingData.date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}

            {bookingData.time && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>
                  {bookingData.time} ({bookingData.duration} hours)
                </span>
              </div>
            )}

            {bookingData.guests > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>
                  {bookingData.guests} {bookingData.guests === 1 ? "guest" : "guests"}
                </span>
              </div>
            )}

            {bookingData.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="truncate">{bookingData.location}</span>
              </div>
            )}
          </div>

          {/* Pricing */}
          {bookingData.serviceType && bookingData.duration > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    ${bookingData.serviceType === "cooking-class" ? chef.hourlyRate + 10 : chef.hourlyRate}/hour ×{" "}
                    {bookingData.duration} hours
                  </span>
                  <span>${calculateSubtotal()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Service fee</span>
                  <span>${calculateServiceFee()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
            </>
          )}

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Free cancellation up to 24 hours before</p>
            <p>• Chef will contact you to confirm details</p>
            <p>• Payment processed securely</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
