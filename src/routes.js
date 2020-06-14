import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { sign } from '~/services/auth';

import Main from '~/pages/Main';
import Product from '~/pages/Product';
import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

export default function Routes({ signedIn = false }) {
  return (
    <Stack.Navigator
      initialRouteName={signedIn ? 'Home' : 'SignIn'}
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FBFBFB',
          elevation: 0,
        },
        headerTintColor: '#00b874',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Roboto Bold',
        },
      }}>
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={Main}
      />
      <Stack.Screen
        options={{
          title: 'Novo Produto',
        }}
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  );
}
