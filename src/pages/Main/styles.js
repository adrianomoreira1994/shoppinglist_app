import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ContaienrList = styled.View`
  flex: 2;
  background-color: #f5f8f7;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
