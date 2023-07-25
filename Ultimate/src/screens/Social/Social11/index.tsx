import React from 'react';
import { Container, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useTheme, TopNavigation, Icon, Layout, Avatar, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import AnswerItem from './AnswerItem';
import ProgressBar from './ProgressBar';

import { IAnswer } from './types';
import { data_answers } from './data';

const Social11 = React.memo(() => {
  const theme = useTheme();
  const { bottom } = useLayout();
  const { goBack } = useNavigation();

  const [selectedAnswer, setSelectedAnswer] = React.useState<IAnswer>(data_answers[1]);

  const avatar =
    'https://user-images.githubusercontent.com/42206067/226666751-5a151e7f-04e1-443f-9057-0a2cf66a6078.png';

  const listHeaderComponent = React.useCallback(() => {
    return (
      <Layout level="2" style={styles.header}>
        <View style={styles.top}>
          <Avatar size="48" source={{ uri: avatar }} />
          <View style={styles.contentHeader}>
            <Layout level="3" style={styles.box}>
              <Text category="c2">Survey</Text>
            </Layout>
            <Text category="h5" marginTop={4}>
              Demographic Smoke Survey
            </Text>
            <Text category="c1" status="platinum" marginTop={4}>
              Consumers cognitive demo
            </Text>
          </View>
        </View>
        <ProgressBar progress={3 / 10} height={8} style={styles.progressBar} />
        <View style={styles.row}>
          <Text category="subhead">3</Text>
          <Text category="subhead" status="grey">
            10
          </Text>
        </View>
        <Text marginTop={8} category="h4">
          Does Kalshi have pattern day-trading restrictions?
        </Text>
      </Layout>
    );
  }, []);

  const renderItem = React.useCallback(
    ({ item }: { item: IAnswer }) => {
      return (
        <AnswerItem
          style={styles.item}
          item={item}
          selectedItem={selectedAnswer}
          onPress={() => setSelectedAnswer(item)}
        />
      );
    },
    [selectedAnswer],
  );

  return (
    <Container>
      <TopNavigation
        accessoryLeft={
          <TouchableOpacity activeOpacity={0.7} onPress={goBack} style={styles.left}>
            <Icon
              pack="assets"
              name="caret-left"
              style={[styles.icon, { tintColor: theme['text-basic-color'] }]}
            />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={data_answers || []}
        renderItem={renderItem}
        keyExtractor={(i, idx) => `${idx}`}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Layout style={[styles.buttonView, { paddingBottom: bottom + 4 }]}>
        <Button children="Next" onPress={goBack} />
      </Layout>
    </Container>
  );
});

export default Social11;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  left: {
    width: 40,
    height: 40,
    backgroundColor: '#313037',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  header: {
    borderRadius: 16,
    marginTop: 8,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHeader: {
    flex: 1,
    marginLeft: 12,
  },
  box: {
    borderRadius: 4,
    height: 20,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  progressBar: {
    marginTop: 24,
  },
  item: {
    marginTop: 16,
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  contentContainerStyle: {
    paddingBottom: 8 + 54 + 16,
  },
});
