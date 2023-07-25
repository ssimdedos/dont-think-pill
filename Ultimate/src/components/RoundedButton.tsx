import * as React from 'react';
import { TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native';
import { StyleService, useTheme, Icon, Avatar, Layout } from '@ui-kitten/components';
import { Images } from 'assets/images';

interface IRoundedButtonProps {
  onPress?(): void;
  status?: 'basic' | 'placeholder' | 'primary' | 'transparent' | 'white';
  icon?: string;
  size?: number;
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
  isBasic?: boolean;
}

const RoundedButton = React.memo(
  ({
    onPress,
    status = 'basic',
    icon = 'arrow-right',
    size = 56,
    activeOpacity = 0.7,
    style,
    isBasic,
  }: IRoundedButtonProps) => {
    const theme = useTheme();

    const getColor = () => {
      switch (status) {
        case 'basic':
          return theme['color-basic-200'];
        case 'white':
          return theme['color-basic-1100'];
        case 'primary':
          return theme['color-primary-300'];
        case 'placeholder':
          return `${theme['color-primary-default']}30`;
        case 'transparent':
          return theme['color-primary-default'];
      }
    };
    const getTintColor = () => {
      switch (status) {
        case 'basic':
          return theme['text-primary-color'];
        case 'primary':
          return theme['text-basic-color'];
        case 'placeholder':
          return theme['color-primary-default'];
        case 'transparent':
          return theme['text-basic-color'];
      }
    };
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={[
          {
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <Avatar
          shape="rounded"
          source={Images.rounded}
          style={{
            width: size,
            height: size,
            tintColor: getColor(),
            zIndex: -10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        />
        {status === 'transparent' && (
          <Avatar
            shape="rounded"
            source={Images.rounded}
            style={{
              width: size - 2,
              height: size - 2,
              tintColor: theme['background-basic-color-1'],
              zIndex: -10,
              position: 'absolute',
              top: 1,
              left: 1,
              right: 1,
              bottom: 1,
            }}
          />
        )}
        <Icon
          pack="assets"
          name={icon}
          style={{
            width: 20,
            height: 20,
            zIndex: 100,
            tintColor: isBasic ? null : getTintColor(),
          }}
        />
      </TouchableOpacity>
    );
  },
);

export default RoundedButton;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
