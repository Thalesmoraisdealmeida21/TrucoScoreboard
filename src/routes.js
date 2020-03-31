import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();


import Placar from './pages/placar'
import Configuracao from './pages/configuracao'


export default function Routes(){
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Placar" component={Placar}></AppStack.Screen>
                <AppStack.Screen name="Configuracao" component={Configuracao}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

