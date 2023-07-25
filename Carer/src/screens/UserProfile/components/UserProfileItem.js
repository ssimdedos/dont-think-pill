import React from "react";
import { ScaledSheet } from "react-native-size-matters";

import { Text, View } from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";

const UserProfileItem = (props) => {
  const { style, title, Svg, parameter, unitOfMeasure } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.flexRow}>
        <Text style={styles.txtTitle}>{title}</Text>
        <View style={styles.svgView}>{Svg}</View>
      </View>
      <Text style={styles.txtParameter}>
        {parameter} {""}
        {unitOfMeasure ? (
          <Text style={styles.txtUnitOfMeasure}>{unitOfMeasure}</Text>
        ) : null}
      </Text>
    </View>
  );
};

export default UserProfileItem;

const styles = ScaledSheet.create({
  container: {
    height: 104,
    width: "50%",
    paddingHorizontal: 24,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtTitle: {
    fontFamily: FONTS.HIND.regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
  },
  txtParameter: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 24,
    color: colors.bluePrimary,
    marginTop: 11,
  },
  txtUnitOfMeasure: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    color: colors.dimGray,
  },
  svgView: {
    backgroundColor: colors.pageBackGround,
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
