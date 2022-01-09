import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeStack } from './homeStack';
import { DrawerContent } from '../components/drawerContent';

import { Colors } from '../assets/colors';

const Drawer = createDrawerNavigator();

export function HomeDrawer() {

    return (
        <Drawer.Navigator
            drawerContent={ (props) => <DrawerContent { ...props } /> }
            initialRouteName={ 'Home' }
            screenOptions={ { headerTintColor: Colors.white } }
        >
            <Drawer.Screen
                name="Home"
                component={ HomeStack }
                options={ { headerShown: false } }

            />

        </Drawer.Navigator >
    );
}



