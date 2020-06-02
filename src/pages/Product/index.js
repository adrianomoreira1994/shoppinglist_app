import React, { useState, useContext, useEffect, useRef } from 'react';
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

export default function Product({ navigation }) {
  const [productId, setId] = useState('');
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const titleRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);

  const routeData = useRoute();
  const { registerProduct, updateProduct, loading } = useContext(Context);

  useEffect(() => {
    if (routeData.params !== undefined) {
      setId(routeData.params.id);
      setTitle(routeData.params.title);
      setQuantity(routeData.params.quantity);
      setPrice(routeData.params.price);
    }
  }, []);

  function handleSubmitForm() {
    const product = {
      title,
      quantity,
      price,
    };
    if (productId !== '' && productId !== undefined) {
      product.id = productId;
      updateProduct(product, navigation);
    } else {
      registerProduct(product);
      setId('');
      setTitle('');
      setQuantity('');
      setPrice('');

      titleRef.current.focus();
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
            ref={titleRef}
            value={String(title)}
            onChangeText={(value) => setTitle(value)}
            placeholder="Nome do produto"
            returnKeyType="next"
            onSubmitEditing={() => quantityRef.current.focus()}
            blurOnSubmit={false}
          />
          <FormGroup>
            <Input
              ref={quantityRef}
              onChangeText={(value) => setQuantity(value)}
              value={String(quantity)}
              placeholder="Quantidade"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => priceRef.current.focus()}
            />
            <InputMasked
              refInput={(ref) => {
                priceRef.current = ref;
              }}
              returnKeyType="send"
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
              onSubmitEditing={() => handleSubmitForm()}
            />
          </FormGroup>

          <Submit onPress={handleSubmitForm}>
            {loading ? (
              <ActivityIndicator color="#00b874" size={30} />
            ) : (
              <Icon name="check" color="#00b874" size={30} />
            )}

            {routeData.params !== undefined && routeData.params.id != '' ? (
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
