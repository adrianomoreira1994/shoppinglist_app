/** Core */
import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, PixelRatio } from 'react-native';

import { Context } from '~/Context/ShoppingContext';

import { Container, List, ContaienrList } from './styles';

import ListItem from '~/components/ListItem';
import Balance from '~/components/Balance';
import FloatingActionButton from '~/components/FloatingActionButton';

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

      <Balance />

      <ContaienrList>
        <List
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="never"
          onScrollBeginDrag={() => setButtonHidden(true)}
          onScrollEndDrag={() => setButtonHidden(false)}
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </ContaienrList>
    </Container>
  );
}
