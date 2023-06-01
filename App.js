import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MeadDetailsScreen from './screens/MealDetailsScreen'
import FavouritesScreen from './screens/FavouritesScreen'
import FavouritesContextProvider from './store/context/favourites-context'
import { Provider } from 'react-redux'
import { store } from './store/redux/store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#ccc' },
        drawerContentStyle: { backgroaundColor: '#ccc' },
        drawerInactiveTintColor: 'grey',
        drawerActiveTintColor: 'black',
      }}    
    >
      <Drawer.Screen name='Categories' component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
        }} />
      <Drawer.Screen name='Favorites' component={FavouritesScreen} 
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
        }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: 'black' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#ccc' }
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                title:'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId
              //   return {
              //     title: catId,
              //   }
              // }}
            />
            <Stack.Screen
              name='MeadDetails'
              component={MeadDetailsScreen}
              options={{
                title:'Meal Details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
