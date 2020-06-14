import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
  const [product, setProduct] = useState([]);
  const [changeStyle, setChangeStyle] = useState(false);

  useEffect(() => {
    const productsData = {
      title: data.title,
      price: formatPrice(data.price),
      quantity: data.quantity,
      subTotal: formatPrice(data.subTotal),
    };

    setProduct(productsData);
  }, []);

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
    <Swipe
      data={product}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}>
      <Container changeStyle={changeStyle}>
        <ContainerPrice>
          <Price>{product.subTotal}</Price>
        </ContainerPrice>

        <Content>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {product.title}
          </Title>
          <ContentValues>
            <PriceLabel>Preço: {product.price}</PriceLabel>
            <ContainerQuantity>
              <Button
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => {
                  updateQuantity(product, Number(product.quantity) - 1);
                }}>
                <FontAwesome name="minus-circle" size={20} color="#00b874" />
              </Button>
              <Quantity value={String(product.quantity)} editable={false} />
              <Button
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() =>
                  updateQuantity(product, Number(product.quantity) + 1)
                }>
                <FontAwesome name="plus-circle" size={20} color="#00b874" />
              </Button>
            </ContainerQuantity>
          </ContentValues>
        </Content>
      </Container>
    </Swipe>
  );
}
