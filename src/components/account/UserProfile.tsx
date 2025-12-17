import { Edit2, LogOut, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { UserProfile as UserProfileType } from "@/types/user";

interface UserProfileProps {
  user: UserProfileType;
  onEdit?: () => void;
  onLogout?: () => void;
}

export function UserProfile({
  user,
  onEdit,
  onLogout,
}: UserProfileProps) {
  const joinedYear = new Date(user.joinedDate).getFullYear();

  return (
    <div className="space-y-4">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-lg">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground text-sm">{user.email}</p>
              {user.bio && (
                <p className="text-sm mt-2">{user.bio}</p>
              )}
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                <Calendar className="h-3 w-3" />
                <span>Joined {joinedYear}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={onEdit}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="p-4">
        <h2 className="font-semibold mb-3">Preferences</h2>
        <div className="space-y-3">
          {user.preferences.favoriteNeighborhoods.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Favorite Neighborhoods
              </p>
              <div className="flex flex-wrap gap-2">
                {user.preferences.favoriteNeighborhoods.map((neighborhood) => (
                  <Badge key={neighborhood} variant="secondary">
                    <MapPin className="h-3 w-3 mr-1" />
                    {neighborhood}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {user.preferences.favoriteCuisines.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Favorite Cuisines
              </p>
              <div className="flex flex-wrap gap-2">
                {user.preferences.favoriteCuisines.map((cuisine) => (
                  <Badge key={cuisine} variant="secondary">
                    {cuisine}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {user.preferences.dietaryRestrictions.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Dietary Restrictions
              </p>
              <div className="flex flex-wrap gap-2">
                {user.preferences.dietaryRestrictions.map((restriction) => (
                  <Badge key={restriction} variant="outline">
                    {restriction}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {user.preferences.preferredAmbiance.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Preferred Ambiance
              </p>
              <div className="flex flex-wrap gap-2">
                {user.preferences.preferredAmbiance.map((ambiance) => (
                  <Badge key={ambiance} variant="secondary">
                    {ambiance}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
