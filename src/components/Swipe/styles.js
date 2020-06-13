import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Animated, I18nManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const LeftAction = styled(RectButton).attrs({
  marginHorizontal: 15,
})`
  flex: 1;
  background-color: #00419c;
  justify-content: flex-end;
  align-items: center;
  flex-direction: ${I18nManager.isRTL ? 'row' : 'row-reverse'};
  height: 100px;
`;

export const RightAction = styled(RectButton).attrs({
  marginHorizontal: 15,
})`
  align-items: center;
  flex-direction: ${I18nManager.isRTL ? 'row-reverse' : 'row'};
  background-color: #dd2c00;
  flex: 1;
  justify-content: flex-end;
  height: 100px;
`;

export const ActionIcon = styled(AnimatedIcon)`
  width: 30px;
  margin: 0 15px;
`;
