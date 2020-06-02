import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { BaseButton, RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
`;

export const BalanceLabel = styled.Text`
  text-align: center;
  font-family: 'Roboto Medium';
  color: #fff;
  font-size: 16px;
`;

export const Value = styled.Text`
  font-family: 'Roboto Light';
  font-size: 25px;
  color: #fff;
`;

export const Bold = styled.Text`
  font-family: 'Roboto Bold';
  font-size: 38px;
  color: #fff;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const NewItem = styled.TouchableOpacity`
  width: auto;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 20px;
`;

export const NewItemLabel = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto Medium';
`;

export const DeleteItems = styled.TouchableOpacity`
  width: auto;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 20px;
  margin-top: 10px;
  background: #dd2c00;
`;

export const DeleteItemsLabel = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto Medium';
`;
