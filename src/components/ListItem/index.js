import React, { useContext, useState, useRef } from 'react';
import {
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Context } from '~/Context/ShoppingContext';
import { useNavigation } from '@react-navigation/native';

import Swipe from '~/components/Swipe';

import formatPrice from '~/util/format';

import {
  Options,
  Container,
  Content,
  Title,
  PriceLabel,
  Quantity,
  Price,
  ContainerQuantity,
  ContainerPrice,
  Button,
  ContentValues,
} from './styles';

export default function ListItem({ data }) {
  const navigation = useNavigation();
  const doubleTapRef = useRef();
  const [changeStyle, setChangeStyle] = useState(false);
  const {
    updateQuantity,
    removeProduct,
    setProductsForRemoving,
    productsForRemoving,
  } = useContext(Context);

  function handleDelete(product) {
    removeProduct(product);
  }

  function handleUpdate() {
    navigation.navigate('Product', {
      id: data.id,
      title: data.title,
      quantity: data.quantity,
      price: formatPrice(data.price),
    });
  }

  return (
    <Swipe data={data} handleUpdate={handleUpdate} handleDelete={handleDelete}>
      <Container changeStyle={changeStyle}>
        <ContainerPrice>
          <Price>{formatPrice(data.subTotal)}</Price>
        </ContainerPrice>

        <Content>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {data.title}
          </Title>
          <ContentValues>
            <PriceLabel>Preço: {formatPrice(data.price)}</PriceLabel>
            <ContainerQuantity>
              <Button
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => {
                  console.tron.log(data);
                  updateQuantity(data, Number(data.quantity) - 1);
                }}>
                <FontAwesome name="minus-circle" size={20} color="#00b874" />
              </Button>
              <Quantity value={String(data.quantity)} editable={false} />
              <Button
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => updateQuantity(data, Number(data.quantity) + 1)}>
                <FontAwesome name="plus-circle" size={20} color="#00b874" />
              </Button>
            </ContainerQuantity>
          </ContentValues>
        </Content>
      </Container>
    </Swipe>
  );
}
