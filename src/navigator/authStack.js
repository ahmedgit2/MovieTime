import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens/logInScreen';
import { SignUpScreen } from '../screens/signUpScreen';
import { Colors } from '../assets/colors';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="LoginScreen"
        component={ LoginScreen }
        options={ {
          title: '',
          headerShown: false
        } }
      />

      <Stack.Screen
        name="SignUpScreen"
        component={ SignUpScreen }
        options={ {
          title: '',
          headerStyle: { backgroundColor: Colors.white }
        } } />



    </Stack.Navigator>
  );
}
