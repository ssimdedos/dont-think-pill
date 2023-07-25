import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import FONTS from '@utils/fonts';
import SvgLocation from '@svgs/SvgLocation';


const DoctorAddressItem = memo((props) => {
  const { nameLocation, address, distance } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.txtLocation}>{nameLocation}</Text>
      <Text style={styles.txtAddress}>{address}</Text>
      <View style={styles.distanceView}>
        <SvgLocation color={colors.classicBlue} />
        <Text style={styles.txtDistance}> {distance}</Text>
      </View>
    </View>
  );
});

export default DoctorAddressItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
    marginHorizontal: 24,
    height: 139,
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtAddress: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginBottom: 8,
    marginTop: 8,
  },
  distanceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDistance: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.classicBlue,
  },
});
