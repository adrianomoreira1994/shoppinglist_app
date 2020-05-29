import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 6px;
  margin: 0 20px 15px;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  elevation: 2;
`;

export const Content = styled.View`
  flex: 1;
  padding: 8px 0;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-family: 'Roboto Bold';
`;

export const PriceLabel = styled.Text`
  font-size: 14px;
  color: #999;
  font-family: 'Roboto Medium';
`;

export const DefaultPrice = styled.Text`
  font-size: 14px;
  color: #999;
  font-family: 'Roboto Medium';
  margin-top: 10px;
`;

export const Quantity = styled.TextInput`
  width: 40px;
  height: 40px;
  color: #999;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-family: 'Roboto Regular';
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
`;

export const ContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Roboto Black';
  font-size: 16px;
  color: #fff;
`;

export const ContainerPrice = styled.View`
  background-color: #00b874;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 100px;
  height: 80px;
  margin-right: 10px;
`;
