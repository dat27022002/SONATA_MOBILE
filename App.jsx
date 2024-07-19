import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/utils/i18next';

import configNavigation from './src/config/navigation';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    {configNavigation.map((page, index) => (
                        <Stack.Screen
                            key={index}
                            name={page.name}
                            component={page.component}
                            options={page.options}
                        ></Stack.Screen>
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </I18nextProvider>
    );
}

export default App;
