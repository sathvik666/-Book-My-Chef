export interface User {
  id: string
  name: string
  email: string
  phone: string
  location: string
  avatar: string
  bio?: string
  joinedDate: string
}

export interface UserBooking {
  id: string
  chef: {
    id: string
    name: string
    specialty: string
    image: string
  }
  serviceType: string
  date: string
  time: string
  duration: number
  guests: number
  location: string
  totalAmount: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  hasReviewed?: boolean
  specialRequests?: string
  dietaryRestrictions?: string
}

export const mockUser: User = {
  id: "user-1",
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "/woman-profile.png",
  bio: "Food enthusiast who loves exploring new cuisines and hosting dinner parties. Always looking for unique culinary experiences to share with friends and family.",
  joinedDate: "2023-06-15",
}

export const mockUserBookings: UserBooking[] = [
  {
    id: "booking-1",
    chef: {
      id: "1",
      name: "Chef Maria Rodriguez",
      specialty: "Modern Italian",
      image: "/professional-female-chef-cooking-italian-food.png",
    },
    serviceType: "private-dining",
    date: "December 15, 2024",
    time: "7:00 PM",
    duration: 4,
    guests: 6,
    location: "123 Main St, San Francisco, CA",
    totalAmount: 380,
    status: "confirmed",
    specialRequests: "Anniversary dinner, please include wine pairing suggestions",
    dietaryRestrictions: "One guest is vegetarian",
  },
  {
    id: "booking-2",
    chef: {
      id: "2",
      name: "Chef David Kim",
      specialty: "Korean Fusion",
      image: "/professional-male-chef-preparing-korean-fusion-dis.png",
    },
    serviceType: "cooking-class",
    date: "December 8, 2024",
    time: "2:00 PM",
    duration: 3,
    guests: 4,
    location: "456 Oak Ave, San Francisco, CA",
    totalAmount: 255,
    status: "pending",
    specialRequests: "Focus on beginner-friendly Korean dishes",
  },
  {
    id: "booking-3",
    chef: {
      id: "3",
      name: "Chef Sarah Johnson",
      specialty: "Farm-to-Table",
      image: "/professional-female-chef-with-fresh-vegetables-far.png",
    },
    serviceType: "private-dining",
    date: "November 20, 2024",
    time: "6:30 PM",
    duration: 3,
    guests: 8,
    location: "789 Pine St, San Francisco, CA",
    totalAmount: 285,
    status: "completed",
    hasReviewed: false,
    specialRequests: "Thanksgiving-themed menu with seasonal ingredients",
    dietaryRestrictions: "Two guests are gluten-free",
  },
  {
    id: "booking-4",
    chef: {
      id: "4",
      name: "Chef Antoine Dubois",
      specialty: "Classic French",
      image: "/french-chef-with-mustache.png",
    },
    serviceType: "private-dining",
    date: "October 15, 2024",
    time: "7:30 PM",
    duration: 4,
    guests: 4,
    location: "321 Elm St, San Francisco, CA",
    totalAmount: 440,
    status: "completed",
    hasReviewed: true,
    specialRequests: "Classic French menu for date night",
  },
]
