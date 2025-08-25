import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface ReviewsListProps {
  chefId: string
}

export function ReviewsList({ chefId }: ReviewsListProps) {
  // Mock reviews - in a real app, this would come from an API
  const reviews = [
    {
      id: "1",
      userName: "Sarah Johnson",
      userAvatar: "/woman-profile.png",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely incredible experience! Chef Maria created the most amazing Italian feast for our anniversary. Every dish was perfectly executed and the presentation was restaurant-quality. Highly recommend!",
    },
    {
      id: "2",
      userName: "Michael Chen",
      userAvatar: "/man-profile.png",
      rating: 5,
      date: "1 month ago",
      comment:
        "Outstanding cooking class! Learned so much about authentic Italian techniques. Chef Maria was patient, knowledgeable, and made the whole experience fun and educational.",
    },
    {
      id: "3",
      userName: "Emily Rodriguez",
      userAvatar: "/woman-profile.png",
      rating: 4,
      date: "2 months ago",
      comment:
        "Great experience overall. The food was delicious and Chef Maria was very professional. Would definitely book again for our next dinner party.",
    },
  ]

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="space-y-3">
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={review.userAvatar || "/placeholder.svg"} alt={review.userName} />
              <AvatarFallback>
                {review.userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium">{review.userName}</h4>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
