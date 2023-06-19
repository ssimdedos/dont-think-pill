import React from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";

const UserNotificationItem = (props) => {
  const { Svg, imgDoctors, title, doctorName, time } = props;
  return (
    <View style={styles.container}>
      <View style={styles.svg}>{Svg}</View>
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.btmView}>
        <Text style={styles.doctorName}>{doctorName}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default UserNotificationItem;

const styles = ScaledSheet.create({
  container: {
    height: 96,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    backgroundColor: colors.orange,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  svg: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: colors.blueAccent,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.classicBlue,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: colors.white,
    position: "absolute",
    paddingLeft: 90,
    top: 21,
  },
  doctorName: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.white,
    fontWeight: "600",
  },
  time: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.white,
    fontWeight: "600",
  },
  btmView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    bottom: 22,
    paddingLeft: 90,
    paddingRight: 20,
  },
});
