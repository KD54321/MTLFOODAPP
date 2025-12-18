import {useState} from 'react'
import type{ UserProfile as UserProfileType, UserActivity} from '@/types/user'
import type {Restaurant} from '@/types/restaurant'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfile } from './UserProfile';

interface AccountPageProps{
    user: UserProfileType;
    activity: UserActivity;
    allRestaurants: Restaurant[];
    onEdit?:()=>void;
    onLogout?:()=>void;
    onSelectRestaurant?: (restaurant: Restaurant) =>void;
    onRemoveFavorite?: (id:string)=>void;
    onRemoveWantToTry?: (id:string)=>void;
    
}

const AccountPage = ({
    user,
    activity,
    allRestaurants,
    onEdit,
    onLogout,
    onSelectRestaurant,
    onRemoveFavorite,
    onRemoveWantToTry,
}: AccountPageProps) => {
    const restaurantMap = new Map(allRestaurants.map((r)=>[r.id, r]));

    const favoriteRestaurants = activity.favorites.map(id=>restaurantMap.get(id)).filter((r): r is Restaurant =>r!==undefined)

    const wantToTry = activity.wantToTry.map(id=>restaurantMap.get(id)).filter((r): r is Restaurant =>r!==undefined)

    return (
        <div className='min-h-screen bg'>
            <div className='sticky top-0 z-10 bg-background border-b p-4'>
                <h1 className='text-2xl font-bold'>My Account</h1>
            </div>
        <div className='p-4'>
            <Tabs defaultValue='profile' className='w-full'>
                <TabsList className='grid w-full grid-cols-4 mb-6'>
                   <TabsTrigger value='profile'>Profile</TabsTrigger>
                   <TabsTrigger value='favorites'>Favorites
                     {favoriteRestaurants.length>0&&(
                    <span className='ml-1 text-xs bg-primary text-primary-foreground rounded-full px-2'>{favoriteRestaurants.length}</span>
                   )}
                   </TabsTrigger>
                   <TabsTrigger value='wantToTry'>
                    Want to try
                    {wantToTry.length>0&&(
                        <span className='ml-1 text-xs bg-primary text-primary-foreground rounded-full px-2'>
                            {wantToTry.length}
                        </span>
                    )}
                   </TabsTrigger>
                   <TabsTrigger value='history'>
                    History
                    {activity.visitHistory.length>0&&(
                        <span className='ml-1 text-xs bg-primary text-primary-foreground rounded-full px-2'>
                            {activity.visitHistory.length}
                        </span>
                    )}
                   </TabsTrigger>
                </TabsList>

                   <TabsContent value='profile' className='space-y-4'>
                    <UserProfile 
                    user={user}
                    onEdit={onEdit}
                    onLogout={onLogout}
                    ></UserProfile>
                   </TabsContent>

                    <TabsContent value='favorites' className='space-y-4'>
                        
                    </TabsContent>
               
                    <TabsContent value='wantToTry' className='space-y-4'>

                    </TabsContent>

                    <TabsContent value='history' className='space-y-4'>

                    </TabsContent>
          </Tabs>
        </div>
        </div>
    )
}
export default AccountPage

