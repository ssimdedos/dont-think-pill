import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import FONTS from '@utils/fonts/index';

import SvgOption from '@svgs/SvgOption';
import Slider from '@elements/Slider';

const GoalSettingItem = memo((props) => {
  const { Svg, title, bpm, percent } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.setRow}>
          <View style={styles.svg}>{Svg}</View>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.optionView}>
          <SvgOption />
        </TouchableOpacity>
      </View>
      <View style={styles.btmView}>
        <Text style={styles.numberBpm}>
          {bpm}
          <Text style={styles.txtBpm}>bpm</Text>
        </Text>
        <View>
          <Text style={styles.txtPercent}>{percent}%</Text>
          <Slider
            style={styles.slider}
            width={100}
            height={4}
            value={percent}
            borderRadius={99}
            numberSlider={false}
            displayValue={10}
            underlyingColor={colors.line}
            borderWidth={0}
            backgroundColor={colors.classicBlue}
          />
        </View>
      </View>
    </View>
  );
});

export default GoalSettingItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    paddingVertical: 16,
    height: 109,
    marginBottom: 24,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  svg: {
    width: 24,
    height: 24,
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 9,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 25,
    color: colors.semiBlack,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionView: {
    width: 40,
    height: 40,
    alignItems: 'flex-end',
  },
  btmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  numberBpm: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 51,
    color: colors.semiBlack,
  },
  txtBpm: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 48,
    color: colors.semiBlack,
  },
  slider: {
    marginBottom: 16,
  },
  txtPercent: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    color: colors.classicBlue,
  },
});
