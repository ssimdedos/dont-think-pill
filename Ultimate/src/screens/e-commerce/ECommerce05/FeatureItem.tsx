import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';
import { Text } from 'components';

import { IFeature } from './types';

interface FeatureItemProps {
  item: IFeature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ item }) => {
  const theme = useTheme();
  const { icon, title, onPress } = item;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
      <Layout level="3" style={styles.box}>
        <Icon
          pack="assets"
          name={icon}
          style={[styles.icon28, { tintColor: theme['text-basic-color'] }]}
        />
      </Layout>
      <View style={styles.content}>
        <Text category="h5">{title}</Text>
      </View>
      <Icon
        pack="assets"
        name="caret-right"
        style={[styles.icon24, { tintColor: theme['text-platinum-color'] }]}
      />
    </TouchableOpacity>
  );
};

export default FeatureItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  box: {
    width: 48,
    aspectRatio: 1 / 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon28: {
    width: 28,
    height: 28,
  },
  icon24: {
    width: 24,
    height: 24,
  },
});
