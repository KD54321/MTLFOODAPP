import type { UserProfile, UserActivity, VisitRecord } from "@/types/user";

export const mockUser: UserProfile = {
  id: "user-1",
  name: "Sarah Chen",
  email: "sarah.chen@example.com",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  bio: "Food enthusiast exploring Montreal's culinary scene 🍽️",
  joinedDate: new Date("2023-06-15"),
  preferences: {
    favoriteNeighborhoods: ["Plateau", "Mile End", "Old Montreal"],
    favoriteCuisines: ["French", "Italian", "Vietnamese"],
    dietaryRestrictions: ["vegetarian"],
    preferredAmbiance: ["Cozy", "Trendy"],
  },
};

export const mockUserActivity: UserActivity = {
  favorites: ["1", "4", "8"],
  wantToTry: ["2", "5", "12"],
  visitHistory: [
    {
      restaurantId: "1",
      visitDate: new Date("2024-01-15"),
      rating: 5,
      notes: "Amazing coq au vin, will definitely come back!",
    },
    {
      restaurantId: "4",
      visitDate: new Date("2024-01-10"),
      rating: 4,
      notes: "Great brunch spot, always busy but worth the wait",
    },
    {
      restaurantId: "7",
      visitDate: new Date("2024-01-05"),
      rating: 4,
      notes: "Classic poutine experience, late night snack",
    },
    {
      restaurantId: "10",
      visitDate: new Date("2023-12-28"),
      rating: 5,
      notes: "Legendary smoked meat, iconic Montreal experience",
    },
    {
      restaurantId: "3",
      visitDate: new Date("2023-12-20"),
      rating: 4,
      notes: "Authentic pho, perfect for a quick lunch",
    },
  ],
  reviews: [],
};
