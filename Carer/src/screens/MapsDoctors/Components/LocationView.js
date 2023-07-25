import React, { memo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";
import SvgSpeechBubble from "@svgs/NewsDetails/SvgSpeechBubble";
import SvgPhone from "@svgs/MapsDoctors/SvgPhone";
import SvgStar from "@svgs/AppointmentList/SvgStar";
import SvgLocation from "@svgs/SvgLocation";

const LocationView = memo((props) => {
  const {
    style,
    Svg,
    doctorName,
    specialized,
    rating,
    location,
    onCall,
    onMessage,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topView}>
        <View style={styles.imgDoctor}>{Svg}</View>
        <View style={styles.contentView}>
          <Text style={styles.txtDoctorName}>{doctorName}</Text>
          <View style={styles.setRow}>
            <Text style={styles.txtSpecialized}>{specialized}</Text>
            <View style={styles.flexDirection}>
              <SvgStar style={styles.svgStart} />
              <Text style={styles.txtRating}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.locationView}>
        <SvgLocation width={16} height={16} color={colors.classicBlue} />
        <Text style={styles.txtLocation}>{location}</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={onCall}
          activeOpacity={0.6}
          style={styles.btnCall}
        >
          <SvgPhone />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.6}
          style={styles.btnMessage}
        >
          <SvgSpeechBubble width={16} height={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default LocationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: 240,
    height: 152,
    borderRadius: 8,
    overflow: "hidden",
  },
  textLocation: {
    fontSize: 16,
    fontFamily: FONTS.HIND.Regular,
    color: "#353B48",
    lineHeight: 20,
    marginTop: 8,
  },
  btnView: {
    position: "absolute",
    width: "100%",
    backgroundColor: colors.white,
    height: 40,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    flexDirection: "row",
  },
  btnMessage: {
    width: "50%",
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCall: {
    width: "50%",
    backgroundColor: colors.classicBlue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgDoctor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: colors.semiBlack,
    textTransform: "uppercase",
    paddingRight: 16,
  },
  txtSpecialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    color: colors.silverChalice,
    marginTop: 4,
    marginBottom: 4,
  },
  svgStart: {
    marginRight: 5,
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.orange,
  },
  topView: {
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 16,
  },
  contentView: {
    marginTop: 4,
    marginLeft: 8,
    flex: 1,
    paddingRight: 16,
  },
  setRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexDirection: {
    flexDirection: "row",
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 16,
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.classicBlue,
    marginBottom: -6,
    marginLeft: 4,
  },
});
