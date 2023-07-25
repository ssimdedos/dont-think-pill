import * as React from 'react';
import { ColorValue, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon } from '@ui-kitten/components';
// ----------------------------- Components & Elements -----------------------------------
import { HStack } from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';

interface IBottomBarSocialProps {
  withLogo?: boolean;
  activeButtonColor?: string | ColorValue;
  iconActiveColor?: string | ColorValue;
  style?: StyleProp<ViewStyle> | undefined;
}

const BottomBarSocial = ({
  withLogo = false,
  activeButtonColor,
  iconActiveColor,
  style,
}: IBottomBarSocialProps) => {
  const styles = useStyleSheet(themedStyles);
  const [activeTab, setActive] = React.useState(4);
  const _onPress = (index: number) => () => {
    setActive(index);
  };
  const data = [
    { icon: 'house' },
    { icon: 'calendar' },
    { icon: 'logo' },
    { icon: 'gear-six' },
    { icon: 'user' },
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
              onPress={_onPress(i)}>
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

export default BottomBarSocial;

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
