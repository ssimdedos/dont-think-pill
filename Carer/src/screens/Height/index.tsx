import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import colors from "@utils/colors";
import ButtonsSecondary from "@components/ButtonsSecondary";
import RLSlider from "@components/RLSlider";
import ButtonPrimary from "@components/ButtonPrimary";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ROUTES from "@utils/routes";
import SvgTapeMeasure from "@svgs/SvgTapeMeasure";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Height = memo(() => {
  const { navigate } = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const [enable, setEnable] = useState(false);
  const [unitOfMeasure, setUnitOfMeasure] = useState("cm");

  const onCreatAccount = useCallback(() => {
    navigate(ROUTES.CreatAccount);
  }, []);

  const onInch = useCallback(() => {
    setEnable(true);
    setUnitOfMeasure("inch");
  }, []);

  const onCm = useCallback(() => {
    setEnable(false);
    setUnitOfMeasure("cm");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.svgScale}>
          <SvgTapeMeasure width={24} height={24} color={colors.orange} />
        </View>
        <ButtonsSecondary
          enable={enable}
          labelButton1={"inch"}
          labelButton2={"cm"}
          onPressButton1={onInch}
          onPressButton2={onCm}
        />
      </View>
      <RLSlider
        unitOfMeasure={unitOfMeasure}
        minValue={0}
        maxValue={3000}
        value={4000}
        ratio={1}
      />
      <View style={[styles.buttonView, { paddingBottom: bottom + 24 }]}>
        <ButtonPrimary title={"Update"} onPress={onCreatAccount} />
      </View>
    </View>
  );
});

export default Height;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 32,
    marginRight: 40,
    marginTop: 34,
    alignItems: "center",
  },
  svgScale: {
    height: 48,
    width: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pageBackGround,
  },
  buttonView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 8,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
});
