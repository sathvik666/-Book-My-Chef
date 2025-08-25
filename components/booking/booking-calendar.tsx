"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BookingCalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
}

export function BookingCalendar({ selectedDate, onDateSelect }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

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

  const isDateAvailable = (date: Date) => {
    // Mock availability - in real app, this would check chef's actual availability
    const dayOfWeek = date.getDay()
    return dayOfWeek !== 0 && dayOfWeek !== 1 // Not available on Sunday and Monday
  }

  const isDateSelected = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  const isPastDate = (date: Date) => {
    return date < today
  }

  return (
    <div className="bg-card border rounded-lg p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" onClick={previousMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="font-semibold">
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
          const isSelected = isDateSelected(date)
          const isPast = isPastDate(date)

          return (
            <Button
              key={index}
              variant={isSelected ? "default" : "ghost"}
              size="sm"
              className={`p-2 h-10 w-10 ${
                !isAvailable || isPast ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:bg-accent"
              } ${isSelected ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => {
                if (isAvailable && !isPast) {
                  onDateSelect(date)
                }
              }}
              disabled={!isAvailable || isPast}
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
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-muted-foreground/20 rounded-sm" />
            <span>Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  )
}
