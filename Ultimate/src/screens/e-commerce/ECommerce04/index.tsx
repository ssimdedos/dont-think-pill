import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Button, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import ProductItem from './ProductItem';
import { LinearGradient } from 'expo-linear-gradient';

import { IProduct } from './types';
import { data_products } from './data';

const ECommerce04 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { bottom } = useLayout();
  const refScroll = React.useRef<FlatList>(null);

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  React.useEffect(() => {
    refScroll.current?.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [selectedIndex]);

  const data_tabs = ['In Stock (4)', 'Out of Stock (13)', 'Pending (8)'];

  const renderTab = React.useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedIndex(index)}>
          <LinearGradient
            colors={
              selectedIndex === index
                ? ['#CFE1FD', '#FFFDE1']
                : [theme['background-basic-color-1'], theme['background-basic-color-1']]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.tab}>
            <Text category="h5" status={selectedIndex === index ? 'black' : 'note'}>
              {item}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    },
    [selectedIndex],
  );

  const renderItem = React.useCallback(({ item, index }: { item: IProduct; index: number }) => {
    return <ProductItem item={item} onPress={goBack} style={styles.item} index={index} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="search" status="warning" marginRight={8} />
            <NavigationAction icon="chat-circle-text" status="warning" />
          </View>
        }
      />
      <Text category="h0" marginLeft={16} marginBottom={16}>
        Inventory
      </Text>
      <FlatList
        ref={refScroll}
        data={data_tabs || []}
        renderItem={renderTab}
        horizontal
        scrollEventThrottle={16}
        keyExtractor={(i, index) => `${index}`}
        style={styles.style}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
      <FlatList
        data={data_products}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Button
        accessoryLeft={<Icon pack="assets" name="plus-circle" />}
        children="Add New Product"
        onPress={goBack}
        style={[styles.button, { bottom: bottom + 2 }]}
      />
    </Container>
  );
});

export default ECommerce04;

const styles = StyleSheet.create({
  style: {
    flexGrow: 0,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
    height: 38,
    marginRight: 8,
  },
  content: {
    paddingLeft: 8,
    marginBottom: 16,
  },
  item: {
    marginBottom: 4,
    marginHorizontal: 8,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 54 + 2,
  },
  button: {
    position: 'absolute',
    right: 16,
    left: 16,
  },
});
