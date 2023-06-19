import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { NavigationAction, Container } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

import { IntroButtonProps } from 'types/element-types';
import { ReadingStackParamList } from 'types/navigation-types';

const ReadingIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<ReadingStackParamList>>();

  const data: IntroButtonProps[] = [
    {
      title: 'Main Seller',
      onPress: () => {
        navigate('Reading04');
      },
    },
    {
      title: 'Book Details',
      onPress: () => {
        navigate('Reading09');
      },
    },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon="close" />}
      />
      <IntroList data={data} title="Reading" />
    </Container>
  );
});

export default ReadingIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
