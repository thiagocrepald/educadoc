import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Login } from '../screens/Login';
import { Forgout } from '../screens/Forgout';
import { Home } from '../screens/Home';
import { Mentor } from '../screens/Mentor';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen 
                name="SignIn"
                component={SignIn}
            />

            <Screen 
                name="Login"
                component={Login}
            />

            <Screen 
                name="Home"
                component={Home}
            />

            <Screen 
                name="Forgout"
                component={Forgout}
            />

            <Screen 
                name="Mentor"
                component={Mentor}
            />

        </Navigator>
    )
}