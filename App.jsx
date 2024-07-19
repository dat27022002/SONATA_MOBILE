import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome/Welcome';
import Login from './src/pages/Login';
import configNavigation from './src/config/navigation';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {configNavigation.map((page) => (
                    <Stack.Screen
                        name={page.name}
                        component={page.component}
                        options={page.options}
                    ></Stack.Screen>
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
