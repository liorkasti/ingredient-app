import React, { useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation-locker';
import { StatusBar } from 'react-native';
import Tabs from './src/navigation/tabs'
import {
    HomeScreen,
    CategoriesScreen,
    RecipeScreen,
    RecipesListScreen,
    IngredientScreen,
    SearchScreen,
    IngredientsDetailsScreen,
    FavoritesScreen
} from './src/screens'


const componentKeys = [
    HomeScreen,
    CategoriesScreen,
    RecipeScreen,
    RecipesListScreen,
    IngredientScreen,
    SearchScreen,
    IngredientsDetailsScreen,
    FavoritesScreen
]


const Stack = createStackNavigator();

const App = () => {

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
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    header: null
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default App;