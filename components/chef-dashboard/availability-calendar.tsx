"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

export function AvailabilityCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [availableDays, setAvailableDays] = useState<Set<string>>(new Set())

  const today = new Date()
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const toggleAvailability = (date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    const newAvailableDays = new Set(availableDays)
    if (newAvailableDays.has(dateString)) {
      newAvailableDays.delete(dateString)
    } else {
      newAvailableDays.add(dateString)
    }
    setAvailableDays(newAvailableDays)
  }

  const isDateAvailable = (date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    return availableDays.has(dateString)
  }

  const isPastDate = (date: Date) => {
    return date < today
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Availability Calendar</CardTitle>
          <CardDescription>Set your available dates and times for bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar */}
            <div>
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="sm" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="font-semibold text-lg">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <Button variant="ghost" size="sm" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before the first day of the month */}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={index} className="p-2" />
                ))}

                {/* Days of the month */}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index + 1)
                  const isAvailable = isDateAvailable(date)
                  const isPast = isPastDate(date)

                  return (
                    <Button
                      key={index}
                      variant={isAvailable ? "default" : "ghost"}
                      size="sm"
                      className={`p-2 h-10 w-10 ${
                        isPast ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:bg-accent"
                      } ${isAvailable ? "bg-primary text-primary-foreground" : ""}`}
                      onClick={() => {
                        if (!isPast) {
                          toggleAvailability(date)
                        }
                      }}
                      disabled={isPast}
                    >
                      {index + 1}
                    </Button>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-primary rounded-sm" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-muted-foreground/20 rounded-sm" />
                    <span>Unavailable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Default Availability</h4>
                <div className="space-y-3">
                  {dayNames.slice(1, 6).map((day) => (
                    <div key={day} className="flex items-center justify-between">
                      <Label htmlFor={day}>{day}</Label>
                      <Switch id={day} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Working Hours</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">9:00 AM - 10:00 PM</span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Booking Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Advance Notice</Label>
                      <p className="text-sm text-muted-foreground">Minimum 24 hours</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Maximum Advance</Label>
                      <p className="text-sm text-muted-foreground">Up to 3 months</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </div>

              <Button className="w-full">Save Availability</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
