import { useState, useMemo } from "react";
import { MapPin } from "lucide-react";
// import { SearchBar } from "./SearchBar";
// import { NeighborhoodChips } from "./NeighborhoodChips";
import  CuisineGrid  from "./CuisineGrid";
// import { RestaurantCard } from "./RestaurantCard";
import { FilterSheet } from "./FilterSheet";
// import { RestaurantDetail } from "./RestaurantDetail";
import type { Restaurant, FilterState } from "@/types/restaurant";
import {
  mockRestaurants,
  neighborhoods,
  cuisines,
} from "../data/mockRestaurant";
import RestaurantCard from "./RestaurantCard";


const initialFilters: FilterState = {
    search: "",
    neighborhoods: [],
    cuisines:[],
    priceRange:[],
    dietary:[],
    ambiance:[],
    features:[],
}

const DiscoveryPage = ()=>{
    const [filters, setFilters] = useState<FilterState>(initialFilters);
    const [filterSheetOpen, setFilterSheetOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());
    const [wantToTry, setWantToTry] = useState<Set<string>>(new Set());

    const toggleNeighborhood = (neighborhood:string)=>{
        setFilters((prev)=>({
            ...prev,
            neighborhoods:prev.neighborhoods.includes(neighborhood)?prev.neighborhoods.filter((n)=>n!==neighborhood):[...prev.neighborhoods, neighborhood]
        }))
    }
const toggleCuisine = (cuisine: string) => {
    setFilters((prev) => ({
      ...prev,
      cuisines: prev.cuisines.includes(cuisine)
        ? prev.cuisines.filter((c) => c !== cuisine)
        : [...prev.cuisines, cuisine],
    }));
  };
  const toggleFavorite = (id:string)=>{
    setFavorites((prev)=>{
        const next= new Set(prev);
        if(next.has(id)){
            next.delete(id);
        }else{
            next.add(id)
        }
        return next
    })
  }
  const filteredRestaurant = useMemo(()=>{
    return mockRestaurants.filter((restaurant)=>{
      //search filter
        if(filters.search){
            const search = filters.search.toLowerCase();
            const matchesSearch = restaurant.name.toLowerCase().includes(search)||restaurant.cuisine.some((c)=>c.toLowerCase().includes(search))||
            restaurant.neighborhood.toLowerCase().includes(search)||
            restaurant.description.toLowerCase().includes(search);
            if(!matchesSearch){
              return false;
            }
        }
        //neighborhood filter
        if(filters.neighborhoods.length>0&&!filters.neighborhoods.includes(restaurant.neighborhood)){
          return false;
        }
        //cuisine filter
        if(filters.cuisines.length>0&&!restaurant.cuisine.some((c)=>filters.cuisines.includes(c))){
          return false;
        }
        //Price range filter
        if(filters.priceRange.length>0&&!filters.priceRange.includes(restaurant.priceRange)){
          return false;
        }
        //dietary filter
        if(filters.dietary.length>0){
          const hasDiatary = filters.dietary.every((d)=>restaurant.dietary[d as keyof typeof restaurant.dietary])
          if(!hasDiatary){
            return false;
          }
        }
        // Ambiance filter
        if(filters.ambiance.length>0&&!restaurant.ambiance.some((a)=>filters.ambiance.includes(a))){
          return false;
        }
        //feature filter
        if(filters.features.length>0){
          const hasFeatures = filters.features.every((f)=>{
            if(f==="metroProximity"){
              return restaurant.features.metroProximity !==null;
            }
            return restaurant.features[f as keyof typeof restaurant.features]
          })
          if(!hasFeatures){
            return false;
          }
        }
    })
  },[filters])

  return (
    <div className="min-h-screen bg-background">
        {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b">
        <div className="p-4 space-y-4">

          {/* Location & Title */}
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary"></MapPin>
          <span className="font-semibold">Montreal</span>
        </div>
         {/* Search Bar */}

         {/* Neighborhood Chips */}
      </div>
      </div>
    
      {/* Main Content */}
      <div>
          {/* Cuisine Grid */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Browse by Cuisine</h2>
          <CuisineGrid
            cuisines={cuisines}
            selected={filters.cuisines}
            onSelect={toggleCuisine}
          />
        </div>
         {/* Restaurant List */}
         <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg">
              {filters.search||
              filters.neighborhoods.length>0||
              filters.cuisines.length>0||
              filters.priceRange.length>0||
              filters.dietary.length>0||
              filters.ambiance.length>0||
              filters.features.length>0
              ?`${filteredRestaurant.length} Results`: "Recommended for You"} 
            </h2>
          </div>
          {filteredRestaurant.length===0?(
            <div className="text-center py-12">
              <p className="text-muted-foreground">No restaurants match your filters.</p>
              <button onClick={()=>setFilters(initialFilters)}
                className="text-primary mt-2 hover:underline">
                Clear all filters
              </button>
            </div>
          ):(
            <div className="grid gap-4">
              {filteredRestaurant.map((restaurant)=>(
                <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onFavorite={toggleFavorite}
                isFavorite={favorites.has(restaurant.id)}
                onClick={()=>setSelectedRestaurant(restaurant)}
                />
              ))}
            </div>
          )}
         </div>
      </div>
      {/* Filter Sheet */}
      <FilterSheet
        open={filterSheetOpen}
        onOpenChange={setFilterSheetOpen}
        filters={filters}
        onFiltersChange={setFilters}
        onReset={() => setFilters(initialFilters)}
      />

    </div>
    
  )

}


export default DiscoveryPage;