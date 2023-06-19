import Animated, { useAnimatedStyle, useDerivedValue, withSpring } from 'react-native-reanimated';

interface AnimatedPosition {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
}

const useFollowAnimatedPosition = ({ x, y }: AnimatedPosition) => {
  const followX = useDerivedValue(() => {
    return withSpring(x.value, {
      mass: 0.1,
    });
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value, {
      mass: 0.1,
    });
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: followX.value }, { translateY: followY.value }],
    };
  });

  return { followX, followY, rStyle };
};

export default useFollowAnimatedPosition;