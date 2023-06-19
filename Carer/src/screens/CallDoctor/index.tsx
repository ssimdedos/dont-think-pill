import React, { memo, useCallback, useState } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";
import { heightScreen, widthScreen } from "@utils/dimensions";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SvgClose from "@svgs/VideoCall/SvgClose";
import SvgAccept from "@svgs/CallDoctor";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DOCTOR_DATA = {
  imgDoctor: require("@assets/CallDoctor/Doctor.png"),
  imgUser: require("@assets/VideoCall/User.png"),
  doctorName: "Dr. Ann Carlson",
};

const CallDoctor = memo(() => {
  const { goBack } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const [doctorData, setDoctorData] = useState(DOCTOR_DATA);

  const onAccept = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.txtCalling, { marginTop: top + 36 }]}>Calling…</Text>
      <Text style={styles.txtDoctorName}>{doctorData.doctorName}</Text>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <View style={styles.circle3}>
            <Image style={styles.imgDoctor} source={doctorData.imgDoctor} />
          </View>
        </View>
      </View>
      <View style={[styles.buttonView, { paddingBottom: bottom + 80 }]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={goBack}
          style={styles.btnRefuse}
        >
          <SvgClose />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onAccept}
          style={styles.btnAccept}
        >
          <SvgAccept />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default CallDoctor;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtCalling: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.bluePrimary,
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    color: colors.black1,
    marginTop: 10,
  },
  imgDoctor: {
    width: widthScreen / 2.3,
    height: widthScreen / 2.3,
    borderRadius: widthScreen / 2.3,
  },
  circle1: {
    width: widthScreen / 1.25,
    height: widthScreen / 1.25,
    borderRadius: widthScreen / 1.25,
    borderWidth: 1,
    borderColor: "rgba(45, 144, 245, 0.1)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: heightScreen / 4,
  },
  circle2: {
    width: widthScreen / 1.45,
    height: widthScreen / 1.45,
    borderRadius: widthScreen / 1.45,
    borderWidth: 1,
    borderColor: "rgba(45, 144, 245, 0.2)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  circle3: {
    width: widthScreen / 1.75,
    height: widthScreen / 1.75,
    borderRadius: widthScreen / 1.75,
    borderWidth: 1,
    borderColor: "rgba(45, 144, 245, 0.3)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    position: "absolute",
    right: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  btnRefuse: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.secondRed,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 32,
  },
  btnAccept: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.classicBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});
