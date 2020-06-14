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

export const Input = styled.TextInput`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-family: 'Roboto Regular';
  color: #fff;
  padding-left: 8px;
  flex: 1;
`;

export const Select = styled.Picker`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
`;

export const InputMasked = styled(TextInputMask)`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-family: 'Roboto Regular';
  color: #fff;
  padding-left: 8px;
  flex: 1;
`;

export const Submit = styled(BaseButton)`
  background-color: #fbfbfb;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 200px;
  margin: 40px auto 0;
  elevation: 2;
`;

export const SubmitLabel = styled.Text`
  color: #00b874;
  margin-left: 10px;
  font-family: 'Roboto Medium';
  font-size: 20px;
`;

export const Label = styled.View`
  margin-bottom: 25px;
`;

export const LabelText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Roboto Light';
  margin-bottom: 10px;
`;
