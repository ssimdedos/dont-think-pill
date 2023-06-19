import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { NavigationAction, Container } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { IntroButtonProps } from 'types/element-types';
import { ECommerceStackParamList } from 'types/navigation-types';
import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

const ECommerceIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<ECommerceStackParamList>>();

  const data: IntroButtonProps[] = [
    {
      title: 'ECommerce01',
      onPress: () => {
        navigate('ECommerce01');
      },
    },
    {
      title: 'Inventory',
      onPress: () => {
        navigate('ECommerce04');
      },
    },
    {
      title: 'Customer Manager',
      onPress: () => {
        navigate('ECommerce05');
      },
    },
    {
      title: 'Card Product',
      onPress: () => {
        navigate('ECommerce10');
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
      <IntroList data={data} title="ECommerce" />
    </Container>
  );
});

export default ECommerceIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
