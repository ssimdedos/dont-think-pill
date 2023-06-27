import React from 'react';
import { CurrencyText, Text } from 'components';
import { Image, StyleSheet, ViewStyle, View } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { IProduct } from './types';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

interface ProductItemProps {
  style?: ViewStyle;
  item: IProduct;
  index: number;
  translationX: Animated.SharedValue<number>;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, style, index, translationX }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { name, image, min_price, max_price, description, color } = item;

  const opacityAnim = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      opacity: opacity,
    };
  });

  return (
    <Animated.View
      style={[
        opacityAnim,
        styles.container,
        {
          zIndex: 1,
          width: width - 38 * 2,
          backgroundColor: theme['background-basic-color-2'],
        },
        style,
      ]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text category="h2" marginTop={24} center>
        {name}
      </Text>
      <View style={styles.row}>
        <CurrencyText category="h4" status="warning" marginRight={8}>
          {min_price}
        </CurrencyText>
        <CurrencyText status="platinum">{max_price}</CurrencyText>
      </View>
      <Text marginTop={8} center>
        {description}
      </Text>
      <Text center>{color}</Text>
    </Animated.View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    position: 'absolute',
    marginLeft: 38,
  },
  image: {
    width: 200,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  row: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
