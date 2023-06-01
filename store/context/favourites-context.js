import { createContext, useState } from 'react'

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
})

const FavouritesContextProvider = ({ children }) => {
  const [favouritesMealsIds, setFavouritesMealsIds] = useState([])

  const addFavourite = (id) => {
    setFavouritesMealsIds((currentFavIds) => [...currentFavIds, id])
  }
  
  const removeFavourite = (id) => {
    setFavouritesMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
  }

  const value = {
    ids: favouritesMealsIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  }

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider