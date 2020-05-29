import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Button = styled(BaseButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #00b874;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  elevation: 6;
  padding: 15px;
  opacity: ${(props) => (props.buttonHidden ? '0.2' : '1')};
  z-index: 5;
`;
