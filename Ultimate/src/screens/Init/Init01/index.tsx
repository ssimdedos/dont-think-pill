import React, { memo, useCallback } from 'react';
import { Image, Platform, View } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Button, Icon } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import { Images } from 'assets/images';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { Container, Content, VStack } from 'components';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
// ----------------------------- Elements -----------------------------------
import TextContent from './TextContent';
import ThemeLogo from 'elements/App/ThemeLogo';
import Pagination from 'elements/Onboarding/Pagination';

const Init01 = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const onNext = useCallback(() => navigate('Init02'), []);
  const onSignIn = useCallback(() => navigate('SignIn'), []);

  const data = [
    {
      title: 'Personal Wealth Management',
      describe:
        'The only nutrition advisor fit for your daily habits and lifestyle!',
      image: Images.onboarding.onboarding01,
    },
    {
      title: 'No more restrictive diets!',
      describe: 'Eat what you want, and we will tell you what you need.',
      image: Images.onboarding.onboarding02,
    }
  ];

  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<Pagination animValue={progress} data={data} space={2} />}
      />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          height={Platform.OS === 'android' ? 560 : 560 * (height / 812)}
          width={width * 0.75}
          data={data}
          onProgressChange={(_, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          pagingEnabled
          style={{ width: '100%' }}
          autoPlay={true}
          autoPlayInterval={1400}
          renderItem={({ item, index }) => {
            return (
              <VStack style={{ flex: 1, marginLeft: 24 }}>
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          style={styles.button}
          children={'회원 가입'}
          onPress={onNext}
          accessoryRight={<Icon pack="assets" name="arrow-right" />}
        />
        <Button
          style={styles.button}
          children={'로그인'}
          onPress={onSignIn}
          accessoryRight={<Icon pack="assets" name="arrow-right" />}
        />
      </View>
    </Container>
  );
});

export default Init01;

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
    marginHorizontal: 120,
    marginBottom: 12,
  },
});
