import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Context } from '~/Context/ShoppingContext';

import format from '~/util/format';

import {
  NotItemLabel,
  Container,
  BalanceContainer,
  BalanceLabel,
  Value,
  Bold,
  Actions,
  NewItem,
  NewItemLabel,
} from './styles';

export default function Balance() {
  const navigation = useNavigation();
  const { products } = useContext(Context);
  let totalPrice = format(
    useContext(Context).products.reduce((total, product) => {
      return total + Number(product.quantity) * Number(product.price);
    }, 0),
  );

  return (
    <Container>
      {products.length > 0 ? (
        <BalanceContainer>
          <BalanceLabel>Total da compra</BalanceLabel>
          <Value>
            <Bold>{totalPrice === 0 ? '0,00' : String(totalPrice)}</Bold>
          </Value>
        </BalanceContainer>
      ) : (
        <BalanceContainer>
          <NotItemLabel>Você não tem itens cadastrados</NotItemLabel>
        </BalanceContainer>
      )}

      <Actions>
        <NewItem onPress={() => navigation.navigate('Product')}>
          <Icon name="plus" size={20} color="#FFF" />
          <NewItemLabel>Adicionar Novo Item</NewItemLabel>
        </NewItem>
      </Actions>
    </Container>
  );
}
