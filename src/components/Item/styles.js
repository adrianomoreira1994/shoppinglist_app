import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  flex: 1;
  font-family: 'Roboto Medium';
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
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100px;
  height: 80px;
  margin-right: 10px;
`;
