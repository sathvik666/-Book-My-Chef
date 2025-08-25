"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Save, Plus, X } from "lucide-react"
import type { Chef } from "@/lib/mock-data"

interface ChefProfileEditorProps {
  chef: Chef
}

export function ChefProfileEditor({ chef }: ChefProfileEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: chef.name,
    specialty: chef.specialty,
    location: chef.location,
    hourlyRate: chef.hourlyRate,
    bio: chef.bio,
    cuisines: [...chef.cuisines],
  })
  const [newCuisine, setNewCuisine] = useState("")

  const handleSave = () => {
    // In a real app, this would save to the backend
    setIsEditing(false)
    // Show success message
  }

  const addCuisine = () => {
    if (newCuisine.trim() && !formData.cuisines.includes(newCuisine.trim())) {
      setFormData({
        ...formData,
        cuisines: [...formData.cuisines, newCuisine.trim()],
      })
      setNewCuisine("")
    }
  }

  const removeCuisine = (cuisine: string) => {
    setFormData({
      ...formData,
      cuisines: formData.cuisines.filter((c) => c !== cuisine),
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Chef Profile</CardTitle>
          <CardDescription>Manage your public chef profile and information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={chef.image || "/placeholder.svg"} alt={chef.name} />
              <AvatarFallback className="text-xl">
                {chef.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
              <p className="text-sm text-muted-foreground mt-1">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>

          <Separator />

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Chef Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="specialty">Specialty</Label>
              <Input
                id="specialty"
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input
                id="hourlyRate"
                type="number"
                value={formData.hourlyRate}
                onChange={(e) => setFormData({ ...formData, hourlyRate: Number.parseInt(e.target.value) })}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <Label htmlFor="bio">Professional Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell customers about your culinary background, experience, and cooking philosophy..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              disabled={!isEditing}
              className="mt-2"
              rows={4}
            />
          </div>

          {/* Cuisines */}
          <div>
            <Label>Cuisines & Specialties</Label>
            <div className="mt-2 space-y-3">
              <div className="flex flex-wrap gap-2">
                {formData.cuisines.map((cuisine) => (
                  <Badge key={cuisine} variant="secondary" className="flex items-center gap-1">
                    {cuisine}
                    {isEditing && (
                      <button
                        onClick={() => removeCuisine(cuisine)}
                        className="ml-1 hover:text-destructive"
                        type="button"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    placeholder="Add cuisine type..."
                    value={newCuisine}
                    onChange={(e) => setNewCuisine(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addCuisine()}
                    className="max-w-xs"
                  />
                  <Button type="button" size="sm" onClick={addCuisine}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Management */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Portfolio Gallery</CardTitle>
          <CardDescription>Showcase your culinary creations to attract more customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {/* Mock portfolio images */}
            {[
              "/gourmet-pasta.png",
              "/elegant-plated-dessert.png",
              "/grilled-salmon-with-vegetables.png",
              "/artisanal-bread-pastries.png",
              "/colorful-salad-presentation.png",
              "/chef-preparing-food.png",
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg relative group">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" variant="destructive">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Photos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
