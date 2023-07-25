import React, { memo, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgNurse from "@svgs/SvgNurse";
import SvgDrugInactive from "@svgs/MainBottomTab/SvgDrugInactive";
import SvgDoctor from "@svgs/MainPage/SvgDoctor";
import SvgCalendar from "@svgs/MainPage/SvgCalendar";
import { getBottomSpace } from "react-native-iphone-x-helper";
import DrugButton from "@screens/Drugs/components/DrugButton";
import ROUTES from "@utils/routes";
import { useNavigation } from "@react-navigation/native";

const Drugs = memo(() => {
  const { navigate } = useNavigation();

  const onPillsLibrary = useCallback(() => {
    navigate(ROUTES.ListDrugs);
  }, []);

  const onDrugShop = useCallback(() => {
    navigate(ROUTES.DrugShop);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}
    >
      <Text style={styles.txtHi}>Hi! Gordon Aguilar,</Text>
      <Text style={styles.txtToday}>Have you taken medicine today?</Text>
      <View style={styles.topicView}>
        <Text style={styles.txtTitle}>{"Stay Home\nCovid-19"}</Text>
        <SvgNurse style={styles.svgNurse} />
      </View>
      <DrugButton
        Svg={<SvgDrugInactive color={colors.secondBlue} />}
        title={"Pills Library"}
        description={"128 Pills"}
        onPress={onPillsLibrary}
      />
      <DrugButton
        Svg={<SvgDoctor height={28} width={28} color={colors.secondBlue} />}
        title={"Pills Shops"}
        description={"128 Pills"}
        onPress={onDrugShop}
      />
      <DrugButton
        Svg={<SvgCalendar height={24} width={24} color={colors.secondBlue} />}
        title={"Pills Reminders"}
        description={"128 Pills"}
      />
    </ScrollView>
  );
});

export default Drugs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: 107,
    paddingBottom: getBottomSpace() + 84,
  },
  txtHi: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 38,
    color: colors.semiBlack,
    marginLeft: 24,
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 29,
    color: colors.brown,
    marginLeft: 24,
    marginBottom: 20,
  },
  topicView: {
    marginHorizontal: 16,
    height: 130,
    backgroundColor: colors.green,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: 21,
    lineHeight: 25,
    textAlign: "center",
    color: colors.white,
    marginRight: 49,
  },
  svgNurse: {
    position: "absolute",
    bottom: 0,
    left: 16,
  },
});
