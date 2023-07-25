import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, LinearGradientText, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation } from '@ui-kitten/components';
import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import TabBar from './TabBar';
import TabItem from './TabItem';
import PostItem from './PostItem';
import BannerItem from './BannerItem';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from 'elements/Onboarding/Pagination';

import { IBanner, IPost, ITab } from './types';
import { data_banner, data_post, data_tabs } from './data';

const Reading04 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();
  const progress = useSharedValue(0);

  const renderTopToken = React.useCallback(({ item }: { item: ITab }) => {
    return <TabItem item={item} style={styles.tab} />;
  }, []);

  const renderBanner = React.useCallback(({ item }: { item: IBanner }) => {
    return <BannerItem item={item} />;
  }, []);

  const renderPost = React.useCallback(({ item }: { item: IPost }) => {
    return <PostItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="equals" />}
        accessoryRight={<NavigationAction icon="bookmark-simple" />}
      />
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Explore"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.titleText}
        />
        <FlatList
          style={styles.tabList}
          data={data_tabs || []}
          renderItem={renderTopToken}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          horizontal
          contentContainerStyle={styles.tabContent}
        />
        <View>
          <Carousel
            style={styles.carousel}
            height={width}
            width={width}
            data={data_banner}
            onProgressChange={(_, absoluteProgress) => {
              progress.value = absoluteProgress;
            }}
            pagingEnabled
            autoPlay={true}
            autoPlayInterval={5000}
            renderItem={renderBanner}
          />
          <Pagination
            style={styles.dot}
            animValue={progress}
            inactiveColor={theme['background-basic-color-4']}
            activeColor={theme['color-basic-1100']}
            data={data_banner}
            size={6}
            space={12}
          />
        </View>
        <View style={styles.row}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Hot Post"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            textStyle={styles.hostPostText}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Text category="h5" status="primary">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data_post || []}
          renderItem={renderPost}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          snapToInterval={(width - 8) / 2}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          style={styles.postList}
          contentContainerStyle={styles.postContent}
        />
      </Content>
      <TabBar />
    </Container>
  );
});

export default Reading04;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginBottom: 16,
  },
  tab: {
    marginRight: 4,
  },
  tabList: {
    flexGrow: 0,
  },
  tabContent: {
    paddingLeft: 16,
    paddingRight: 12,
  },
  carousel: {
    marginTop: 16,
  },
  dot: {
    position: 'absolute',
    bottom: 24,
  },
  hostPostText: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  item: {
    marginRight: 4,
  },
  postList: {
    flexGrow: 0,
  },
  postContent: {
    paddingLeft: 4,
  },
  content: {
    paddingBottom: 4 + 56 + 8,
  },
});
