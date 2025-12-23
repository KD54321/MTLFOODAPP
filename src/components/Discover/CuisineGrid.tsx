import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  UtensilsCrossed,
  Coffee,
  Croissant,
  Soup,
  Pizza,
  Fish,
  Beef,
  Salad,
  Sandwich,
} from "lucide-react";

const cuisineIcons: Record<string, React.ReactNode> = {
  French: <UtensilsCrossed className="h-5 w-5" />,
  Quebecois: <Beef className="h-5 w-5" />,
  Italian: <Pizza className="h-5 w-5" />,
  Japanese: <Fish className="h-5 w-5" />,
  "Middle Eastern": <Salad className="h-5 w-5" />,
  Vietnamese: <Soup className="h-5 w-5" />,
  Mexican: <Sandwich className="h-5 w-5" />,
  Indian: <Soup className="h-5 w-5" />,
  Chinese: <Soup className="h-5 w-5" />,
  Korean: <Soup className="h-5 w-5" />,
  Thai: <Soup className="h-5 w-5" />,
  American: <Sandwich className="h-5 w-5" />,
  Brunch: <Coffee className="h-5 w-5" />,
  Cafe: <Coffee className="h-5 w-5" />,
  Bakery: <Croissant className="h-5 w-5" />,
};

interface CuisineGridProps{
    cuisines: string[];
    selected: string[];
    onSelect:(cuisine:string)=>void
}

const CuisineGrid = ({
    cuisines,
    selected,
    onSelect
}:CuisineGridProps)=>{
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-3 pb-2">
        {cuisines.map((cuisine) => {
          const isSelected = selected.includes(cuisine);
          return (
            <button
              key={cuisine}
              onClick={() => onSelect(cuisine)}
              className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-xl min-w-[80px] transition-colors",
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {cuisineIcons[cuisine] || <UtensilsCrossed className="h-5 w-5" />}
              <span className="text-xs font-medium whitespace-nowrap">
                {cuisine}
              </span>
            </button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}

export default CuisineGrid