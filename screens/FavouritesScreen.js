import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FavouritesContext } from '../store/context/favourites-context'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'

import { useSelector } from 'react-redux'

const FavouritesScreen = () => {
  // const favouriteMealsCtx = useContext(FavouritesContext)
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids)

  // const favouriteMeals = MEALS.filter((meal) => favouriteMealsCtx.ids.includes(meal.id))
  const favouriteMeals = MEALS.filter((meal) => favouriteMealsIds.includes(meal.id))

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no fav meals</Text>
      </View>
    )
  }

  return <MealsList items={favouriteMeals} />
}

export default FavouritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
})