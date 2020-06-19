import React, { useState } from 'react';
import Toast from 'react-native-tiny-toast';

import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { onSignIn } from '../../services/auth';
import api from '../../services/api';

import {
  Container,
  Logo,
  LogoLabel,
  Form,
  Label,
  LabelText,
  Input,
  Button,
  ButtonLabel,
} from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try {
      setLoading(true);
      if (email === '' || password === '') return;

      const { data: auth } = await api.post('/sessions', {
        email,
        password,
      });

      await onSignIn(auth.token);
      api.defaults.headers.Authorization = `Bearer ${auth.token}`;

      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      Toast.show('Erro na requisição, entre em contato com o administrador');
    }
  }

  return (
    <Container>
      <Logo>
        <Feather name="shopping-cart" size={45} color="#FFF" />
        <LogoLabel>Lista de Compras</LogoLabel>
      </Logo>
      <Form>
        <Label>
          <LabelText>Seu e-mail:</LabelText>
          <Input
            keyboardType={'email-address'}
            onChangeText={(text) => setEmail(text)}
          />
        </Label>

        <Label>
          <LabelText>Sua senha:</LabelText>
          <Input
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={handleSubmit}
          />
        </Label>

        <Button onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size={24} color="#00b874" />
          ) : (
            <Icon name="check" size={20} color="#00b874" />
          )}
          <ButtonLabel>Entrar</ButtonLabel>
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
