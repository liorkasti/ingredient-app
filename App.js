import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, YellowBox } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation-locker';

import Tabs from './src/navigation/tabs'

const Stack = createStackNavigator();

const App = () => {

    useEffect(() => {

        setTimeout(() => {
            Orientation.lockToPortrait();
        });

        // StatusBar.setHidden(true);
        return onOpenIndex();
    }, []);

    const onOpenIndex = () => {
        console.disableYellowBox = true;
    }
    


    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    header: null
                }}
                initialRouteName={'Home'}
            >
                {/* <StatusBar hidden /> */}
                <Stack.Screen name="Home" component={Tabs} />

            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default App;