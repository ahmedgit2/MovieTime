import React from 'react';

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";

import { SplashScreen } from './src/screens/splashScreen';
import { SignUpScreen } from './src/screens/signUpScreen';
import { LoginScreen } from './src/screens/logInScreen';
import { HomeScreen } from './src/screens/homeScreen';
import { MovieDetailsScreen } from './src/screens/movieDetailsScreen';
import { CastDetailsScreen } from './src/screens/castDetailsScreen';
import { Slider } from './src/components/slider';

const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <Provider store={ store }>

      <HomeScreen />

    </Provider>
  );
};


export default App;
