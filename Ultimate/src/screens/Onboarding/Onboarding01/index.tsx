import React, {memo} from 'react';
import {Image, Platform} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Button, Icon } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import {Container, Content, VStack} from 'components';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
// ----------------------------- Elements -----------------------------------
import TextContent from './TextContent';
import ThemeLogo from 'elements/App/ThemeLogo';
import Pagination from 'elements/Onboarding/Pagination';


const Onboarding01 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const data = [
    {
      title: 'Private Wealth Management',
      describe:
        'Why would I want to trade an Event Contract over another asset class?',
      image: Images.onboarding.onboarding01,
    },
    {
      title: 'Private Wealth Management',
      describe:
        'Why would I want to trade an Event Contract over another asset class?',
      image: Images.onboarding.onboarding02,
    },
    {
      title: 'Private Wealth Management',
      describe:
        'Why would I want to trade an Event Contract over another asset class?',
      image: Images.onboarding.onboarding01,
    },
    {
      title: 'Private Wealth Management',
      describe:
        'Why would I want to trade an Event Contract over another asset class?',
      image: Images.onboarding.onboarding02,
    },
    {
      title: 'Private Wealth Management',
      describe:
        'Why would I want to trade an Event Contract over another asset class?',
      image: Images.onboarding.onboarding02,
    },
    {
      title: 'Private Wealth Management',
      describe:
        'Why would I want to trade an Event Contract over another asset class?',
      image: Images.onboarding.onboarding01,
    },
  ];

  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={
          <Pagination animValue={progress} data={data} space={12} />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          height={Platform.OS==='android'?560:560*(height/812)}
          width={width * 0.75}
          data={data}
          onProgressChange={(_, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          pagingEnabled
          style={{width: '100%'}}
          autoPlay={true}
          autoPlayInterval={1400}
          renderItem={({item, index}) => {
            return (
              <VStack style={{flex: 1, marginLeft: 24}}>
                <Image
                  style={{
                    width: 244 * (width / 375),
                    height: 387 * (height / 812),
                  }}
                  borderRadius={24}
                  source={item.image}
                />
                <TextContent
                  title={item.title}
                  animValue={progress}
                  index={index}
                  describe={item.describe}
                />
              </VStack>
            );
          }}
        />
      </Content>
      <Button
        style={styles.button}
        children={'Countinue'}
        onPress={goBack}
        accessoryRight={<Icon pack="assets" name="arrow-right" />}
      />
    </Container>
  );
});

export default Onboarding01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 12,
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
});
