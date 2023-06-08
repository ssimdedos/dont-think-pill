import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import SvgRightArrow from '@svgs/SvgRightArrow';
import FONTS from '@utils/fonts';

const DrugItem = (props) => {
  const { Svg, drugName, concentration, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      {Svg}
      <View style={styles.viewContent}>
        <Text style={styles.txtDrugName}>{drugName}</Text>
        <Text style={styles.txtConcentration}>{concentration}</Text>
      </View>
      <SvgRightArrow style={styles.viewArrow} />
    </TouchableOpacity>
  );
};

export default DrugItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginBottom: 24,
    paddingVertical: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: 327,
    height: 76,
  },
  viewContent: {
    marginLeft: 16,
  },
  txtDrugName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtConcentration: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 6,
  },
  viewArrow: {
    position: 'absolute',
    right: 12,
  },
});
