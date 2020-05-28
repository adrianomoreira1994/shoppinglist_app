import React, { useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
import api from '~/services/api';

export default function Product({ navigation }) {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmitForm() {
    try {
      setLoading(true);
      const product = {
        title,
        quantity,
        price,
      };

      await api.post('/products', product);
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
            value={title}
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
              <Icon name="check" color="#00b874" size={20} />
            ) : (
              <ActivityIndicator color="#00b874" size={30} />
            )}
            <SubmitLabel>Adicionar</SubmitLabel>
          </Submit>
        </Form>
      </ScrollViewContainer>
    </Container>
  );
}
