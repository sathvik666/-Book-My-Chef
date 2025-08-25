import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Calendar, Star } from "lucide-react"

export function EarningsOverview() {
  // Mock earnings data - in a real app, this would come from analytics API
  const earningsData = {
    thisMonth: 2840,
    lastMonth: 2150,
    thisYear: 28400,
    averageBooking: 285,
    totalBookings: 47,
    repeatCustomers: 12,
  }

  const monthlyGrowth = ((earningsData.thisMonth - earningsData.lastMonth) / earningsData.lastMonth) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Earnings Overview</CardTitle>
        <CardDescription>Your financial performance this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Main Earnings */}
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">${earningsData.thisMonth}</div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-green-600">+{monthlyGrowth.toFixed(1)}% from last month</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Avg. Booking</span>
              </div>
              <div className="text-xl font-semibold">${earningsData.averageBooking}</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Total Bookings</span>
              </div>
              <div className="text-xl font-semibold">{earningsData.totalBookings}</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Repeat Customers</span>
              </div>
              <div className="text-xl font-semibold">{earningsData.repeatCustomers}</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Year Total</span>
              </div>
              <div className="text-xl font-semibold">${earningsData.thisYear.toLocaleString()}</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Next payout: December 15th</p>
              <p>• Pending earnings: $380</p>
              <p>• Tax documents available in January</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
