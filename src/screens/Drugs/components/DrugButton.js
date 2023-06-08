import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import FONTS from '@utils/fonts';
import SvgRightArrow from '@svgs/SvgRightArrow';

const DrugButton = (props) => {
  const { Svg, title, description, onPress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.boxView}>{Svg}</View>
      <View>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
      <SvgRightArrow style={styles.svgArrow} color={colors.dimGray} />
    </TouchableOpacity>
  );
};

export default DrugButton;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 24,
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    height: 104,
  },
  boxView: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.pageBackGround,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 3,
  },
  svgArrow: {
    position: 'absolute',
    right: 16,
  },
});
