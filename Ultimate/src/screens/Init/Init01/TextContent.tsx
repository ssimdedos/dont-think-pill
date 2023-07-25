import * as React from "react";
import { Text } from "components";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ITextContentProps } from "types/element-types";

const TextContent = ({
  index,
  animValue,
  title,
  describe,
}: ITextContentProps) => {
  const styled = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [0, 1, 0];
    const opacity = interpolate(animValue.value, inputRange, outputRange);
    return {
      marginTop: 16,
      opacity: withTiming(opacity, {
        duration: 200,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });
  return (
    <Animated.View style={styled}>
      <Text category="h0" mb={16}>{title}</Text>
      <Text category="body" status="placeholder">
        {describe}
      </Text>
    </Animated.View>
  );
};
export default TextContent;
