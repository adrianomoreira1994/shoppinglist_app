import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button } from './styles';

export default function FloatingActionButton({ buttonHidden, ...rest }) {
  return (
    <Button buttonHidden={buttonHidden} {...rest}>
      <Icon name="plus" size={25} color="#FFF" />
    </Button>
  );
}
