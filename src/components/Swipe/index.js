import React, { useContext } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { LeftAction, RightAction, ActionIcon } from './styles';

export default function Swipe({ children, data, handleUpdate, handleDelete }) {
  let _swipeableRow = null;

  function renderRightActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <RightAction onPress={() => handleDelete(data)}>
        <ActionIcon
          name="trash"
          size={30}
          color="#fff"
          style={{ transform: [{ scale }] }}
        />
      </RightAction>
    );
  }

  function renderLeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <LeftAction
        onPress={() => {
          handleUpdate();
          close();
        }}>
        <ActionIcon
          name="pencil"
          size={30}
          color="#fff"
          style={{ transform: [{ scale }] }}
        />
      </LeftAction>
    );
  }

  function updateRef(ref) {
    _swipeableRow = ref;
  }

  function close() {
    _swipeableRow.close();
  }

  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      {children}
    </Swipeable>
  );
}
