import React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme, Icon } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import Svg, { Path } from 'react-native-svg';
import { goBack } from 'navigation/root-navigation';
import { Images } from 'assets/images';

interface TabBarProps {
  style?: ViewStyle;
}

const TabBar: React.FC<TabBarProps> = ({ style }) => {
  const theme = useTheme();
  const { bottom, width } = useLayout();

  const [index, setIndex] = React.useState<number>(0);

  const HEIGHT_BOTTOM_TAB = bottom + 49;
  const LINE = (width - (24 * 2 + 28 * 2 + 76)) / 2;
  const BORDER = width - (LINE + 52) * 2;
  const viewBox = `0 0 ${width} ${HEIGHT_BOTTOM_TAB - 2}`;
  const d = `M0 24 a24 24 0 0 1 24 -24 h${LINE} q16 0 28 24 a42 42 0 0 0 ${BORDER} 0  q12 -24 28 -24 h${LINE} a24 24 0 0 1 24 24 V${HEIGHT_BOTTOM_TAB} H0 z`;

  return (
    <View style={[styles.container, style]}>
      <Svg
        style={[styles.viewBottomTab, { height: HEIGHT_BOTTOM_TAB }]}
        viewBox={viewBox}
        fill="transparent">
        <Path
          d={d}
          fill="#2A3947"
          strokeWidth={1}
          stroke={Platform.OS === 'ios' ? 'rgba(120, 121, 121, 0.06)' : 'rgba(120, 121, 121, 0.2)'}
        />
      </Svg>
      <View
        style={[
          styles.viewButtonTab,
          {
            width: width,
            height: HEIGHT_BOTTOM_TAB,
            paddingBottom: bottom + 8,
          },
        ]}>
        {['chart-pie-slice', 'cardholder', 'house-simple', 'chart-line-up', 'house-simple'].map(
          (i, idx) => {
            if (idx === 2) {
              return <View key={idx} accessibilityRole="button" style={styles.buttonTab} />;
            } else if (idx === 4) {
              return (
                <TouchableOpacity
                  key={idx}
                  accessibilityRole="button"
                  onPress={() => setIndex(idx)}
                  style={styles.buttonTab}>
                  <Image source={Images.avatar.avatar_01} style={styles.avatar} />
                  {index === idx && (
                    <View style={[styles.dot, { backgroundColor: theme['color-primary-500'] }]} />
                  )}
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  key={idx}
                  accessibilityRole="button"
                  onPress={() => setIndex(idx)}
                  style={[
                    styles.buttonTab,

                    {
                      marginRight: idx === 1 ? 24 : undefined,
                      marginLeft: idx === 2 ? 24 : undefined,
                    },
                  ]}>
                  <Icon
                    pack="assets"
                    name={i}
                    style={[
                      styles.icon,
                      {
                        tintColor:
                          index === idx ? theme['color-warning-500'] : theme['color-basic-600'],
                      },
                    ]}
                  />
                  {index === idx && (
                    <View style={[styles.dot, { backgroundColor: theme['color-warning-500'] }]} />
                  )}
                </TouchableOpacity>
              );
            }
          },
        )}
      </View>
      <TouchableOpacity
        onPress={goBack}
        activeOpacity={0.7}
        style={[styles.scan, { bottom: bottom }]}>
        <Icon pack="assets" name="plus" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  viewBottomTab: {
    backgroundColor: 'transparent',
  },
  viewButtonTab: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  scan: {
    width: 56,
    height: 56,
    borderRadius: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#106AF3',
    borderWidth: 2,
    borderColor: '#122332',
    marginBottom: 4,
  },
  icon: {
    width: 20,
    height: 20,
  },
  dot: {
    width: 4,
    borderRadius: 4,
    height: 4,
    position: 'absolute',
    bottom: -6,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 12,
  },
});