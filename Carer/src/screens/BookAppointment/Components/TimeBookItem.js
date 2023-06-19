import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import FONTS from '@utils/fonts';
import colors from '@utils/colors';

const TimeBookItem = (props) => {
  const { id, time, active, onChoose } = props;
  const backgroundColor = active === id ? colors.blueAccent : colors.white;
  const textColor = active === id ? colors.white : colors.semiBlack;

  const onPress = useCallback(() => {
    onChoose(id);
  }, [id, onChoose]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.txtTime, { color: textColor }]}>{time}</Text>
    </TouchableOpacity>
  );
};
export default TimeBookItem;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderRadius: 8,
    width: 104,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
  },
});
