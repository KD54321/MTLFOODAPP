export type UserProfile= {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  joinedDate: Date;
  preferences: {
    favoriteNeighborhoods: string[];
    favoriteCuisines: string[];
    dietaryRestrictions: string[];
    preferredAmbiance: string[];
  };
}

export type UserActivity = {
    favorites: string[],
    wantToTry: string[],
    visitHistory: VisitRecord[];
    reviews: Review[];
};

export type VisitRecord = {
    restaurantId: string;
    visitDate: Date;
    rating?: number;
    notes?:string
}

export type Review = {
    id:string;
    restaurantId: string;
    rating: number;
    title:string;
    content: string;
    createdAt: Date;
    helpful: number;
}