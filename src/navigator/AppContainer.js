import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomeDrawer } from './homeDrawer'
import { AuthStack } from './authStack'

export function AppContainer({ isAuthenticated = false }) {

  return (
    <NavigationContainer>
      { isAuthenticated ? < HomeDrawer /> : <AuthStack /> }
    </NavigationContainer>

  )

}
