import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFFFFF;
  margin: 0 15px 15px;
  flex-direction: row;
  align-items: center;
  height: 100px;
  elevation: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px 15px 0;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Roboto Bold';
`;

export const PriceLabel = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
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
  width: 120px;
  height: 100px;
`;
