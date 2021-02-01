import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { createAppContainer } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import Tabs from './tabs'
import {
  HomeScreen,
  CategoriesScreen,
  RecipeScreen,
  RecipesListScreen,
  IngredientScreen,
  SearchScreen,
  IngredientsDetailsScreen,
  FavoritesScreen
} from '../screens'

const AppNavigator = () => {

  const headers = ["HomeScreen", "CategoriesScreen", "RecipeScreen", "RecipesListScreen", "IngredientScreen", "SearchScreen", "IngredientsDetailsScreen", "FavoritesScreen"]
  const componentKeys = [
    {
      Home: HomeScreen,
      Categories: CategoriesScreen,
      Recipe: RecipeScreen,
      RecipesList: RecipesListScreen,
      Ingredient: IngredientScreen,
      Search: SearchScreen,
      IngredientsDetails: IngredientsDetailsScreen,
      Favorites: FavoritesScreen
    }
  ];

  const Stack = createStackNavigator();
  /* alternative for Stack option:   
  const Stack = createStackNavigator(
      {
          Home: HomeScreen,
          Categories: CategoriesScreen,
          Recipe: RecipeScreen,
          RecipesList: RecipesListScreen,
          Ingredient: IngredientScreen,
          Search: SearchScreen,
          IngredientsDetails: IngredientsDetailsScreen,
          Favorites: FavoritesScreen
      },
      {
          initialRouteName: 'Home',
          // headerMode: 'float',
          defaulfNavigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
            }
          })
        }
  );
   */

  useEffect(() => {

    setTimeout(() => {
      Orientation.lockToPortrait();
    });
    return onOpenIndex();
  }, []);

  const onOpenIndex = () => {
    console.disableYellowBox = true;
  }

  return (
    <NavigationContainer >
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}
          componentKeys={componentKeys}
        >


          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Recipe" componentKeys={componentKeys} component={RecipeScreen} />
          <Stack.Screen name="RecipesList" component={RecipesListScreen} />
          <Stack.Screen name="Ingredient" component={IngredientScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer >
  )
}

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.lightGray4
  }
})
