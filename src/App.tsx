import { useState } from 'react'
import AccountPage from './components/account/AccountPage'
import './App.css'
import { mockUser, mockUserActivity } from './components/data/mockUser'
import { mockRestaurants } from './components/data/mockRestaurant'
import type { Restaurant } from './types/restaurant'
import DiscoveryPage from './components/Discover/DiscoveryPage'

function App() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set(mockUserActivity.favorites))
  const [wantToTry, setWantToTry] = useState<Set<string>>(new Set(mockUserActivity.wantToTry))
  const [onSelectRestaurant, setSelectedRestaurant] = useState<Restaurant|null>(null)

  const handleSelectRestaurant = (restaurant: Restaurant)=>{
    setSelectedRestaurant(restaurant)
  }

  return (
    <>
    <DiscoveryPage></DiscoveryPage>
          {/* <AccountPage
            user={mockUser}
            activity={{
              ...mockUserActivity,
              favorites: Array.from(favorites),
              wantToTry: Array.from(wantToTry),
            }}
            allRestaurants={mockRestaurants}
            onSelectRestaurant={handleSelectRestaurant}
            onRemoveFavorite={(id) => {
              setFavorites((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
              });
            }}
            onRemoveWantToTry={(id) => {
              setWantToTry((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
              });
            }}
          /> */}
       
    </>
  )
}

export default App
