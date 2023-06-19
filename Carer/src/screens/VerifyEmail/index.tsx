import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, Platform, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts/index";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import SvgLeftArrow from "@svgs/ResetPassword/SvgLeftArrow";
import CodeInput from "@components/CodeInput";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
import SvgEmail from "@svgs/VerifyEmail/SvgEmail";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const VerifyEmail = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

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
        <SvgEmail style={styles.svg} />
        <Text style={styles.txtVerifyEmail}>Verify Email!</Text>
        <Text style={styles.txtPlease}>
          Please enter the number code send your email xxx@company.com ✉️
        </Text>
        <CodeInput sellCount={5} />
        <ButtonPrimary
          style={styles.signUp}
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

export default VerifyEmail;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgHeart: {},
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
  txtVerifyEmail: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.bluePrimary,
    textAlign: "center",
    marginTop: 22,
  },
  txtPlease: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    textAlign: "center",
    marginHorizontal: 60,
    marginTop: 4,
  },
  codeInputStyle: {
    color: colors.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    borderWidth: 1,
    width: 48,
    height: 48,
    borderColor: colors.frame,
    borderRadius: 4,
  },
  containerStyle: {
    marginHorizontal: 45,
  },
  signUp: {
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
    marginTop: 15,
  },
  txtResendCode: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  codeFieldRoot: {
    marginTop: 29,
    marginHorizontal: 45,
  },
  cell: {
    width: 48,
    height: 48,
    backgroundColor: colors.pageBackGround,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "500",
    fontSize: 16,
    textTransform: "uppercase",
    paddingTop: 13,
    marginRight: 13,
    color: colors.semiBlack,
  },
  focusCell: {
    borderColor: colors.semiBlack,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
});
