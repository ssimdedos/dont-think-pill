import React, { memo } from 'react';
import { View, Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, LinearGradientText, Content, Text, HStack, VStack } from 'components';
import RateStar from './RateStar';
import { Images } from 'assets/images';
import BottomBarSocial from 'elements/Social/BottomBarSocial';

const Social09 = memo(() => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const data = React.useRef<number[]>([...new Array(5).keys()]).current;
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction />}
        accessoryRight={<NavigationAction icon="dot-six" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Text category="h2" center marginBottom={12} marginTop={8}>
          246 Review
        </Text>
        <HStack gap={4} itemsCenter justify="center">
          <Text category="h0" status="warning">
            4.8
          </Text>
          <RateStar rate={4.5} type="fill" />
        </HStack>
        <View style={styles.layout}>
          {/* @ts-ignore */}
          <Image source={Images.social.social05} style={styles.image} />
          <VStack gap={8}>
            <LinearGradientText
              text="Leave Review"
              colors={['#CFE1FD', '#FFFDE1']}
              textStyle={styles.titleLinear}
            />
            <HStack itemsCenter gap={4}>
              <Text category="h3" status="warning">
                4.8
              </Text>
              <RateStar rate={4.5} size={20} />
            </HStack>
          </VStack>
        </View>
        <Content horizontal contentContainerStyle={styles.contentReview}>
          {DATA.map((item, i) => {
            return (
              <VStack
                key={i}
                padding={24}
                style={{ width: 260 * (width / 375) }}
                level="2"
                border={16}
                gap={24}>
                <RateStar rate={4.5} type="fill" size={16} justify="flex-start" />
                <VStack gap={8}>
                  <LinearGradientText
                    text={item.title}
                    textStyle={styles.titleReview}
                    colors={['#CFE1FD', '#FFFDE1']}
                  />
                  <HStack itemsCenter justify="flex-start">
                    <Text category="h5" lineHeight={22}>
                      {item.artist}
                    </Text>
                    <Text category="subhead" status="placeholder" lineHeight={20} marginTop={2}>
                      {` - `}
                      {item.time}
                    </Text>
                  </HStack>
                  <Text category="body">{item.describe}</Text>
                </VStack>
                <HStack gap={8} justify="flex-start">
                  {item.images.map((image, index) => {
                    // @ts-ignore
                    return <Image source={image} key={index} style={styles.imageReview} />;
                  })}
                </HStack>
              </VStack>
            );
          })}
        </Content>
      </Content>
      <BottomBarSocial withLogo />
    </Container>
  );
});

export default Social09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
  },
  image: {
    width: 64,
    height: 58,
  },
  layout: {
    backgroundColor: 'color-primary-default',
    borderRadius: 16,
    gap: 12,
    flexDirection: 'row',
    padding: 24,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
  },
  titleLinear: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
  contentReview: {
    gap: 8,
    paddingHorizontal: 16,
  },
  titleReview: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
  imageReview: {
    width: 74,
    height: 72,
    borderRadius: 16,
  },
});

const DATA = [
  {
    rate: 4,
    title: 'Consumer Banking and Payments',
    artist: 'Albert Flores',
    time: '15 minutes ago',
    describe: 'Why would I want to trade an Event Contract over another asset class?',
    images: [Images.social.social03, Images.social.social04, Images.social.social02],
  },
  {
    rate: 4,
    title: 'Consumer Banking and Payments',
    artist: 'Albert Flores',
    time: '15 minutes ago',
    describe: 'Why would I want to trade an Event Contract over another asset class?',
    images: [Images.social.social03, Images.social.social04, Images.social.social02],
  },
];
