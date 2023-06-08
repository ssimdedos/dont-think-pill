import React, { useState, memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@utils/fonts/index';
import colors from '@utils/colors';
import SvgCheck from '@svgs/SvgCheck';

const DeviceItem = memo((props) => {
  const [choose, setChoose] = useState(false);

  const onChose = () => {
    setChoose(!choose);
  };

  const viewCheck = choose ? styles.active : styles.inactive;

  const { imgDevice, nameDevice } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onChose}
      style={styles.deviceItem}>
      <Image style={styles.imgDevice} source={imgDevice} />
      <Text style={styles.txtNameDevice}>{nameDevice}</Text>
      <View style={[styles.viewCheck, viewCheck]}>
        {choose ? <SvgCheck /> : null}
      </View>
    </TouchableOpacity>
  );
});

export default DeviceItem;

const styles = ScaledSheet.create({
  deviceItem: {
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginBottom: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  imgDevice: {
    width: 40,
    height: 40,
    borderRadius: 6,
    overflow: 'hidden',
  },
  txtNameDevice: {
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
});
