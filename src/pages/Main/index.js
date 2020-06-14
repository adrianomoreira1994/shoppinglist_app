/** Core */
import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { Container, List, ContaienrList, Loading } from './styles';

import ListItem from '~/components/ListItem';
import Balance from '~/components/Balance';
import api from '~/services/api';
import format from '~/util/format';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [setButtonHidden] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await api.get('/products');

        const productsData = response.data.map((product) => ({
          id: product.id,
          title: product.title,
          quantity: product.quantity,
          price: product.price,
          subTotal: product.subTotal,
        }));

        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return loading ? (
    <Loading>
      <ActivityIndicator size={100} color="#FFF" />
    </Loading>
  ) : (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Balance products={products} />

      {products.length > 0 ? (
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
      ) : null}
    </Container>
  );
}
