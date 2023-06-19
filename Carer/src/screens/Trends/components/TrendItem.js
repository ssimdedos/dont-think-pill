import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgBookMark from "@svgs/News/SvgBookMark";

const TrendItem = (props) => {
  const {
    img,
    avatar,
    name,
    career,
    description,
    date,
    onPress,
    onSave,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}
    >
      <Image source={img} style={styles.img} />
      <View style={styles.avatarView}>
        <View style={styles.flexDirection}>
          <Image source={avatar} style={styles.avatar} />
          <View>
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtCareer}>{career}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onSave}
          activeOpacity={0.6}
          style={styles.svgBookMark}
        >
          <SvgBookMark />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtDescription}>{description}</Text>
      <Text style={styles.txtHealthy}>Healthy</Text>
      <Text style={styles.txtDate}>{date}</Text>
    </TouchableOpacity>
  );
};

export default TrendItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 279,
    height: 335,
    borderRadius: 8,
    marginRight: 24,
  },
  img: {
    width: 279,
    height: 170,
    borderRadius: 8,
    overflow: "hidden",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 8,
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
  },
  txtCareer: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25,
    color: colors.semiBlack,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 12,
  },
  txtHealthy: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
    color: colors.classicBlue,
    position: "absolute",
    bottom: 7,
    left: 16,
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
    color: colors.silverChalice,
    position: "absolute",
    bottom: 7,
    right: 16,
  },
  svgBookMark: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
  },
  flexDirection: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
  },
});
