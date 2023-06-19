import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, HStack, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Layout, Avatar, Button, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import { Images } from 'assets/images';

const Reading09 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { bottom } = useLayout();

  return (
    <Container>
      <TopNavigation
        style={styles.header}
        appearance="control"
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="bookmark-simple" />
            <NavigationAction icon="dots-three-vertical" />
          </View>
        }
      />
      <Content contentContainerStyle={{ paddingBottom: 72 }}>
        <Image
          source={{
            uri: 'https://user-images.githubusercontent.com/42206067/232290758-82286773-6be9-4083-a811-40ca04b6904f.png',
          }}
          style={styles.image}
        />
        <Layout level="success" style={styles.box}>
          <Text category="c2" uppercase>
            FREE BOOK
          </Text>
        </Layout>
        <Text category="h4" marginTop={8} center>
          Are You There, God? It's Me, Margaret
        </Text>
        <View style={styles.name}>
          <Avatar size="16" source={Images.avatar.avatar_01} />
          <Text marginLeft={8} category="subhead" style={{ color: theme['color-basic-900'] }}>
            Albert Flores
          </Text>
        </View>
        <HStack gap={24} style={styles.row}>
          <Text>🛵️ 10kms</Text>
          <Text>⭐️ 4/5</Text>
          <Text>⏰️ 24 mins read</Text>
        </HStack>
        <Layout level="2" style={styles.box1}>
          <Text category="h3">Introduce</Text>
          <Text marginTop={4} status="content">
            +0.00004869 BTC
          </Text>
          <Text marginTop={8} status="content">
            Check Out the Digital Art That Is Leaving
          </Text>
          <Text marginTop={8} status="content">
            Immersive and original artwork created for crypto, future-tech and blockchain investors.
          </Text>
          <Text marginTop={8} status="content">
            All images are available in limited edition prints for the highest quality possible.
            Printed wall art is the ideal gift for any crypto or art lover.
          </Text>
        </Layout>
      </Content>
      <Layout style={[styles.bottom, { paddingBottom: bottom + 8 }]}>
        <Button
          status="basic"
          style={styles.button1}
          accessoryLeft={() => (
            <Icon
              pack="assets"
              name="headphone"
              style={[styles.icon, { tintColor: theme['color-basic-1100'] }]}
            />
          )}
          onPress={goBack}>
          {() => (
            <Text category="h5" status="white">
              Listening
            </Text>
          )}
        </Button>
        <Button
          children="Reading"
          style={styles.button2}
          accessoryLeft={<Icon pack="assets" name="eye-glasses" />}
          onPress={goBack}
        />
      </Layout>
    </Container>
  );
});

export default Reading09;

const styles = StyleSheet.create({
  header: {
    marginBottom: -40,
    zIndex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 240,
    alignSelf: 'center',
  },
  box: {
    borderRadius: 12,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 16,
    alignSelf: 'center',
  },
  name: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  row: {
    marginTop: 8,
    alignSelf: 'center',
  },
  box1: {
    padding: 24,
    borderRadius: 24,
    marginTop: 24,
    marginHorizontal: 4,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 8,
    flexDirection: 'row',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button1: {
    flex: 1,
    marginRight: 8,
  },
  button2: {
    flex: 1,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});
