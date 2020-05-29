import React, { useState, useContext, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Context } from '~/Context/ShoppingContext';

import {
  Container,
  ScrollViewContainer,
  Form,
  Input,
  InputMasked,
  FormGroup,
  Submit,
  SubmitLabel,
} from './styles';

export default function Product({ navigation, product }) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const { registerProduct, updateProduct } = useContext(Context);
  const routeData = useRoute();

  useEffect(() => {
    if (routeData.params !== undefined) {
      setId(routeData.params.id);
      setTitle(routeData.params.title);
      setQuantity(routeData.params.quantity);
      setPrice(routeData.params.price);
    }
  }, []);

  function handleSubmitForm() {
    try {
      setLoading(true);

      const product = {
        title,
        quantity,
        price,
      };

      if (id > 0) {
        product.id = id;

        updateProduct(product);
      } else {
        registerProduct(product);
      }

      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Container>
      <ScrollViewContainer>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <Form>
          <Input
            value={String(title)}
            onChangeText={(value) => setTitle(value)}
            placeholder="Nome do produto"
          />
          <FormGroup>
            <InputMasked
              type={'only-numbers'}
              onChangeText={(value) => setQuantity(value)}
              value={String(quantity)}
              element={'first'}
              placeholder="Quantidade"
              keyboardType="numeric"
            />
            <InputMasked
              type={'money'}
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$',
                suffixUnit: '',
              }}
              onChangeText={(value) => setPrice(value)}
              value={String(price)}
              placeholder="R$0,00"
              keyboardType="numeric"
            />
          </FormGroup>

          <Submit onPress={handleSubmitForm}>
            {!loading ? (
              <Icon name="check" color="#00b874" size={30} />
            ) : (
              <ActivityIndicator color="#00b874" size={30} />
            )}

            {routeData.params !== undefined && routeData.params.id > 0 ? (
              <SubmitLabel>Atualizar</SubmitLabel>
            ) : (
              <SubmitLabel>Adicionar</SubmitLabel>
            )}
          </Submit>
        </Form>
      </ScrollViewContainer>
    </Container>
  );
}
