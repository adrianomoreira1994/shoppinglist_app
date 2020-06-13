import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { Container, Form, Input, Button, ButtonLabel } from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    if (email === '' || password === '') return;

    const { data: auth } = await api.post('/sessions', {
      email,
      password,
    });

    api.defaults.headers.Authorization = `Bearer ${auth.token}`;
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Form>
        <Input
          keyboardType={'email-address'}
          onChangeText={(text) => setEmail(text)}
          placeholder="E-mail"
        />

        <Input
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
        />

        <Button onPress={handleSubmit}>
          <ButtonLabel>Entrar</ButtonLabel>
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
