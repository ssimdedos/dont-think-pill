import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import FONTS from '@utils/fonts';
import SvgArrowRight from '@svgs/Insurance/SvgArrowRight';

const InsuranceItem = memo((props) => {
  const { logoHospital, insurance, name, enrolleeID, expDate, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {logoHospital}
        <Text style={styles.txtInsurance}>{insurance}</Text>
      </View>
      <Text style={styles.txtName}>{name}</Text>
      <View style={styles.btmView}>
        <View>
          <Text style={styles.enrolleeID}>Enrollee ID</Text>
          <Text style={styles.txtEnrolleeID}>{enrolleeID}</Text>
        </View>
        <View>
          <Text style={styles.expDate}>Exp Date</Text>
          <Text style={styles.txtExpDate}>{expDate}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.viewButton}>
        <SvgArrowRight />
      </TouchableOpacity>
    </View>
  );
});
export default InsuranceItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingBottom: 18,
  },
  txtInsurance: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    fontWeight: '500',
    marginLeft: 12,
    marginTop: 4,
    textTransform: 'uppercase',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 32,
    lineHeight: 48,
    color: colors.semiBlack,
    marginBottom: 22,
    textAlign: 'center',
  },
  btmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
  },
  txtEnrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: colors.semiBlack,
    marginTop: 2,
  },
  expDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
  },
  txtExpDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: colors.semiBlack,
    marginTop: 2,
  },
  viewButton: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: colors.classicBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 16,
    right: 24,
  },
});
