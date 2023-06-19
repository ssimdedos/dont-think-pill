import React from 'react';
import { Text } from 'components';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Icon, Layout, useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { IPost } from './types';

interface PostItemProps {
  style?: ViewStyle;
  item: IPost;
  onPress?(): void;
}

const PostItem: React.FC<PostItemProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { image, title, date } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { width: (width - 12) / 2 },
        { backgroundColor: theme['background-basic-color-2'] },
        style,
      ]}
      onPress={onPress}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <View style={styles.row}>
        <Layout level="primary" style={styles.box}>
          <Text category="c2" status="white">
            Crypto
          </Text>
        </Layout>
        <Icon pack="assets" name="bookmark" style={styles.icon} />
      </View>
      <Text category="h6" marginTop={8}>
        {title}
      </Text>
      <Text category="c1" status="platinum" marginTop={8}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 16,
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: 136,
    borderRadius: 8,
  },
  row: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
