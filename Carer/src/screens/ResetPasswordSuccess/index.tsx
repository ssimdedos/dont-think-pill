import React, { memo, useCallback } from "react";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import ButtonPrimary from "@components/ButtonPrimary";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import ROUTES from "@utils/routes";
import SvgResetSuccess from "@svgs/ResetPasswordSuccess/SvgResetSuccess";
import { useNavigation } from "@react-navigation/native";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ResetPasswordSuccess = memo(() => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();

  const onSignIn = useCallback(() => {
    navigate(ROUTES.SignIn);
  }, []);

  return (
    <Container style={styles.container}>
      <SvgResetSuccess />
      <Text style={styles.txtCongratulations}>Congratulations!</Text>
      <Text style={styles.txtDescription}>
        Huraaaaa!!!! your password has been updated 🎉
      </Text>
      <ButtonPrimary
        onPress={onSignIn}
        style={styles.buttonPrimary}
        title={"Back To Sign In"}
      />
      <View style={[styles.top, { top: top + 12 }]}>
        <SvgSmallHeart />
      </View>
    </Container>
  );
});

export default ResetPasswordSuccess;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  txtCongratulations: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: 24,
    color: colors.bluePrimary,
    textAlign: "center",
    marginTop: 22,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    textAlign: "center",
    marginHorizontal: 60,
  },
  buttonPrimary: {
    width: 235,
    alignSelf: "center",
    marginTop: 32,
  },
  top: {
    position: "absolute",
    left: 32,
  },
});
