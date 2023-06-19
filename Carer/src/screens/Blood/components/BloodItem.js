import React, { useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";

import colors from "@utils/colors";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts/index";

const BloodItem = (props) => {
  const { id, blood, onChoose, isChoose } = props;
  const backgroundColor = isChoose === id ? colors.secondRed : colors.frame;

  const onPress = useCallback(() => {
    onChoose(id);
  }, [id, onChoose]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.bloodItem, { backgroundColor: backgroundColor }]}
    >
      <Text style={styles.txtBlood}>{blood}</Text>
    </TouchableOpacity>
  );
};

export default BloodItem;

const styles = ScaledSheet.create({
  bloodItem: {
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    height: 48,
    maxHeight: 48,
    flex: 1,
  },
  txtBlood: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.oldBurgundy,
    textAlign: "center",
  },
});
