import React from 'react';
import { Container, LinearGradientText, NavigationAction, RoundedButton } from 'components';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  Image,
} from 'react-native';
import { useTheme, TopNavigation, Icon, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import BottomTab from './BottomTab';
import ProductItem from './ProductItem';

import { IProduct } from './types';
import { data_products } from './data';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Images } from 'assets/images';

const ECommerce10 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();

  const translationX = useSharedValue(0);
  const scrollRef = useAnimatedRef<ScrollView>();

  const [index, setIndex] = React.useState<number>(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ x: width * index, animated: true });
  }, [index]);

  const onScrollEnd = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      let e = event.nativeEvent.targetContentOffset?.x;
      if (!!e) {
        setIndex(e / width);
      } else {
        setIndex(0);
      }
    },
    [scrollRef],
  );

  const renderItem = React.useCallback(
    ({ item, index: _index }: { item: IProduct; index: number }) => {
      return <ProductItem item={item} index={_index} translationX={translationX} />;
    },
    [translationX],
  );

  return (
    <Container>
      <TopNavigation
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction status="warning" icon="bell-simple" />
            <NavigationAction status="warning" icon="dots-three-vertical" />
          </View>
        }
      />
      <View style={styles.header}>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text={'Items you\nWant?'}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={[styles.search, { backgroundColor: theme['color-success-500'] }]}>
          <Icon
            pack="assets"
            name="search"
            style={[styles.icon20, { tintColor: theme['color-basic-1100'] }]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.flexOne}>
          <Image source={Images.eCommerce.background_1} style={styles.background1} />
          <FlatList
            data={data_products || []}
            renderItem={renderItem}
            horizontal
            scrollEventThrottle={16}
            keyExtractor={(i, _index) => `${_index}`}
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            pagingEnabled={false}
          />
          <Image source={Images.eCommerce.background_2} style={styles.background2} />
        </View>
        <View style={[StyleSheet.absoluteFill]}>
          <Animated.ScrollView
            ref={scrollRef as any}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToInterval={width}
            bounces={false}
            pagingEnabled={false}
            decelerationRate="fast"
            onScroll={scrollHandler}
            style={{ width: width }}
            contentContainerStyle={{ width: width * data_products.length }}
            onScrollEndDrag={(event) => onScrollEnd(event)}
          />
          <View style={[StyleSheet.absoluteFill, styles.box]}>
            <RoundedButton
              status={index > 0 ? 'primary-1' : 'platinum'}
              activeOpacity={index > 0 ? 0.7 : 1}
              icon="arrow-left"
              size={64}
              onPress={() => {
                if (index > 0) {
                  setIndex(index - 1);
                }
              }}
            />
            <RoundedButton
              status={index < data_products.length - 1 ? 'primary-1' : 'platinum'}
              activeOpacity={index < data_products.length - 1 ? 0.7 : 1}
              icon="arrow-right"
              size={64}
              onPress={() => {
                if (index < data_products.length - 1) {
                  setIndex(index + 1);
                }
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={[styles.button1, { backgroundColor: theme['background-basic-color-2'] }]}>
          <Icon
            pack="assets"
            name="heart"
            style={[styles.icon16, { tintColor: theme['color-basic-1100'] }]}
          />
        </TouchableOpacity>
        <Button children="Buy Now" onPress={goBack} style={styles.button2} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={[styles.button3, { backgroundColor: theme['background-basic-color-2'] }]}>
          <Icon
            pack="assets"
            name="shopping-cart"
            style={[styles.icon16, { tintColor: theme['color-basic-1100'] }]}
          />
        </TouchableOpacity>
      </View>
      <BottomTab />
    </Container>
  );
});

export default ECommerce10;

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon20: {
    width: 20,
    height: 20,
  },
  search: {
    width: 52,
    height: 52,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 38,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  content: {
    marginTop: 24,
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    height: 62,
    paddingHorizontal: 38,
    paddingBottom: 8,
  },
  button1: {
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  button2: {
    flex: 1,
    marginHorizontal: 8,
  },
  button3: {
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  box: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
  flexOne: {
    flex: 1,
  },
  background1: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: -1,
  },
  background2: {
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: -1,
  },
});
