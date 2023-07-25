import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@utils/fonts';

import colors from '@utils/colors';
import {LinearGradient} from "expo-linear-gradient";

const CardItem = (props) => {
  const {
    cardColor,
    colorLinear1,
    colorLinear2,
    cardNumber,
    userName,
    date,
  } = props;
  return (
    <View style={[styles.container, { backgroundColor: cardColor }]}>
      {colorLinear1 && colorLinear2 ? (
        <LinearGradient
          colors={[colorLinear1, colorLinear2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        />
      ) : null}
      <Text style={styles.txtVisa}>Visa</Text>
      <Text style={styles.txtNumberCard}>{cardNumber}</Text>
      <View style={styles.btmCard}>
        <Text style={styles.txtName}>{userName}</Text>
        <Text style={styles.txtDate}>{date}</Text>
      </View>
      <Text style={styles.txtDebit}>debit</Text>
    </View>
  );
};

export default CardItem;

const styles = ScaledSheet.create({
  container: {
    width: 300,
    height: 180,
    borderRadius: 16,
    paddingHorizontal: 24,
    marginRight: 16,
  },
  linearGradient: {
    width: 300,
    height: 180,
    borderRadius: 16,
    position: 'absolute',
  },
  txtVisa: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 38,
    color: colors.white,
    marginTop: 20,
  },
  txtNumberCard: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 22,
    lineHeight: 35,
    color: colors.white,
    marginTop: 13,
    letterSpacing: 3.3,
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 29,
    color: colors.white,
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 26,
    color: colors.white,
  },
  btmCard: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDebit: {
    position: 'absolute',
    top: 27,
    right: 29,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    opacity: 0.5,
  },
});
