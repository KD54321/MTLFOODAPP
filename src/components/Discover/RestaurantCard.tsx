import { Heart, MapPin, Star, Wine, Sun, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Restaurant } from "@/types/restaurant";
import { cn } from "@/lib/utils";

interface RestaurantCardProps{
    restaurant: Restaurant;
    onFavorite:(id:string)=>void;
    isFavorite?:boolean;
    onClick?:()=>void;
}

const RestaurantCard = ({
 restaurant,
  onFavorite,
  isFavorite = false,
  onClick,
}: RestaurantCardProps)=>{
    return(
     <Card 
     className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
     onClick={onClick}
     >
        <div className="relative">

        </div>

     </Card>
    )
}

export default RestaurantCard