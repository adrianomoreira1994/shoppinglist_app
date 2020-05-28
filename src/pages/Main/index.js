import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from '~/components/Item';
import api from '~/services/api';

import {
  Container,
  BalanceContainer,
  Balance,
  BalannceLabel,
  Value,
  Bold,
  List,
  Actions,
  NewItem,
  NewItemLabel,
  ContaienrList,
  FloatingButton,
} from './styles';
import { StatusBar } from 'react-native';

export default function Main({ navigation }) {
  const [products, setProducts] = useState([]);
  const [buttonHidden, setButtonHidden] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <FloatingButton
        buttonHidden={buttonHidden}
        onPress={() => navigation.navigate('Product')}>
        <Icon name="plus" size={25} color="#FFF" />
      </FloatingButton>
      <Balance>
        <BalanceContainer>
          <BalannceLabel>Total da compra</BalannceLabel>
          <Value>
            R$ <Bold>500,00</Bold>
          </Value>
        </BalanceContainer>
        <Actions>
          <NewItem onPress={() => navigation.navigate('Product')}>
            <Icon name="plus" size={20} color="#FFF" />
            <NewItemLabel>Novo Item</NewItemLabel>
          </NewItem>
        </Actions>
      </Balance>

      <ContaienrList>
        <List
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="never"
          onScrollBeginDrag={() => setButtonHidden(true)}
          onScrollEndDrag={() => setButtonHidden(false)}
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Item onSele data={item} />}
        />
      </ContaienrList>
    </Container>
  );
}
