/** Core */
import React, { useContext, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { Context } from '~/Context/ShoppingContext';

import { Container, List, ContaienrList } from './styles';

import Item from '~/components/Item';
import Balance from '~/components/Balance';
import FloatingActionButton from '~/components/FloatingActionButton';

import Toast from 'react-native-tiny-toast';

export default function Main({ navigation }) {
  const [buttonHidden, setButtonHidden] = useState(false);
  const { products } = useContext(Context);

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <FloatingActionButton
        buttonHidden={buttonHidden}
        onPress={() => navigation.navigate('Product')}
      />

      <Balance navigation={navigation} />

      <ContaienrList>
        <List
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="never"
          onScrollBeginDrag={() => setButtonHidden(true)}
          onScrollEndDrag={() => setButtonHidden(false)}
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Item navigation={navigation} data={item} />
          )}
        />
      </ContaienrList>
    </Container>
  );
}
