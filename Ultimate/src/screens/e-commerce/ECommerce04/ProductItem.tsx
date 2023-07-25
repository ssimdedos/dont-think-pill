import React from 'react';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { CurrencyText, Text } from 'components';
import { useTheme } from '@ui-kitten/components';

import { IProduct } from './types';
import { goBack } from 'navigation/root-navigation';

interface ProductItemProps {
  style?: ViewStyle;
  item: IProduct;
  onPress?(): void;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, onPress, style }) => {
  const theme = useTheme();
  const { name, rate, sales, min_amount, max_amount, image, views } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <View style={[styles.row, { borderBottomColor: theme['border-basic-color-3'] }]}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text category="h5">{name}</Text>
          <CurrencyText category="h4" status="warning" marginTop={8}>
            {min_amount}
          </CurrencyText>
        </View>
      </View>
      <View style={styles.row1}>
        <Text category="subhead" status="placeholder">
          🛵 {sales} Sales
        </Text>
        <Text category="subhead" status="placeholder">
          💸 ${max_amount}
        </Text>
      </View>
      <View style={styles.row1}>
        <Text category="subhead" status="placeholder">
          💸 {views} views
        </Text>
        <Text category="subhead" status="placeholder">
          ⭐ {rate}/5
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={[styles.button1, { backgroundColor: theme['background-basic-color-3'] }]}>
          <Text category="c1" status="platinum">
            Hide
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={[styles.button2, { backgroundColor: theme['background-basic-color-3'] }]}>
          <Text category="c1" status="platinum">
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  image: {
    width: 56,
    aspectRatio: 1 / 1,
    marginRight: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  bottomView: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button1: {
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 32,
  },
  button2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 32,
    backgroundColor: 'blue',
  },
});
