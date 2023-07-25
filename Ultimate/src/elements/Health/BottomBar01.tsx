import * as React from 'react';
import { ColorValue, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon } from '@ui-kitten/components';
// ----------------------------- Components & Elements -----------------------------------
import { HStack } from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';
import MainNavigator from 'navigation/MainNavigator';

interface IBottomBarSocialProps {
  withLogo?: boolean;
  activeButtonColor?: string | ColorValue;
  iconActiveColor?: string | ColorValue;
  style?: StyleProp<ViewStyle> | undefined;
  onHome?: Function | any;
  onDaily?: Function | any;
  onWeekly?: Function | any;
  onDiagnose?: Function | any;
}

const BottomBar01 = ({
  withLogo = false,
  activeButtonColor,
  iconActiveColor,
  style,
  onHome,
  onDaily,
  onWeekly,
  onDiagnose,
}: IBottomBarSocialProps) => {
  const styles = useStyleSheet(themedStyles);
  const [activeTab, setActive] = React.useState(4);

  // const funcList = [onHome(), onDaily(), onWeekly(), onDiagnose()];

  const _onPress = (index: number) => () => {
    setActive(index);
  };
  
  const data = [
    { icon: 'house', func: onHome },
    { icon: 'calendar', func: onDaily },
    { icon: 'timer', func: onWeekly },
    { icon: 'user', func: onDiagnose },
  ];
  return (
    <HStack style={styles.container} level="1">
      {data &&
        data.map((item, i) => {
          const isActive = activeTab === i;
          return item.icon === 'logo' && withLogo ? (
            <ThemeLogo key={'logo'} />
          ) : item.icon !== 'logo' ? (
            <TouchableOpacity
              key={i}
              style={[
                styles.button,
                isActive && styles.activeButton,
                isActive && { backgroundColor: activeButtonColor },
              ]}
                onPress={() => {
                  _onPress(i);
                  item.func();
              }}>
              <Icon
                pack="assets"
                name={item.icon}
                style={[
                  styles.icon,
                  isActive && styles.activeIcon,
                  isActive && { tintColor: iconActiveColor },
                ]}
              />
            </TouchableOpacity>
          ) : null;
        })}
    </HStack>
  );
};

export default BottomBar01;

const themedStyles = StyleService.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {
    padding: 8,
    borderRadius: 99,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-platinum-color',
  },
  activeIcon: {
    tintColor: 'text-white-color',
  },
  activeButton: {
    backgroundColor: 'color-primary-default',
  },
});
