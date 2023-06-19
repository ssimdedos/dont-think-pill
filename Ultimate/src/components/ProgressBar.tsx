import React from 'react';
import {Layout, useTheme} from '@ui-kitten/components';
import {LayoutChangeEvent, StyleSheet} from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {ProgressBarProps} from 'types/component-types';

const ProgressBar = ({
  style,
  progress = 0,
  styleBar,
  progressColor,
  containColor,
}: ProgressBarProps) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState<number>(1);

  const progressValue = React.useMemo(() => {
    return progress * width;
  }, [width, progress]);

  const slider = useDerivedValue(() => {
    return progress * width;
  });

  const styleSlider = useAnimatedStyle(() => {
    const _width = withTiming(slider.value, {
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    return {
      width: _width,
    };
  });

  const onLayout = React.useCallback(({nativeEvent}: LayoutChangeEvent) => {
    setWidth(prev => {
      if (prev !== nativeEvent.layout.width) {
        return nativeEvent.layout.width;
      } else {
        return prev;
      }
    });
  }, []);

  return (
    <Layout
      level="2"
      style={[
        styles.container,
        style,
        {
          backgroundColor: containColor
            ? containColor
            : theme['background-basic-color-3'],
        },
      ]}
      onLayout={onLayout}>
      <Animated.View
        style={[
          {
            height: 4,
            backgroundColor: progressColor
              ? progressColor
              : theme['color-primary-default'],
            width: progressValue,
            borderRadius: 4,
          },
          styleBar,
          width > 0 && styleSlider,
        ]}
      />
    </Layout>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: 4,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
