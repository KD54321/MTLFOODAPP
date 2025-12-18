import type{ Restaurant } from "@/types/restaurant";
import type{ VisitRecord } from "@/types/user";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {Calendar, MapPin} from "lucide-react"

interface VisitHistoryProps{
    visits: VisitRecord[];
    restaurants: Map<string, Restaurant>;
    onSelectRestaurant?: (restaurant:Restaurant)=>void
}

const VisitHistory = ({
        visits,
    restaurants,
    onSelectRestaurant,
}:VisitHistoryProps)=>{
    if(visits.length===0){
        return (
            <Card className="p-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50">
                    <p className="text-muted-foreground">No visit history yet</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Your restaurant visits will appear here
                    </p>
                </Calendar>
            </Card>
        )
    }

    //sort by most recent visit 
    const sortedVisits = [...visits].sort(
        (a,b) => new Date(b.visitDate).getTime() - new Date(a.visitDate).getTime()
    );

    return(
        <div className="space-y-3">
            {sortedVisits.map((visit)=>{
                const restaurant = restaurants.get(visit.restaurantId)
                if(!restaurant){
                    return null;
                }
                const visitDate = new Date(visit.visitDate);
                const formattedDate = visitDate.toLocaleDateString("en-US",{
                    month:"short",
                    day: "numeric",
                    year: "numeric",
                });
                return(
                    <Card key={`${visit.restaurantId}-${visit.visitDate}`}
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={()=>onSelectRestaurant?.(restaurant)}
                    >
                       <div className="flex items-start gap-4">
                        <img src={restaurant.imageUrl}
                        alt={restaurant.name}
                        className="w-20 h-20 rounded-lg object-cover">
                        </img>
                        <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{restaurant.name}</h3>
                        <p>
                            {restaurant.cuisine.join(" • ")}
                        </p>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">
                                <Calendar className="h-3 w-3 mr-1"></Calendar>
                                {formattedDate}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                                <MapPin className="h-3 w-3 mr-1"></MapPin>
                                {restaurant.neighborhood}
                            </Badge>
                            {visit.rating&&(
                                <Badge variant="secondary" className="text-xs">
                                    ⭐ {visit.rating}
                                </Badge>
                            )}
                        </div>
                        {visit.notes&&(
                            <p className="text-xs text-muted-foreground mt-2 italic">
                                "{visit.notes}"
                            </p>
                        )}
                        </div>
                       </div>
                    </Card>
                )
            })}

        </div>
    )
}

export default VisitHistory