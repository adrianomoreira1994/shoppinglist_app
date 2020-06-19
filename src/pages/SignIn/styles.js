import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#00b874', '#53E381'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LogoLabel = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: 'Roboto Bold';
  margin-left: 20px;
`;

export const Form = styled.View`
  padding: 20px;
`;

export const Input = styled.TextInput`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-family: 'Roboto Regular';
  color: #fff;
  padding-left: 8px;
`;

export const Label = styled.View`
  margin-bottom: 25px;
`;

export const LabelText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Roboto Regular';
  margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
  background-color: #fbfbfb;
  height: 60px;
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
