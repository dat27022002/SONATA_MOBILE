import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import i18n from './src/utils/i18next';
import store from './src/redux/store';

import { configNavigation, route } from './src/config';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={route.LOGIN}>
                        {configNavigation.map((page, index) => (
                            <Stack.Screen
                                key={index}
                                name={page.name}
                                component={page.component}
                                options={page.options}
                            ></Stack.Screen>
                        ))}
                    </Stack.Navigator>
                    <FlashMessage position="top" />
                </NavigationContainer>
            </Provider>
        </I18nextProvider>
    );
}

export default App;
