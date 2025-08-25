export interface Chef {
  id: string
  name: string
  specialty: string
  location: string
  rating: number
  reviewCount: number
  hourlyRate: number
  experience: number
  image: string
  isAvailable: boolean
  cuisines: string[]
  bio: string
}

export const mockChefs: Chef[] = [
  {
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
  },
  {
    id: "2",
    name: "Chef David Kim",
    specialty: "Korean Fusion",
    location: "Los Angeles",
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 75,
    experience: 8,
    image: "/professional-male-chef-preparing-korean-fusion-dis.png",
    isAvailable: true,
    cuisines: ["Korean", "Asian Fusion", "BBQ", "Vegetarian"],
    bio: "Chef David brings the vibrant flavors of Korea to modern American cuisine. Born in Seoul and raised in Los Angeles, he combines traditional Korean techniques with California's fresh ingredients. David's innovative approach to Korean fusion has earned him recognition in food magazines and a loyal following of clients who appreciate his creative take on comfort food.",
  },
  {
    id: "3",
    name: "Chef Sarah Johnson",
    specialty: "Farm-to-Table",
    location: "San Francisco",
    rating: 5.0,
    reviewCount: 156,
    hourlyRate: 95,
    experience: 15,
    image: "/professional-female-chef-with-fresh-vegetables-far.png",
    isAvailable: false,
    cuisines: ["American", "Organic", "Vegetarian", "Vegan"],
    bio: "Chef Sarah is a pioneer in the farm-to-table movement, working exclusively with local organic farms to create seasonal menus that showcase the best of California's produce. With 15 years of experience, she has cooked for celebrities, tech executives, and food enthusiasts who value sustainable, healthy cuisine without compromising on flavor.",
  },
  {
    id: "4",
    name: "Chef Antoine Dubois",
    specialty: "Classic French",
    location: "Chicago",
    rating: 4.7,
    reviewCount: 203,
    hourlyRate: 110,
    experience: 20,
    image: "/french-chef-with-mustache.png",
    isAvailable: true,
    cuisines: ["French", "European", "Fine Dining", "Pastry"],
    bio: "Trained in Lyon, France, Chef Antoine brings authentic French culinary traditions to Chicago. With 20 years of experience in Michelin-starred establishments, he specializes in classic French techniques and seasonal cuisine. Antoine is known for his meticulous attention to detail and ability to create restaurant-quality experiences in intimate home settings.",
  },
  {
    id: "5",
    name: "Chef Priya Patel",
    specialty: "Modern Indian",
    location: "Austin",
    rating: 4.9,
    reviewCount: 94,
    hourlyRate: 70,
    experience: 10,
    image: "/indian-female-chef-with-spices.png",
    isAvailable: true,
    cuisines: ["Indian", "Vegetarian", "Vegan", "Spices"],
    bio: "Chef Priya reimagines traditional Indian cuisine with modern presentation and health-conscious approaches. Born in Mumbai and trained in both India and the US, she creates flavorful dishes that honor her heritage while appealing to contemporary palates. Priya specializes in accommodating dietary restrictions without sacrificing the complex flavors that make Indian cuisine so beloved.",
  },
  {
    id: "6",
    name: "Chef Carlos Mendoza",
    specialty: "Mexican Cuisine",
    location: "Miami",
    rating: 4.6,
    reviewCount: 78,
    hourlyRate: 65,
    experience: 9,
    image: "/mexican-chef-with-traditional-hat.png",
    isAvailable: true,
    cuisines: ["Mexican", "Latin American", "Seafood", "Grilled"],
    bio: "Chef Carlos brings the authentic flavors of Mexico to Miami's vibrant food scene. Specializing in regional Mexican cuisine, he sources traditional ingredients and uses time-honored techniques passed down through generations. Carlos is particularly known for his fresh seafood preparations and his ability to create both casual and upscale Mexican dining experiences.",
  },
]
