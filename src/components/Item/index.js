import React, { useContext } from 'react';
import { StyleSheet, Animated, I18nManager } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Context } from '~/Context/ShoppingContext';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import Icon from 'react-native-vector-icons/FontAwesome';

import formatPrice from '~/util/format';

import {
  Container,
  Content,
  Title,
  PriceLabel,
  Quantity,
  Price,
  ContainerQuantity,
  ContainerPrice,
  Button,
} from './styles';
import format from '~/util/format';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default function Item({ data, navigation }) {
  const { removeProduct, updateQuantity } = useContext(Context);
  let _swipeableRow = null;

  function renderRightActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <RectButton
        style={styles.rightAction}
        onPress={() => handleDelete(data.id)}>
        <AnimatedIcon
          name="trash"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  }

  function renderLeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <RectButton style={styles.leftAction} onPress={handleUpdate}>
        <AnimatedIcon
          name="pencil"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  }

  function updateRef(ref) {
    _swipeableRow = ref;
  }

  function close() {
    _swipeableRow.close();
  }

  function handleDelete(productId) {
    close();
    removeProduct(productId);
  }

  function handleUpdate() {
    navigation.navigate('Product', {
      id: data.id,
      title: data.title,
      quantity: data.quantity,
      price: format(data.price),
    });
    close();
  }

  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <Container>
        <ContainerPrice>
          <Price>{formatPrice(data.subTotal)}</Price>
        </ContainerPrice>

        <Content>
          <Title>{data.title}</Title>
          <PriceLabel>Preço: {formatPrice(data.price)}</PriceLabel>
        </Content>

        <ContainerQuantity>
          <Button
            onPress={() => updateQuantity(data, Number(data.quantity) - 1)}>
            <Icon name="minus-circle" size={24} color="#00b874" />
          </Button>
          <Quantity value={String(data.quantity)} editable={false} />
          <Button
            onPress={() => updateQuantity(data, Number(data.quantity) + 1)}>
            <Icon name="plus-circle" size={24} color="#00b874" />
          </Button>
        </ContainerQuantity>
      </Container>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#00419c',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    height: 80,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    backgroundColor: '#dd2c00',
    flex: 1,
    justifyContent: 'flex-end',
    height: 80,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 20,
  },
});
