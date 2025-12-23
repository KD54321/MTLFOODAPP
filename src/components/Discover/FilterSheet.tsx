import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FilterState } from "../../types/restaurant";
import {
  neighborhoods,
  cuisines,
  ambianceOptions,
  dietaryOptions,
  featureOptions,
} from "../data/mockRestaurant";

interface FilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

export function FilterSheet({
  open,
  onOpenChange,
  filters,
  onFiltersChange,
  onReset,
}: FilterSheetProps) {
  const toggleArrayFilter = (
    key: keyof FilterState,
    value: string
  ) => {
    const current = filters[key] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFiltersChange({ ...filters, [key]: updated });
  };

  const togglePriceRange = (price: number) => {
    const current = filters.priceRange;
    const updated = current.includes(price)
      ? current.filter((p) => p !== price)
      : [...current, price];
    onFiltersChange({ ...filters, priceRange: updated });
  };

  const activeFilterCount =
    filters.neighborhoods.length +
    filters.cuisines.length +
    filters.priceRange.length +
    filters.dietary.length +
    filters.ambiance.length +
    filters.features.length;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
        <SheetHeader className="flex flex-row items-center justify-between pb-4">
          <SheetTitle className="text-xl">Filters</SheetTitle>
          <div className="flex items-center gap-2">
            {activeFilterCount > 0 && (
              <Button variant="ghost" size="sm" onClick={onReset}>
                Clear all
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="overflow-y-auto h-[calc(100%-120px)] space-y-6 pb-4">
          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((price) => (
                <button
                  key={price}
                  onClick={() => togglePriceRange(price)}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-medium transition-colors",
                    filters.priceRange.includes(price)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {"$".repeat(price)}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Neighborhoods */}
          <div>
            <h3 className="font-semibold mb-3">Neighborhoods</h3>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map((neighborhood) => (
                <Badge
                  key={neighborhood}
                  variant={
                    filters.neighborhoods.includes(neighborhood)
                      ? "default"
                      : "secondary"
                  }
                  className="cursor-pointer px-3 py-1.5"
                  onClick={() => toggleArrayFilter("neighborhoods", neighborhood)}
                >
                  {neighborhood}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Cuisines */}
          <div>
            <h3 className="font-semibold mb-3">Cuisines</h3>
            <div className="flex flex-wrap gap-2">
              {cuisines.map((cuisine) => (
                <Badge
                  key={cuisine}
                  variant={
                    filters.cuisines.includes(cuisine) ? "default" : "secondary"
                  }
                  className="cursor-pointer px-3 py-1.5"
                  onClick={() => toggleArrayFilter("cuisines", cuisine)}
                >
                  {cuisine}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Dietary Restrictions */}
          <div>
            <h3 className="font-semibold mb-3">Dietary</h3>
            <div className="space-y-3">
              {dietaryOptions.map((option) => (
                <div key={option.key} className="flex items-center space-x-3">
                  <Checkbox
                    id={option.key}
                    checked={filters.dietary.includes(option.key)}
                    onCheckedChange={() =>
                      toggleArrayFilter("dietary", option.key)
                    }
                  />
                  <Label htmlFor={option.key} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Ambiance */}
          <div>
            <h3 className="font-semibold mb-3">Ambiance</h3>
            <div className="flex flex-wrap gap-2">
              {ambianceOptions.map((ambiance) => (
                <Badge
                  key={ambiance}
                  variant={
                    filters.ambiance.includes(ambiance) ? "default" : "secondary"
                  }
                  className="cursor-pointer px-3 py-1.5"
                  onClick={() => toggleArrayFilter("ambiance", ambiance)}
                >
                  {ambiance}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Montreal-Specific Features */}
          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <div className="space-y-3">
              {featureOptions.map((option) => (
                <div key={option.key} className="flex items-center space-x-3">
                  <Checkbox
                    id={option.key}
                    checked={filters.features.includes(option.key)}
                    onCheckedChange={() =>
                      toggleArrayFilter("features", option.key)
                    }
                  />
                  <Label htmlFor={option.key} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
          <Button className="w-full h-12" onClick={() => onOpenChange(false)}>
            Show Results
            {activeFilterCount > 0 && ` (${activeFilterCount} filters)`}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
