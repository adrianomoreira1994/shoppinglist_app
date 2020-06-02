import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#00b874', '#53E381'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  background: #00b874;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

export const Form = styled.View`
  padding: 20px;
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

export const InputMasked = styled(TextInputMask).attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.6)',
})`
  height: 100px;
  font-size: 25px;
  font-family: 'Roboto Regular';
  color: #fff;
  border-bottom-width: 2px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  flex: 1;
  margin-left: 15px;
`;

export const FormGroup = styled.View`
  flex-direction: row;
`;

export const Submit = styled(BaseButton)`
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

export const SubmitLabel = styled.Text`
  color: #00b874;
  margin-left: 10px;
  font-family: 'Roboto Medium';
  font-size: 20px;
`;
