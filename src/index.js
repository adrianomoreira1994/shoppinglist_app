import React, { useEffect } from 'react';
import '~/config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { ShoppingProvider } from '~/Context/ShoppingContext';

import Routes from '~/routes';

export default function App() {
  return (
    <ShoppingProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ShoppingProvider>
  );
}
