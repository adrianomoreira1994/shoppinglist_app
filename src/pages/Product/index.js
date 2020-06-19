import React, { useState, useEffect, useRef } from 'react';
import { Picker } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  ScrollViewContainer,
  Form,
  Input,
  Select,
  InputMasked,
  Submit,
  SubmitLabel,
  Label,
  LabelText,
} from './styles';
import api from '~/services/api';

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [productId, setId] = useState('');
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const titleRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);

  const routeData = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    (async function () {
      const response = await api.get('/categories');
      setCategories(response.data);
    })();
  }, []);

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
      updateProduct(product);
    } else {
      createProduct(product);
    }

    navigation.navigate('Home');
  }

  async function createProduct(product) {
    setLoading(true);

    try {
      product.price = product.price.replace('R$', '');

      if (String(product.price).indexOf('.') >= 1) {
        product.price = Number(product.price.replace(',', ''));
      } else {
        product.price = Number(product.price.replace(',', '.'));
      }

      const productData = {
        ...product,
        category_id: selectedCategory,
      };

      await api.post('/products', productData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.tron.log(error.message);
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
          <Label>
            <LabelText>Nome do Produto</LabelText>

            <Input
              ref={titleRef}
              value={String(title)}
              onChangeText={(value) => setTitle(value)}
              returnKeyType="next"
              onSubmitEditing={() => quantityRef.current.focus()}
              blurOnSubmit={false}
            />
          </Label>

          <Label>
            <LabelText>Quantidade</LabelText>
            <Input
              ref={quantityRef}
              onChangeText={(value) => setQuantity(value)}
              value={String(quantity)}
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => priceRef.current.focus()}
            />
          </Label>

          <Label>
            <LabelText>Preço</LabelText>
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
              keyboardType="numeric"
              onSubmitEditing={() => handleSubmitForm()}
            />
          </Label>

          <Label>
            <LabelText>Categoria</LabelText>
            <Select
              selectedValue={selectedCategory}
              onValueChange={(category, itemIndex) => {
                setSelectedCategory(category);
              }}>
              {categories.map((category) => (
                <Picker.Item
                  key={category.id}
                  label={category.title}
                  value={category.id}
                />
              ))}
            </Select>
          </Label>

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
