import React, { memo, useState, useCallback } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import SvgNurse from "@svgs/SvgNurse";
import PlanItem from "@screens/PricePlan/components/PlanItem";

import FONTS from "@utils/fonts/index";
import ROUTES from "@utils/routes";
import { widthScreen } from "@utils/dimensions";
import ButtonBottom from "@components/ButtonBottom";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const PRICE_PLAN_DATA = [
  {
    color: colors.yellow,
    svg: <SvgNurse />,
    price: "68.00",
    frequency: "per month",
    description: [
      "24h Call Doctor",
      "16 Book Appoiment",
      "32 Expert Doctors",
      "32 Expert Doctors",
      "Generic Drugs",
    ],
  },
  {
    color: colors.green,
    svg: <SvgNurse />,
    price: "68.00",
    frequency: "per month",
    description: [
      "24h Call Doctor",
      "16 Book Appoiment",
      "32 Expert Doctors",
      "32 Expert Doctors",
      "Generic Drugs",
    ],
  },
  {
    color: colors.orange,
    svg: <SvgNurse />,
    price: "68.00",
    frequency: "per month",
    description: [
      "24h Call Doctor",
      "16 Book Appointment",
      "32 Expert Doctors",
      "32 Expert Doctors",
      "Generic Drugs",
    ],
  },
];

const PLAN_DATA = ["Basic", "Standard", "Premium"];

const ITEM_WIDTH = Math.round(widthScreen * 0.76);

const PricePlan = memo(() => {
  const { navigate } = useNavigation();

  const [id, setId] = useState(1);

  const renderItem = useCallback(({ item }) => {
    const { color, svg, price, frequency, description } = item;
    return (
      <PlanItem
        color={color}
        svg={svg}
        price={price}
        frequency={frequency}
        description={description}
      />
    );
  }, []);

  const onUpdate = useCallback(() => {
    navigate(ROUTES.Billing);
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        defaultIndex={1}
        data={PRICE_PLAN_DATA}
        renderItem={renderItem}
        width={widthScreen}
        style={styles.carouselContainer}
        onSnapToItem={setId}
      />
      <View style={styles.tabView}>
        {PLAN_DATA.map((item, index) => {
          const backgroundColor =
            id === index ? colors.classicBlue : colors.white;
          const textColor = id === index ? colors.white : colors.dimGray;
          return (
            <View
              key={index}
              style={[styles.tabStyle, { backgroundColor: backgroundColor }]}
            >
              <Text style={[styles.txtLabel, { color: textColor }]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
      <ButtonBottom
        style={styles.button}
        title={"Upgrade Now"}
        onPress={onUpdate}
      />
    </View>
  );
});

export default PricePlan;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  carouselContainer: {
    paddingTop: 100,
  },
  tabView: {
    backgroundColor: colors.white,
    width: 327,
    height: 40,
    position: "absolute",
    alignSelf: "center",
    top: 16,
    borderRadius: 20,
    flexDirection: "row",
  },
  tabStyle: {
    width: 109,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txtLabel: {
    fontFamily: FONTS.HIND.regular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 18,
  },
  button: {
    paddingHorizontal: 72,
  },
});
