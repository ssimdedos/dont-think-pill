import React, { memo, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import SvgAdd from "@svgs/CreateAccount/SvgAdd";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
import SvgAvatar from "@svgs/CreateAccount/SvgAvatar";
import InputButton from "@components/InputButton";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CreateAccount = memo(() => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();

  const onSkip = useCallback(() => {
    navigate(ROUTES.DrawerNavigator);
  }, []);

  const onFullName = useCallback(() => {
    navigate(ROUTES.FullName);
  }, []);

  const onGender = useCallback(() => {
    navigate(ROUTES.Gender);
  }, []);

  const onBirthDay = useCallback(() => {
    navigate(ROUTES.BirthDay);
  }, []);

  const onBlood = useCallback(() => {
    navigate(ROUTES.Blood);
  }, []);

  const onWeight = useCallback(() => {
    navigate(ROUTES.Weight);
  }, []);

  const onHeight = useCallback(() => {
    navigate(ROUTES.Height);
  }, []);

  const onUpdate = useCallback(() => {
    navigate(ROUTES.DrawerNavigator);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[styles.header, { paddingTop: top + 12, height: top + 112 }]}
      >
        <SvgSmallHeart width={24} height={24} color={colors.white} />
        <Text style={styles.txtCreateAccount}>Create Account</Text>
        <TouchableOpacity
          onPress={onSkip}
          activeOpacity={0.6}
          style={styles.skipView}
        >
          <Text style={styles.txtSkip}>Skip!</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <InputButton onPress={onFullName} title={"Fullname"} />
        <InputButton style={styles.input} onPress={onGender} title={"Gender"} />
        <InputButton
          style={styles.input}
          onPress={onBirthDay}
          title={"Birthday"}
        />
        <InputButton style={styles.input} onPress={onBlood} title={"Blood"} />
        <InputButton style={styles.input} onPress={onWeight} title={"Weight"} />
        <InputButton style={styles.input} onPress={onHeight} title={"Height"} />
      </ScrollView>
      <View style={[styles.avatar, { top: top + 72 }]}>
        <View>
          <SvgAvatar />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.addView}>
          <SvgAdd />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <ButtonPrimary title={"Update"} onPress={onUpdate} />
      </View>
    </View>
  );
});

export default CreateAccount;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 84,
    paddingLeft: 16,
    paddingRight: 24,
    backgroundColor: colors.secondBlue,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    justifyContent: "space-between",
  },
  txtSkip: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  skipView: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
  },
  txtCreateAccount: {
    fontFamily: FONTS.HIND.Regular,
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 4,
    borderColor: colors.white,
    position: "absolute",
  },
  addView: {
    backgroundColor: colors.oldBurgundy,
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  input: {
    marginTop: 24,
  },
  buttonView: {
    position: "absolute",
    paddingBottom: getBottomSpace() + 24,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 12,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingTop: 72,
    paddingHorizontal: 40,
    paddingBottom: getBottomSpace() + 24,
  },
});
