import { Ghost, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Restaurant } from "@/types/restaurant";

interface FavoriteListProps{
    restaurants: Restaurant[];
    onRemove?:(id:string)=>void;
    onSelect?:(restaurant:Restaurant)=>void;
}

const FavoritesList =({
    restaurants,
    onRemove,
    onSelect,
}:FavoriteListProps)=>{
    if(restaurants.length===0){
        return (
            <Card className="p-8 text-center">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50"></Heart>
                <p className="text-muted-foreground">No favorites yet</p>
                <p className="text-sm text-muted-foreground mt-1">Start adding restaurants to your favorites</p>
            </Card>
        )
    }
    return(
        <div className="space-y-3">
            {restaurants.map((restaurant)=>(
                <Card key={restaurant.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={()=>onSelect?.(restaurant)}
                >
                    <div className="flex items-start gap-4">
                        <img 
                        src={restaurant.imageUrl} 
                        alt={restaurant.name}
                        className="w-20 h-20 rounded-lg object-cover"
                        ></img>
    
                    <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{restaurant.name}</h3>
                    <p >{restaurant.cuisine.join(" • ")}</p>
                    <p className="text-sm text-muted-foreground">
                        {restaurant.neighborhood} • {"$".repeat(restaurant.priceRange)}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-sm font font-medium">
                            ⭐ {restaurant.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            ({restaurant.reviewCount})
                        </span>
                    </div>
                    </div>
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e)=>{
                        e.stopPropagation();
                        onRemove?.(restaurant.id)
                    }}
                    className="shrink-0"
                    >
                        <Trash2 className="h-4 w-4 text-destructive"></Trash2>
                    </Button>
                       </div>
                </Card>
            ))}
            
        </div>
    )
}

export default FavoritesList;