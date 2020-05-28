import React from 'react';
import { Alert } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Title,
  Quantity,
  Price,
  ContainerQuantity,
  ContainerPrice,
  Button,
} from './styles';

export default function Item({ data }) {
  const [click, setClick] = React.useState(false);

  return (
    <LongPressGestureHandler
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          setClick(false);
          Alert.alert("I'm being pressed for so long");
        }
      }}
      minDurationMs={200}>
      <Container
        click={click}
        onTouchEnd={() => setClick(false)}
        onTouchCancel={() => setClick(false)}
        onTouchStart={() => setClick(true)}>
        <ContainerPrice>
          <Price>R$ {data.price}</Price>
        </ContainerPrice>
        <Title>{data.title}</Title>
        <ContainerQuantity>
          <Button>
            <Icon name="minus-circle" size={24} color="#00b874" />
          </Button>
          <Quantity value={String(data.quantity)} editable={false} />
          <Button>
            <Icon name="plus-circle" size={24} color="#00b874" />
          </Button>
        </ContainerQuantity>
      </Container>
    </LongPressGestureHandler>
  );
}
