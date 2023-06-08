import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import FONTS from '@utils/fonts';
import colors from '@utils/colors';

const PlanTabItem = (props) => {
  const { onPress, label } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.tabStyle}>
      <Text style={styles.txtLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PlanTabItem;

const styles = ScaledSheet.create({
  tabStyle: {
    width: 109,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    height: 40,
  },
  txtLabel: {
    fontFamily: FONTS.HIND.regular,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: colors.dimGray,
  },
});
