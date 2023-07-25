import React from 'react';
import { Text } from 'components';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { ITab } from './types';

interface TabItemProps {
  style?: ViewStyle;
  item: ITab;
}

const TabItem: React.FC<TabItemProps> = ({ item, style }) => {
  const { color, title } = item;
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <Text category="c2" status="white">
        {title}
      </Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    height: 29,
    paddingHorizontal: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
