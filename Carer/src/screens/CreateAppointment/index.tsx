import React, { memo, useCallback } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import SvgCalendar from "@svgs/MainPage/SvgCalendar";
import FONTS from "@utils/fonts/index";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
import InputButton from "@components/InputButton";
import { useNavigation } from "@react-navigation/native";
import Content from "@components/Content";

const CreateAppointment = memo(() => {
  const { navigate } = useNavigation();

  const onPress = useCallback(() => {}, []);

  const onBookNow = useCallback(() => {
    navigate(ROUTES.AppointmentDetails);
  }, []);

  return (
    <View style={styles.container}>
      <Content contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.svgView}>
          <SvgCalendar color={colors.secondBlue} />
        </View>
        <Text style={styles.txtTitle}>{"Do you want book\n"}appointment?</Text>
        <InputButton onPress={onPress} title={"Your Location"} />
        <InputButton
          onPress={onPress}
          style={styles.input}
          title={"Specialist"}
        />
        <InputButton onPress={onPress} style={styles.input} title={"Date"} />
        <InputButton onPress={onPress} style={styles.input} title={"Time"} />
        <ButtonPrimary
          style={styles.btn}
          title={"Book Now"}
          onPress={onBookNow}
        />
      </Content>
    </View>
  );
});

export default CreateAppointment;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingHorizontal: 40,
  },
  svgView: {
    backgroundColor: colors.pageBackGround,
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 35,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.bluePrimary,
    marginTop: 24,
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    marginTop: 24,
  },
  btn: {
    marginTop: 32,
  },
});
