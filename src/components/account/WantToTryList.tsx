import type { Restaurant } from "@/types/restaurant";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {Bookmark, Trash2} from 'lucide-react'

interface WantToTryListProps{
    restaurants: Restaurant[];
    onRemove?:(id:string)=>void;
    onSelect?:(restaurant:Restaurant)=>void
}

const WantToTryList = ({
    restaurants,
    onRemove,
    onSelect,
}:WantToTryListProps)=>{
    if(restaurants.length===0){
        return(
            <Card className="p-8 text-center">
                <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50"></Bookmark>
                <p className="text-muted-foreground">No bookmarks yet</p>
                <p className="text-muted-foreground mt-1">Save restaurants you want to try</p>
            </Card>
        )
    }
    return (
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
                        className="w-20 h-20 rounded-lg object-cover">
                        </img>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate">{restaurant.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">
                                {restaurant.cuisine.join(" • ")}
                            </p>
                            <p className="">
                        {restaurant.neighborhood} • {"$".repeat(restaurant.priceRange)}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-sm font-medium">
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

export default WantToTryList