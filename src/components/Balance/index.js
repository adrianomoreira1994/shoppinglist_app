import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context } from '~/Context/ShoppingContext';

import format from '~/util/format';

import {
  Container,
  BalanceContainer,
  BalanceLabel,
  Value,
  Bold,
  Actions,
  NewItem,
  NewItemLabel,
} from './styles';

export default function Balance({ navigation }) {
  let totalPrice = useContext(Context).products.reduce((total, product) => {
    return total + Number(product.quantity) * Number(product.price);
  }, 0);

  totalPrice = format(totalPrice);

  return (
    <Container>
      <BalanceContainer>
        <BalanceLabel>Total da compra</BalanceLabel>
        <Value>
          <Bold>{totalPrice === 0 ? '0,00' : String(totalPrice)}</Bold>
        </Value>
      </BalanceContainer>
      <Actions>
        <NewItem onPress={() => navigation.navigate('Product')}>
          <Icon name="plus" size={20} color="#FFF" />
          <NewItemLabel>Cadastrar Novo Item</NewItemLabel>
        </NewItem>
      </Actions>
    </Container>
  );
}
