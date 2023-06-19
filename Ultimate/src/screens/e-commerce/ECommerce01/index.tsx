import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, CurrencyText, LinearGradientText, NavigationAction, Text } from 'components';
import { useTheme, Avatar, Icon, Layout, TopNavigation } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';


import { Images } from 'assets/images';
import { LinearGradient } from 'expo-linear-gradient';

const ECommerce01 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const data = [
    {
      title: 'Pending',
      number: 36,
    },
    {
      title: 'Shipping',
      number: 236,
    },
    {
      title: 'Return/Refunds',
      number: 13,
    },
    {
      title: 'Review',
      number: 108,
    },
  ];

  const data_feature = [
    {
      icon: 'house-simple',
      color: theme['color-primary-500'],
      name: 'My Product',
    },
    {
      icon: 'money',
      color: theme['color-success-500'],
      name: 'Finance',
    },
    {
      icon: 'chart-bar-1',
      color: theme['color-secondary-500'],
      name: 'Analytics',
    },
  ];

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="bell" />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="chat-circle-text" />
            <NavigationAction icon="circles-four" />
          </View>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Avatar size="56" source={Images.avatar.avatar_01} />
          <View style={styles.contentHeader}>
            <Text category="h3">Ultimate UI KIT</Text>
            <View style={styles.rowHeader}>
              <Text marginRight={4}>Linkstorehere</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => Alert.alert('Copied successfully')}>
                <Icon pack="assets" name="copy" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={goBack}
            activeOpacity={0.7}
            style={[styles.boxHeader, { backgroundColor: theme['color-primary-500'] }]}>
            <Icon pack="assets" name="arrow-right" />
          </TouchableOpacity>
        </View>
        <Layout level="primary" style={styles.box}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Total Balance"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            textStyle={styles.titleText}
          />
          <CurrencyText category="h0" status="white" center marginTop={8}>
            12860.44
          </CurrencyText>
          <LinearGradient
            colors={['#CFE1FD', '#FFFDE1']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.box1}>
            <Text status="black" category="c1">
              $3,462.8 Withdraw
            </Text>
          </LinearGradient>
          <Text status="white" opacity={0.5} marginTop={24}>
            update 20:18 today
          </Text>
        </Layout>
        <Layout level="2" style={styles.box2}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Order Summary"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            textStyle={styles.orderSummary}
          />
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={goBack}
                key={index}
                style={[
                  styles.item,
                  {
                    borderBottomColor:
                      index < data.length - 1 ? theme['border-basic-color-3'] : 'transparent',
                  },
                ]}>
                <Text category="body">{item.title}</Text>
                <View style={styles.row}>
                  <Text category="h5" status={index === 0 ? 'warning' : 'platinum'} marginRight={4}>
                    {item.number}
                  </Text>
                  <Icon
                    pack="assets"
                    name="arrow-right"
                    style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </Layout>
        <View style={styles.featureView}>
          {data_feature.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={goBack}
                key={index}
                style={styles.feature}>
                <View style={[styles.iconView, { backgroundColor: item.color }]}>
                  <Icon pack="assets" name={item.icon} style={styles.icon20} />
                </View>
                <Text marginTop={8}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Content>
    </Container>
  );
});

export default ECommerce01;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 4,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  contentHeader: {
    flex: 1,
    marginLeft: 16,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  boxHeader: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
  },
  box: {
    marginTop: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  box1: {
    marginTop: 8,
    paddingHorizontal: 12,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  box2: {
    marginTop: 4,
    paddingTop: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  item: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  featureView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 20,
  },
  feature: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    width: 52,
    height: 52,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon20: {
    width: 20,
    height: 20,
  },
  orderSummary: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginBottom: 8,
  },
});
