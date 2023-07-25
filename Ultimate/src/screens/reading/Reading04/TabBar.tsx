import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface TabBarProps {
  style?: ViewStyle;
}

const TabBar: React.FC<TabBarProps> = ({ style }) => {
  const theme = useTheme();
  const { bottom } = useLayout();

  const TAB_WIDTH = 52;

  const [index, setIndex] = React.useState<number>(0);

  const translate = useSharedValue(0);

  React.useEffect(() => {
    translate.value = withTiming(index * TAB_WIDTH + index * 23, { duration: 300 });
  }, [index]);

  const animated1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate.value }],
      width: TAB_WIDTH,
      backgroundColor: theme['color-primary-500'],
      position: 'absolute',
      height: TAB_WIDTH,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      top: 2,
      left: 2,
    };
  });

  return (
    <Layout
      level="3"
      style={[
        styles.tabView,
        { borderColor: theme['background-basic-color-10'], bottom: bottom + 4 },
        style,
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIndex(0)}
        style={[styles.tab, { width: TAB_WIDTH }]}>
        <Icon
          pack="assets"
          name="house-simple"
          style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIndex(1)}
        style={[styles.tab, { width: TAB_WIDTH }]}>
        <Icon
          pack="assets"
          name="calendar-blank"
          style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIndex(2)}
        style={[styles.tab, { width: TAB_WIDTH }]}>
        <Icon
          pack="assets"
          name="timer"
          style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIndex(3)}
        style={[styles.tab, { width: TAB_WIDTH }]}>
        <Icon
          pack="assets"
          name="user"
          style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
        />
      </TouchableOpacity>
      <Animated.View style={animated1}>
        <Icon
          pack="assets"
          style={[styles.icon, { tintColor: '#F6D938' }]}
          name={
            index === 0
              ? 'house-simple'
              : index === 1
              ? 'calendar-blank'
              : index === 2
              ? 'timer'
              : 'user'
          }
        />
      </Animated.View>
    </Layout>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 8,
    borderRadius: 90,
    height: 56,
    position: 'absolute',
    width: 52 * 5 + 18 + 4,
    alignSelf: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
