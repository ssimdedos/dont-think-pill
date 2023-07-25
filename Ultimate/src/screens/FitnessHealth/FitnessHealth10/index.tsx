import * as React from 'react';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Button, Icon, TopNavigation } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  HStack,
  LinearGradientText,
  NavigationAction,
  VStack,
} from 'components';
import TabBar from './TabBar';
// ----------------------------- Carousel -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import { interpolate, interpolateColor } from 'react-native-reanimated';

const FitnessHealth10 = () => {
  const { goBack } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [atIndex, setAtIndex] = React.useState<number>(0);

  const animationStyle = React.useCallback((value: number) => {
    'worklet';
    const translateY = interpolate(value, [-1, 0, 1], [-40, 0, 40]);
    const _width = interpolate(value, [-3, -2, -1, 0, 1, 2, 3], [86, 100, 120, 160, 120, 100, 86]);
    const _opacity = interpolate(value, [-6, 0, 6], [0, 4, 0]);
    const _backgroundColor = interpolateColor(
      value,
      [-1, 0, 1],
      ['#E8E9EB20', '#FFFFFF', '#E8E9EB20'],
    );
    return {
      opacity: _opacity,
      transform: [{ translateY }],
      width: _width,
      backgroundColor: _backgroundColor,
      borderRadius: 8,
      height: 24,
    };
  }, []);

  const PAGE_HEIGHT = 332 * (height / 812);
  const PAGE_WIDTH = 160 * (width / 375);

  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={32} mt={20}>
          <LinearGradientText
            text={`What is\nyour weight`}
            textStyle={styles.title}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <TabBar tabs={['Kg', 'Lb']} index={selectedIndex} setIndex={setSelectedIndex} />
        </VStack>
        <HStack level="2" style={styles.carousel}>
          <Carousel
            loop={false}
            vertical
            style={{
              width: PAGE_WIDTH,
              height: PAGE_HEIGHT,
              justifyContent: 'center',
            }}
            onProgressChange={(e, _) => {
              setAtIndex(_);
            }}
            defaultIndex={40}
            onScrollEnd={(e) => setAtIndex(e)}
            onSnapToItem={(e) => setAtIndex(e)}
            width={PAGE_WIDTH}
            pagingEnabled={false}
            height={24}
            data={[...Array(201).keys()]}
            customAnimation={animationStyle}
            renderItem={({ item, index }) => {
              return <VStack key={index} />;
            }}
          />
          <LinearGradientText text={parseInt(atIndex.toFixed(0))} textStyle={styles.textLinear} />
        </HStack>
      </Content>
      <Button
        style={styles.button}
        children={'Next'}
        onPress={goBack}
        accessoryRight={<Icon pack="assets" name={'caret-right'} />}
      />
    </Container>
  );
};
export default FitnessHealth10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  button: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  carousel: {
    borderRadius: 24,
    backgroundColor: 'background-basic-color-2',
    padding: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  textLinear: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'SpaceGrotesk-Bold',
  },
});
