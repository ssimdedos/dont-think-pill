import React, { memo, useCallback } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import SvgLeftArrow from "@svgs/ResetPassword/SvgLeftArrow";
import CodeInput from "@components/CodeInput";
import ButtonPrimary from "@components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@utils/routes";
import SvgMobile from "@svgs/VerifyMobile/SvgMobile";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Container from "@components/Container";

const VerifyMobile = memo(() => {
  const { navigate, goBack } = useNavigation();

  const onConfirm = useCallback(() => {
    navigate(ROUTES.ResetPassword);
  }, []);

  return (
    <Container style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={210}
        showsVerticalScrollIndicator={false}
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
        <SvgMobile style={styles.svg} />
        <Text style={styles.txtPhoneNumber}>Verify Phone Number!</Text>
        <Text style={styles.txtPlease}>
          Please enter the number code send your phone +8*******90 📲
        </Text>
        <CodeInput sellCount={5} />
        <ButtonPrimary
          style={styles.confirm}
          title={"Confirm"}
          onPress={onConfirm}
        />
        <TouchableOpacity style={styles.ResendCodeView}>
          <Text style={styles.txtResendCode}>Resend Code!</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </Container>
  );
});

export default VerifyMobile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  txtPhoneNumber: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: 24,
    color: colors.bluePrimary,
    textAlign: "center",
    marginTop: 30,
  },
  txtPlease: {
    fontFamily: FONTS.HIND.Regular,
    marginTop: 4,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    textAlign: "center",
    marginHorizontal: 60,
  },
  codeInputStyle: {
    color: colors.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    fontWeight: "500",
    borderWidth: 1,
    width: 48,
    height: 48,
    borderColor: colors.frame,
    borderRadius: 4,
  },
  containerStyle: {
    marginHorizontal: 45,
  },
  confirm: {
    width: 215,
    alignSelf: "center",
    marginTop: 32,
  },
  ResendCodeView: {
    alignSelf: "center",
    width: 100,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  txtResendCode: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
});
