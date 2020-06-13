import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#00b874', '#53E381'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  padding: 10px;
  width: 100%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.6)',
})`
  height: 100px;
  font-size: 25px;
  font-family: 'Roboto Regular';
  color: #fff;
  border-bottom-width: 2px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`;

export const Button = styled(RectButton)`
  background-color: #fbfbfb;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 200px;
  elevation: 2;
  margin: 40px auto 0;
`;

export const ButtonLabel = styled.Text`
  color: #00b874;
  margin-left: 10px;
  font-family: 'Roboto Medium';
  font-size: 20px;
`;
