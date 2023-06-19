import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  interpolateColor,
} from 'react-native-reanimated';
import {IPaginationProps} from 'types/element-types';

const Pagination: React.FC<IPaginationProps> = props => {
  const theme = useTheme();

  const {
    animValue,
    data,
    horizontal = true,
    size = 6,
    space = 4,
    activeWidth = 6,
    activeColor = theme['color-warning-default'],
    inactiveColor = theme['background-basic-color-7'],
  } = props;

  const sizeLayout =
    size * data.length +
    space * data.length +
    (activeWidth ? activeWidth - size : 0);
  return (
    <View
      style={[
        horizontal
          ? {
              width: sizeLayout,
            }
          : {
              height: sizeLayout,
            },
        {
          flexDirection: horizontal ? 'row' : undefined,
          justifyContent: 'center',
          alignSelf: 'center',
          overflow: 'hidden',
        },
      ]}>
      {data.map((item, index) => {
        let length = data.length;
        let inputRange = [index - 1, index, index + 1];

        if (index === 0 && animValue?.value > length - 1) {
          inputRange = [length - 1, length, length + 1];
        }
        const animStyle = useAnimatedStyle(() => {
          const color = interpolateColor(animValue.value, inputRange, [
            inactiveColor,
            activeColor,
            inactiveColor,
          ]);
          return {
            width:
              activeWidth && horizontal
                ? interpolate(
                    animValue.value,
                    inputRange,
                    [size, activeWidth, size],
                    Extrapolate.CLAMP,
                  )
                : size,
            height:
              activeWidth && horizontal == false
                ? interpolate(
                    animValue.value,
                    inputRange,
                    [size, activeWidth, size],
                    Extrapolate.CLAMP,
                  )
                : size,
            backgroundColor: color,
          };
        }, [animValue, index, length]);
        return (
          <Animated.View
            key={index}
            style={[
              {
                marginHorizontal: horizontal ? space / 2 : undefined,
                marginVertical: !horizontal ? space / 2 : undefined,
                borderRadius: 50,
              },
              animStyle,
            ]}
          />
        );
      })}
    </View>
  );
};
export default Pagination;
