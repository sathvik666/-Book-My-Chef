interface ChefGalleryProps {
  chefId: string
}

export function ChefGallery({ chefId }: ChefGalleryProps) {
  // Mock gallery images - in a real app, this would come from an API
  const galleryImages = [
    "/gourmet-pasta.png",
    "/elegant-plated-dessert.png",
    "/grilled-salmon-with-vegetables.png",
    "/artisanal-bread-pastries.png",
    "/colorful-salad-presentation.png",
    "/chef-preparing-food.png",
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      ))}
    </div>
  )
}
