import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Swipe from '~/components/Swipe';

import format from '~/util/format';

import {
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

export default function ListItem({
  product,
  handleDelete,
  handleUpdate,
  updateQuantity,
}) {
  const navigation = useNavigation();
  const [changeStyle, setChangeStyle] = useState(false);

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
                  updateQuantity(
                    product.id,
                    Number(product.quantity) - 1,
                    'decrement',
                  );
                }}>
                <FontAwesome name="minus-circle" size={20} color="#00b874" />
              </Button>

              <Quantity value={String(product.quantity)} editable={false} />

              <Button
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() =>
                  updateQuantity(
                    product.id,
                    Number(product.quantity) + 1,
                    'increment',
                  )
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
