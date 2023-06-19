import React, { memo, useCallback, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts/index";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import SvgLeftArrow from "@svgs/ResetPassword/SvgLeftArrow";
import TextInputHealer from "@components/TextInputHealer";
import SvgLock from "@svgs/SignIn/SvgLock";
import ButtonPrimary from "@components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@utils/routes";
import SvgSettingPassword from "@svgs/ResetPassword/SvgSettingPassword";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Container from "@components/Container";

const ResetPassword = memo(() => {
  const { navigate, goBack } = useNavigation();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const onResetPasswordSuccess = useCallback(() => {
    navigate(ROUTES.ResetPasswordSuccess);
  }, []);

  return (
    <Container style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={210}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}
        enableOnAndroid
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={styles.top}
        >
          <View style={styles.svgLeftArrow}>
            <SvgLeftArrow />
          </View>
          <SvgSmallHeart />
        </TouchableOpacity>
        <SvgSettingPassword style={styles.svg} />
        <Text style={styles.txtResetPassword}>Reset Password</Text>
        <Text style={styles.txtPlease}>
          {"Please enter your new password 🔑"}
        </Text>
        <TextInputHealer
          style={styles.txtInput}
          svg={<SvgLock />}
          placeholder={"Password"}
          secure={true}
          value={password}
        />
        <TextInputHealer
          style={styles.txtInput1}
          svg={<SvgLock />}
          placeholder={"Re-Password"}
          secure={true}
          value={rePassword}
        />
        <ButtonPrimary
          onPress={onResetPasswordSuccess}
          style={styles.buttonPrimary}
          title={"Set New Password"}
        />
      </KeyboardAwareScrollView>
    </Container>
  );
});

export default ResetPassword;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingBottom: 24,
  },
  svgHeart: {
    top: Platform.OS === "ios" ? getStatusBarHeight() + 24 : 24,
    left: 48,
  },
  svgLeftArrow: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    alignSelf: "center",
    marginTop: 24,
  },
  txtResetPassword: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: 24,
    color: colors.bluePrimary,
    textAlign: "center",
    marginTop: 22,
  },
  txtPlease: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 4,
    color: colors.dimGray,
    textAlign: "center",
  },
  txtInput: {
    marginTop: 32,
    marginHorizontal: 40,
  },
  txtInput1: {
    marginTop: 16,
    marginHorizontal: 40,
  },
  buttonPrimary: {
    marginTop: 32,
    marginHorizontal: 40,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
});
