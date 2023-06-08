import { ScrollView, Text, View } from "react-native";
import colors from "@utils/colors";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts";
import { heightScreen } from "@utils/dimensions";

const PlanItem = (props) => {
  const { color, svg, price, frequency, description } = props;
  return (
    <View style={[styles.planItem, { backgroundColor: color }]}>
      <View style={styles.svg}>{svg}</View>
      <Text style={styles.txtPrice}>${price}</Text>
      <Text style={styles.txtFrequency}>{frequency}</Text>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {description.map((item, index) => {
          return (
            <Text key={index} style={styles.txtDescription}>
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PlanItem;

const styles = ScaledSheet.create({
  planItem: {
    width: 279,
    height: heightScreen / 1.73,
    borderRadius: 32,
    paddingBottom: 35,
    marginLeft: 4,
  },
  svg: {
    width: 105,
    height: 106,
    overflow: "hidden",
    marginTop: 32,
    alignSelf: "center",
  },
  txtPrice: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: 32,
    lineHeight: 48,
    textAlign: "center",
    color: colors.white,
    marginTop: 22,
  },
  txtFrequency: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  txtDescription: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    color: colors.white,
    marginBottom: 25,
  },
  contentContainerStyle: {
    paddingTop: 40,
  },
});
