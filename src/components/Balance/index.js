import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
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
  DeleteItems,
  DeleteItemsLabel,
} from './styles';

export default function Balance() {
  const navigation = useNavigation();
  let totalPrice = useContext(Context).products.reduce((total, product) => {
    return total + Number(product.quantity) * Number(product.price);
  }, 0);

  const { productsForRemoving, removeProductBulk } = useContext(Context);

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
          <NewItemLabel>Adicionar Novo Item</NewItemLabel>
        </NewItem>
      </Actions>

      {productsForRemoving.length > 0 && (
        <DeleteItems onPress={() => removeProductBulk(productsForRemoving)}>
          <Icon name="trash" size={20} color="#FFF" />
          <DeleteItemsLabel>Deletar itens selecionados</DeleteItemsLabel>
        </DeleteItems>
      )}
    </Container>
  );
}
