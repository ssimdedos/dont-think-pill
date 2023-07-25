import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import useLayout from 'hooks/useLayout';
import {AnimatedBottomViewProps} from 'types/component-types';

const AnimatedBottomView = ({
  progress,
  containerStyle,
  children,
  useSafeArea,
}: AnimatedBottomViewProps) => {
  const {bottom} = useLayout();
  const styleButtonDone = useAnimatedStyle(() => {
    const transY = interpolate(progress.value, [0, 0.5, 1], [100, 50, 0]);
    return {
      transform: [{translateY: transY}],
      paddingHorizontal: 24,
    };
  });
  return (
    <Animated.View
      style={[
        styleButtonDone,
        containerStyle,
        useSafeArea ? {paddingBottom: bottom} : {paddingBottom: 8},
      ]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedBottomView;
