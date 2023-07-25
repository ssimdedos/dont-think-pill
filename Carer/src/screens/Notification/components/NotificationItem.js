import { Text, TouchableOpacity } from "react-native";
import SvgActive from "@svgs/Notification/SvgActive";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

const NotificationItem = (props) => {
  const { id, name, des, Svg, active, time, follow, reply } = props;
  const activeStyle = active ? { opacity: 1 } : { opacity: 0.5 };

  return (
    <TouchableOpacity key={id} style={[styles.item, activeStyle]}>
      <Svg style={styles.avatar} />
      <Text style={styles.name}>
        {name} <Text style={styles.des}>{des}</Text>
      </Text>
      <Text style={styles.time}>{time}</Text>
      {follow && (
        <TouchableOpacity style={styles.btnFlow}>
          <Text style={styles.txtFlow}>follow</Text>
        </TouchableOpacity>
      )}
      {reply && (
        <TouchableOpacity style={styles.btnFlow}>
          <Text style={styles.txtReply}>reply</Text>
        </TouchableOpacity>
      )}
      {active && <SvgActive style={styles.svgActive} />}
    </TouchableOpacity>
  );
};

export default NotificationItem;

const styles = ScaledSheet.create({
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 17,
    color: colors.bluePrimary,
  },
  btnClose: {
    position: "absolute",
    top: getStatusBarHeight() + 28,
    left: 16,
  },
  btnOption: {
    position: "absolute",
    top: getStatusBarHeight() + 28,
    right: 16,
  },
  item: {
    marginHorizontal: 16,
    backgroundColor: colors.white,
    paddingLeft: 80,
    paddingTop: 20,
    paddingBottom: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  avatar: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  name: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 16,
    color: colors.semiBlack,
  },
  des: {
    fontWeight: "500",
    lineHeight: 25,
  },
  time: {
    fontSize: 14,
    fontFamily: FONTS.HIND.Regular,
    color: colors.dimGray,
    marginTop: 8,
    lineHeight: 20,
  },
  btnFlow: {
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(105,121,248,0.1)",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  txtFlow: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 13,
    color: colors.blueAccent,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  },
  txtReply: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 13,
    color: colors.blueAccent,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  },
  svgActive: {
    position: "absolute",
    top: 33,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: getBottomSpace(),
  },
});
