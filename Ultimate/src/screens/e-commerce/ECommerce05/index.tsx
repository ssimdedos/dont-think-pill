import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Icon, Input, Layout, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import FeatureItem from './FeatureItem';

import { IFeature } from './types';

const ECommerce05 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { bottom } = useLayout();

  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const data: IFeature[] = [
    { icon: 'archive-box', title: 'Categories', onPress: goBack },
    { icon: 'archive', title: 'Type', onPress: goBack },
    { icon: 'currency-circle-dollar', title: 'Price', onPress: goBack },
    { icon: 'cards', title: 'Stock', onPress: goBack },
  ];

  return (
    <Container>
      <TopNavigation accessoryLeft={<NavigationAction />} title="Add New Product" />
      <Content contentContainerStyle={styles.content}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={[styles.boxImage, { borderColor: theme['border-basic-color-3'] }]}>
          <Icon
            pack="assets"
            name="plus-circle"
            style={[styles.icon24, { tintColor: theme['text-platinum-color'] }]}
          />
          <Text category="subhead" status="platinum" marginTop={8}>
            Upload image
          </Text>
          <Text category="c1" status="platinum" marginTop={8}>
            (max 20)
          </Text>
        </TouchableOpacity>
        <Input
          style={styles.input}
          placeholder="Name Product"
          value={name}
          onChangeText={setName}
          accessoryRight={() => (
            <Text category="subhead" status="platinum">
              {name.length}/120
            </Text>
          )}
        />
        <Input
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          accessoryRight={() => (
            <Text category="subhead" status="platinum">
              {description.length}/120
            </Text>
          )}
        />
        <Text category="h3" marginTop={24} marginLeft={16}>
          General
        </Text>
        <Layout level="2" style={styles.box}>
          {data.map((i, idx) => {
            return <FeatureItem item={i} key={idx} />;
          })}
        </Layout>
      </Content>
      <Layout style={[styles.buttonView, { bottom }]}>
        <Button children="Save" style={styles.button1} onPress={goBack} />
        <Button children="Publish" style={styles.button2} onPress={goBack} />
      </Layout>
    </Container>
  );
});

export default ECommerce05;

const styles = StyleSheet.create({
  boxImage: {
    width: 132,
    height: 132,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    alignSelf: 'center',
    marginBottom: 8,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  input: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  box: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  button1: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#3E517A',
    borderColor: 'transparent',
  },
  button2: {
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 54 + 8 + 16,
  },
});
