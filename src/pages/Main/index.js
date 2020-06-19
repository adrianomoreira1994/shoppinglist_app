/** Core */
import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { Container, List, ContaienrList, Loading } from './styles';

import ListItem from '~/components/ListItem';
import Balance from '~/components/Balance';
import api from '~/services/api';

import formatPrice from '~/util/format';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [setButtonHidden] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const { data } = await api.get('/products');

        const productsData = data.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          category_id: product.category_id,
          subTotal: formatPrice(product.subTotal),
        }));

        setProducts(productsData);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  async function handleDelete(product) {
    await api.delete(`/products/${product.id}`);

    const newProductsArray = products.filter((p) => p.id !== product.id);
    setProducts(newProductsArray);
  }

  async function updateQuantity(productId, quantity, type) {
    const response = await api.post(
      `/products/${productId}/quantity?type=${type}`,
    );

    const quantityProduct = response.data;

    const productsWithUpdatedQuantity = products.map((product) => {
      if (product.id === productId) {
        return quantityProduct;
      } else {
        return product;
      }
    });

    setProducts(productsWithUpdatedQuantity);
  }

  function handleUpdate() {
    navigation.navigate('Product', {
      id: data.id,
      title: data.title,
      quantity: data.quantity,
      price: formatPrice(data.price),
    });
  }

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
            renderItem={({ item }) => (
              <ListItem
                handleDelete={() => handleDelete(item)}
                handleUpdate={() => handleUpdate()}
                updateQuantity={updateQuantity}
                product={item}
              />
            )}
          />
        </ContaienrList>
      ) : null}
    </Container>
  );
}
