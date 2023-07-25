import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Icon, TopNavigationAction } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import Text from './Text';
import { NavigationActionProps } from '../types/component-types';

const NavigationAction = memo(
  ({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    onPress,
    icon,
    title,
    size = 'large',
    titleStatus,
    borderRadius = 99,
    disabled,
    style,
    borderWidth,
    status = 'basic',
  }: NavigationActionProps) => {
    const themes = useTheme();

    const { goBack } = useNavigation();
    const _onPress = React.useCallback(() => {
      if (onPress) {
        onPress && onPress();
      } else {
        goBack();
      }
    }, [onPress, goBack]);

    const getBackground = React.useCallback(() => {
      switch (status) {
        case 'basic':
          return 'transparent';
        case 'primary':
          return themes['color-primary-default'];
        case 'placeholder':
          return themes['background-basic-color-2'];
        case 'warning-fill':
          return themes['color-warning-default'];
        default:
          return 'transparent';
      }
    }, [status]);
    const getStatus = React.useCallback(() => {
      switch (status) {
        case 'basic':
          return themes['text-basic-color'];
        case 'primary':
          return themes['text-info-color'];
        case 'warning-fill':
          return themes['text-primary-color'];
        case 'white':
          return themes['text-white-color'];
        case 'warning':
          return themes['color-warning-500'];
        default:
          return themes['text-basic-color'];
      }
    }, [status]);

    const getSizeIcon = () => {
      switch (size) {
        case 'giant':
          return 28;
        case 'large':
          return 24;
        case 'medium':
          return 16;
        case 'small':
          return 12;
        default:
          return 24;
      }
    };
    const getSizeButton = (): number => {
      switch (size) {
        case 'giant':
          return 48;
        case 'large':
          return 40;
        case 'medium':
          return 32;
        case 'small':
          return 12;
        default:
          return 24;
      }
    };

    return title ? (
      <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={_onPress}>
        <Text category="h5" status={titleStatus}>
          {title}
        </Text>
      </TouchableOpacity>
    ) : (
      <TopNavigationAction
        onPress={_onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[
          styles.container,
          style,
          {
            borderRadius: borderRadius,
            marginBottom: marginBottom,
            marginTop: marginTop,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginHorizontal: marginHorizontal,
            marginVertical: marginVertical,
            borderWidth: borderWidth ? borderWidth : 0,
            borderColor: getStatus(),
            backgroundColor: getBackground(),
            height: getSizeButton(),
            width: getSizeButton(),

          },
        ]}
        icon={(props) => (
          <Icon
            {...props}
            pack="assets"
            name={icon || 'arrow-left'}
            style={[
              {
                height: getSizeIcon(),
                width: getSizeIcon(),
                tintColor: getStatus(),
              },
            ]}
          />
        )}
      />
    );
  },
);

export default NavigationAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
});
