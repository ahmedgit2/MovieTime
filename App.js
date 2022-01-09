import React, { useState } from 'react';

import { SplashScreen } from './src/screens/splashScreen';
import { AppContainer } from './src/navigator/appContainer';
import { useAuth } from './src/firebase/useFirebase';

const App = () => {
  const [ splash, setSplash ] = useState(true);
  const Auth = useAuth();

  setTimeout(() => {
    setSplash(false);
  }, 4500);

  return (

    splash ?
      <SplashScreen />
      :
      <AppContainer isAuthenticated={ Auth } />
  );
};

export default App;
