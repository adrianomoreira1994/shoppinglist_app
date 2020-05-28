import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
