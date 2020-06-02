import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Options = styled(BaseButton)`
  position: absolute;
  top: -5px;
  right: 0px;
  padding: 15px;
`;

export const Container = styled.View`
  background-color: ${(props) =>
    props.changeStyle ? 'rgba(0, 0, 0, 0.2)' : '#fff'};
  border-radius: 6px;
  margin: 0 15px 15px;
  flex-direction: row;
  align-items: center;
  height: 100px;
  elevation: ${(props) => (props.changeStyle ? 0 : 2)};
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px 15px 0;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.4);
  font-family: 'Roboto Bold';
`;

export const PriceLabel = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.2);
  font-family: 'Roboto Regular';
  flex: 1;
`;

export const ContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentValues = styled.View`
  flex-direction: row;
  padding: 8px 0;
  border-top-width: 1px;
  border-top-color: #f0f0f0;
  align-items: center;
`;

export const Quantity = styled.TextInput`
  width: 30px;
  height: 30px;
  padding: 2px;
  margin: 0 8px;
  color: #999;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-family: 'Roboto Regular';
`;

export const Button = styled.TouchableOpacity``;

export const Price = styled.Text`
  font-family: 'Roboto Black';
  font-size: 18px;
  color: #fff;
`;

export const ContainerPrice = styled.View`
  background-color: #00b874;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 120px;
  height: 100px;
`;
