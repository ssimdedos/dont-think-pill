import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@utils/fonts/index';

import colors from '@utils/colors';

const DatePickItem = (props) => {
  const { style, label, index, id } = props;
  const txtLabel = index === id ? styles.txtActive : styles.txtInActive;
  return (
    <View style={[styles.container, style]}>
      <Text style={txtLabel}>{label}</Text>
    </View>
  );
};

export default DatePickItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginBottom: 1,
    justifyContent: 'center',
  },
  txtInActive: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 22,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    opacity: 0.8,
  },
  txtActive: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: 26,
    textTransform: 'uppercase',
    color: colors.classicBlue,
  },
});
