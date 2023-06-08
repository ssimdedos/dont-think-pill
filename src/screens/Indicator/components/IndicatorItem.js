import React, { useState, memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@utils/fonts/index';
import colors from '@utils/colors';
import SvgCheck from '@svgs/SvgCheck';

const IndicatorItem = memo((props) => {
  const [choose, setChoose] = useState(false);

  const onChose = () => {
    setChoose(!choose);
  };

  const viewCheck = choose ? styles.active : styles.inactive;

  const { imgIndicator, nameIndicator, description } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onChose}
      style={styles.indicatorItem}>
      <Image style={styles.imgDevice} source={imgIndicator} />
      <View>
        <Text style={styles.txtNameDeive}>{nameIndicator}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
      <View style={[styles.viewCheck, viewCheck]}>
        {choose ? <SvgCheck /> : null}
      </View>
    </TouchableOpacity>
  );
});

export default IndicatorItem;

const styles = ScaledSheet.create({
  indicatorItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginBottom: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    height: 80,
  },
  imgDevice: {
    width: 48,
    height: 48,
    borderRadius: 6,
    overflow: 'hidden',
  },
  txtNameDeive: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    color: colors.semiBlack,
    marginLeft: 16,
    textTransform: 'uppercase',
  },
  active: {
    backgroundColor: colors.blueAccent,
  },
  inactive: {
    borderWidth: 1,
    borderColor: '#B3B3B3',
  },
  viewCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: 'absolute',
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 12,
    color: colors.silverChalice,
    marginLeft: 16,
  },
});
