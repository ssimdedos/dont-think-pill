import React from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";

const StaticsHealthItem = (props) => {
  const { style, imgDoctor, Svg, title, description } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtDescription}>{description}</Text>
      {imgDoctor && <Image style={styles.imgDoctor} source={imgDoctor} />}
      {Svg && <View style={styles.svgDoctor}>{Svg}</View>}
    </View>
  );
};

export default StaticsHealthItem;

const styles = ScaledSheet.create({
  container: {
    height: 99,
    paddingLeft: 36,
    paddingTop: 21,
    backgroundColor: colors.orange,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  imgDoctor: {
    width: 56,
    height: 70,
    position: "absolute",
    right: 36,
    bottom: 0,
  },
  svgDoctor: {
    position: "absolute",
    right: 36,
    bottom: 0,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.white,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
    color: colors.white,
  },
});
