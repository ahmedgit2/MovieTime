import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CastDetailsScreen } from '../screens/castDetailsScreen'
import { MovieDetailsScreen } from '../screens/movieDetailsScreen'
import { HomeScreen } from '../screens/homeScreen'


import { Colors } from '../assets/colors';

const Stack = createNativeStackNavigator();

export function HomeStack() {

  return (
    <Stack.Navigator
      screenOptions={ { headerTintColor: Colors.white } }
    >

      <Stack.Screen
        name="HomeScreen"
        component={ HomeScreen }
        options={ {
          title: '',
          headerShown: false
        } }
      />

      <Stack.Screen
        name="CastDetailsScreen"
        component={ CastDetailsScreen }
        options={ {
          title: '',
          headerStyle: { backgroundColor: Colors.main }
        } }
      />

      <Stack.Screen
        name="MovieDetailsScreen"
        component={ MovieDetailsScreen }
        options={ {
          title: '',
          headerShown: false
        } }
      />

    </Stack.Navigator >
  );
}
