import type { Chef } from "./mock-data"

export interface ChefBooking {
  id: string
  customer: {
    name: string
    email: string
    avatar: string
  }
  serviceType: string
  date: string
  time: string
  duration: number
  guests: number
  location: string
  totalAmount: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  specialRequests?: string
  dietaryRestrictions?: string
}

export const mockChefData: Chef = {
  id: "1",
  name: "Chef Maria Rodriguez",
  specialty: "Modern Italian",
  location: "New York",
  rating: 4.9,
  reviewCount: 127,
  hourlyRate: 85,
  experience: 12,
  image: "/professional-female-chef-cooking-italian-food.png",
  isAvailable: true,
  cuisines: ["Italian", "Mediterranean", "Pasta", "Seafood"],
  bio: "With over 12 years of experience in fine dining, Chef Maria specializes in modern Italian cuisine with a focus on fresh, seasonal ingredients. She trained at the Culinary Institute of America and worked in Michelin-starred restaurants in Italy before bringing her expertise to New York. Maria is passionate about creating memorable dining experiences that celebrate the rich traditions of Italian cooking while incorporating contemporary techniques.",
}

export const mockChefBookings: ChefBooking[] = [
  {
    id: "chef-booking-1",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/woman-profile.png",
    },
    serviceType: "private-dining",
    date: "December 15, 2024",
    time: "7:00 PM",
    duration: 4,
    guests: 6,
    location: "123 Main St, New York, NY",
    totalAmount: 380,
    status: "confirmed",
    specialRequests: "Anniversary dinner, please include wine pairing suggestions",
    dietaryRestrictions: "One guest is vegetarian",
  },
  {
    id: "chef-booking-2",
    customer: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/man-profile.png",
    },
    serviceType: "cooking-class",
    date: "December 12, 2024",
    time: "2:00 PM",
    duration: 3,
    guests: 4,
    location: "456 Oak Ave, New York, NY",
    totalAmount: 285,
    status: "pending",
    specialRequests: "Focus on pasta making techniques",
  },
  {
    id: "chef-booking-3",
    customer: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/woman-profile.png",
    },
    serviceType: "private-dining",
    date: "November 28, 2024",
    time: "6:30 PM",
    duration: 3,
    guests: 8,
    location: "789 Pine St, New York, NY",
    totalAmount: 255,
    status: "completed",
    specialRequests: "Thanksgiving-themed Italian menu",
    dietaryRestrictions: "Two guests are gluten-free",
  },
  {
    id: "chef-booking-4",
    customer: {
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/man-profile.png",
    },
    serviceType: "event-catering",
    date: "December 20, 2024",
    time: "5:00 PM",
    duration: 5,
    guests: 20,
    location: "321 Elm St, New York, NY",
    totalAmount: 850,
    status: "pending",
    specialRequests: "Corporate holiday party, need appetizers and main courses",
    dietaryRestrictions: "Mix of dietary preferences, please provide options",
  },
  {
    id: "chef-booking-5",
    customer: {
      name: "Lisa Thompson",
      email: "lisa.thompson@example.com",
      avatar: "/woman-profile.png",
    },
    serviceType: "private-dining",
    date: "November 15, 2024",
    time: "7:30 PM",
    duration: 4,
    guests: 4,
    location: "654 Maple Ave, New York, NY",
    totalAmount: 340,
    status: "completed",
    specialRequests: "Romantic dinner for two couples",
  },
]
