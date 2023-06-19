import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, Button, useTheme, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack, HStack } from 'components';
import Animated, { FadeInRight, interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import ButtonTab from './ButtonTab';
import { Images } from 'assets/images';
// import Clipboard from '@react-native-clipboard/clipboard';
import * as Clipboard from 'expo-clipboard';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

const Social06 = memo(() => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };
  const refCarousel = React.useRef<ICarouselInstance>(null);
  return (
    <Container style={styles.container}>
      <TopNavigation
        alignment="center"
        title={'Invite Friends'}
        accessoryLeft={<NavigationAction />}
      />
      <Content contentContainerStyle={styles.content}>
        <HStack gap={4}>
          {DATA_TAB.map((item, index) => {
            return (
              <ButtonTab
                key={index}
                item={item}
                active={activeIndex === index}
                onPress={() => {
                  setActiveIndex(index);
                  refCarousel.current?.scrollTo({ index: index, animated: true });
                }}
              />
            );
          })}
        </HStack>
        <Carousel
          ref={refCarousel}
          width={width - 8}
          height={580 * (height / 812)}
          style={{
            width: width - 8,
            height: 540 * (height / 812),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          data={DATA}
          customConfig={() => ({ type: 'positive', viewCount: DATA.length + 1 })}
          onSnapToItem={(e) => setActiveIndex(e)}
          mode="vertical-stack"
          modeConfig={{
            snapDirection: 'left',
            stackInterval: 18,
          }}
          renderItem={({ item, index, animationValue }) => {
            const styled = useAnimatedStyle(() => {
              const _background = interpolateColor(
                animationValue.value,
                [0, 1, 2, 3],
                [
                  theme['background-basic-color-2'],
                  theme['background-basic-color-3'],
                  theme['background-basic-color-2'],
                  theme['background-basic-color-3'],
                ],
              );
              return {
                backgroundColor: _background,
                borderRadius: 16,
                marginTop: 140 * (height / 812),
              };
            });
            return (
              <Animated.View
                style={styled}
                entering={FadeInRight.delay((DATA.length - index) * 100).duration(200)}>
                <VStack border={16}>
                  {/* @ts-ignore */}
                  <Image source={item.image} style={styles.image} />
                  <Text category={'h2'} status="warning" marginBottom={8} center>
                    {item.title}
                  </Text>
                  <Text category="body" center marginHorizontal={36}>
                    {item.desc}
                  </Text>
                  <VStack onPress={copyToClipboard} style={styles.refButton}>
                    <Text category="h6">{item.ref}</Text>
                  </VStack>
                  <HStack gap={8} mh={8} mb={20}>
                    <Button children="Copy" size="medium" style={styles.button} />
                    <Button children="Share" status="success" size="medium" style={styles.button} />
                  </HStack>
                </VStack>
              </Animated.View>
            );
          }}
        />
      </Content>
    </Container>
  );
});

export default Social06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 4,
  },
  refButton: {
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    marginHorizontal: 8,
    borderRadius: 16,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44,
    marginBottom: 16,
  },
  image: {
    width: 220,
    marginTop: -100,
    height: 200,
    alignSelf: 'center',
    marginBottom: 32,
  },
  button: {
    flex: 1,
  },
});
const DATA_TAB = [
  {
    title: 'Earning',
    earn: '$33,680.16',
    desc: '+$200 this week',
  },
  {
    title: 'Invite',
    earn: '$180.16',
    desc: '+4 waiting',
  },
];
const DATA = [
  {
    image: Images.social.social05,
    title: 'You $5, Friends 5$',
    desc: 'Invite your friend to Ultimate Mobile App UI KIT and both get gift from us.',
    ref: 'Ultimatelinkref/ULR1313',
  },
  {
    image: Images.social.social05,
    title: 'Invite',
    desc: 'Invite your friend to Ultimate Mobile App UI KIT and both get gift from us.',
    ref: 'Ultimatelinkref/ULR1313',
  },
];
