import React, { memo, useCallback, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgChat from "@svgs/VideoCall/SvgChat";
import SvgClose from "@svgs/VideoCall/SvgClose";
import SvgLink from "@svgs/VideoCall/SvgLink";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DOCTOR_DATA = {
  imgDoctor: require("@assets/VideoCall/Doctor.png"),
  imgUser: require("@assets/VideoCall/User.png"),
  doctorName: "Dr. Ann Carlson",
};

const VideoCall = memo(() => {
  const { goBack } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const [doctorData, setDoctorData] = useState(DOCTOR_DATA);

  const onChat = useCallback(() => {}, []);

  const onLink = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgDoctor} source={doctorData.imgDoctor}>
        <Image
          style={[styles.imgUser, { top: top + 12 }]}
          source={doctorData.imgUser}
        />
      </ImageBackground>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.0001)", "rgba(0, 0, 0, 0.95)"]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}
      />
      <View style={[styles.btmView, { paddingBottom: bottom + 24 }]}>
        <Text style={styles.txtDoctorName}>{doctorData.doctorName}</Text>
        <Text style={styles.txtTime}>15:25</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={onChat}
            activeOpacity={0.6}
            style={styles.messageView}
          >
            <SvgChat />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goBack}
            activeOpacity={0.6}
            style={styles.closeView}
          >
            <SvgClose />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onLink}
            activeOpacity={0.6}
            style={styles.linkView}
          >
            <SvgLink />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default VideoCall;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  imgDoctor: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  linearGradient: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  imgUser: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: colors.white,
    right: 24,
    position: "absolute",
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.white,
    alignSelf: "center",
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 21,
    opacity: 0.5,
    color: colors.white,
    alignSelf: "center",
    marginTop: 7,
  },
  btmView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  messageView: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
  },
  closeView: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondRed,
  },
  linkView: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.yellow,
  },
  btnView: {
    flexDirection: "row",
    marginTop: 18,
    justifyContent: "space-between",
    paddingHorizontal: 60,
    alignItems: "center",
  },
});
