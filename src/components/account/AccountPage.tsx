import {useState} from 'react'
import type{ UserProfile as UserProfileType, UserActivity} from '@/types/user'
import type {Restaurant} from '@/types/restaurant'

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
    return (
        <div>
            aag
        </div>
    )
}
export default AccountPage

