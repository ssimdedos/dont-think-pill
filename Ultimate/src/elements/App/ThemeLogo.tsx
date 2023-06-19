import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Images } from 'assets/images';
// ----------------------------- @Types -----------------------------------
import { IThemeLogoProps } from 'types/element-types';

const ThemeLogo = ({ source, style, size = 40, onPress }: IThemeLogoProps) => {
  const getSource = () => {
    if (source) {
      return source;
    } else {
      return Images.dark_logo;
    }
  };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Image source={getSource()} style={[styles.image, { width: size, height: size }, style]} />
    </TouchableOpacity>
  );
};

export default ThemeLogo;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
