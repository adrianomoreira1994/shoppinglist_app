import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const FloatingButton = styled(BaseButton)`
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
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#53E381', '#00b874'],
  start: { x: 1, y: 1 },
  end: { x: 0, y: 0 },
})`
  flex: 1;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: 15px;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
`;

export const Balance = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BalannceLabel = styled.Text`
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
  width: 150px;
  height: 45px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const NewItemLabel = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto Regular';
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ContaienrList = styled.View`
  flex: 2;
  background-color: #f4f8f8;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;
