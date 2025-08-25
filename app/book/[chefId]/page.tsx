"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ChefHat, MapPin, ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { mockChefs } from "@/lib/mock-data"
import { BookingCalendar } from "@/components/booking/booking-calendar"
import { BookingSummary } from "@/components/booking/booking-summary"

interface BookingPageProps {
  params: {
    chefId: string
  }
}

type BookingStep = "service" | "datetime" | "details" | "payment" | "confirmation"

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

export default function BookingPage({ params }: BookingPageProps) {
  const chef = mockChefs.find((c) => c.id === params.chefId)
  const [currentStep, setCurrentStep] = useState<BookingStep>("service")
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "",
    date: null,
    time: "",
    duration: 3,
    guests: 2,
    location: "",
    specialRequests: "",
    dietaryRestrictions: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  })

  if (!chef) {
    notFound()
  }

  const steps = [
    { id: "service", title: "Service", description: "Choose your experience" },
    { id: "datetime", title: "Date & Time", description: "Select when" },
    { id: "details", title: "Details", description: "Event information" },
    { id: "payment", title: "Payment", description: "Secure checkout" },
    { id: "confirmation", title: "Confirmation", description: "Booking complete" },
  ]

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep)

  const canProceed = () => {
    switch (currentStep) {
      case "service":
        return bookingData.serviceType !== ""
      case "datetime":
        return bookingData.date && bookingData.time
      case "details":
        return bookingData.contactName && bookingData.contactEmail && bookingData.location
      case "payment":
        return true // In real app, would check payment validation
      default:
        return false
    }
  }

  const handleNext = () => {
    const nextStepIndex = currentStepIndex + 1
    if (nextStepIndex < steps.length) {
      setCurrentStep(steps[nextStepIndex].id as BookingStep)
    }
  }

  const handlePrevious = () => {
    const prevStepIndex = currentStepIndex - 1
    if (prevStepIndex >= 0) {
      setCurrentStep(steps[prevStepIndex].id as BookingStep)
    }
  }

  const calculateTotal = () => {
    return chef.hourlyRate * bookingData.duration
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
            <Link
              href={`/chef/${chef.id}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        index < currentStepIndex
                          ? "bg-primary border-primary text-primary-foreground"
                          : index === currentStepIndex
                            ? "border-primary text-primary"
                            : "border-muted-foreground text-muted-foreground"
                      }`}
                    >
                      {index < currentStepIndex ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        index < currentStepIndex ? "bg-primary" : "bg-muted-foreground/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={chef.image || "/placeholder.svg"}
                        alt={chef.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="font-serif">Book {chef.name}</CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span>{chef.specialty}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {chef.location}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Service Selection */}
                  {currentStep === "service" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-serif font-semibold mb-4">Choose Your Experience</h3>
                        <RadioGroup
                          value={bookingData.serviceType}
                          onValueChange={(value) => setBookingData({ ...bookingData, serviceType: value })}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                              <RadioGroupItem value="private-dining" id="private-dining" />
                              <div className="flex-1">
                                <Label htmlFor="private-dining" className="font-medium cursor-pointer">
                                  Private Dining Experience
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                  Intimate dining experience with custom menu preparation
                                </p>
                              </div>
                              <Badge variant="secondary">${chef.hourlyRate}/hr</Badge>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                              <RadioGroupItem value="cooking-class" id="cooking-class" />
                              <div className="flex-1">
                                <Label htmlFor="cooking-class" className="font-medium cursor-pointer">
                                  Cooking Class
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                  Learn to cook signature dishes with hands-on instruction
                                </p>
                              </div>
                              <Badge variant="secondary">${chef.hourlyRate + 10}/hr</Badge>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                              <RadioGroupItem value="event-catering" id="event-catering" />
                              <div className="flex-1">
                                <Label htmlFor="event-catering" className="font-medium cursor-pointer">
                                  Event Catering
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                  Full-service catering for special events and parties
                                </p>
                              </div>
                              <Badge variant="secondary">Custom Quote</Badge>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Date & Time Selection */}
                  {currentStep === "datetime" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-serif font-semibold mb-4">Select Date & Time</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-base font-medium mb-3 block">Choose Date</Label>
                            <BookingCalendar
                              selectedDate={bookingData.date}
                              onDateSelect={(date) => setBookingData({ ...bookingData, date })}
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <Label className="text-base font-medium">Time</Label>
                              <Select
                                value={bookingData.time}
                                onValueChange={(value) => setBookingData({ ...bookingData, time: value })}
                              >
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="10:00">10:00 AM</SelectItem>
                                  <SelectItem value="11:00">11:00 AM</SelectItem>
                                  <SelectItem value="12:00">12:00 PM</SelectItem>
                                  <SelectItem value="13:00">1:00 PM</SelectItem>
                                  <SelectItem value="14:00">2:00 PM</SelectItem>
                                  <SelectItem value="17:00">5:00 PM</SelectItem>
                                  <SelectItem value="18:00">6:00 PM</SelectItem>
                                  <SelectItem value="19:00">7:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-base font-medium">Duration</Label>
                              <Select
                                value={bookingData.duration.toString()}
                                onValueChange={(value) =>
                                  setBookingData({ ...bookingData, duration: Number.parseInt(value) })
                                }
                              >
                                <SelectTrigger className="mt-2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="2">2 hours</SelectItem>
                                  <SelectItem value="3">3 hours</SelectItem>
                                  <SelectItem value="4">4 hours</SelectItem>
                                  <SelectItem value="5">5 hours</SelectItem>
                                  <SelectItem value="6">6 hours</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Event Details */}
                  {currentStep === "details" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-serif font-semibold mb-4">Event Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="guests">Number of Guests</Label>
                            <Select
                              value={bookingData.guests.toString()}
                              onValueChange={(value) =>
                                setBookingData({ ...bookingData, guests: Number.parseInt(value) })
                              }
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? "guest" : "guests"}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="location">Event Location</Label>
                            <Input
                              id="location"
                              placeholder="Your address or venue"
                              value={bookingData.location}
                              onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                              className="mt-2"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-4">Contact Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="contactName">Full Name</Label>
                            <Input
                              id="contactName"
                              value={bookingData.contactName}
                              onChange={(e) => setBookingData({ ...bookingData, contactName: e.target.value })}
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="contactEmail">Email</Label>
                            <Input
                              id="contactEmail"
                              type="email"
                              value={bookingData.contactEmail}
                              onChange={(e) => setBookingData({ ...bookingData, contactEmail: e.target.value })}
                              className="mt-2"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="contactPhone">Phone Number</Label>
                            <Input
                              id="contactPhone"
                              type="tel"
                              value={bookingData.contactPhone}
                              onChange={(e) => setBookingData({ ...bookingData, contactPhone: e.target.value })}
                              className="mt-2"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="dietary">Dietary Restrictions</Label>
                        <Textarea
                          id="dietary"
                          placeholder="Please list any allergies or dietary requirements..."
                          value={bookingData.dietaryRestrictions}
                          onChange={(e) => setBookingData({ ...bookingData, dietaryRestrictions: e.target.value })}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="requests">Special Requests</Label>
                        <Textarea
                          id="requests"
                          placeholder="Any special requests or preferences for your experience..."
                          value={bookingData.specialRequests}
                          onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  )}

                  {/* Payment */}
                  {currentStep === "payment" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-serif font-semibold mb-4">Payment Information</h3>
                        <div className="bg-muted/30 p-4 rounded-lg mb-6">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> This is a demo booking system. No actual payment will be processed.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" className="mt-2" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="John Doe" className="mt-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Confirmation */}
                  {currentStep === "confirmation" && (
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-10 w-10 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-2">Booking Confirmed!</h3>
                        <p className="text-muted-foreground">
                          Your booking with {chef.name} has been confirmed. You'll receive a confirmation email shortly.
                        </p>
                      </div>
                      <div className="bg-muted/30 p-6 rounded-lg text-left">
                        <h4 className="font-semibold mb-3">Booking Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Chef:</span>
                            <span>{chef.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Service:</span>
                            <span className="capitalize">{bookingData.serviceType.replace("-", " ")}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Date:</span>
                            <span>{bookingData.date?.toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Time:</span>
                            <span>{bookingData.time}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>{bookingData.duration} hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Guests:</span>
                            <span>{bookingData.guests}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button asChild>
                          <Link href="/dashboard">View Dashboard</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/">Back to Home</Link>
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  {currentStep !== "confirmation" && (
                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStepIndex === 0}
                        className="bg-transparent"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={handleNext} disabled={!canProceed()}>
                        {currentStep === "payment" ? "Complete Booking" : "Next"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <BookingSummary chef={chef} bookingData={bookingData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
