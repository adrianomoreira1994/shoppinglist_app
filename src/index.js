import React from 'react';
import '~/config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { ShoppingProvider } from '~/Context/ShoppingContext';

import Routes from '~/routes';

const App = () => (
  <ShoppingProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </ShoppingProvider>
);

export default App;
