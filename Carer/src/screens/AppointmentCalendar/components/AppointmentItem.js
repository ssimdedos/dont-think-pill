import React from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";

const AppointmentItem = (props) => {
  const { style, title, time, imgDoctor, color } = props;
  return (
    <View style={[styles.appointmentItem, style]}>
      <View style={styles.content}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtTime}>{time}</Text>
      </View>
      <Image style={styles.imgDoctor} source={imgDoctor} />
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
};
export default AppointmentItem;

const styles = ScaledSheet.create({
  appointmentItem: {
    height: 76,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  content: {},
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    color: colors.silverChalice,
    marginTop: 5,
  },
  imgDoctor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
  },
  line: {
    position: "absolute",
    width: 4,
    height: 44,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    left: 0,
    alignSelf: "center",
  },
});
