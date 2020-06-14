import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default function Balance({ products }) {
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((total, product) => {
      return total + Number(product.quantity) * Number(product.price);
    }, 0);

    setTotal(format(totalPrice));
  }, []);

  return (
    <Container>
      <BalanceContainer>
        <BalanceLabel>Total da compra</BalanceLabel>
        <Value>
          <Bold>{total}</Bold>
        </Value>
      </BalanceContainer>

      <Actions>
        <NewItem onPress={() => navigation.navigate('Product')}>
          <Icon name="plus" size={20} color="#FFF" />
          <NewItemLabel>Adicionar Novo Item</NewItemLabel>
        </NewItem>
      </Actions>
    </Container>
  );
}
