import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'components';
import { LinearGradient } from 'expo-linear-gradient';

import { IBanner } from './types';

interface BannerItemProps {
  item: IBanner;
}

const BannerItem: React.FC<BannerItemProps> = ({ item }) => {
  const { title, date, image } = item;

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <LinearGradient
          colors={['#000000', 'rgba(0, 0, 0, 0)']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.content}>
          <Text category="h3">{title}</Text>
          <Text category="c1" marginTop={8} status="platinum">
            {date}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default BannerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  image: {
    aspectRatio: 1 / 1,
    overflow: 'hidden',
    borderRadius: 24,
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    paddingBottom: 79,
  },
});
