import React, { memo, useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";

import FONTS from "@utils/fonts/index";
import colors from "@utils/colors";
import ButtonPrimary from "@components/ButtonPrimary";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ROUTES from "@utils/routes";
import InputButton from "@components/InputButton";
import Content from "@components/Content";
import ButtonBottom from "@components/ButtonBottom";

const FindDoctors = memo(({ navigation }) => {
  const onChooseHospital = useCallback(() => {}, []);
  const onDoctor = useCallback(() => {}, []);
  const onDate = useCallback(() => {}, []);
  const onTime = useCallback(() => {}, []);

  const onFind = () => {
    navigation.navigate(ROUTES.ResultFindDoctor);
  };

  return (
    <View style={styles.container}>
      <Content contentContainerStyle={{ paddingHorizontal: 40 }}>
        <Text style={styles.txtTitle}>How can we take care yourself?</Text>
        <InputButton onPress={onChooseHospital} title={"Choose Hospital"} />
        <InputButton
          style={styles.inputButton}
          onPress={onDoctor}
          title={"Doctor"}
        />
        <InputButton
          style={styles.inputButton}
          onPress={onDate}
          title={"Date"}
        />
        <InputButton
          style={styles.inputButton}
          onPress={onTime}
          title={"Time"}
        />
      </Content>
      <ButtonBottom onPress={onFind} title={"Find Now"} />
    </View>
  );
});

export default FindDoctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
    marginTop: 36,
    color: colors.brown,
    marginBottom: 39,
  },
  inputButton: {
    marginTop: 24,
  },
  buttonPrimacy: {
    width: 295,
    alignSelf: "center",
    marginTop: 79,
    position: "absolute",
    bottom: getBottomSpace() + 24,
  },
});
