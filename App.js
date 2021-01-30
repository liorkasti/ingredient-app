import React, { useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation-locker';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
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
            <SafeAreaView style={styles.container}>
                
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={'Home'}
                    componentKeys={componentKeys}
                >


                    <Stack.Screen name="Home" component={Tabs} />
                    <Stack.Screen name="Recipe" component={RecipeScreen} />
                    <Stack.Screen name="RecipesList" component={RecipesListScreen} />
                    <Stack.Screen name="Ingredient" component={IngredientScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                    <Stack.Screen name="Favorites" component={FavoritesScreen} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default App;