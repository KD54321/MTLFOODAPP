export type Restaurant = {
  id: string;
  name: string;
  cuisine: string[];
  neighborhood: string;
  priceRange: 1 | 2 | 3 | 4;
  rating: number;
  reviewCount: number;
  address: string;
  imageUrl: string;
  description: string;
  features: {
    byob: boolean;
    terrasse: boolean;
    lateNight: boolean;
    metroProximity: string | null;
    reservations: boolean;
  };
  dietary: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    halal: boolean;
    kosher: boolean;
  };
  ambiance: string[];
  hours: {
    [key: string]: string;
  };
  phone: string;
  website?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export type Neighborhood =
  | "Plateau"
  | "Mile End"
  | "Old Montreal"
  | "Downtown"
  | "Little Italy"
  | "Chinatown"
  | "Griffintown"
  | "Verdun"
  | "NDG"
  | "Hochelaga";

export type Cuisine =
  | "French"
  | "Quebecois"
  | "Italian"
  | "Japanese"
  | "Middle Eastern"
  | "Vietnamese"
  | "Mexican"
  | "Indian"
  | "Chinese"
  | "Korean"
  | "Thai"
  | "American"
  | "Brunch"
  | "Cafe"
  | "Bakery";

export type Ambiance =
  | "Casual"
  | "Romantic"
  | "Family-Friendly"
  | "Trendy"
  | "Cozy"
  | "Upscale";

export interface FilterState {
  search: string;
  neighborhoods: string[];
  cuisines: string[];
  priceRange: number[];
  dietary: string[];
  ambiance: string[];
  features: string[];
}
