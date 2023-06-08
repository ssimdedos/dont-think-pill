import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import colors from '@utils/colors';
import FONTS from '@utils/fonts';

const DoctorServiceItem = memo((props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
});

export default DoctorServiceItem;

const styles = ScaledSheet.create({
  container: {
    height: 48,
    backgroundColor: colors.pageBackGround,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 21,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 15,
    lineHeight: 20,
    color: colors.semiBlack,
    textAlign: 'center',
  },
});
